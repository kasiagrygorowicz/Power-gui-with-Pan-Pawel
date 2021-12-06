import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

// Importing translation files

import translationENG from "./resources/eng/translation.json";
import translationPL from "./resources/pl/translation.json";


//Creating object with the variables of imported translation files
const resources = {
    eng: {
        translation: translationENG,
    },
    pl: {
        translation: translationPL,
    },
};

const DETECTION_OPTIONS = {
    // order: ['navigator'],
    order: ['localStorage']
  };

//i18N Initialization

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        detection: DETECTION_OPTIONS,
        resources,
        fallbackLng: 'eng',
        // lng: localStorage. getItem("language") || 'eng',
        // lng:"eng", //default language
        // keySeparator: false,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;