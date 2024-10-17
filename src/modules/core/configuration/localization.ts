import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import authEN from "../../../i18n/en/auth.json";
import authUA from "../../../i18n/ua/auth.json";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  debug: true,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: { auth: { ...authEN } },
    ua: { auth: { ...authUA } },
  },
});

export default i18n;
