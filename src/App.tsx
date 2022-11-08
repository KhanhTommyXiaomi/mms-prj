import { useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import utils from '@/utils'
import StringFormat from 'string-format'

const App = () => {
  const { t: getLocale } = useTranslation()
  const stringFormatChecked = `Hi, My name is {0}, I'm {1} years old`

  const aboutMe = useMemo(() => {
    return StringFormat(stringFormatChecked, 'Khanh', '22')
  }, [])

  useEffect(() => {
    setTimeout(() => {
      utils.changeLang('vi')
    }, 2000)
  }, [])

  return (
    <div className="app">
      <h1>{getLocale('TXT_HELLO')}</h1>
      <p>{aboutMe}</p>
    </div>
  )
}

export default App
