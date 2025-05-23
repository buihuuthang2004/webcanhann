import React from 'react';
import Footer from './components/Footer';

const homeContent = {
  vi: {
    role: 'Fullstack Web Developer',
    desc: 'Đam mê sáng tạo, xây dựng sản phẩm web hiện đại, tối ưu trải nghiệm người dùng và hiệu suất. Luôn học hỏi công nghệ mới, sẵn sàng đồng hành cùng doanh nghiệp phát triển vượt trội.\n\nTôi tin rằng công nghệ không chỉ là công cụ mà còn là cầu nối giúp doanh nghiệp bứt phá, tạo dấu ấn riêng trên thị trường số. Sứ mệnh của tôi là mang đến giải pháp web tối ưu, bảo mật, thân thiện, giúp khách hàng phát triển bền vững.\n\nTriết lý nghề nghiệp: "Chất lượng là ưu tiên số 1, lấy sự hài lòng của khách hàng làm trung tâm, không ngừng đổi mới và sáng tạo."',
    btnProject: 'Xem dự án',
    btnContact: 'Liên hệ ngay',
    highlights: [
      {title: '+20', desc: 'Dự án thực tế'},
      {title: '3+ năm', desc: 'Kinh nghiệm lập trình'},
      {title: '100%', desc: 'Khách hàng hài lòng'},
      {title: <><span style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'0.15em'}}>5<span style={{color:'#FFD700',fontSize:'2.1rem',marginLeft:'0.15em',verticalAlign:'middle'}}>★</span></span></>, desc: 'Đánh giá chất lượng'},
    ],
    why: 'Tại sao chọn Bùi Hữu Thắng?',
    reasons: [
      '✔️ Kinh nghiệm thực chiến nhiều dự án lớn nhỏ, đa lĩnh vực.',
      '✔️ Tư duy UI/UX hiện đại, luôn đặt trải nghiệm người dùng lên hàng đầu.',
      '✔️ Kỹ năng teamwork, giao tiếp, quản lý dự án tốt.',
      '✔️ Cam kết chất lượng, bảo hành, hỗ trợ lâu dài.',
      '✔️ Đam mê sáng tạo, cập nhật công nghệ mới liên tục.',
      '✔️ Hỗ trợ tư vấn giải pháp công nghệ miễn phí cho khách hàng.',
      '✔️ Phản hồi nhanh, làm việc chuyên nghiệp, đúng deadline.'
    ],
    feedbackTitle: 'Khách hàng nói gì?',
    feedbacks: [
      {text: '“Thắng rất chuyên nghiệp, sản phẩm đẹp, đúng deadline, hỗ trợ tận tình!”', author: '– Anh Minh, CEO Startup', color: '#a100ff', border: '#646cff'},
      {text: '“Rất hài lòng với dịch vụ, giao tiếp tốt, tư duy giải pháp nhanh nhạy.”', author: '– Chị Lan, Quản lý dự án', color: '#646cff', border: '#f7b42c'},
      {text: '“Website vận hành ổn định, bảo mật tốt, giao diện đẹp, khách hàng phản hồi tích cực.”', author: '– Mr. Hùng, Chủ doanh nghiệp', color: '#2196f3', border: '#FFD700'},
      {text: '“Tư vấn giải pháp rất tận tâm, luôn lắng nghe và đồng hành cùng khách hàng.”', author: '– Ms. Mai, Freelancer', color: '#f7b42c', border: '#2196f3'}
    ]
  },
  en: {
    role: 'Fullstack Web Developer',
    desc: 'Passionate about creativity, building modern web products, optimizing user experience and performance. Always learning new technologies, ready to accompany businesses to outstanding growth.',
    btnProject: 'View projects',
    btnContact: 'Contact now',
    highlights: [
      {title: '+20', desc: 'Real projects'},
      {title: '3+ yrs', desc: 'Coding experience'},
      {title: '100%', desc: 'Satisfied clients'},
      {title: <><span style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'0.15em'}}>5<span style={{color:'#FFD700',fontSize:'2.1rem',marginLeft:'0.15em',verticalAlign:'middle'}}>★</span></span></>, desc: 'Quality rating'},
    ],
    why: 'Why choose Bùi Hữu Thắng?',
    reasons: [
      '✔️ Extensive experience in various fields and projects.',
      '✔️ Modern UI/UX mindset, always prioritizing user experience.',
      '✔️ Good teamwork, communication, and project management skills.',
      '✔️ Commitment to quality, warranty, and long-term support.',
      '✔️ Passion for creativity, always updating new technologies.',
      '✔️ Free technology solution consulting for clients.',
      '✔️ Quick response, professional work, on-time delivery.'
    ],
    feedbackTitle: 'What clients say?',
    feedbacks: [
      {text: '“Very professional, beautiful product, on-time, dedicated support!”', author: '– Mr. Minh, Startup CEO', color: '#a100ff', border: '#646cff'},
      {text: '“Very satisfied with the service, good communication, quick solution thinking.”', author: '– Ms. Lan, Project Manager', color: '#646cff', border: '#f7b42c'},
    ]
  },
  zh: {
    role: '全栈网页开发者',
    desc: '热爱创新，打造现代网页产品，优化用户体验和性能。不断学习新技术，随时陪伴企业卓越成长。',
    btnProject: '查看项目',
    btnContact: '立即联系',
    highlights: [
      {title: '+20', desc: '实际项目'},
      {title: '3+ 年', desc: '编程经验'},
      {title: '100%', desc: '客户满意'},
      {title: <><span style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'0.15em'}}>5<span style={{color:'#FFD700',fontSize:'2.1rem',marginLeft:'0.15em',verticalAlign:'middle'}}>★</span></span></>, desc: '五星好评'},
    ],
    why: '为什么选择Bùi Hữu Thắng？',
    reasons: [
      '✔️ 拥有丰富的项目经验，涉及多个领域。',
      '✔️ 现代UI/UX思维，始终以用户体验为核心。',
      '✔️ 团队协作、沟通、项目管理能力强。',
      '✔️ 承诺质量，保修，长期支持。',
      '✔️ 热爱创新，不断更新新技术。',
      '✔️ 免费为客户提供技术解决方案咨询。',
      '✔️ 反应迅速，专业高效，按时交付。'
    ],
    feedbackTitle: '客户怎么说？',
    feedbacks: [
      {text: '“非常专业，产品漂亮，准时交付，支持到位！”', author: '– 明先生，创业公司CEO', color: '#a100ff', border: '#646cff'},
      {text: '“非常满意，沟通顺畅，解决方案快速。”', author: '– 兰女士，项目经理', color: '#646cff', border: '#f7b42c'},
    ]
  }
};

const Home: React.FC<{language?: string}> = ({language = 'vi'}) => {
  const content = homeContent[language as 'vi'|'en'|'zh'] || homeContent.vi;
  return (
    <>
      <section className="home-section animate-fade-in">
        <header className="hero-header animate-slide-down">
          <div className="avatar-glow">
            <img src="/avatar.jpg" alt="avatar" className="avatar" />
          </div>
          <div className="hero-content">
            <h1 className="hero-title">Bùi Hữu Thắng</h1>
            <h2 className="hero-role">{content.role}</h2>
            <p className="hero-desc">{content.desc}</p>
            <div className="hero-actions">
              <a href="#" className="btn btn-primary animate-bounce" target="_blank" rel="noopener noreferrer"
                onClick={e => {
                  e.preventDefault();
                  if (typeof window !== 'undefined') {
                    const navEvent = new CustomEvent('navigate-contact');
                    window.dispatchEvent(navEvent);
                  }
                }}
              >{content.btnProject}</a>
              <a href="#" className="btn btn-outline" onClick={e => {
                e.preventDefault();
                if (typeof window !== 'undefined') {
                  const navEvent = new CustomEvent('navigate-contact');
                  window.dispatchEvent(navEvent);
                }
              }}>{content.btnContact}</a>
            </div>
          </div>
        </header>
        <section className="highlights animate-fade-in">
          {content.highlights.map((h, i) => (
            <div className="highlight-card card-hover" key={i}>
              <h3>{h.title}</h3>
              <p>{h.desc}</p>
            </div>
          ))}
        </section>
        <section style={{maxWidth:'900px',margin:'2rem auto',background:'#fff',borderRadius:'18px',boxShadow:'0 2px 12px #646cff22',padding:'2rem 1.5rem',textAlign:'left'}}>
          <h2 style={{color:'#646cff',fontWeight:800,fontSize:'1.5rem',marginBottom:'1rem'}}>{content.why}</h2>
          <ul style={{fontSize:'1.13rem',color:'#3a3a7c',lineHeight:1.7,paddingLeft:'1.2em'}}>
            {content.reasons.map((r, i) => <li key={i}>{r}</li>)}
          </ul>
          <div style={{margin:'2rem 0',padding:'1.5rem',background:'#f8faff',borderRadius:'12px',boxShadow:'0 2px 8px #2196f322'}}>
            <h3 style={{color:'#2196f3',fontWeight:700,marginBottom:'0.7rem'}}>Tầm nhìn & Sứ mệnh</h3>
            <p style={{color:'#3a3a7c',fontSize:'1.1rem',lineHeight:1.7}}>
              Tầm nhìn: Trở thành đối tác công nghệ tin cậy, đồng hành cùng doanh nghiệp Việt trên hành trình chuyển đổi số.\nSứ mệnh: Mang lại giá trị thực tiễn, giải pháp sáng tạo, giúp khách hàng phát triển bền vững và khác biệt.
            </p>
          </div>
          <h3 style={{color:'#646cff',fontWeight:700,marginTop:'2rem',marginBottom:'0.7rem'}}>{content.feedbackTitle}</h3>
          {content.feedbacks.map((fb, i) => (
            <blockquote key={i} style={{background:'#f8f9fb',borderLeft:`4px solid ${fb.border}`,padding:'1rem 1.5rem',borderRadius:'10px',color:'#3a3a7c',fontStyle:'italic',marginBottom:'1rem',display:'flex',alignItems:'center',gap:'1.2em'}}>
              <img
                src={
                  i === 0 ? 'https://randomuser.me/api/portraits/men/83.jpg'
                  : i === 1 ? 'https://randomuser.me/api/portraits/women/65.jpg'
                  : i === 2 ? 'https://randomuser.me/api/portraits/men/32.jpg'
                  : i === 3 ? 'https://randomuser.me/api/portraits/women/43.jpg'
                  : 'https://randomuser.me/api/portraits/men/1.jpg'
                }
                alt="avatar khách hàng"
                style={{width:48,height:48,borderRadius:'50%',objectFit:'cover',boxShadow:'0 2px 8px #646cff22',flexShrink:0,border:'2.5px solid #FFD700'}}
                loading="lazy"
              />
              <div>
                {fb.text}<br/>
                <span style={{fontWeight:600,color:fb.color}}>{fb.author}</span>
              </div>
            </blockquote>
          ))}
          <div style={{marginTop:'2.5rem',padding:'1.2rem',background:'#e9ecf3',borderRadius:'10px',textAlign:'center'}}>
            <h4 style={{color:'#1565c0',fontWeight:700}}>Bạn đang cần tư vấn hoặc hợp tác dự án?</h4>
            <p style={{color:'#3a3a7c'}}>Hãy liên hệ ngay để nhận tư vấn miễn phí, giải pháp tối ưu và đồng hành phát triển lâu dài!</p>
          </div>
        </section>
        <h3 style={{color:'#646cff',fontWeight:700,marginTop:'2.5rem',marginBottom:'0.7rem'}}>
          {language==='en' ? 'Professional workflow' : language==='zh' ? '专业工作流程' : 'Quy trình làm việc chuyên nghiệp'}
        </h3>
        <ol style={{fontSize:'1.13rem',color:'#3a3a7c',lineHeight:1.7,paddingLeft:'1.5em',marginBottom:'2rem'}}>
          {language==='en' ? (
            <>
              <li><b>Requirement gathering:</b> Consulting, detailed discussion, defining project goals.</li>
              <li><b>Analysis & solution proposal:</b> Offer optimal solutions, transparent quotation.</li>
              <li><b>UI/UX design:</b> Wireframe, prototype, interface approval with client.</li>
              <li><b>Development & testing:</b> Coding, testing, revising per feedback.</li>
              <li><b>Delivery & warranty:</b> User guide, technical support, long-term maintenance.</li>
            </>
          ) : language==='zh' ? (
            <>
              <li><b>需求收集：</b> 咨询、详细交流、确定项目目标。</li>
              <li><b>分析与方案建议：</b> 提供最优方案，报价透明。</li>
              <li><b>UI/UX设计：</b> 绘制线框图、原型，与客户确认界面。</li>
              <li><b>开发与测试：</b> 编码、测试，根据反馈调整。</li>
              <li><b>交付与保修：</b> 使用指导、技术支持、长期维护。</li>
            </>
          ) : (
            <>
              <li><b>Tiếp nhận yêu cầu:</b> Tư vấn, trao đổi chi tiết, xác định mục tiêu dự án.</li>
              <li><b>Phân tích & đề xuất giải pháp:</b> Đưa ra phương án tối ưu, báo giá minh bạch.</li>
              <li><b>Thiết kế UI/UX:</b> Lên wireframe, prototype, duyệt giao diện với khách hàng.</li>
              <li><b>Phát triển & kiểm thử:</b> Lập trình, kiểm thử, chỉnh sửa theo phản hồi.</li>
              <li><b>Bàn giao & bảo hành:</b> Hướng dẫn sử dụng, hỗ trợ kỹ thuật, bảo trì lâu dài.</li>
            </>
          )}
        </ol>
        <h3 style={{color:'#646cff',fontWeight:700,marginTop:'2.5rem',marginBottom:'0.7rem'}}>
          {language==='en' ? 'My commitment' : language==='zh' ? '我的承诺' : 'Cam kết của tôi'}
        </h3>
        <ul style={{fontSize:'1.13rem',color:'#3a3a7c',lineHeight:1.7,paddingLeft:'1.2em'}}>
          {language==='en' ? (
            <>
              <li>✅ SEO standard, fast loading, good security.</li>
              <li>✅ Modern, beautiful, responsive design on all devices.</li>
              <li>✅ Free edits during warranty period.</li>
              <li>✅ Always listen, accompany clients for long-term growth.</li>
            </>
          ) : language==='zh' ? (
            <>
              <li>✅ 符合SEO标准，加载速度快，安全性好。</li>
              <li>✅ 界面美观现代，适配所有设备。</li>
              <li>✅ 保修期内免费支持修改。</li>
              <li>✅ 始终倾听，长期陪伴客户共同发展。</li>
            </>
          ) : (
            <>
              <li>✅ Sản phẩm chuẩn SEO, tốc độ tải nhanh, bảo mật tốt.</li>
              <li>✅ Giao diện đẹp, hiện đại, responsive trên mọi thiết bị.</li>
              <li>✅ Hỗ trợ chỉnh sửa miễn phí trong thời gian bảo hành.</li>
              <li>✅ Luôn lắng nghe, đồng hành cùng khách hàng phát triển lâu dài.</li>
            </>
          )}
        </ul>
      </section>
      <Footer language={language} />
    </>
  );
};

export default Home;
