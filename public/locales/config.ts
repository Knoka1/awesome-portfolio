import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import translation from "./en/translation.json";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
// export const defaultNS = "translation";

i18next.use(initReactI18next).use(LanguageDetector).use(Backend).init({
  // if you're using a language detector, do not define the lng option
  fallbackLng: "en",
  // Delete debug after everything tested and working
  debug: true,
  // resources: {
  //   en: {
  //     translation,
  //   },
  //   pt: {
  //     translation,
  //   },
  //   try: {
  //     translation: {
  //       about: {
  //         subtitle: "tentou e funfou",
  //       },
  //     },
  //   },
  // },
});

// console.log(i18next.t("translation:about.subtitle", { lng: "try" }));
