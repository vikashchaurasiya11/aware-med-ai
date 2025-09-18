import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translations
import en from "./locales/en/translation.json";
import hi from "./locales/hi/translation.json";
import or from "./locales/or/translation.json";
// baaki languages bhi yaha import karni hongi

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      hi: { translation: hi },
      or: { translation: or }
      // baaki bhi add kar
    },
    lng:"en",
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

export default i18n;
