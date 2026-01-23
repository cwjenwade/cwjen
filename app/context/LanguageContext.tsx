"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type Locale = 'en' | 'zh';

type NavMode = 'both' | 'single';

type ContextValue = {
  language: Locale;
  setLanguage: (l: Locale) => void;
  navMode: NavMode;
  setNavMode: (m: NavMode) => void;
};

const LanguageContext = createContext<ContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Locale>('zh');
  const [navMode, setNavMode] = useState<NavMode>('both');

  // load persisted preferences on mount
  useEffect(() => {
    try {
      const storedLang = localStorage.getItem('wade:language') as Locale | null;
      if (storedLang === 'en' || storedLang === 'zh') {
        setLanguage(storedLang);
      }
      const storedNav = localStorage.getItem('wade:navMode') as NavMode | null;
      if (storedNav === 'both' || storedNav === 'single') {
        setNavMode(storedNav);
      }
    } catch (e) {
      // ignore (localStorage may be unavailable)
    }
  }, []);

  // persist preferences when they change
  useEffect(() => {
    try {
      localStorage.setItem('wade:language', language);
    } catch (e) {}
  }, [language]);

  useEffect(() => {
    try {
      localStorage.setItem('wade:navMode', navMode);
    } catch (e) {}
  }, [navMode]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, navMode, setNavMode }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
