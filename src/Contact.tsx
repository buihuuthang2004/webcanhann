import React from 'react';
import Footer from './components/Footer';
import { useForm, ValidationError } from '@formspree/react';

const contactContent = {
  vi: {
    title: 'Liên hệ với Thắng',
    name: 'Họ và tên *',
    email: 'Email *',
    phone: 'Số điện thoại',
    message: 'Nội dung *',
    btn: 'Gửi liên hệ',
    sending: 'Đang gửi...',
    success: 'Gửi thành công! Cảm ơn bạn đã liên hệ.',
    error: 'Gửi thất bại, vui lòng thử lại.',
    required: 'Vui lòng nhập đầy đủ thông tin bắt buộc.',
    info: 'Thông tin liên hệ',
    address: 'Địa chỉ',
    phoneLabel: 'Điện thoại',
    socials: 'Kết nối mạng xã hội',
    facebook: 'Facebook',
    github: 'Github',
    emailLabel: 'Email',
    location: 'Bửu Long Biên Hòa Đồng Nai',
    desc1: 'Bạn cần tư vấn giải pháp, hợp tác dự án hoặc có bất kỳ thắc mắc nào? Đừng ngần ngại liên hệ, tôi cam kết phản hồi nhanh chóng và hỗ trợ tận tâm nhất!',
    desc2: 'Liên hệ ngay để nhận tư vấn miễn phí, giải pháp tối ưu và đồng hành phát triển lâu dài.'
  },
  en: {
    title: 'Contact Thang',
    name: 'Full name *',
    email: 'Email *',
    phone: 'Phone',
    message: 'Message *',
    btn: 'Send message',
    sending: 'Sending...',
    success: 'Sent successfully! Thank you for contacting.',
    error: 'Send failed, please try again.',
    required: 'Please fill in all required fields.',
    info: 'Contact info',
    address: 'Address',
    phoneLabel: 'Phone',
    socials: 'Social networks',
    facebook: 'Facebook',
    github: 'Github',
    emailLabel: 'Email',
    location: 'Buu Long, Bien Hoa, Dong Nai',
    desc1: 'Need advice on solutions, project collaboration, or have any questions? Don’t hesitate to contact me, I promise quick responses and dedicated support!',
    desc2: 'Contact now for free consultation, optimal solutions, and long-term development partnership.'
  },
  zh: {
    title: '联系Thang',
    name: '姓名 *',
    email: '邮箱 *',
    phone: '电话',
    message: '内容 *',
    btn: '发送信息',
    sending: '发送中...',
    success: '发送成功！感谢您的联系。',
    error: '发送失败，请重试。',
    required: '请填写所有必填信息。',
    info: '联系信息',
    address: '地址',
    phoneLabel: '电话',
    socials: '社交网络',
    facebook: 'Facebook',
    github: 'Github',
    emailLabel: '邮箱',
    location: 'Buu Long, Bien Hoa, Dong Nai',
    desc1: '需要解决方案建议、项目合作或有任何问题？不要犹豫与我联系，我承诺快速响应和专注支持！',
    desc2: '立即联系以获得免费咨询、最佳解决方案和长期发展合作。'
  }
};

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm('xjkwdjzy');
  const content = contactContent['vi'];

  return (
    <>
      <section className="contact-section animate-fade-in">
        <h2 className="contact-title" id="contact-title">{content.title}</h2>
        <div className="contact-desc-block">
          <p style={{fontWeight:800,marginBottom:'0.7em'}}>{content.desc1}</p>
          <p>{content.desc2}</p>
        </div>
        <div className="contact-content" style={{flexDirection: window.innerWidth <= 700 ? 'column' : 'row'}}>
          <form className="contact-form animate-slide-up" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" id="name" name="name" placeholder=" " required />
              <label htmlFor="name">{content.name}</label>
            </div>
            <div className="form-group">
              <input type="email" id="email" name="email" placeholder=" " required />
              <label htmlFor="email">{content.email}</label>
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div className="form-group">
              <input type="tel" id="phone" name="phone" placeholder=" " />
              <label htmlFor="phone">{content.phone}</label>
            </div>
            <div className="form-group">
              <textarea id="message" name="message" placeholder=" " rows={4} required></textarea>
              <label htmlFor="message">{content.message}</label>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>
            <button type="submit" className="btn btn-primary animate-bounce" disabled={state.submitting}>{state.submitting ? content.sending : content.btn}</button>
            {state.succeeded && <div style={{color:'#219653',marginTop:'1em'}}>{content.success}</div>}
            {Array.isArray(state.errors) && state.errors.length > 0 && <div style={{color:'#d32f2f',marginTop:'1em'}}>{content.error}</div>}
          </form>
          <div className="contact-info animate-slide-up">
            <h4>{content.info}</h4>
            <p style={{color:'#3a3a7c',fontSize:'1.08rem',marginBottom:'1em'}}>Bạn cần tư vấn giải pháp, hợp tác dự án hoặc có bất kỳ thắc mắc nào? Đừng ngần ngại liên hệ, tôi cam kết phản hồi nhanh chóng và hỗ trợ tận tâm nhất!<br/>Liên hệ ngay để nhận tư vấn miễn phí, giải pháp tối ưu và đồng hành phát triển lâu dài.</p>
            <p><b>{content.emailLabel}:</b> <a href="mailto:buihuuthang204@gmail.com" style={{display:'inline-flex',alignItems:'center',gap:'5px'}}>
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4zm2 0v.01L12 13l8-8.99V4H4zm16 2.41l-7.29 7.3a1 1 0 0 1-1.42 0L4 6.41V20h16V6.41z"></path></svg>
              buihuuthang204@gmail.com
            </a></p>
            <p><b>{content.phoneLabel}:</b> 0123 456 789</p>
            <p><b>{content.address}:</b> {content.location}</p>
            <div className="contact-socials">
              <a href="https://www.facebook.com/thang.buihuu.2302" className="footer-link" target="_blank" rel="noopener noreferrer" style={{display:'flex',alignItems:'center',gap:'6px'}}>
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M17 2.1C16.7 2 16.4 2 16.1 2H7.9C7.6 2 7.3 2 7 2.1C5.2 2.6 3.7 4.1 3.2 5.9C3.1 6.2 3.1 6.5 3.1 6.8V17.2C3.1 17.5 3.1 17.8 3.2 18.1C3.7 19.9 5.2 21.4 7 21.9C7.3 22 7.6 22 7.9 22H16.1C16.4 22 16.7 22 17 21.9C18.8 21.4 20.3 19.9 20.8 18.1C20.9 17.8 20.9 17.5 20.9 17.2V6.8C20.9 6.5 20.9 6.2 20.8 5.9C20.3 4.1 18.8 2.6 17 2.1ZM12 17.5C9.5 17.5 7.5 15.5 7.5 13C7.5 10.5 9.5 8.5 12 8.5C14.5 8.5 16.5 10.5 16.5 13C16.5 15.5 14.5 17.5 12 17.5ZM18.5 7.5C17.7 7.5 17 6.8 17 6C17 5.2 17.7 4.5 18.5 4.5C19.3 4.5 20 5.2 20 6C20 6.8 19.3 7.5 18.5 7.5Z"></path></svg>
                {content.facebook}
              </a>
              <a href="https://github.com/buihuuthang204" className="footer-link" target="_blank" rel="noopener noreferrer" style={{display:'flex',alignItems:'center',gap:'6px'}}>
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12C2 16.42 5.06 20.17 9.26 21.5C9.76 21.58 9.92 21.27 9.92 21.01C9.92 20.78 9.91 20.09 9.91 19.25C7 19.91 6.34 17.97 6.34 17.97C5.86 16.81 5.18 16.5 5.18 16.5C4.22 15.88 5.25 15.89 5.25 15.89C6.3 15.97 6.82 16.97 6.82 16.97C7.76 18.54 9.26 18.09 9.81 17.83C9.89 17.16 10.15 16.7 10.45 16.45C8.13 16.2 5.7 15.22 5.7 11.5C5.7 10.39 6.09 9.5 6.75 8.8C6.66 8.55 6.32 7.22 6.84 5.5C6.84 5.5 7.73 5.22 9.91 6.7C10.74 6.47 11.64 6.35 12.54 6.35C13.44 6.35 14.34 6.47 15.17 6.7C17.35 5.22 18.24 5.5 18.24 5.5C18.76 7.22 18.42 8.55 18.33 8.8C18.99 9.5 19.38 10.39 19.38 11.5C19.38 15.23 16.95 16.19 14.62 16.44C15.01 16.76 15.36 17.41 15.36 18.36C15.36 19.7 15.34 20.7 15.34 21.01C15.34 21.27 15.5 21.59 16.01 21.5C20.21 20.17 23.27 16.42 23.27 12C23.27 6.48 19.52 2 12 2Z"></path></svg>
                {content.github}
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer language="vi" />
    </>
  );
};

export default Contact;
