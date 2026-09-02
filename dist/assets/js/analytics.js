/* ================================================
   MAURYA COLLECTION — Visitor Analytics Tracker
   Inject this script on every page
   ================================================ */
(function () {
  'use strict';
  const now = Date.now();
  const today = new Date().toISOString().slice(0, 10);
  const page = location.pathname.split('/').pop() || 'index.html';
  const ref = document.referrer || 'direct';
  const ua = navigator.userAgent;
  const isMobile = /Mobi|Android/i.test(ua);

  // ── Visit log ──────────────────────────────────────────────
  const visits = JSON.parse(localStorage.getItem('mc_visits') || '[]');
  visits.push({ ts: now, page, ref: ref.slice(0, 80), mobile: isMobile, date: today });
  // Keep last 500 visits only
  if (visits.length > 500) visits.splice(0, visits.length - 500);
  localStorage.setItem('mc_visits', JSON.stringify(visits));

  // ── Daily unique counter ───────────────────────────────────
  const dailyKey = 'mc_daily_' + today;
  const session = sessionStorage.getItem('mc_session');
  if (!session) {
    sessionStorage.setItem('mc_session', '1');
    const daily = JSON.parse(localStorage.getItem(dailyKey) || '{"unique":0,"total":0}');
    daily.unique++;
    daily.total++;
    localStorage.setItem(dailyKey, JSON.stringify(daily));
  } else {
    const daily = JSON.parse(localStorage.getItem(dailyKey) || '{"unique":0,"total":0}');
    daily.total++;
    localStorage.setItem(dailyKey, JSON.stringify(daily));
  }

  // ── Dynamic Banner / Deal from admin ──────────────────────
  const banner = JSON.parse(localStorage.getItem('mc_admin_banner') || 'null');
  if (banner && banner.active) {
    const bar = document.querySelector('.announce-bar .announce-inner');
    if (bar) {
      bar.innerHTML = `<span style="font-weight:700;color:${banner.color || '#f7e7a9'};">${banner.emoji || '🎉'} ${banner.text}</span>`;
      const announceBar = document.querySelector('.announce-bar');
      if (announceBar && banner.bg) announceBar.style.background = banner.bg;
    }
    // Also inject a top promo poster if configured
    if (banner.poster && banner.posterImg) {
      const existing = document.getElementById('mc-promo-poster');
      if (!existing) {
        const div = document.createElement('div');
        div.id = 'mc-promo-poster';
        div.style.cssText = 'width:100%;max-height:140px;overflow:hidden;cursor:pointer;position:relative;z-index:100;';
        div.innerHTML = `<img src="${banner.posterImg}" alt="Promotion" style="width:100%;height:140px;object-fit:cover;" /><button onclick="document.getElementById(\'mc-promo-poster\').remove()" style="position:absolute;top:8px;right:12px;background:rgba(0,0,0,0.5);color:#fff;border:none;border-radius:50%;width:28px;height:28px;font-size:16px;cursor:pointer;line-height:28px;text-align:center;">×</button>`;
        document.body.insertBefore(div, document.body.firstChild);
      }
    }
  }
})();
