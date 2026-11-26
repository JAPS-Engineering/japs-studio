// @ts-check
// Misma implementación en japs-engineering.github.io y JAPS_Studio.
// Solo se conserva la primera campaña de la pestaña; no se envían eventos de navegación.
export const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
export const CAMPAIGN_KEY = 'japs:contact-campaign:v1';
const SITES = new Set(['https://japs.ing', 'https://www.japs.ing', 'https://studio.japs.ing']);

/** @param {unknown} value */
function cleanCampaign(value) {
  /** @type {Record<string, string>} */
  const result = {};
  if (!value || typeof value !== 'object' || Array.isArray(value)) return result;
  for (const key of UTM_KEYS) {
    const raw = /** @type {Record<string, unknown>} */ (value)[key];
    if (typeof raw !== 'string') continue;
    const text = raw.trim();
    if (text && text.length <= 255 && !/[\u0000-\u001f\u007f]/.test(text)) result[key] = text;
  }
  return result;
}

/** @param {string} href @param {Pick<Storage, 'getItem' | 'setItem'> | null} storage */
export function captureCampaign(href, storage) {
  const current = cleanCampaign(Object.fromEntries(new URL(href).searchParams));
  try {
    const saved = cleanCampaign(JSON.parse(storage?.getItem(CAMPAIGN_KEY) || 'null'));
    if (Object.keys(saved).length) return saved;
  } catch { /* Un valor corrupto se sustituye por la campaña actual. */ }
  try {
    if (Object.keys(current).length) storage?.setItem(CAMPAIGN_KEY, JSON.stringify(current));
  } catch { /* Sin almacenamiento, los UTM de esta página siguen disponibles. */ }
  return current;
}

/** @param {string} href @param {string} base @param {Record<string, string>} campaign */
export function campaignLink(href, base, campaign) {
  let target;
  try { target = new URL(href, base); } catch { return href; }
  if (!SITES.has(target.origin) || target.origin === new URL(base).origin) return href;
  // Una campaña explícita en el destino es indivisible: nunca mezclar fuentes y campañas.
  if (UTM_KEYS.some(key => target.searchParams.has(key))) return href;
  for (const [key, value] of Object.entries(cleanCampaign(campaign))) target.searchParams.set(key, value);
  return Object.keys(campaign).length ? target.href : href;
}

export function currentCampaign() {
  /** @type {Storage | null} */
  let storage = null;
  try { storage = window.sessionStorage; } catch { /* Puede estar deshabilitado. */ }
  return captureCampaign(window.location.href, storage);
}

export function installCampaignAttribution() {
  const campaign = currentCampaign();
  /** @param {HTMLAnchorElement} link */
  const decorate = link => {
    if (link.hasAttribute('download')) return;
    const href = link.getAttribute('href');
    if (!href) return;
    link.setAttribute('href', campaignLink(href, window.location.href, campaign));
  };
  // También funciona al abrir un enlace con el menú contextual o en otra pestaña.
  document.querySelectorAll('a[href]').forEach(link => decorate(/** @type {HTMLAnchorElement} */ (link)));
  document.addEventListener('click', event => {
    const link = event.target instanceof Element ? event.target.closest('a[href]') : null;
    if (link instanceof HTMLAnchorElement) decorate(link);
  }, { capture: true });
}
