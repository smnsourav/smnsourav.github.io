/* ==========================================================
   main.js — shared behaviour for every page.
   Nothing here needs editing for routine content updates;
   edit config.js / publications-data.js / research-data.js /
   projects-data.js / news-data.js / trivia-data.js instead.
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initNavToggle();
  initFooterYear();
  initCvLinks();
  initSocialLinks();
  initPhotoCarousel();
  initTrivia();
  initVisitorCounter();
  setHeaderHeightVar();
  initThemeToggle();
  initNavToggle();
  window.addEventListener("resize", setHeaderHeightVar);
  if (document.getElementById("pub-list")) initPublicationsPage();
  if (document.getElementById("home-pub-list")) renderHomeSelectedPubs();
  if (document.getElementById("news-list")) renderNews();
  if (document.getElementById("research-areas")) renderResearchAreas();
  if (document.getElementById("project-list")) renderProjects();
});

function setHeaderHeightVar() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  document.documentElement.style.setProperty("--header-h", header.offsetHeight + "px");
}

/* ---------------- Theme toggle (light/dark, persisted per browser) ---------------- */
function initThemeToggle() {
  const btn = document.getElementById("theme-toggle");
  const knob = document.getElementById("theme-toggle-knob");
  if (!btn) return;

  function applyState(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    const isDark = theme === "dark";
    btn.setAttribute("aria-checked", isDark ? "true" : "false");
    btn.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
    if (knob) knob.textContent = isDark ? "🌙" : "☀️";
  }

  // Head script already set data-theme before paint; just sync the control.
  const current = document.documentElement.getAttribute("data-theme") || "light";
  applyState(current);

  btn.addEventListener("click", () => {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    try { localStorage.setItem("theme", next); } catch (e) {}
    applyState(next);
  });
}

/* ---------------- Nav ---------------- */
function initNavToggle() {
  const btn = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (!btn || !links) return;
  btn.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });
  links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    links.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
  }));
}

function initFooterYear() {
  document.querySelectorAll(".js-year").forEach(el => el.textContent = new Date().getFullYear());
}

/* ---------------- CV + social links from config.js ---------------- */
function initCvLinks() {
  if (typeof SITE_CONFIG === "undefined") return;
  document.querySelectorAll(".js-cv-link").forEach(a => {
    a.setAttribute("href", SITE_CONFIG.cvPath);
  });
}

function initSocialLinks() {
  if (typeof SITE_CONFIG === "undefined") return;
  document.querySelectorAll("[data-social]").forEach(el => {
    const key = el.getAttribute("data-social");
    const url = SITE_CONFIG.links[key];
    if (url) {
      el.setAttribute("href", url);
      el.classList.remove("is-disabled");
      el.removeAttribute("aria-disabled");
    } else {
      el.setAttribute("href", "#");
      el.classList.add("is-disabled");
      el.setAttribute("aria-disabled", "true");
      el.title = "Add this link in js/config.js";
    }
  });
  document.querySelectorAll(".js-email").forEach(el => {
    el.textContent = SITE_CONFIG.email;
    if (el.tagName === "A") el.setAttribute("href", "mailto:" + SITE_CONFIG.email);
  });
}

/* ---------------- Photo carousel ---------------- */
function initPhotoCarousel() {
  const el = document.querySelector(".photo-carousel");
  if (!el || typeof SITE_CONFIG === "undefined") return;
  const photos = SITE_CONFIG.photos || [];
  if (photos.length === 0) return; // fallback markup already in HTML

  el.innerHTML = "";
  const imgs = photos.map((src, i) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = `Portrait photo of ${SITE_CONFIG.name}, ${i + 1} of ${photos.length}`;
    if (i === 0) img.classList.add("active");
    el.appendChild(img);
    return img;
  });

  let dots;
  if (photos.length > 1) {
    dots = document.createElement("div");
    dots.className = "photo-dots";
    photos.forEach((_, i) => {
      const b = document.createElement("button");
      b.setAttribute("aria-label", `Show photo ${i + 1}`);
      b.setAttribute("aria-current", i === 0 ? "true" : "false");
      b.addEventListener("click", () => show(i));
      dots.appendChild(b);
    });
    el.appendChild(dots);
  }

  let current = 0, timer;
  function show(i) {
    imgs[current].classList.remove("active");
    if (dots) dots.children[current].setAttribute("aria-current", "false");
    current = i;
    imgs[current].classList.add("active");
    if (dots) dots.children[current].setAttribute("aria-current", "true");
  }
  function next() { show((current + 1) % imgs.length); }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (photos.length > 1 && !reduceMotion) {
    timer = setInterval(next, 4500);
    el.addEventListener("mouseenter", () => clearInterval(timer));
    el.addEventListener("mouseleave", () => timer = setInterval(next, 4500));
  }
}

/* ---------------- Trivia widget ---------------- */
function initTrivia() {
  const textEl = document.getElementById("trivia-text");
  const btn = document.getElementById("trivia-btn");
  if (!textEl || !btn || typeof TRIVIA_FACTS === "undefined") return;
  let last = -1;
  function roll() {
    let i;
    do { i = Math.floor(Math.random() * TRIVIA_FACTS.length); } while (i === last && TRIVIA_FACTS.length > 1);
    last = i;
    textEl.textContent = TRIVIA_FACTS[i];
  }
  btn.addEventListener("click", roll);
  roll();
}

/* ---------------- Visitor counter (GoatCounter) ---------------- */
function initVisitorCounter() {
  const valueEl = document.getElementById("visitor-count-value");
  if (!valueEl || typeof SITE_CONFIG === "undefined") return;

  if (!SITE_CONFIG.goatCounterCode) {
    valueEl.textContent = "—";
    const note = document.getElementById("visitor-note");
    if (note) note.textContent = "Add a free GoatCounter code in js/config.js to activate this counter (see README).";
    return;
  }

  // Load the public GoatCounter tracking script (records this pageview).
  const s = document.createElement("script");
  s.async = true;
  s.setAttribute("data-goatcounter", `https://${SITE_CONFIG.goatCounterCode}.goatcounter.com/count`);
  s.src = "//gc.zgo.at/count.js";
  document.body.appendChild(s);

  // Fetch the public total-visits number via GoatCounter's public JSON endpoint.
  fetch(`https://${SITE_CONFIG.goatCounterCode}.goatcounter.com/counter/TOTAL.json`)
    .then(r => r.ok ? r.json() : Promise.reject())
    .then(data => {
      if (data && data.count) valueEl.textContent = data.count.replace(/&nbsp;/g, " ");
    })
    .catch(() => { valueEl.textContent = "—"; });
}

/* ---------------- Publications rendering ---------------- */
function pubTypeLabel(t) {
  return t === "journal" ? "Journal" : t === "conference" ? "Conference" : "Book Chapter";
}

function renderPubCard(p) {
  const links = [];
  if (p.doi) links.push(`<a href="https://doi.org/${p.doi}" target="_blank" rel="noopener">DOI: ${p.doi}</a>`);
  return `
  <article class="pub-item type-${p.type}" data-type="${p.type}" data-year="${p.year}" data-area="${p.area}"
    data-search="${(p.title + ' ' + p.venue).toLowerCase().replace(/"/g,'&quot;')}">
    <span class="pub-badge">${pubTypeLabel(p.type)}</span>
    <h3>${p.title}</h3>
    <div class="pub-meta"><span>${p.authorsHtml}</span></div>
    <div class="pub-meta"><span>${p.venue}</span><span>${p.year}</span></div>
    ${p.note ? `<div class="pub-meta"><span>${p.note}</span></div>` : ""}
    ${links.length ? `<div class="pub-links">${links.join("")}</div>` : ""}
  </article>`;
}

function renderHomeSelectedPubs() {
  if (typeof PUBLICATIONS === "undefined") return;
  const list = document.getElementById("home-pub-list");
  const selected = PUBLICATIONS.filter(p => p.selected).sort((a, b) => b.year - a.year).slice(0, 4);
  list.innerHTML = selected.map(renderPubCard).join("");
}

function initPublicationsPage() {
  if (typeof PUBLICATIONS === "undefined") return;
  const listEl = document.getElementById("pub-list");
  const searchEl = document.getElementById("pub-search");
  const yearEl = document.getElementById("pub-year");
  const typeEl = document.getElementById("pub-type");
  const areaEl = document.getElementById("pub-area");
  const countEl = document.getElementById("pub-count");

  const sorted = [...PUBLICATIONS].sort((a, b) => b.year - a.year);

  // Populate year filter
  const years = [...new Set(sorted.map(p => p.year))].sort((a, b) => b - a);
  years.forEach(y => {
    const o = document.createElement("option");
    o.value = y; o.textContent = y;
    yearEl.appendChild(o);
  });
  if (typeof RESEARCH_AREAS !== "undefined") {
    RESEARCH_AREAS.forEach(a => {
      const o = document.createElement("option");
      o.value = a.id; o.textContent = a.title;
      areaEl.appendChild(o);
    });
  }

  listEl.innerHTML = sorted.map(renderPubCard).join("");

  function applyFilters() {
    const q = searchEl.value.trim().toLowerCase();
    const y = yearEl.value, t = typeEl.value, a = areaEl.value;
    let shown = 0;
    listEl.querySelectorAll(".pub-item").forEach(item => {
      const matches =
        (!q || item.dataset.search.includes(q)) &&
        (!y || item.dataset.year === y) &&
        (!t || item.dataset.type === t) &&
        (!a || item.dataset.area === a);
      item.style.display = matches ? "" : "none";
      if (matches) shown++;
    });
    countEl.textContent = `Showing ${shown} of ${sorted.length} publications`;
    listEl.querySelectorAll(".pub-empty").forEach(e => e.remove());
    if (shown === 0) {
      const empty = document.createElement("p");
      empty.className = "pub-empty";
      empty.textContent = "No publications match those filters — try clearing one.";
      listEl.appendChild(empty);
    }
  }

  [searchEl, yearEl, typeEl, areaEl].forEach(el => el.addEventListener("input", applyFilters));
  applyFilters();
}

/* ---------------- News ---------------- */
function renderNews() {
  if (typeof NEWS_ITEMS === "undefined") return;
  const el = document.getElementById("news-list");
  el.innerHTML = NEWS_ITEMS.map(n => `
    <div class="news-item">
      <div class="news-date">${n.date}</div>
      <div>${n.text}</div>
    </div>`).join("");
}

/* ---------------- Research areas ---------------- */
function renderResearchAreas() {
  if (typeof RESEARCH_AREAS === "undefined") return;
  const el = document.getElementById("research-areas");
  el.innerHTML = RESEARCH_AREAS.map(a => `
    <article class="card" id="${a.id}">
      <div class="card-icon" aria-hidden="true">${a.icon}</div>
      <h3>${a.title}</h3>
      <p class="muted">${a.summary}</p>
      <p>${a.detail}</p>
      <a href="publications.html?area=${a.id}">See related publications →</a>
    </article>`).join("");
}

/* ---------------- Projects ---------------- */
function renderProjects() {
  if (typeof PROJECTS === "undefined") return;
  const el = document.getElementById("project-list");
  el.innerHTML = PROJECTS.map(p => `
    <article class="card">
      <span class="pub-badge">${p.role}</span>
      <h3>${p.title}</h3>
      <p class="muted">${p.subtitle}</p>
      <p>${p.description}</p>
      <div class="pub-meta"><span>Funder: ${p.funder}</span><span>Amount: ${p.amount}</span></div>
    </article>`).join("") + (typeof PROJECT_NOTE !== "undefined" ? `<p class="lede" style="grid-column:1/-1;font-size:.85rem;">${PROJECT_NOTE}</p>` : "");
}

/* Pre-fill publications area filter from ?area= query param */
window.addEventListener("load", () => {
  const params = new URLSearchParams(window.location.search);
  const area = params.get("area");
  const areaEl = document.getElementById("pub-area");
  if (area && areaEl) {
    areaEl.value = area;
    areaEl.dispatchEvent(new Event("input"));
  }
});
