'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Anchor, 
  Brain, 
  Feather, 
  Users, 
  FolderGit2, 
  BookOpen, 
  User 
} from 'lucide-react';

// --- 資料結構：定義選單項目 (中英對照) ---
const NAV_ITEMS = [
  {
    key: 'psychotherapy',
    en: 'Psychotherapy',
    zh: '心理治療',
    icon: <Brain size={18} />,
    href: '/psychotherapy',
    // 根據您的截圖資料夾結構
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
  {
    key: 'eis-heauton',
    en: 'Eis-heauton',
    zh: '自我探問',
    icon: <Feather size={18} />,
    href: '/eis-heauton',
    subItems: [
      { en: 'Freedom', zh: '自由', href: '/eis-heauton/freedom' },
      { en: 'Unity', zh: '統整', href: '/eis-heauton/unity' },
    ]
  },
  {
    key: 'group',
    en: 'Group Therapy',
    zh: '團體治療',
    icon: <Users size={18} />,
    href: '/group-therapy',
    subItems: [] // 無子選單
  },
  {
    key: 'project',
    en: 'Projects',
    zh: '專案計畫',
    icon: <FolderGit2 size={18} />,
    href: '/project',
    subItems: [
      { en: 'Male Sexual Minority', zh: '男性性少數', href: '/project/male-sexual-minority' },
    ]
  },
  {
    key: 'academic',
    en: 'Academic',
    zh: '學術研究',
    icon: <BookOpen size={18} />,
    href: '/academic',
    subItems: []
  },
  {
    key: 'about',
    en: 'About',
    zh: '關於我',
    icon: <User size={18} />,
    href: '/about',
    subItems: []
  }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpand, setMobileExpand] = useState<string | null>(null);
  const pathname = usePathname();

  // 監聽捲動事件，改變 Navbar 背景透明度
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 切換手機版子選單展開
  const toggleMobileExpand = (key: string) => {
    setMobileExpand(mobileExpand === key ? null : key);
  };

  return (
    <>
      {/* --- Desktop & Mobile Top Bar --- */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out font-sans
        ${isScrolled 
          ? 'bg-[#F7F5F3]/90 backdrop-blur-md shadow-sm border-b border-stone-200/50 py-2' 
          : 'bg-[#F7F5F3] py-4 border-b border-transparent'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group z-50">
              <div className={`p-2 rounded-lg transition-colors duration-300 ${isScrolled ? 'bg-stone-200/50' : 'bg-stone-200'} group-hover:bg-teal-700/10`}>
                <Anchor className="text-stone-600 group-hover:text-teal-800 transition-colors" size={24} />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold text-stone-800 tracking-tight leading-none">TITANIC</span>
                <span className="text-[10px] text-stone-500 uppercase tracking-widest font-medium">Psychology</span>
              </div>
            </Link>

            {/* --- Desktop Navigation (Hidden on Mobile) --- */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname.startsWith(item.href);
                const hasSub = item.subItems.length > 0;

                return (
                  <div key={item.key} className="relative group px-1">
                    {/* Main Menu Item */}
                    <Link 
                      href={item.href}
                      className={`
                        flex flex-col items-center px-4 py-2 rounded-lg transition-all duration-200
                        ${isActive ? 'bg-stone-200/60' : 'hover:bg-stone-200/40'}
                      `}
                    >
                      <span className={`text-sm font-bold tracking-tight ${isActive ? 'text-teal-900' : 'text-stone-700'}`}>
                        {item.en}
                      </span>
                      <span className="text-[10px] text-stone-400 font-medium -mt-0.5 group-hover:text-stone-500 transition-colors">
                        {item.zh}
                      </span>
                    </Link>

                    {/* Dropdown Menu (Hover Trigger) */}
                    {hasSub && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out transform group-hover:translate-y-0 translate-y-2 w-max min-w-[200px] z-50">
                        <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl border border-stone-100 p-2 overflow-hidden">
                          {/* 裝飾性的小三角形 */}
                          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45 border-l border-t border-stone-100"></div>
                          
                          <div className={`grid ${item.subItems.length > 6 ? 'grid-cols-2 gap-x-2' : 'grid-cols-1'} gap-y-1`}>
                            {item.subItems.map((sub) => (
                              <Link 
                                key={sub.href}
                                href={sub.href}
                                className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-stone-50 transition-colors group/sub"
                              >
                                <div className="flex flex-col">
                                  <span className="text-sm font-medium text-stone-600 group-hover/sub:text-teal-800 transition-colors">
                                    {sub.en}
                                  </span>
                                  <span className="text-[10px] text-stone-400 group-hover/sub:text-stone-500">
                                    {sub.zh}
                                  </span>
                                </div>
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

            {/* --- Mobile Menu Button (Hamburger) --- */}
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 text-stone-600 hover:bg-stone-200/50 rounded-full transition-colors"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* --- Mobile Full Screen Menu Overlay --- */}
      <div 
        className={`
          fixed inset-0 z-[60] bg-[#F7F5F3] lg:hidden
          transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
          ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Header */}
          <div className="flex justify-between items-center p-6 border-b border-stone-200">
             <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-stone-800">Menu</span>
                <span className="text-xs text-stone-500 uppercase tracking-widest">Navigation</span>
              </div>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 bg-stone-200 rounded-full text-stone-600 hover:bg-stone-300 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-2">
            {NAV_ITEMS.map((item) => {
              const hasSub = item.subItems.length > 0;
              const isExpanded = mobileExpand === item.key;
              const isActive = pathname.startsWith(item.href);

              return (
                <div key={item.key} className="border-b border-stone-100 last:border-0 pb-2">
                  <div 
                    className="flex items-center justify-between py-3 cursor-pointer"
                    onClick={() => hasSub ? toggleMobileExpand(item.key) : setMobileMenuOpen(false)}
                  >
                    <Link 
                      href={item.href} 
                      onClick={(e) => { if(hasSub) e.preventDefault(); }} // 如果有子選單，點擊文字僅展開
                      className="flex items-center gap-4"
                    >
                      <div className={`p-2 rounded-lg ${isActive ? 'bg-teal-50 text-teal-700' : 'bg-stone-100 text-stone-500'}`}>
                        {item.icon}
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-lg font-bold text-stone-700">{item.en}</span>
                        <span className="text-xs text-stone-400 font-medium">{item.zh}</span>
                      </div>
                    </Link>
                    
                    {hasSub && (
                      <button 
                        onClick={(e) => { e.stopPropagation(); toggleMobileExpand(item.key); }}
                        className={`p-1 text-stone-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                      >
                        <ChevronDown size={20} />
                      </button>
                    )}
                  </div>

                  {/* Mobile Submenu Accordion */}
                  <div 
                    className={`
                      overflow-hidden transition-all duration-300 ease-in-out
                      ${isExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}
                    `}
                  >
                    <div className="pl-[3.5rem] pr-2 pb-4 space-y-3">
                      {item.subItems.map((sub) => (
                        <Link 
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between py-1 group"
                        >
                          <span className="text-stone-600 font-medium group-hover:text-teal-700">{sub.en}</span>
                          <span className="text-xs text-stone-400 bg-stone-100 px-2 py-0.5 rounded-full">{sub.zh}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Mobile Footer Decor */}
          <div className="p-6 bg-stone-100">
             <p className="text-center text-xs text-stone-400">© 2026 Titanic Research Lab</p>
          </div>
        </div>
      </div>
    </>
  );
}