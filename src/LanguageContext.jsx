import { createContext, useState, useContext } from 'react'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('ksp_lang') || 'en'
  })

  const changeLanguage = (newLang) => {
    if (newLang === 'en' || newLang === 'pt') {
      setLang(newLang)
      localStorage.setItem('ksp_lang', newLang)
    }
  }

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
