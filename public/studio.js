const clock = document.getElementById('santiago-time');
const year = document.getElementById('year');
const timeFormat = new Intl.DateTimeFormat('es-CL', {
  timeZone: 'America/Santiago', hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23'
});
const dateFormat = new Intl.DateTimeFormat('en', { timeZone: 'America/Santiago', year: 'numeric' });

function updateClock() {
  const now = new Date();
  clock.textContent = timeFormat.format(now);
  clock.dateTime = now.toISOString();
  year.textContent = dateFormat.format(now);
}

updateClock();
setInterval(() => { if (!document.hidden) updateClock(); }, 1000);
document.addEventListener('visibilitychange', () => { if (!document.hidden) updateClock(); });
