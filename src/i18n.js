import i18n from "i18next";
import { initReactI18next } from "react-i18next";


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

//i18N Initialization

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng:"eng", //default language
        keySeparator: false,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;