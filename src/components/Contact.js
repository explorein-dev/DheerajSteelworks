
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [message, setMessage] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    const mailto = `mailto:restro.ai23@gmail.com?subject=I want this menu for my restaurant!&body=${encodeURIComponent(message)}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title-contact">Partner With Us</h2>
        <div className="contact-content" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <div className="contact-simple-card" style={{maxWidth: 480, width: '100%', background: '#fff', borderRadius: 18, boxShadow: '0 8px 32px rgba(44,62,80,0.10)', padding: '32px 24px', margin: '32px 0'}}>
            <h3 style={{textAlign: 'center'}}>Love our menu?</h3>
            <p style={{textAlign: 'center', marginBottom: 24}}>If you want us to create a custom menu and digital experience for your restaurant, just send us a message below.</p>
            <form onSubmit={handleSend} style={{display: 'flex', flexDirection: 'column', gap: 16}}>
              <textarea
                value={message}
                onChange={e => setMessage(e.target.value)}
                rows={5}
                placeholder="Tell us about your restaurant, your vision, or just say hi!"
                style={{borderRadius: 8, border: '1.5px solid #e1e8ed', padding: 12, fontSize: '1rem', resize: 'vertical'}}
                required
              />
              <button type="submit" className="btn-submit" style={{marginTop: 8, fontWeight: 600, fontSize: '1.08rem', borderRadius: 8, background: 'linear-gradient(90deg,#ff6b6b,#ee5a24)', color: '#fff', border: 'none', padding: '12px 0', cursor: 'pointer'}}>
                ✉️ Send Email
              </button>
            </form>
            <div style={{marginTop: 18, textAlign: 'center', color: '#7f8c8d', fontSize: '0.98rem'}}>
              Or email us directly at <b>restro.ai23@gmail.com</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
