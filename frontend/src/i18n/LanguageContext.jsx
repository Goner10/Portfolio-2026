import { createContext, useContext, useEffect, useState } from 'react';
import { translations } from './translations.js';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('gmp-lang') || 'es');

  useEffect(() => {
    localStorage.setItem('gmp-lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (path) => {
    const value = path.split('.').reduce((acc, key) => (acc ? acc[key] : undefined), translations[lang]);
    return value !== undefined ? value : path;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
