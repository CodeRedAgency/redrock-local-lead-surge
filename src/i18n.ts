import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en/common.json";
import es from "./locales/es/common.json";

// Detect language from URL path
const pathLang = window.location.pathname.startsWith('/es') ? 'es' : 'en';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: pathLang, // Set initial language from URL
    fallbackLng: "en",
    supportedLngs: ["en", "es"],
    interpolation: { escapeValue: false },
    resources: {
      en: { common: en },
      es: { common: es },
    },
    defaultNS: "common",
    ns: ["common"],
    detection: {
      order: ["path", "querystring", "localStorage", "cookie", "navigator"],
      lookupQuerystring: "lang",
      lookupFromPathIndex: 0,
      caches: ["localStorage"],
    },
  });

export default i18n;


