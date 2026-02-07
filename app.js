const translations = {
  it: {
    hero_title: "Studia qualsiasi cosa con l'AI",
    hero_subtitle:
      "Genera schemi, mappe concettuali e riassunti intelligenti per ogni materia, in pochi secondi.",
    hero_cta: "Inizia a creare schemi",
    hero_secondary: "Scopri come funziona",
  },
  en: {
    hero_title: "Study anything with AI",
    hero_subtitle:
      "Generate smart outlines, mind maps and summaries for any subject in seconds.",
    hero_cta: "Start creating outlines",
    hero_secondary: "See how it works",
  },
};

const langButtons = document.querySelectorAll(".lang-btn");

function setLanguage(lang) {
  document.documentElement.lang = lang;

  const map = translations[lang];

  if (!map) return;

  const heroTitle = document.querySelector("[data-i18n='hero_title_it']");
  const heroSubtitle = document.querySelector("[data-i18n='hero_subtitle_it']");
  const heroCta = document.querySelector("[data-i18n='hero_cta_it']");
  const heroSecondary = document.querySelector("[data-i18n='hero_secondary_it']");

  if (heroTitle) heroTitle.textContent = map.hero_title;
  if (heroSubtitle) heroSubtitle.textContent = map.hero_subtitle;
  if (heroCta) heroCta.textContent = map.hero_cta;
  if (heroSecondary) heroSecondary.textContent = map.hero_secondary;

  langButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    setLanguage(btn.dataset.lang);
  });
});

// lingua di default: IT
setLanguage("it");
