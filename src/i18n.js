import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { azTranslation } from "./translations/az/translation.js";
import { enTranslation } from "./translations/en/translation.js";

i18n.use(initReactI18next).init({
  resources: {
    en: enTranslation,
    az: azTranslation,
  },
  lng: "az",
  fallbackLng: "az",
});

export default i18n;
