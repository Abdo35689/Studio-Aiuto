const translations = {
  en: {
    navigation: {
      home: 'Home',
      about: 'About',
      features: 'Features',
      contact: 'Contact',
      studyTools: 'Study Tools',
    },
    pageTitles: {
      home: 'Welcome to Studio Aiuto',
      about: 'About Us',
      features: 'Features',
      contact: 'Get in Touch',
      studyTools: 'Study Tools',
    },
    heroSection: {
      title: 'Transform Your Learning Experience',
      subtitle: 'Join us and enhance your studies today!'
    },
    featuresSection: {
      title: 'Features',
      feature1: 'Interactive Tools',
      feature2: 'Resource Sharing',
      feature3: 'Collaborative Learning',
    },
    buttons: {
      learnMore: 'Learn More',
      getStarted: 'Get Started',
      submit: 'Submit',
    },
    placeholders: {
      search: 'Search...',
      name: 'Your Name',
      email: 'Your Email',
      message: 'Your Message',
    },
    studyToolsPageContent: 'Explore various study tools tailored for different learning styles.',
    aboutPageContent: 'Learn more about our mission and values at Studio Aiuto.',
    contactFormLabels: {
      name: 'Name',
      email: 'Email',
      message: 'Message',
    },
    footerContent: '© 2026 Studio Aiuto. All Rights Reserved.',
    languageToggleButton: 'Switch Language',
  },
  it: {
    navigation: {
      home: 'Home',
      about: 'Chi Siamo',
      features: 'Caratteristiche',
      contact: 'Contatti',
      studyTools: 'Strumenti di Studio',
    },
    pageTitles: {
      home: 'Benvenuto in Studio Aiuto',
      about: 'Chi Siamo',
      features: 'Caratteristiche',
      contact: 'Contattaci',
      studyTools: 'Strumenti di Studio',
    },
    heroSection: {
      title: 'Trasforma la tua esperienza di apprendimento',
      subtitle: 'Unisciti a noi e migliora i tuoi studi oggi!'
    },
    featuresSection: {
      title: 'Caratteristiche',
      feature1: 'Strumenti Interattivi',
      feature2: 'Condivisione delle Risorse',
      feature3: 'Apprendimento Collaborativo',
    },
    buttons: {
      learnMore: 'Scopri di più',
      getStarted: 'Inizia',
      submit: 'Invia',
    },
    placeholders: {
      search: 'Cerca...',
      name: 'Il tuo Nome',
      email: 'La tua Email',
      message: 'Il tuo Messaggio',
    },
    studyToolsPageContent: 'Esplora vari strumenti di studio su misura per diversi stili di apprendimento.',
    aboutPageContent: 'Scopri di più sulla nostra missione e valori di Studio Aiuto.',
    contactFormLabels: {
      name: 'Nome',
      email: 'Email',
      message: 'Messaggio',
    },
    footerContent: '© 2026 Studio Aiuto. Tutti i diritti riservati.',
    languageToggleButton: 'Cambia Lingua',
  },
};

// Store language preference in localStorage
const setLanguagePreference = (language) => {
  localStorage.setItem('language', language);
};

const getLanguagePreference = () => {
  return localStorage.getItem('language') || 'en'; // Default to English
};

export { translations, setLanguagePreference, getLanguagePreference };