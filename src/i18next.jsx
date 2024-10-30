import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/EN/translation.json';
import translationES from './locales/ES/translation.json';

const resources = {
  en: {
    translation: translationEN
  },
  es: {
    translation: translationES
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Idioma por defecto
    interpolation: {
      escapeValue: false // react ya se encarga de la seguridad contra XSS
    }
  });

export default i18n;
