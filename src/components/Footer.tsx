import React from 'react';

const footerContent = {
  vi: {
    quick: 'LIÊN HỆ NHANH',
    info: 'Thông tin liên hệ',
    phone: 'Điện thoại',
    address: 'Địa chỉ',
    connect: 'KẾT NỐI',
    social: 'Mạng xã hội',
    location: 'Bửu Long, Biên Hòa, Đồng Nai',
    office: 'Văn phòng',
    copyright: '© 2025 Bùi Hữu Thắng. All rights reserved.'
  },
  en: {
    quick: 'QUICK CONTACT',
    info: 'Contact info',
    phone: 'Phone',
    address: 'Address',
    connect: 'CONNECT',
    social: 'Social',
    location: 'Buu Long, Bien Hoa, Dong Nai',
    office: 'Office',
    copyright: '© 2025 Bui Huu Thang. All rights reserved.'
  },
  zh: {
    quick: '快速联系',
    info: '联系信息',
    phone: '电话',
    address: '地址',
    connect: '连接',
    social: '社交',
    location: 'Buu Long, Bien Hoa, Dong Nai',
    office: '办公室',
    copyright: '© 2025 Bui Huu Thang. 保留所有权利。'
  }
};

const Footer: React.FC<{language?: string}> = ({language = 'vi'}) => {
  const content = footerContent[language as 'vi'|'en'|'zh'] || footerContent.vi;
  return (
    <footer className="main-footer animate-fade-in" style={{position:'relative', display:'flex', flexDirection:'column', alignItems:'center', width:'100vw', left:'50%', right:'50%', transform:'translateX(-50%)', boxSizing:'border-box'}}>
      <div className="footer-content" style={{display:'flex',justifyContent:'center',gap:'2.5rem',width:'100%',maxWidth:'1100px',margin:'0 auto'}}>
        <div className="footer-col">
          <div className="footer-badge">{content.quick}</div>
          <h4>{content.info}</h4>
          <a href="mailto:buihuuthang204@gmail.com" className="footer-link" style={{display:'flex',alignItems:'center',gap:'6px'}}>
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4zm2 0v.01L12 13l8-8.99V4H4zm16 2.41l-7.29 7.3a1 1 0 0 1-1.42 0L4 6.41V20h16V6.41z"></path></svg>
            buihuuthang204@gmail.com
          </a>
          <a href="tel:0123456789" className="footer-link" style={{display:'flex',alignItems:'center',gap:'6px'}}>
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 22 2 13.93 2 4.5A1 1 0 013 3.5H6.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.21 1.11l-2.2 2.2z"></path></svg>
            0123 456 789
          </a>
          <div className="footer-link" style={{gap:'6px'}}>
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></svg>
            {content.location}
          </div>
        </div>
        <div className="footer-col">
          <div className="footer-badge">{content.connect}</div>
          <h4>{content.social}</h4>
          <a href="https://www.facebook.com/thang.buihuu.2302" className="footer-link" target="_blank" rel="noopener noreferrer">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M17 2.1C16.7 2 16.4 2 16.1 2H7.9C7.6 2 7.3 2 7 2.1C5.2 2.6 3.7 4.1 3.2 5.9C3.1 6.2 3.1 6.5 3.1 6.8V17.2C3.1 17.5 3.1 17.8 3.2 18.1C3.7 19.9 5.2 21.4 7 21.9C7.3 22 7.6 22 7.9 22H16.1C16.4 22 16.7 22 17 21.9C18.8 21.4 20.3 19.9 20.8 18.1C20.9 17.8 20.9 17.5 20.9 17.2V6.8C20.9 6.5 20.9 6.2 20.8 5.9C20.3 4.1 18.8 2.6 17 2.1ZM12 17.5C9.5 17.5 7.5 15.5 7.5 13C7.5 10.5 9.5 8.5 12 8.5C14.5 8.5 16.5 10.5 16.5 13C16.5 15.5 14.5 17.5 12 17.5ZM18.5 7.5C17.7 7.5 17 6.8 17 6C17 5.2 17.7 4.5 18.5 4.5C19.3 4.5 20 5.2 20 6C20 6.8 19.3 7.5 18.5 7.5Z"></path></svg>
            Facebook
          </a>
          <a href="https://github.com/buihuuthang204" className="footer-link" target="_blank" rel="noopener noreferrer">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12C2 16.42 5.06 20.17 9.26 21.5C9.76 21.58 9.92 21.27 9.92 21.01C9.92 20.78 9.91 20.09 9.91 19.25C7 19.91 6.34 17.97 6.34 17.97C5.86 16.81 5.18 16.5 5.18 16.5C4.22 15.88 5.25 15.89 5.25 15.89C6.3 15.97 6.82 16.97 6.82 16.97C7.76 18.54 9.26 18.09 9.81 17.83C9.89 17.16 10.15 16.7 10.45 16.45C8.13 16.2 5.7 15.22 5.7 11.5C5.7 10.39 6.09 9.5 6.75 8.8C6.66 8.55 6.32 7.22 6.84 5.5C6.84 5.5 7.73 5.22 9.91 6.7C10.74 6.47 11.64 6.35 12.54 6.35C13.44 6.35 14.34 6.47 15.17 6.7C17.35 5.22 18.24 5.5 18.24 5.5C18.76 7.22 18.42 8.55 18.33 8.8C18.99 9.5 19.38 10.39 19.38 11.5C19.38 15.23 16.95 16.19 14.62 16.44C15.01 16.76 15.36 17.41 15.36 18.36C15.36 19.7 15.34 20.7 15.34 21.01C15.34 21.27 15.5 21.59 16.01 21.5C20.21 20.17 23.27 16.42 23.27 12C23.27 6.48 19.52 2 12 2Z"></path></svg>
            Github
          </a>
        </div>
        <div className="footer-col">
          <div className="footer-badge">{content.address}</div>
          <h4>{content.office}</h4>
          <div className="footer-link" style={{gap:'6px'}}>
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></svg>
            {content.location}
          </div>
        </div>
      </div>
      <div className="footer-bottom" style={{textAlign:'center',marginTop:'1.2rem',width:'100%'}}>{content.copyright}</div>
    </footer>
  );
};

export default Footer;