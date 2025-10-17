import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en/common.json";
import es from "./locales/es/common.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
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
      order: ["querystring", "localStorage", "cookie", "navigator"],
      lookupQuerystring: "lang",
      caches: ["localStorage"],
    },
  });

export default i18n;


