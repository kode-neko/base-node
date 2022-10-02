import i18next from 'i18next';

function i18Nexthelper(val: string): string {
  return i18next.t(val);
}

export default i18Nexthelper;
