import { useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import utils from '@/utils'
import StringFormat from 'string-format'
import QueryString from 'query-string'

const App = () => {
  const { t: getLocale } = useTranslation()
  const stringFormatChecked = `Hi, My name is {0}, I'm {1} years old`
  const queryObjectTypesChecked = {
    fullName: 'Nguyen Van Khanh',
    age: 22,
  }

  const aboutMe = useMemo(() => {
    return StringFormat(stringFormatChecked, 'Khanh', '22')
  }, []) // Hi, My name is Khanh, I'm 22 years old

  const meQueryString = QueryString.stringify(queryObjectTypesChecked)
  console.log(meQueryString) // age=22&fullName=Nguyen%20Van%20Khanh

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
