import React from 'react';
import Footer from './components/Footer';

const projectsContent = {
  vi: {
    title: 'Dự án tiêu biểu',
    badge: 'HỆ THỐNG ỨNG DỤNG',
    btn: 'Xem chi tiết',
    projects: [
      {
        name: 'Hệ thống quản lý khách hàng (CRM)',
        desc: 'Xây dựng hệ thống CRM cho doanh nghiệp vừa và nhỏ, tích hợp realtime, dashboard, phân quyền, responsive UI.\n\nVai trò: Fullstack Developer, thiết kế kiến trúc hệ thống, phát triển API, tối ưu giao diện người dùng.\nThách thức: Đảm bảo bảo mật dữ liệu, xử lý realtime hiệu quả.\nGiải pháp: Sử dụng Socket.io cho realtime, phân quyền chặt chẽ, tối ưu UI với TailwindCSS.\nKết quả: Hệ thống vận hành ổn định, khách hàng hài lòng, tăng hiệu suất quản lý 30%.',
        tech: 'React, Redux, Node.js, MongoDB, Socket.io, TailwindCSS',
        year: '2024',
      },
      {
        name: 'Ứng dụng quản lý công việc (Task Manager)',
        desc: 'Ứng dụng quản lý công việc cá nhân, hỗ trợ kéo thả, thông báo, đồng bộ đa thiết bị.\n\nVai trò: Frontend Lead, xây dựng UI/UX, tích hợp Firebase cho realtime.\nThách thức: Đảm bảo trải nghiệm mượt mà trên nhiều thiết bị.\nGiải pháp: Sử dụng Material UI, tối ưu hiệu suất React.\nKết quả: Ứng dụng được đánh giá cao về giao diện và tốc độ.',
        tech: 'React, TypeScript, Firebase, Material UI',
        year: '2023',
      },
      {
        name: 'Landing Page Startup',
        desc: 'Thiết kế landing page cho startup công nghệ, tối ưu SEO, hiệu ứng động đẹp mắt.\n\nVai trò: UI/UX Designer, phát triển giao diện, tối ưu SEO.\nThách thức: Tạo ấn tượng mạnh với khách hàng ngay từ lần đầu truy cập.\nGiải pháp: Sử dụng Framer Motion cho hiệu ứng, Next.js cho SEO.\nKết quả: Tăng tỷ lệ chuyển đổi khách hàng 40%.',
        tech: 'Next.js, Framer Motion, Figma',
        year: '2023',
      },
      {
        name: 'Website cá nhân',
        desc: 'Trang portfolio cá nhân, trình bày kỹ năng, dự án, hiệu ứng chuyển trang mượt mà.\n\nVai trò: Chủ dự án, thiết kế và phát triển toàn bộ website.\nThách thức: Thể hiện cá tính và chuyên môn rõ nét.\nGiải pháp: Kết hợp React, Vite, CSS3, tối ưu hiệu suất.\nKết quả: Website đạt điểm Lighthouse cao, phản hồi tích cực từ nhà tuyển dụng.',
        tech: 'React, Vite, CSS3',
        year: '2022',
      },
    ]
  },
  en: {
    title: 'Featured Projects',
    badge: 'APPLICATION SYSTEM',
    btn: 'View details',
    projects: [
      {
        name: 'Customer Management System (CRM)',
        desc: 'Developed a CRM system for SMEs, integrated realtime, dashboard, permission, responsive UI.',
        tech: 'React, Redux, Node.js, MongoDB, Socket.io, TailwindCSS',
        year: '2024',
      },
      {
        name: 'Task Manager App',
        desc: 'Personal task management app, supports drag & drop, notifications, multi-device sync.',
        tech: 'React, TypeScript, Firebase, Material UI',
        year: '2023',
      },
      {
        name: 'Startup Landing Page',
        desc: 'Landing page for tech startup, SEO optimized, beautiful animation effects.',
        tech: 'Next.js, Framer Motion, Figma',
        year: '2023',
      },
      {
        name: 'Personal Website',
        desc: 'Portfolio website, showcasing skills, projects, smooth page transitions.',
        tech: 'React, Vite, CSS3',
        year: '2022',
      },
    ]
  },
  zh: {
    title: '精选项目',
    badge: '应用系统',
    btn: '查看详情',
    projects: [
      {
        name: '客户管理系统 (CRM)',
        desc: '为中小企业开发的CRM系统，集成实时、仪表盘、权限、响应式UI。',
        tech: 'React, Redux, Node.js, MongoDB, Socket.io, TailwindCSS',
        year: '2024',
      },
      {
        name: '任务管理应用',
        desc: '个人任务管理应用，支持拖放、通知、多设备同步。',
        tech: 'React, TypeScript, Firebase, Material UI',
        year: '2023',
      },
      {
        name: '创业公司落地页',
        desc: '为科技创业公司设计的落地页，SEO优化，炫酷动画。',
        tech: 'Next.js, Framer Motion, Figma',
        year: '2023',
      },
      {
        name: '个人网站',
        desc: '个人作品集网站，展示技能、项目，页面切换流畅。',
        tech: 'React, Vite, CSS3',
        year: '2022',
      },
    ]
  }
};

const projectLink = "https://sites.google.com/view/buihuuthang/project?authuser=0";

const Projects: React.FC<{language?: string}> = ({language = 'vi'}) => {
  const content = projectsContent[language as 'vi'|'en'|'zh'] || projectsContent.vi;
  return (
    <>
      <section className="projects-section animate-fade-in">
        <h2 className="projects-title">{content.title}</h2>
        <div className="projects-list">
          {content.projects.map((p, idx) => (
            <a href={projectLink} target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}} key={p.name}>
              <div className={`project-card card-hover animate-pop project-card-system`} style={{ animationDelay: `${0.1 * idx}s` }}>
                <h3 style={{fontWeight:800,color:'#1e2e6b',display:'flex',flexDirection:'column',alignItems:'center',gap:'0.7em'}}>
                  <span>{p.name}</span>
                  <span className="project-badge-system">{content.badge}</span>
                </h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-meta">
                  <span className="project-year">{p.year}</span>
                  <span className="project-tech">{p.tech}</span>
                </div>
                <span className="btn btn-outline project-link">{content.btn}</span>
              </div>
            </a>
          ))}
        </div>
      </section>
      <Footer language={language} />
    </>
  );
};

export default Projects;
