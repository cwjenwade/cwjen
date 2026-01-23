"use client";

import React, { createContext, useContext, useState } from 'react';

type Locale = 'en' | 'zh';

type ContextValue = {
  language: Locale;
  setLanguage: (l: Locale) => void;
};

const LanguageContext = createContext<ContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Locale>('zh');
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
