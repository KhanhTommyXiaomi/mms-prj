import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import utils from '@/utils'

const App = () => {
  const { t: getLocale } = useTranslation()
  useEffect(() => {
    setTimeout(() => {
      utils.changeLang('vi')
    }, 2000)
  }, [])
  return <h1>{getLocale('TXT_HELLO')}</h1>
}

export default App
