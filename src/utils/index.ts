import i18next from 'i18next'

export const changeLang = (langCode: string) => {
  i18next.changeLanguage(langCode)
  document.documentElement.lang = langCode
}

export default {
  changeLang,
}
