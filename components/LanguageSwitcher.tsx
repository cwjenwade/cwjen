"use client";

import React from 'react';
import { useLanguage } from '@/app/context/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-2">
      <button
        onClick={() => setLanguage('zh')}
        className={`px-3 py-1 rounded ${language === 'zh' ? 'bg-gray-300' : 'bg-gray-200'}`}>
        中文
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded ${language === 'en' ? 'bg-gray-300' : 'bg-gray-200'}`}>
        EN
      </button>
    </div>
  );
}
