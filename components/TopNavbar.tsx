diff --git a/components/TopNavbar.tsx b/components/TopNavbar.tsx
index 0f3a1d41d4ed2eeec133f3880b87f90445e69eab..2555ee5a1cb0d2367f30d9d5f3d6e99ec385bf21 100644
--- a/components/TopNavbar.tsx
+++ b/components/TopNavbar.tsx
@@ -85,50 +85,51 @@ const NAV_ITEMS = [
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
+  const toggleLanguage = () => setLanguage(language === 'zh' ? 'en' : 'zh');
 
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
             
@@ -191,100 +192,90 @@ export default function TopNavbar() {
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
-                  onClick={() => setLanguage('en')}
-                  className={`px-3 py-1 rounded-md text-sm ${language === 'en' ? 'bg-stone-200' : 'bg-transparent'}`}
+                  onClick={toggleLanguage}
+                  className="px-3 py-1 rounded-md text-sm bg-stone-200/70 hover:bg-stone-200 transition"
+                  aria-label="Toggle language"
                 >
-                  English
-                </button>
-                <button
-                  onClick={() => setLanguage('zh')}
-                  className={`px-3 py-1 rounded-md text-sm ${language === 'zh' ? 'bg-stone-200' : 'bg-transparent'}`}
-                >
-                  繁體中文
+                  繁體中文 / EN
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
-                    onClick={() => setLanguage('en')}
-                    className={`px-3 py-1 rounded ${language === 'en' ? 'bg-stone-200' : 'bg-transparent'}`}
-                  >
-                    English
-                  </button>
-                  <button
-                    onClick={() => setLanguage('zh')}
-                    className={`px-3 py-1 rounded ${language === 'zh' ? 'bg-stone-200' : 'bg-transparent'}`}
+                    onClick={toggleLanguage}
+                    className="px-3 py-1 rounded bg-stone-200/70 hover:bg-stone-200 transition"
+                    aria-label="Toggle language"
                   >
-                    繁體中文
+                    繁體中文 / EN
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
@@ -322,26 +313,26 @@ export default function TopNavbar() {
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
-}
\ No newline at end of file
+}
