"use client";

import { useLanguage } from '@/app/context/LanguageContext';
import { DICTIONARY } from '@/lib/dictionary';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Home() {
  const { language } = useLanguage();
  const dict = DICTIONARY[language];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-bold text-slate-900">{dict.home.title}</h1>
          <p className="text-lg text-slate-700">{dict.home.description}</p>
        </div>
        <LanguageSwitcher />
      </div>

      <div className="bg-slate-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-slate-900">{dict.about.title}</h2>
        <p className="text-slate-700">{dict.about.description}</p>
      </div>
    </div>
  );
}
