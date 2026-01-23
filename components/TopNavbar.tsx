'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/app/context/LanguageContext'; 
import { 
  Menu, 
  X, 
  ChevronDown, 
  Anchor, 
  Brain, 
  Feather, 
  Users, 
  FolderGit2, 
  User,
  HeartHandshake,
  Home,
  Globe
} from 'lucide-react';

// --- 型別定義 (Type Definitions) ---
interface SubItem {
  en: string;
  zh: string;
  href: string;
}

interface NavItem {
  key: string;
  en: string;
  zh: string;
  icon: React.ReactNode;
  href: string;
  subItems: SubItem[];
}

const NAV_ITEMS: NavItem[] = [
  { key: 'home', en: 'Home', zh: '首頁', icon: <Home size={18} />, href: '/', subItems: [] },
  { key: 'about', en: 'About', zh: '關於我', icon: <User size={18} />, href: '/about', subItems: [] },
  { 
    key: 'eis-heauton', en: 'Eis-heauton', zh: '思想起', icon: <Feather size={18} />, href: '/eis-heauton', 
    subItems: [
      { en: 'Freedom', zh: '自由', href: '/eis-heauton/freedom' },
      { en: 'Unity', zh: '合一', href: '/eis-heauton/unity' },
    ] 
  },
  { 
    key: 'psychotherapy', en: 'Psychotherapy', zh: '心理治療', icon: <Brain size={18} />, href: '/psychotherapy', 
    subItems: [
      { en: 'Psychoanalysis', zh: '精神分析', href: '/psychotherapy/psychoanalysis' },
      { en: 'Adlerian Therapy', zh: '阿德勒學派', href: '/psychotherapy/adler' },
      { en: 'Existential Therapy', zh: '存在主義', href: '/psychotherapy/existential' },
      { en: 'Person-Centered', zh: '個人中心', href: '/psychotherapy/person-centered' },
      { en: 'Gestalt Therapy', zh: '完形治療', href: '/psychotherapy/gestalt-therapy' },
      { en: 'CBT', zh: '認知行為', href: '/psychotherapy/cbt' },
      { en: 'Reality Therapy', zh: '現實治療', href: '/psychotherapy/reality-therapy' },
      { en: 'Feminist Therapy', zh: '女性主義', href: '/psychotherapy/feminist' },
      { en: 'Postmodern', zh: '後現代取向', href: '/psychotherapy/postmodern' },
    ] 
  },
  { key: 'couple', en: 'Couple Therapy', zh: '伴侶治療', icon: <HeartHandshake size={18} />, href: '/couple-therapy', subItems: [] },
  { key: 'group', en: 'Group Therapy', zh: '團體治療', icon: <Users size={18} />, href: '/group-therapy', subItems: [] },
  { 
    key: 'project', en: 'Projects', zh: '專案計畫', icon: <FolderGit2 size={18} />, href: '/project', 
    subItems: [
      { en: 'Male Sexual Minority', zh: '男性性少數', href: '/project/male-sexual-minority' },
    ] 
  }
];

export default function TopNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpand, setMobileExpand] = useState<string | null>(null);
  const pathname = usePathname();
  
  // 1. 取得全域語言狀態
  const { language, setLanguage } = useLanguage();

  // [新增] 在組件掛載時，檢查 Cookie 以同步 Google 翻譯的狀態
  // 如果使用者之前已經切換成英文，這裡會強制同步 Context 狀態，確保按鈕顯示正確
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);

    // 檢查 Google Translate Cookie
    const cookies = document.cookie.split(';');
    const gtCookie = cookies.find(c => c.trim().startsWith('googtrans='));
    
    // 如果 Cookie 包含 '/en'，表示目前是翻譯狀態，強制設為 'en'
    if (gtCookie && gtCookie.includes('/en')) {
      if (language !== 'en') setLanguage('en');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [language, setLanguage]);

  const toggleMobileExpand = useCallback((key: string) => {
    setMobileExpand(prev => prev === key ? null : key);
  }, []);

  // [修改] 整合 Google 翻譯邏輯的切換函式
  const toggleLanguage = useCallback(() => {
    const targetLang = language === 'zh' ? 'en' : 'zh';
    
    // 1. 更新 React 狀態 (讓 UI 立即反應)
    setLanguage(targetLang);

    // 2. 設定 Google 翻譯所需的 Cookie
    if (targetLang === 'en') {
      // 設定 Cookie：從 繁體中文(zh-TW) 翻譯到 英文(en)
      document.cookie = `googtrans=/zh-TW/en; path=/; domain=${window.location.hostname}`;
      document.cookie = `googtrans=/zh-TW/en; path=/`; // 雙重保險
    } else {
      // 清除 Cookie：回到原始語言
      document.cookie = `googtrans=; path=/; domain=${window.location.hostname}; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
      document.cookie = `googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
    }

    // 3. 重新整理頁面以觸發/取消翻譯
    // 這是讓 Google 翻譯生效最穩定、最簡單的方式
    window.location.reload();

  }, [language, setLanguage]);

  // --- 字體樣式定義 ---
  const fontStyle = language === 'zh' 
    ? "font-serif tracking-widest font-medium" 
    : "font-sans tracking-tight font-bold";

  return (
    <>
      {/* [新增] Google 翻譯掛載點 
        這是 layout.tsx 中腳本尋找的目標。
        我們使用 'hidden' 將其隱藏，因為我們使用自定義按鈕觸發它。
      */}
      <div id="google_translate_element" className="hidden fixed bottom-0 right-0 z-[-1]"></div>

      {/* --- Desktop & Mobile Header --- */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
        ${isScrolled 
          ? 'bg-[#F7F5F3]/95 backdrop-blur-md shadow-sm border-b border-stone-200/50 py-3' 
          : 'bg-[#F7F5F3] py-5 border-b border-transparent'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group z-50">
              <div className={`p-2.5 rounded-xl transition-colors duration-300 ${isScrolled ? 'bg-stone-200/50' : 'bg-stone-200'} group-hover:bg-teal-700/10`}>
                <Anchor className="text-stone-600 group-hover:text-teal-800 transition-colors" size={26} />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold text-stone-800 tracking-tight leading-none">Wade Jen</span>
                <span className="text-[11px] text-stone-500 uppercase tracking-widest font-medium mt-1">A Cross-Field Learner</span>
              </div>
            </Link>

            {/* --- Desktop Navigation --- */}
            <div className="hidden lg:flex items-center gap-1">
              <nav className="flex items-center gap-1 mr-4">
                {NAV_ITEMS.map((item) => {
                  const isActive = item.href === '/' ? pathname === '/' : pathname?.startsWith(item.href || '');
                  const hasSub = item.subItems.length > 0;
                  
                  const displayText = language === 'zh' ? item.zh : item.en;

                  return (
                    <div key={item.key} className="relative group px-1">
                      <Link 
                        href={item.href}
                        className={`
                          flex items-center px-4 py-2 rounded-xl transition-all duration-300 group-hover:-translate-y-0.5
                          ${isActive ? 'bg-stone-200/60 text-teal-900' : 'hover:bg-stone-200/40 text-stone-700'}
                        `}
                      >
                        <span className={`text-[15px] ${fontStyle}`}>
                          {displayText}
                        </span>
                      </Link>

                      {/* Desktop Dropdown */}
                      {hasSub && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out transform group-hover:translate-y-0 translate-y-2 w-max min-w-[180px] z-50">
                          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-stone-100/80 p-2 overflow-hidden">
                            <div className="grid grid-cols-1 gap-1">
                              {item.subItems.map((sub) => (
                                <Link 
                                  key={sub.href}
                                  href={sub.href}
                                  className="block px-4 py-2.5 rounded-xl hover:bg-stone-50 transition-all duration-200 group/sub"
                                >
                                  <span className={`text-[14px] text-stone-600 group-hover/sub:text-teal-800 transition-colors ${fontStyle}`}>
                                    {language === 'zh' ? sub.zh : sub.en}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>

              {/* Desktop Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-stone-200 hover:border-stone-400 transition-all duration-300 shadow-sm"
              >
                <Globe size={14} className="text-stone-400" />
                <div className="flex items-center text-xs">
                  <span className={`${language === 'en' ? 'font-bold text-stone-800' : 'text-stone-300'}`}>EN</span>
                  <span className="mx-1 text-stone-200">/</span>
                  <span className={`${language === 'zh' ? 'font-bold text-stone-800 font-serif' : 'text-stone-300 font-serif'}`}>繁</span>
                </div>
              </button>
            </div>

            {/* --- Mobile Buttons --- */}
            <div className="lg:hidden flex items-center gap-3">
               {/* Mobile Language Toggle */}
               <button
                onClick={toggleLanguage}
                className="px-3 py-1.5 rounded-full bg-stone-100 text-stone-600 border border-stone-200/50"
              >
                <span className={`text-xs ${fontStyle}`}>
                  {language === 'zh' ? '繁' : 'EN'}
                </span>
              </button>

              <button 
                onClick={() => setMobileMenuOpen(true)}
                className="p-2.5 text-stone-600 hover:bg-stone-200/50 rounded-full transition-colors"
              >
                <Menu size={26} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* --- Mobile Full Screen Menu --- */}
      <div 
        className={`
          fixed inset-0 z-[60] bg-[#F7F5F3] lg:hidden
          transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
          ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-6 border-b border-stone-200">
             <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-stone-800">Menu</span>
                <span className="text-xs text-stone-500 uppercase tracking-widest font-medium">Navigation</span>
              </div>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 bg-stone-200 rounded-full text-stone-600 hover:bg-stone-300 transition-colors"
            >
              <X size={26} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-3">
            {NAV_ITEMS.map((item) => {
              const hasSub = item.subItems.length > 0;
              const isExpanded = mobileExpand === item.key;
              const isActive = item.href === '/' ? pathname === '/' : pathname?.startsWith(item.href || '');
              
              const mobileText = language === 'zh' ? item.zh : item.en;

              return (
                <div key={item.key} className="border-b border-stone-100 last:border-0 pb-2">
                  <div 
                    className="flex items-center justify-between py-4 cursor-pointer"
                    onClick={() => hasSub ? toggleMobileExpand(item.key) : setMobileMenuOpen(false)}
                  >
                    <Link 
                      href={item.href} 
                      onClick={(e) => { if(hasSub) e.preventDefault(); }} 
                      className="flex items-center gap-5"
                    >
                      <div className={`p-3 rounded-xl ${isActive ? 'bg-teal-50 text-teal-700' : 'bg-stone-100 text-stone-500'}`}>
                        {item.icon}
                      </div>
                      <span className={`text-lg ${fontStyle} text-stone-800`}>
                        {mobileText}
                      </span>
                    </Link>
                    
                    {hasSub && (
                      <button 
                        onClick={(e) => { e.stopPropagation(); toggleMobileExpand(item.key); }}
                        className={`p-2 text-stone-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                      >
                        <ChevronDown size={22} />
                      </button>
                    )}
                  </div>

                  {/* 手機版子選單 */}
                  <div 
                    className={`
                      overflow-hidden transition-all duration-300 ease-in-out
                      ${isExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}
                    `}
                  >
                    <div className="pl-[4rem] pr-2 pb-5 space-y-3">
                      {item.subItems.map((sub) => (
                        <Link 
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between py-1 group"
                        >
                          <span className={`text-[15px] text-stone-600 group-hover:text-teal-700 ${fontStyle}`}>
                            {language === 'zh' ? sub.zh : sub.en}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="p-8 bg-stone-100 text-center">
             <p className="text-xs text-stone-400 font-serif">© 2026 Titanic Research Lab</p>
          </div>
        </div>
      </div>
    </>
  );
}