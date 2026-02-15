import { createContext, useState, useEffect, useContext } from 'react';
import { translations } from './translations';

const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  );
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'EN');


  const t = translations[lang] || translations['EN'];

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const toggleLang = () => {
    setLang(prev => (prev === 'EN' ? 'TR' : 'EN'));
  };

  useEffect(() => {
    const root = window.document.documentElement;
    const body = document.body;

    if (isDarkMode) {
      root.classList.add('dark');
      body.style.backgroundColor = "#252128"; 
      body.style.color = "#AEB0B4";
    } else {
      root.classList.remove('dark');
      body.style.backgroundColor = "#F4F4F4";
      body.style.color = "#1F2937";
    }
    
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('lang', lang);
  }, [isDarkMode, lang]); 

  

  return (
    <SiteContext.Provider value={{ isDarkMode, toggleTheme, lang, toggleLang, t }}>
      {children}
    </SiteContext.Provider>
  );
};

export const useSite = () => useContext(SiteContext);