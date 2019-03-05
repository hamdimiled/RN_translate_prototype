import i18n from 'i18next';
import {reactI18nextModule} from 'react-i18next';
import en from './Translate/en';
import fr from './Translate/fr';
// http://i18next.com/docs/ownplugin/#languagedetector
const languageDetector = {
    type: 'languageDetector',
    async: true, // flags below detection to be async
    detect: cb => cb('fr'),
    init: () => {
    },
    cacheUserLanguage: () => {
    },
};

i18n
    .use(languageDetector)
    .use(reactI18nextModule)
    .init({
        fallbackLng: 'en',

        resources: {
            en: {
                common: en,
            },
            fr: {
                common:fr,
            },
        },

        // have a common namespace used around the full app
        ns: ['common'],
        defaultNS: 'common',

        debug: true,

        // cache: {
        //   enabled: true
        // },

        interpolation: {
            escapeValue: false, // not needed for react as it does escape per default to prevent xss!
        },
    });

export default i18n;