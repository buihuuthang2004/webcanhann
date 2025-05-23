import React from 'react';
import Footer from './components/Footer';

const aboutContent = {
  vi: {
    title: 'Về Thắng',
    desc: 'Xin chào! Tôi là Bùi Hữu Thắng, một lập trình viên web fullstack với hơn 3 năm kinh nghiệm thực chiến. Tôi đam mê sáng tạo, yêu thích UI/UX, luôn cập nhật công nghệ mới và hướng tới xây dựng sản phẩm chất lượng cao, tối ưu trải nghiệm người dùng.\n\nTriết lý nghề nghiệp: "Lấy khách hàng làm trung tâm, không ngừng đổi mới, cam kết chất lượng và hiệu quả."\n\nSứ mệnh: Mang lại giải pháp công nghệ tối ưu, giúp doanh nghiệp chuyển đổi số thành công, phát triển bền vững.\n\nGiá trị cốt lõi: Sáng tạo, tận tâm, minh bạch, đồng hành lâu dài cùng khách hàng.',
    highlights: [
      '🌟 Đã tham gia phát triển 20+ dự án lớn nhỏ cho doanh nghiệp, startup, cá nhân',
      '🌟 Kỹ năng giao tiếp, teamwork, quản lý dự án tốt',
      '🌟 Tư duy giải quyết vấn đề, học hỏi nhanh, chủ động sáng tạo',
      '🌟 Đam mê chia sẻ kiến thức, hỗ trợ cộng đồng lập trình'
    ],
    timelineTitle: 'Hành trình phát triển',
    timeline: [
      {
        year: '2022 - Nay',
        role: 'Fullstack Developer tại ABC Tech',
        desc: 'Dẫn dắt team xây dựng hệ thống quản lý khách hàng, tối ưu UI/UX, tích hợp CI/CD.'
      },
      {
        year: '2021 - 2022',
        role: 'Front-end Developer tại XYZ Startup',
        desc: 'Phát triển landing page, tối ưu SEO, xây dựng component library.'
      },
      {
        year: '2020 - 2021',
        role: 'Freelancer',
        desc: 'Thiết kế website cho cá nhân, doanh nghiệp nhỏ, tư vấn giải pháp công nghệ.'
      }
    ]
  },
  en: {
    title: 'About Thang',
    desc: 'Hello! I am Bui Huu Thang, a fullstack web developer with 3+ years of hands-on experience. I am passionate about creativity, love UI/UX, always update new technologies and aim to build high-quality products with optimal user experience.',
    highlights: [
      '🌟 Participated in 20+ projects for businesses, startups, individuals',
      '🌟 Good communication, teamwork, and project management skills',
      '🌟 Problem-solving mindset, fast learner, proactive and creative',
      '🌟 Passionate about sharing knowledge, supporting the dev community'
    ],
    timelineTitle: 'Development Journey',
    timeline: [
      {
        year: '2022 - Now',
        role: 'Fullstack Developer at ABC Tech',
        desc: 'Led a team to build customer management system, optimized UI/UX, integrated CI/CD.'
      },
      {
        year: '2021 - 2022',
        role: 'Front-end Developer at XYZ Startup',
        desc: 'Developed landing pages, optimized SEO, built component library.'
      },
      {
        year: '2020 - 2021',
        role: 'Freelancer',
        desc: 'Designed websites for individuals, small businesses, provided tech consulting.'
      }
    ]
  },
  zh: {
    title: '关于Thang',
    desc: '你好！我是Bui Huu Thang，一名拥有3年以上实战经验的全栈网页开发者。热爱创新，喜欢UI/UX，持续学习新技术，致力于打造高质量、优化用户体验的产品。',
    highlights: [
      '🌟 参与开发20+个企业、初创公司和个人项目',
      '🌟 沟通、团队协作和项目管理能力强',
      '🌟 善于解决问题，学习能力强，积极主动有创意',
      '🌟 热衷于知识分享，支持开发者社区'
    ],
    timelineTitle: '成长历程',
    timeline: [
      {
        year: '2022 - 至今',
        role: 'ABC Tech全栈开发者',
        desc: '带领团队开发客户管理系统，优化UI/UX，集成CI/CD。'
      },
      {
        year: '2021 - 2022',
        role: 'XYZ初创公司前端开发者',
        desc: '开发落地页，优化SEO，构建组件库。'
      },
      {
        year: '2020 - 2021',
        role: '自由职业者',
        desc: '为个人和小型企业设计网站，提供技术咨询。'
      }
    ]
  }
};

const About: React.FC<{language?: string}> = ({language = 'vi'}) => {
  const content = aboutContent[language as 'vi'|'en'|'zh'] || aboutContent.vi;
  return (
    <>
      <section className="about-section animate-fade-in">
        <div className="about-header animate-slide-down">
          <img src="/avatar.jpg" alt="avatar" className="about-avatar" />
          <div className="about-info">
            <h2 className="about-title">{content.title}</h2>
            <p className="about-desc">{content.desc}</p>
            <ul className="about-highlights">
              {content.highlights.map((h, i) => <li key={i}>{h}</li>)}
            </ul>
          </div>
        </div>
        <div className="about-timeline animate-slide-up">
          <h3>{content.timelineTitle}</h3>
          <div className="timeline">
            {content.timeline.map((item, idx) => (
              <div className="timeline-item" key={idx}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>
                  <span className="timeline-role">{item.role}</span>
                  <span className="timeline-desc">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
          <div style={{marginTop:'2.5rem',padding:'1.2rem',background:'#e9ecf3',borderRadius:'10px',textAlign:'center'}}>
            <h4 style={{color:'#1565c0',fontWeight:700}}>Bạn muốn hợp tác hoặc cần tư vấn?</h4>
            <p style={{color:'#3a3a7c'}}>Đừng ngần ngại liên hệ để cùng nhau tạo nên những giá trị mới!</p>
          </div>
        </div>
      </section>
      <Footer language={language} />
    </>
  );
};

export default About;
