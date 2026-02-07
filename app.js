// TRADUZIONI BASE HOME (puoi estenderle a About/Contact)
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

// =========================
// DASHBOARD & FAKE AI LOGIC
// =========================
const tabs = document.querySelectorAll(".tools-tab");
const panels = document.querySelectorAll(".output-panel");
const generateBtn = document.getElementById("generate-btn");
const clearBtn = document.getElementById("clear-btn");
const topicInput = document.getElementById("topic-input");
const subjectSelect = document.getElementById("subject-select");
const toneSelect = document.getElementById("tone-select");

let activeTab = "outline";

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.tab;
    activeTab = target;

    tabs.forEach((t) => t.classList.toggle("active", t === tab));
    panels.forEach((panel) =>
      panel.classList.toggle("active", panel.dataset.panel === target)
    );
  });
});

function getContext() {
  return {
    topic: topicInput?.value.trim(),
    subject: subjectSelect?.value || "generic",
    tone: toneSelect?.value || "simple",
    lang: document.documentElement.lang || "it",
  };
}

function generateOutline(ctx) {
  if (!ctx.topic) return ["Nessun argomento inserito."];

  const base =
    ctx.lang === "en"
      ? [
          `Main idea: ${ctx.topic}`,
          "Key aspects:",
          "Examples and applications",
          "Common exam questions",
        ]
      : [
          `Idea principale: ${ctx.topic}`,
          "Punti chiave:",
          "Esempi e applicazioni",
          "Domande tipiche in verifica",
        ];

  return base;
}

function generateMindMap(ctx) {
  if (!ctx.topic) return [];

  const center =
    ctx.lang === "en" ? `Central node: ${ctx.topic}` : `Nodo centrale: ${ctx.topic}`;

  const branches =
    ctx.lang === "en"
      ? [
          "Definition / context",
          "Causes / components",
          "Effects / consequences",
          "Connections to other topics",
        ]
      : [
          "Definizione / contesto",
          "Cause / componenti",
          "Effetti / conseguenze",
          "Collegamenti ad altri argomenti",
        ];

  return { center, branches };
}

function generateExplanation(ctx) {
  if (!ctx.topic) {
    return ctx.lang === "en"
      ? "Enter a topic to get a short explanation."
      : "Inserisci un argomento per ottenere una spiegazione breve.";
  }

  if (ctx.lang === "en") {
    return `Here is a concise explanation of "${ctx.topic}". This is a simulated AI output: in a real version, this section would call an AI API (e.g. OpenAI) and adapt the explanation to the selected subject and tone.`;
  }

  return `Ecco una spiegazione sintetica di "${ctx.topic}". Questo è un output AI simulato: in una versione reale, qui verrebbe chiamata un'API di intelligenza artificiale (es. OpenAI) adattando spiegazione a materia e tono scelti.`;
}

function renderOutline(ctx) {
  const panel = document.getElementById("outline-panel");
  if (!panel) return;

  const items = generateOutline(ctx);

  panel.innerHTML = `
    <h2 class="output-title">
      ${ctx.lang === "en" ? "Generated outline" : "Schema generato"}
    </h2>
    <ul class="output-list">
      ${items.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  `;
}

function renderMindmap(ctx) {
  const panel = document.getElementById("mindmap-panel");
  if (!panel) return;

  const map = generateMindMap(ctx);

  if (!map.center) {
    panel.innerHTML =
      ctx.lang === "en"
        ? "<p>No topic entered.</p>"
        : "<p>Nessun argomento inserito.</p>";
    return;
  }

  panel.innerHTML = `
    <h2 class="output-title">
      ${ctx.lang === "en" ? "Textual mind map" : "Mappa concettuale testuale"}
    </h2>
    <p style="font-size:0.86rem;margin-bottom:0.3rem;">${map.center}</p>
    <ul class="output-list">
      ${map.branches.map((b) => `<li>${b}</li>`).join("")}
    </ul>
  `;
}

function renderExplanation(ctx) {
  const panel = document.getElementById("explain-panel");
  if (!panel) return;

  const text = generateExplanation(ctx);

  panel.innerHTML = `
    <h2 class="output-title">
      ${ctx.lang === "en" ? "Explanation" : "Spiegazione"}
    </h2>
    <p style="font-size:0.86rem;line-height:1.5;">${text}</p>
  `;
}

function renderActive(ctx) {
  if (activeTab === "outline") renderOutline(ctx);
  if (activeTab === "mindmap") renderMindmap(ctx);
  if (activeTab === "explain") renderExplanation(ctx);
}

generateBtn?.addEventListener("click", () => {
  const ctx = getContext();
  renderActive(ctx);
});

clearBtn?.addEventListener("click", () => {
  if (topicInput) topicInput.value = "";
  panels.forEach((p) => {
    if (p) p.innerHTML = "";
  });
});

// =========================
// CONTACT FORM VALIDATION
// =========================
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const lang = document.documentElement.lang || "it";

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const topicInputFeedback = document.getElementById("topicFeedback");
    const messageInput = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const topicError = document.getElementById("topicError");
    const messageError = document.getElementById("messageError");
    const formSuccess = document.getElementById("formSuccess");

    nameError.textContent = "";
    emailError.textContent = "";
    topicError.textContent = "";
    messageError.textContent = "";
    formSuccess.textContent = "";

    let isValid = true;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
      nameError.textContent =
        lang === "en" ? "Please enter your name." : "Inserisci il tuo nome.";
      isValid = false;
    }

    if (!emailInput.value.trim() || !emailPattern.test(emailInput.value.trim())) {
      emailError.textContent =
        lang === "en"
          ? "Please enter a valid email."
          : "Inserisci un indirizzo email valido.";
      isValid = false;
    }

    if (!topicInputFeedback.value.trim() || topicInputFeedback.value.trim().length < 4) {
      topicError.textContent =
        lang === "en"
          ? "Please describe the topic briefly."
          : "Descrivi brevemente l'argomento.";
      isValid = false;
    }

    if (!messageInput.value.trim() || messageInput.value.trim().length < 20) {
      messageError.textContent =
        lang === "en"
          ? "Message is too short. Add more details."
          : "Messaggio troppo breve. Aggiungi qualche dettaglio in più.";
      isValid = false;
    }

    if (isValid) {
      formSuccess.textContent =
        lang === "en"
          ? "Message sent successfully. Thank you for your feedback!"
          : "Messaggio inviato con successo. Grazie per il tuo feedback!";
      contactForm.reset();
    }
  });
}
