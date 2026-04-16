/* ---------------------------------------------------------------
 *  salih SALMAN — digital business card
 *  To edit contact info, change the CONFIG object below and commit.
 * --------------------------------------------------------------- */

const CONFIG = {
  name: "salih SALMAN",
  company: "dünya property",
  title: "",
  phone: "+90 555 061 66 66",
  phoneRaw: "+905550616666",
  email: "salman.salih@gmail.com",
  website: "dunyaproperty.com",
  websiteUrl: "https://dunyaproperty.com",
  location: "Alanya, Antalya, Türkiye",
  mapsQuery: "Alanya, Antalya, Türkiye",
  // Replace "#" with the real URL (leave "" to hide an icon)
  socials: {
    whatsapp:  "https://wa.me/905550616666",
    instagram: "#",
    facebook:  "#",
    linkedin:  "#",
    telegram:  "#",
  },
};

/* ---------- Languages ---------- */

const LANGS = [
  { code: "tr", flag: "🇹🇷", label: "Türkçe" },
  { code: "en", flag: "🇬🇧", label: "English" },
  { code: "ru", flag: "🇷🇺", label: "Русский" },
  { code: "pl", flag: "🇵🇱", label: "Polski" },
  { code: "de", flag: "🇩🇪", label: "Deutsch" },
  { code: "uk", flag: "🇺🇦", label: "Українська" },
];

const I18N = {
  tr: { phone: "Telefon", email: "E-posta", website: "İnternet sitesi", location: "Konum", company: "Şirket", addContact: "Kişi Ekle", showOnMap: "Haritada Göster" },
  en: { phone: "Phone",   email: "Email",    website: "Website",         location: "Location", company: "Company", addContact: "Add Contact", showOnMap: "Show on Map" },
  ru: { phone: "Телефон", email: "Эл. почта", website: "Веб-сайт",        location: "Местоположение", company: "Компания", addContact: "Добавить контакт", showOnMap: "Показать на карте" },
  pl: { phone: "Telefon", email: "E-mail",   website: "Strona",          location: "Lokalizacja", company: "Firma",  addContact: "Dodaj kontakt", showOnMap: "Pokaż na mapie" },
  de: { phone: "Telefon", email: "E-Mail",   website: "Webseite",        location: "Standort", company: "Firma",  addContact: "Kontakt hinzufügen", showOnMap: "Auf Karte zeigen" },
  uk: { phone: "Телефон", email: "Ел. пошта", website: "Веб-сайт",        location: "Місцезнаходження", company: "Компанія", addContact: "Додати контакт", showOnMap: "Показати на карті" },
};

/* ---------- Inline SVG icons ---------- */

const ICONS = {
  phone:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  mail:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M3.5 7l8.5 6 8.5-6"/></svg>`,
  pin:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s-7-7.5-7-12a7 7 0 1 1 14 0c0 4.5-7 12-7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>`,
  globe:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>`,
  briefcase: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="13" rx="2.5"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 12h18"/></svg>`,
  userPlus:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0 1 14 0M19 8v6M16 11h6"/></svg>`,

  whatsapp:  `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.93.5 3.81 1.48 5.47L2 22l4.78-1.25a9.87 9.87 0 0 0 5.26 1.5h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.02A9.85 9.85 0 0 0 12.04 2zm.01 1.67c2.2 0 4.27.86 5.83 2.42a8.2 8.2 0 0 1 2.42 5.82c0 4.54-3.69 8.24-8.24 8.24h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-2.84.74.76-2.77-.19-.31a8.18 8.18 0 0 1-1.26-4.37c0-4.55 3.7-8.24 8.24-8.24zm-4.65 4.5c-.16 0-.42.06-.64.3-.22.24-.83.81-.83 1.97s.85 2.29.97 2.45c.12.16 1.67 2.67 4.13 3.64 2.05.81 2.47.65 2.92.61.45-.04 1.44-.59 1.64-1.15.2-.57.2-1.05.14-1.15-.06-.1-.22-.16-.46-.28-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.01-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.31-.74-1.79-.2-.47-.4-.41-.54-.42-.14 0-.3-.01-.46-.01z"/></svg>`,

  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>`,
  facebook:  `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.6 1.7-1.6h1.6V4.2c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.7H7.9V14h2.7v8h2.9z"/></svg>`,
  linkedin:  `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8 18H5.5v-8H8v8zM6.7 8.9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM19 18h-2.5v-4.1c0-1.1-.4-1.8-1.4-1.8-.8 0-1.2.5-1.4 1-.1.2-.1.5-.1.8V18H11v-8h2.5v1.1c.3-.5 1-1.3 2.5-1.3 1.8 0 3.1 1.2 3.1 3.7V18z"/></svg>`,
  telegram:  `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.9 4.3c-.2-.8-1-1.3-1.8-1L3.2 10.2c-.8.3-.8 1.4 0 1.7l4.3 1.5 1.7 5.3c.2.6 1 .8 1.5.3l2.5-2.2 4.4 3.3c.6.5 1.5.1 1.7-.6l2.7-13.6c.1-.5 0-1-.1-1.6zM9.8 14.2 9.5 18l-1.4-4.4 9-7.2-7.3 7.8z"/></svg>`,
};

/* ---------- DOM refs ---------- */

const $ = (id) => document.getElementById(id);

/* ---------- Render icons into data-icon placeholders ---------- */

function mountIcons(root = document) {
  root.querySelectorAll("[data-icon]").forEach((el) => {
    const key = el.getAttribute("data-icon");
    if (ICONS[key]) el.innerHTML = ICONS[key];
  });
}

/* ---------- Language handling ---------- */

function pickLang() {
  const stored = localStorage.getItem("lang");
  if (stored && I18N[stored]) return stored;
  const nav = (navigator.language || "tr").slice(0, 2).toLowerCase();
  if (I18N[nav]) return nav;
  return "tr";
}

function buildLangMenu(current) {
  const menu = $("langMenu");
  menu.innerHTML = "";
  LANGS.forEach(({ code, flag, label }) => {
    const li = document.createElement("li");
    li.setAttribute("role", "option");
    li.dataset.code = code;
    if (code === current) li.setAttribute("aria-selected", "true");
    li.innerHTML = `<span class="lf">${flag}</span><span>${label}</span>`;
    li.addEventListener("click", () => {
      localStorage.setItem("lang", code);
      render(code);
      closeLangMenu();
    });
    menu.appendChild(li);
  });
}

function openLangMenu()  { $("langMenu").hidden = false; $("langTrigger").setAttribute("aria-expanded", "true"); }
function closeLangMenu() { $("langMenu").hidden = true;  $("langTrigger").setAttribute("aria-expanded", "false"); }

/* ---------- Socials ---------- */

function renderSocials() {
  const root = $("socials");
  root.innerHTML = "";
  const order = ["whatsapp", "instagram", "facebook", "linkedin", "telegram"];
  const labels = { whatsapp: "WhatsApp", instagram: "Instagram", facebook: "Facebook", linkedin: "LinkedIn", telegram: "Telegram" };
  order.forEach((key) => {
    const href = CONFIG.socials[key];
    if (!href) return;
    const a = document.createElement("a");
    a.className = "social";
    a.href = href;
    a.target = "_blank";
    a.rel = "noopener";
    a.setAttribute("aria-label", labels[key]);
    a.innerHTML = ICONS[key] || "";
    root.appendChild(a);
  });
}

/* ---------- Main render ---------- */

function render(lang) {
  const t = I18N[lang] || I18N.tr;
  document.documentElement.lang = lang;

  // Text
  $("name").textContent = CONFIG.name;
  $("valPhone").textContent = CONFIG.phone;
  $("valEmail").textContent = CONFIG.email;
  $("valWebsite").textContent = CONFIG.website;
  $("valLocation").textContent = CONFIG.location;
  $("valCompany").textContent = CONFIG.company;
  $("addContactLabel").textContent = t.addContact;
  $("footName").textContent = `© ${CONFIG.company}`;
  $("footUrl").textContent = window.location.hostname + window.location.pathname;

  // i18n labels
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) el.textContent = t[key];
  });

  // Links
  const telHref = `tel:${CONFIG.phoneRaw}`;
  const mailHref = `mailto:${CONFIG.email}`;
  const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONFIG.mapsQuery)}`;

  $("qaPhone").href = telHref;
  $("qaEmail").href = mailHref;
  $("qaMap").href = mapHref;

  $("rowPhone").href = telHref;
  $("rowEmail").href = mailHref;
  $("rowWebsite").href = CONFIG.websiteUrl;
  $("mapChip").href = mapHref;

  // Language trigger
  const me = LANGS.find((l) => l.code === lang) || LANGS[0];
  $("langFlag").textContent = me.flag;
  $("langCode").textContent = me.code.toUpperCase();

  buildLangMenu(lang);
  renderSocials();
}

/* ---------- vCard download ---------- */

function buildVcf() {
  const [firstName, ...rest] = CONFIG.name.trim().split(/\s+/);
  const lastName = rest.join(" ");
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${CONFIG.name}`,
    `N:${lastName};${firstName};;;`,
    CONFIG.company && `ORG:${CONFIG.company}`,
    CONFIG.title && `TITLE:${CONFIG.title}`,
    `TEL;TYPE=CELL:${CONFIG.phoneRaw}`,
    `EMAIL;TYPE=INTERNET:${CONFIG.email}`,
    CONFIG.websiteUrl && `URL:${CONFIG.websiteUrl}`,
    CONFIG.location && `ADR;TYPE=WORK:;;${CONFIG.location};;;;`,
    "END:VCARD",
  ].filter(Boolean);
  return lines.join("\r\n") + "\r\n";
}

function downloadVcf() {
  const blob = new Blob([buildVcf()], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${CONFIG.name.replace(/\s+/g, "-").toLowerCase()}.vcf`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}

/* ---------- Boot ---------- */

document.addEventListener("DOMContentLoaded", () => {
  mountIcons();

  const trigger = $("langTrigger");
  trigger.addEventListener("click", (e) => {
    e.stopPropagation();
    const open = trigger.getAttribute("aria-expanded") === "true";
    open ? closeLangMenu() : openLangMenu();
  });
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".lang-switcher")) closeLangMenu();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLangMenu();
  });

  $("addContact").addEventListener("click", downloadVcf);

  render(pickLang());
});
