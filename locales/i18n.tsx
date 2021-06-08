import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
const resources = {
  ko: {
    translation: {
      'btn-test-start': '시작하기',

      prev: '이전',
      next: '다음'
    }
  }
};
i18n.use(initReactI18next).init({
  resources,
  lng: 'ko'
});
export default i18n;
