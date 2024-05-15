import { Language } from '../types'

export const EN: Language = { locale: 'en-US', language: 'English', code: 'en' }

export const languages: Record<string, Language> = {
  'en-US': EN,
}

const languageList = Object.values(languages)

export default languageList
