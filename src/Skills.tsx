import React from 'react';
import Footer from './components/Footer';

const skillsContent = {
  vi: {
    title: 'Kỹ năng chuyên môn',
    badge: 'SKILL',
    groups: [
      { category: 'Front-end', items: ['HTML5', 'CSS3', 'Sass', 'JavaScript (ES6+)', 'TypeScript', 'React', 'Redux', 'Next.js', 'TailwindCSS', 'Material UI', 'Framer Motion'], desc: 'Thành thạo xây dựng giao diện hiện đại, responsive, tối ưu trải nghiệm người dùng với các công nghệ front-end mới nhất.' },
      { category: 'Back-end', items: ['Node.js', 'Express', 'RESTful API', 'MongoDB', 'MySQL', 'Firebase', 'JWT Auth'], desc: 'Thiết kế và phát triển hệ thống server, API bảo mật, xử lý dữ liệu lớn, tối ưu hiệu suất.' },
      { category: 'UI/UX & Tools', items: ['Figma', 'Adobe XD', 'Photoshop', 'Responsive Design', 'Agile/Scrum', 'Git', 'Github', 'CI/CD', 'Jira', 'Trello'], desc: 'Chuyên sâu về thiết kế trải nghiệm người dùng, quản lý dự án linh hoạt, sử dụng thành thạo các công cụ hỗ trợ phát triển.' }
    ],
    extraTitle: 'Kinh nghiệm nổi bật',
    extra: [
      '3+ năm phát triển web chuyên nghiệp, từng làm việc tại startup và công ty lớn',
      'Thành thạo xây dựng SPA, tối ưu SEO, tối ưu hiệu suất web',
      'Đã tham gia nhiều dự án thực tế với vai trò Fullstack/Front-end Lead',
      'Đam mê UI/UX, luôn cập nhật công nghệ mới',
      'Kỹ năng giải quyết vấn đề nhanh, giao tiếp hiệu quả, truyền cảm hứng cho team',
      'Đạt nhiều thành tích trong các dự án hackathon, cuộc thi lập trình',
      'Luôn đặt mục tiêu mang lại giá trị thực tiễn cho khách hàng'
    ]
  },
  en: {
    title: 'Professional Skills',
    badge: 'SKILL',
    groups: [
      { category: 'Front-end', items: ['HTML5', 'CSS3', 'Sass', 'JavaScript (ES6+)', 'TypeScript', 'React', 'Redux', 'Next.js', 'TailwindCSS', 'Material UI', 'Framer Motion'] },
      { category: 'Back-end', items: ['Node.js', 'Express', 'RESTful API', 'MongoDB', 'MySQL', 'Firebase', 'JWT Auth'] },
      { category: 'UI/UX & Tools', items: ['Figma', 'Adobe XD', 'Photoshop', 'Responsive Design', 'Agile/Scrum', 'Git', 'Github', 'CI/CD', 'Jira', 'Trello'] }
    ],
    extraTitle: 'Outstanding Experience',
    extra: [
      '3+ years of professional web development, worked at startups and large companies',
      'Proficient in building SPA, SEO optimization, web performance',
      'Participated in many real projects as Fullstack/Front-end Lead',
      'Passionate about UI/UX, always updating new technologies'
    ]
  },
  zh: {
    title: '专业技能',
    badge: 'SKILL',
    groups: [
      { category: '前端', items: ['HTML5', 'CSS3', 'Sass', 'JavaScript (ES6+)', 'TypeScript', 'React', 'Redux', 'Next.js', 'TailwindCSS', 'Material UI', 'Framer Motion'] },
      { category: '后端', items: ['Node.js', 'Express', 'RESTful API', 'MongoDB', 'MySQL', 'Firebase', 'JWT Auth'] },
      { category: 'UI/UX & 工具', items: ['Figma', 'Adobe XD', 'Photoshop', '响应式设计', '敏捷/Scrum', 'Git', 'Github', 'CI/CD', 'Jira', 'Trello'] }
    ],
    extraTitle: '突出经验',
    extra: [
      '3+年专业Web开发，曾在初创公司和大公司工作',
      '精通SPA开发、SEO优化、性能优化',
      '参与多个实际项目，担任Fullstack/前端负责人',
      '热爱UI/UX，持续学习新技术'
    ]
  }
};

const Skills: React.FC = () => {
  const content = skillsContent['vi'];
  return (
    <>
      <section className="skills-section animate-fade-in">
        <h2 className="skills-title">
          <span className="skills-title-icon" aria-hidden="true" style={{display:'inline-flex',alignItems:'center',verticalAlign:'middle',marginRight:'0.7em'}}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={{display:'block'}}><circle cx="16" cy="16" r="16" fill="#2196f3"/><path d="M10 17l4 4 8-8" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
          {content.title}
          <span className="skills-title-badge">{content.badge}</span>
        </h2>
        <div className="skills-list">
          {content.groups.map((group) => (
            <div className="skill-group card-hover" key={group.category}>
              <div className="skill-group-header" style={{display:'flex',alignItems:'center',gap:'0.7em'}}>
                <span className="skill-group-tick" aria-hidden="true" style={{display:'inline-flex',alignItems:'center',verticalAlign:'middle'}}>
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><circle cx="13" cy="13" r="13" fill="#2196f3"/><path d="M8 14l4 4 6-8" stroke="#FFD700" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <h3 style={{fontWeight:800,color:'#1e2e6b',margin:0}}>{group.category}</h3>
              </div>
              <p style={{color:'#3a3a7c',fontSize:'1.05rem',margin:'0.5em 0 0.7em 0'}}>{group.desc}</p>
              <ul>
                {group.items.map((item) => (
                  <li key={item} className={`skill-item${['React','Next.js'].includes(item)?' hot-skill':''}`}>
                    <span className="dot"></span>
                    {item}
                    {['React','Next.js'].includes(item) && <span className="badge-hot">HOT</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="skills-extra animate-slide-up">
          <h4>{content.extraTitle}</h4>
          <ul>
            {content.extra.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Skills;
