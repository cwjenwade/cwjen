'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/app/context/LanguageContext';
import { DICTIONARY } from '@/lib/dictionary';
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
  Home // 新增：引入首頁圖示
} from 'lucide-react';

// --- 資料結構：定義選單項目 (中英對照) ---
const NAV_ITEMS = [
  // 1. Home (首頁) - 新增
  {
    key: 'home',
    en: 'Home',
    zh: '首頁',
    icon: <Home size={18} />,
    href: '/',
    subItems: []
  },
  // 2. About (關於我)
  {
    key: 'about',
    en: 'About',
    zh: '關於我',
    icon: <User size={18} />,
    href: '/about',
    subItems: []
  },
  // 3. Eis-heauton (思想起) - 順序調整至此
  {
    key: 'eis-heauton',
    en: 'Eis-heauton',
    zh: '思想起',
    icon: <Feather size={18} />,
    href: '/eis-heauton',
    subItems: [
      { en: 'Freedom', zh: '自由', href: '/eis-heauton/freedom' },
      { en: 'Unity', zh: '合一', href: '/eis-heauton/unity' },
    ]
  },
  // 4. Psychotherapy (心理治療) - 順序調整至此
  {
    key: 'psychotherapy',
    en: 'Psychotherapy',
    zh: '心理治療',
    icon: <Brain size={18} />,
    href: '/psychotherapy',
    subItems: [
      { en: 'Psychoanalysis', zh: '精神分析', href: '/psychotherapy/psychoanalysis' },
      { en: 'Adlerian Therapy', zh: '阿德勒學派', href: '/psychotherapy/adler' },
      { en: 'Existential Therapy', zh: '存在主義', href: '/psychotherapy/extential' },
      { en: 'Person-Centered', zh: '個人中心', href: '/psychotherapy/person-centered' },
      { en: 'Gestalt Therapy', zh: '完形治療', href: '/psychotherapy/gestalt-therapy' },
      { en: 'CBT', zh: '認知行為', href: '/psychotherapy/cbt' },
      { en: 'Reality Therapy', zh: '現實治療', href: '/psychotherapy/reality-therapy' },
      { en: 'Feminist Therapy', zh: '女性主義', href: '/psychotherapy/feminist' },
      { en: 'Postmodern', zh: '後現代取向', href: '/psychotherapy/postmodern' },
    ]
  },
  // 5. Couple Therapy (伴侶治療)
  {
    key: 'couple',
    en: 'Couple Therapy',
    zh: '伴侶治療',
    icon: <HeartHandshake size={18} />,
    href: '/coupletherapy',
    subItems: [] 
  },
  // 6. Group Therapy (團體治療)
  {
    key: 'group',
    en: 'Group Therapy',
    zh: '團體治療',
    icon: <Users size={18} />,
    href: '/group-therapy',
    subItems: [] 
  },
  // 7. Projects (專案計畫)
  {
    key: 'project',
    en: 'Projects',
    zh: '專案計畫',
    icon: <FolderGit2 size={18} />,
    href: '/project',
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
  const { language, navMode, setNavMode, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileExpand = (key: string) => {
    setMobileExpand(mobileExpand === key ? null : key);
  };

  return (
    <>
      {/* --- Desktop & Mobile Top Bar --- */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out font-sans
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
            <nav className="hidden lg:flex items-center gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive = item.href === '/' ? pathname === '/' : pathname?.startsWith(item.href || '');
                const hasSub = item.subItems.length > 0;

                const primaryLabel = (DICTIONARY as any)[language]?.navigation?.[item.key] ?? (language === 'zh' ? item.zh : item.en);
                const otherLang = language === 'zh' ? 'en' : 'zh';
                const secondaryLabel = (DICTIONARY as any)[otherLang]?.navigation?.[item.key] ?? (otherLang === 'zh' ? item.zh : item.en);

                return (
                  <div key={item.key} className="relative group px-1">
                    {/* Main Menu Item */}
                    <Link 
                      href={item.href}
                      className={`
                        flex flex-col items-center px-5 py-2.5 rounded-xl transition-all duration-300 group-hover:-translate-y-0.5
                        ${isActive ? 'bg-stone-200/60' : 'hover:bg-stone-200/40'}
                      `}
                    >
                      <span className={`text-[15px] font-bold tracking-tight ${isActive ? 'text-teal-900' : 'text-stone-700'}`}>
                        {primaryLabel}
                      </span>
                      {navMode === 'both' && (
                        <span className="text-xs text-stone-500 font-medium mt-0.5 group-hover:text-stone-600 transition-colors">
                          {secondaryLabel}
                        </span>
                      )}
                    </Link>

                    {/* Dropdown Menu */}
                    {hasSub && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out transform group-hover:translate-y-0 translate-y-2 w-max min-w-[240px] z-50">
                        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-stone-100/80 p-3 overflow-hidden">
                          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-l border-t border-stone-100"></div>
                          
                          <div className={`grid ${item.subItems.length > 6 ? 'grid-cols-2 gap-x-3' : 'grid-cols-1'} gap-y-1`}>
                            {item.subItems.map((sub) => {
                              const subPrimary = language === 'zh' ? sub.zh : sub.en;
                              const subSecondary = language === 'zh' ? sub.en : sub.zh;
                              return (
                                <Link 
                                  key={sub.href}
                                  href={sub.href}
                                  className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-stone-50 transition-all duration-200 group/sub"
                                >
                                  <div className="flex flex-col">
                                    <span className="text-[14px] font-bold text-stone-600 group-hover/sub:text-teal-800 transition-colors">
                                      {subPrimary}
                                    </span>
                                    {navMode === 'both' && (
                                      <span className="text-xs text-stone-400 group-hover/sub:text-stone-500 font-medium mt-0.5">
                                        {subSecondary}
                                      </span>
                                    )}
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Nav display-mode toggle (desktop) */}
              <div className="hidden lg:flex items-center gap-2 ml-2">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded-md text-sm ${language === 'en' ? 'bg-stone-200' : 'bg-transparent'}`}
                >
                  English
                </button>
                <button
                  onClick={() => setLanguage('zh')}
                  className={`px-3 py-1 rounded-md text-sm ${language === 'zh' ? 'bg-stone-200' : 'bg-transparent'}`}
                >
                  繁體中文
                </button>
              </div>
            </nav>

            {/* --- Mobile Menu Button --- */}
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2.5 text-stone-600 hover:bg-stone-200/50 rounded-full transition-colors"
            >
              <Menu size={26} />
            </button>
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
                <div className="mt-3 flex items-center gap-2">
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-3 py-1 rounded ${language === 'en' ? 'bg-stone-200' : 'bg-transparent'}`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => setLanguage('zh')}
                    className={`px-3 py-1 rounded ${language === 'zh' ? 'bg-stone-200' : 'bg-transparent'}`}
                  >
                    繁體中文
                  </button>
                </div>
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
              const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);

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
                      <div className="flex flex-col text-left">
                        <span className="text-lg font-bold text-stone-800">{language === 'zh' ? item.zh : item.en}</span>
                        {navMode === 'both' && (
                          <span className="text-sm text-stone-500 font-medium">{language === 'zh' ? item.en : item.zh}</span>
                        )}
                      </div>
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

                  <div 
                    className={`
                      overflow-hidden transition-all duration-300 ease-in-out
                      ${isExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}
                    `}
                  >
                    <div className="pl-[4rem] pr-2 pb-5 space-y-4">
                      {item.subItems.map((sub) => (
                        <Link 
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between py-1 group"
                        >
                          <span className="text-[15px] text-stone-600 font-medium group-hover:text-teal-700">{sub.en}</span>
                          <span className="text-xs text-stone-500 bg-stone-200/60 px-2.5 py-1 rounded-md">{sub.zh}</span>
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