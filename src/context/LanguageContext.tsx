import { useEffect, useMemo, useState, type ReactNode } from 'react'
import contentData from '../data/content.json'
import contactData from '../data/contact.json'
import { LanguageContext, type Language, type LanguageContextValue } from './LocaleContext'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = window.localStorage.getItem('site-language')
    return savedLanguage === 'es' ? 'es' : 'en'
  })

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage: (nextLanguage) => {
        window.localStorage.setItem('site-language', nextLanguage)
        setLanguage(nextLanguage)
      },
      content: contentData[language],
      contact: {
        ...contactData[language],
        company: contactData.contact,
        socialMedia: contactData.socialMedia,
        externalLinks: contactData.externalLinks,
      },
    }),
    [language],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
