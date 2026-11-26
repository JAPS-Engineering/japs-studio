import assert from 'node:assert/strict';
import test from 'node:test';
import { captureCampaign, campaignLink, CAMPAIGN_KEY } from '../src/lib/contact-attribution.mjs';

const storage = () => {
  const values = new Map();
  return { getItem: key => values.get(key) ?? null, setItem: (key, value) => values.set(key, value) };
};

test('conserva la primera campaña al navegar y encontrar otra', () => {
  const s = storage();
  assert.deepEqual(captureCampaign('https://japs.ing/', s), {});
  const first = { utm_source: 'linkedin', utm_campaign: 'ideas' };
  assert.deepEqual(captureCampaign('https://japs.ing/?utm_source=linkedin&utm_campaign=ideas', s), first);
  assert.deepEqual(captureCampaign('https://japs.ing/en/contact/?utm_source=otra', s), first);
  assert.deepEqual(captureCampaign('https://japs.ing/contacto/', s), first);
});

test('recupera almacenamiento corrupto y soporta almacenamiento bloqueado', () => {
  const s = storage();
  s.setItem(CAMPAIGN_KEY, '{');
  const href = 'https://studio.japs.ing/contacto?utm_source=boletin';
  assert.deepEqual(captureCampaign(href, s), { utm_source: 'boletin' });
  assert.deepEqual(captureCampaign('https://studio.japs.ing/contacto', s), { utm_source: 'boletin' });
  const blocked = { getItem() { throw new Error('blocked'); }, setItem() { throw new Error('blocked'); } };
  assert.deepEqual(captureCampaign(href, blocked), { utm_source: 'boletin' });
  assert.deepEqual(captureCampaign(href, null), { utm_source: 'boletin' });
  assert.deepEqual(captureCampaign('https://japs.ing/contacto', blocked), {});
});

test('solo admite los cinco UTM válidos sin recortar valores ni recoger otros datos', () => {
  const url = new URL('https://japs.ing/contacto?email=privado&gclid=ignorar');
  url.searchParams.set('utm_source', '  boletín  ');
  url.searchParams.set('utm_campaign', 'x'.repeat(256));
  url.searchParams.set('utm_medium', 'línea\nsegunda');
  url.searchParams.set('utm_term', 'x'.repeat(255));
  assert.deepEqual(captureCampaign(url.href, storage()), { utm_source: 'boletín', utm_term: 'x'.repeat(255) });
});

test('transfiere la campaña entre sitios conservando ruta, parámetros y fragmento', () => {
  const campaign = { utm_source: 'linkedin', utm_campaign: 'ideas' };
  const href = campaignLink('https://studio.japs.ing/contacto?tema=producto#form', 'https://japs.ing/', campaign);
  const target = new URL(href);
  assert.equal(target.pathname, '/contacto');
  assert.equal(target.hash, '#form');
  assert.equal(target.searchParams.get('tema'), 'producto');
  assert.deepEqual(captureCampaign(href, storage()), campaign);
  const back = campaignLink('https://japs.ing/en/contact/', href, campaign);
  assert.equal(new URL(back).searchParams.get('utm_source'), 'linkedin');
});

test('no mezcla campañas explícitas ni modifica enlaces internos o externos', () => {
  const campaign = { utm_source: 'primera', utm_campaign: 'ideas' };
  for (const href of [
    'https://studio.japs.ing/contacto?utm_medium=otra',
    'https://externo.example/?x=1', 'https://japs.ing/contacto', '/contacto', '#form',
    'mailto:contacto@japs.ing', 'https://studio.japs.ing.evil.example/', 'http://studio.japs.ing/', 'https://[',
  ]) {
    assert.equal(campaignLink(href, 'https://japs.ing/', campaign), href);
  }
});

test('la campaña transmitida no reemplaza una primera campaña ya guardada en el destino', () => {
  const s = storage();
  captureCampaign('https://studio.japs.ing/?utm_source=primera', s);
  const href = campaignLink('https://studio.japs.ing/contacto', 'https://japs.ing/', { utm_source: 'segunda' });
  assert.deepEqual(captureCampaign(href, s), { utm_source: 'primera' });
});
