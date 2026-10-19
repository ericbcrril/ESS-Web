import { createContext } from 'react'
import contentData from '../data/content.json'
import contactData from '../data/contact.json'

export type Language = 'en' | 'es'

type ContactDetails = (typeof contactData)[Language] & {
  company: typeof contactData.contact
  socialMedia: typeof contactData.socialMedia
  externalLinks: typeof contactData.externalLinks
}

export type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  content: (typeof contentData)[Language]
  contact: ContactDetails
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)
