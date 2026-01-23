"use client";

import { usePathname, useRouter } from 'next/navigation';
import { Locale, isLocale } from '@/lib/locale';
import React from 'react';

export default function LanguageSwitcher() {
  const pathname = usePathname() || '/';
  const router = useRouter();

  function switchTo(target: Locale) {
    // Ensure pathname always begins with '/'
    const segments = pathname.split('/');
    // segments[0] is '', segments[1] is locale or other
    if (segments.length > 1 && isLocale(segments[1])) {
      segments[1] = target;
    } else {
      // no locale present, insert target as first segment
      segments.splice(1, 0, target);
    }
    const newPath = segments.join('/') || `/${target}`;
    router.push(newPath);
  }

  return (
    <div className="flex gap-2">
      <button onClick={() => switchTo('zh')} className="px-3 py-1 rounded bg-gray-200">
        中文
      </button>
      <button onClick={() => switchTo('en')} className="px-3 py-1 rounded bg-gray-200">
        EN
      </button>
    </div>
  );
}
