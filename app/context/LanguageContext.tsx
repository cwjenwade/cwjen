"use client";

import React, { createContext, useContext, useState } from 'react';

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
