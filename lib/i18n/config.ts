import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  resources: {
    en: {
      curriculum: require("./locales/en/curriculum.json"),
    },
    it: {
      curriculum: require("./locales/it/curriculum.json"),
    },
  },

  ns: ["curriculum"],
  defaultNS: "curriculum",
});

i18n.languages = ["en", "it"];

export default i18n;
