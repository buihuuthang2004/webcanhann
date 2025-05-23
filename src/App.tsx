import React, { useState, useRef } from 'react';
import Home from './Home';
import Skills from './Skills';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const pageComponents = {
  home: Home,
  skills: Skills,
  about: About,
  projects: Projects,
  contact: Contact,
};

const navText = {
  vi: {
    home: 'Trang chủ',
    skills: 'Kỹ năng',
    about: 'Về tôi',
    projects: 'Dự án',
    contact: 'Liên hệ',
    skillsExtra: 'Kỹ năng thêm',
    aboutExtra: 'Về tôi thêm',
  },
  en: {
    home: 'Home',
    skills: 'Skills',
    about: 'About',
    projects: 'Projects',
    contact: 'Contact',
    skillsExtra: 'More skills',
    aboutExtra: 'More about',
  },
  zh: {
    home: '主页',
    skills: '技能',
    about: '关于我',
    projects: '项目',
    contact: '联系',
    skillsExtra: '更多技能',
    aboutExtra: '更多关于',
  }
};

const App: React.FC = () => {
  const [page, setPage] = useState<'home'|'skills'|'about'|'projects'|'contact'>('home');
  const [transitioning, setTransitioning] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string|null>(null);
  const dropdownTimeout = useRef<number|null>(null);
  const [submenuActive, setSubmenuActive] = useState<string|null>(null);
  const [language, setLanguage] = useState<'vi'|'en'|'zh'>('vi');
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleNav = (target: typeof page) => {
    if (target === page || transitioning) return;
    setTransitioning(true);
    setDropdownOpen(null); // Ẩn dropdown khi chuyển trang
    setTimeout(() => {
      setPage(target);
      setTransitioning(false);
    }, 350); // Thời gian trùng với hiệu ứng CSS
  };

  // Helper: detect mobile
  const isMobile = () => window.innerWidth <= 700;

  // Dropdown parent button click logic for mobile UX
  const handleDropdownParentClick = (name: string, navPage: typeof page) => {
    if (isMobile()) {
      if (dropdownOpen !== name) {
        setDropdownOpen(name);
        return;
      }
      // If already open, navigate
      handleNav(navPage);
    } else {
      handleNav(navPage);
    }
  };

  // Dropdown hover logic
  const handleDropdownEnter = (name: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(name);
  };

  // Submenu click highlight
  const handleSubmenuClick = (name: string) => {
    setSubmenuActive(name);
    setDropdownOpen(null);
  };

  const handleLanguageChange = (lang: 'vi'|'en'|'zh') => {
    setLanguage(lang);
    setDropdownOpen(null);
  };

  // Search handler: scroll to section or page
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const value = searchInputRef.current?.value?.toLowerCase().trim();
    if (!value) return;
    // Map keywords to section/page ids
    const map = [
      { keywords: ['home','trang chủ','主页'], page: 'home', anchor: null },
      { keywords: ['kỹ năng','skills','技能'], page: 'skills', anchor: null },
      { keywords: ['về tôi','about','关于我'], page: 'about', anchor: null },
      { keywords: ['dự án','projects','项目'], page: 'projects', anchor: null },
      { keywords: ['liên hệ','contact','联系'], page: 'contact', anchor: 'contact-title' },
      { keywords: ['feedback','đánh giá','评价'], page: 'home', anchor: null },
      { keywords: ['cam kết','commitment','承诺'], page: 'home', anchor: null },
      { keywords: ['quy trình','workflow','流程'], page: 'home', anchor: null },
    ];
    let found = null;
    for (const item of map) {
      if (item.keywords.some(k => value.includes(k))) {
        found = item;
        break;
      }
    }
    if (found) {
      if (found.page !== page) {
        handleNav(found.page as typeof page);
        setTimeout(() => {
          if (found.anchor) {
            const el = document.getElementById(found.anchor);
            if (el) el.scrollIntoView({behavior:'smooth'});
          }
        }, 400);
      } else if (found.anchor) {
        const el = document.getElementById(found.anchor);
        if (el) el.scrollIntoView({behavior:'smooth'});
      }
    } else {
      // fallback: try scroll to section id if exists
      const el = document.getElementById(value);
      if (el) el.scrollIntoView({behavior:'smooth'});
    }
  };

  React.useEffect(() => {
    const handler = () => handleNav('contact');
    window.addEventListener('navigate-contact', handler);
    return () => window.removeEventListener('navigate-contact', handler);
  }, [page, transitioning]);

  const PageComponent = pageComponents[page];

  return (
    <div>
      <nav className="navbar" style={{position:'relative', alignItems:'center', justifyContent:'flex-end'}}
        onMouseLeave={() => {
          setDropdownOpen(null);
          setSubmenuActive(null);
        }}
      >
        {/* Đã xóa navbar-title (Bùi Hữu Thắng) theo yêu cầu */}
        <button className={page === 'home' ? 'active' : ''} onClick={() => handleNav('home')}>{navText[language].home}</button>
        <div
          className={`navbar-dropdown${dropdownOpen==='skills' ? ' show-dropdown' : ''}`}
          onMouseEnter={() => handleDropdownEnter('skills')}
          onFocus={() => handleDropdownEnter('skills')}
        >
          <button
            className={page === 'skills' ? 'active' : ''}
            onClick={() => handleDropdownParentClick('skills', 'skills')}
          >
            {navText[language].skills}
            <span className="dropdown-icon">▼</span>
          </button>
          <div className="dropdown-content">
            <a
              href="https://sites.google.com/view/buihuuthang/project/skill?authuser=0"
              target="_blank"
              rel="noopener noreferrer"
              className={submenuActive==='skills-extra' ? 'active' : ''}
              onClick={() => handleSubmenuClick('skills-extra')}
            >{navText[language].skillsExtra}</a>
          </div>
        </div>
        <div
          className={`navbar-dropdown${dropdownOpen==='about' ? ' show-dropdown' : ''}`}
          onMouseEnter={() => handleDropdownEnter('about')}
          onFocus={() => handleDropdownEnter('about')}
        >
          <button
            className={page === 'about' ? 'active' : ''}
            onClick={() => handleDropdownParentClick('about', 'about')}
          >
            {navText[language].about}
            <span className="dropdown-icon">▼</span>
          </button>
          <div className="dropdown-content">
            <a
              href="https://sites.google.com/view/buihuuthang/about-thang?authuser=0"
              target="_blank"
              rel="noopener noreferrer"
              className={submenuActive==='about-extra' ? 'active' : ''}
              onClick={() => handleSubmenuClick('about-extra')}
            >{navText[language].aboutExtra}</a>
          </div>
        </div>
        <button className={page === 'projects' ? 'active' : ''} onClick={() => handleNav('projects')}>{navText[language].projects}</button>
        <button className={page === 'contact' ? 'active' : ''} onClick={() => handleNav('contact')}>{navText[language].contact}</button>
      </nav>
      {/* Hàng mới chứa searchbox và language dropdown, gom gọn sang phải */}
      <div className="navbar-tools-row navbar-tools-right">
        <div className="navbar-tools-group">
          <form onSubmit={handleSearch} style={{display:'flex',alignItems:'center'}}>
            <span className="navbar-searchbox-wrap">
              <input ref={searchInputRef} className="navbar-searchbox" type="text" placeholder={language==='vi' ? 'Tìm kiếm...' : language==='en' ? 'Search...' : '搜索...'} />
              <button type="submit" className="navbar-search-icon" style={{background:'none',border:'none',padding:0,margin:0,cursor:'pointer'}}>
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M21 21l-4.35-4.35M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14z" stroke="#2196f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
              </button>
            </span>
          </form>
          <div className="navbar-lang-dropdown">
            <button className="navbar-lang-btn" onClick={e => {
              e.preventDefault();
              setDropdownOpen(dropdownOpen === 'lang' ? null : 'lang');
            }}>
              {language === 'vi' && (
                <span style={{marginRight:'0.3em'}}>
                  <svg width="18" height="18" viewBox="0 0 18 18"><rect width="18" height="18" rx="3" fill="#da251d"/><polygon points="9,3 10.5,8 16,8 11.5,11 13,16 9,13 5,16 6.5,11 2,8 7.5,8" fill="#ff0"/></svg>
                </span>
              )}
              {language === 'en' && (
                <span style={{marginRight:'0.3em'}}>
                  <svg width="18" height="18" viewBox="0 0 18 18"><rect width="18" height="18" rx="3" fill="#00247d"/><rect y="6" width="18" height="6" fill="#fff"/><rect y="7.5" width="18" height="3" fill="#cf142b"/></svg>
                </span>
              )}
              {language === 'zh' && (
                <span style={{marginRight:'0.3em'}}>
                  <svg width="18" height="18" viewBox="0 0 18 18"><rect width="18" height="18" rx="3" fill="#de2910"/><rect x="2" y="2" width="14" height="14" fill="#de2910"/><polygon points="4,4 5,7 8,7 5.5,9 6.5,12 4,10.5 1.5,12 2.5,9 0,7 3,7" fill="#ffde00"/></svg>
                </span>
              )}
              {language === 'vi' ? 'VN' : language === 'en' ? 'EN' : 'CN'} ▼
            </button>
            {dropdownOpen === 'lang' && (
              <div className="navbar-lang-menu">
                <button className={`navbar-lang-item${language==='vi'?' active':''}`} onClick={()=>handleLanguageChange('vi')}>
                  <span style={{marginRight:'0.5em'}}>
                    <svg width="18" height="18" viewBox="0 0 18 18"><rect width="18" height="18" rx="3" fill="#da251d"/><polygon points="9,3 10.5,8 16,8 11.5,11 13,16 9,13 5,16 6.5,11 2,8 7.5,8" fill="#ff0"/></svg>
                  </span>
                  Tiếng Việt
                </button>
                <button className={`navbar-lang-item${language==='en'?' active':''}`} onClick={()=>handleLanguageChange('en')}>
                  <span style={{marginRight:'0.5em'}}>
                    <svg width="18" height="18" viewBox="0 0 18 18"><rect width="18" height="18" rx="3" fill="#00247d"/><rect y="6" width="18" height="6" fill="#fff"/><rect y="7.5" width="18" height="3" fill="#cf142b"/></svg>
                  </span>
                  English
                </button>
                <button className={`navbar-lang-item${language==='zh'?' active':''}`} onClick={()=>handleLanguageChange('zh')}>
                  <span style={{marginRight:'0.5em'}}>
                    <svg width="18" height="18" viewBox="0 0 18 18"><rect width="18" height="18" rx="3" fill="#de2910"/><rect x="2" y="2" width="14" height="14" fill="#de2910"/><polygon points="4,4 5,7 8,7 5.5,9 6.5,12 4,10.5 1.5,12 2.5,9 0,7 3,7" fill="#ffde00"/></svg>
                  </span>
                  中文
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <main className="main-content">
        <div className={`page-transition${transitioning ? ' fade-out' : ' fade-in'}`} key={page}>
          <PageComponent language={language} />
        </div>
      </main>
      <div className="footer-bottom">© 2025 Bùi Hữu Thắng. All rights reserved.</div>
    </div>
  );
};

export default App;
