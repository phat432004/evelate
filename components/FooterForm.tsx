import React from 'react';
import { CheckCircle, ChevronDown } from 'lucide-react';

export const FooterForm: React.FC = () => {
  return (
    <>
      {/* Contact Section */}
      <section 
        className="flex flex-col items-center border-t border-[#E2E8F0]"
        style={{ 
          padding: '80px 256px',
          gap: '60px',
          background: 'linear-gradient(105.99deg, #36272B -8.18%, #10182A 26.54%, #142545 105.51%)'
        }}
      >
        {/* Contact Container */}
        <div 
          className="flex flex-row items-center"
          style={{ width: '1216px', gap: '80px' }}
        >
          {/* Contact Description */}
          <div 
            className="flex flex-col items-start"
            style={{ width: '568px', gap: '30px' }}
          >
            {/* Contact Title */}
            <div className="flex flex-col items-center" style={{ width: '568px', gap: '8px' }}>
              <h2 
                style={{
                  width: '568px',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  fontSize: '40px',
                  lineHeight: '150%',
                  color: '#FFFFFF'
                }}
              >
                Ready to Elevate your team?
              </h2>
              <p 
                style={{
                  width: '568px',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  fontSize: '20px',
                  lineHeight: '150%',
                  color: '#A5A7A9'
                }}
              >
                Unlock lasting skills, higher engagement, and a thriving learning culture today.
              </p>
            </div>

            {/* Contact Features */}
            {['Free consultation & demo', 'Custom learning path assessment', 'Onboarding support included'].map((item, i) => (
              <div 
                key={i}
                className="flex flex-row items-start"
                style={{ width: '568px', gap: '16px', borderRadius: '16px' }}
              >
                <div 
                  className="flex items-center justify-center"
                  style={{ width: '24px', height: '24px' }}
                >
                  <CheckCircle size={20} style={{ color: '#F47D42' }} />
                </div>
                <span 
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                    fontSize: '20px',
                    lineHeight: '100%',
                    color: '#FFFFFF'
                  }}
                >
                  {item}
                </span>
              </div>
            ))}

            {/* Divider */}
            <div style={{ width: '568px', height: '0px', border: '1px solid rgba(210, 231, 255, 0.2)' }} />

            {/* Contact Info */}
            <div className="flex flex-col items-start" style={{ width: '568px', gap: '16px' }}>
              <p 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  fontSize: '18px',
                  lineHeight: '100%',
                  color: 'rgba(255, 255, 255, 0.6)'
                }}
              >
                Direct Contact:
              </p>
              <a 
                href="mailto:xuan@fonos.vn"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  fontSize: '20px',
                  lineHeight: '100%',
                  color: '#FFFFFF'
                }}
              >
                xuan@fonos.vn
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            className="flex flex-col items-start"
            style={{
              padding: '30px',
              gap: '30px',
              width: '568px',
              background: '#FFFFFF',
              borderRadius: '24px'
            }}
          >
            <form className="w-full flex flex-col" style={{ gap: '30px' }} onSubmit={(e) => e.preventDefault()}>
              {/* Form Row 1 */}
              <div className="flex flex-row items-center" style={{ gap: '16px' }}>
                <div className="flex flex-col items-start" style={{ gap: '8px', flex: 1 }}>
                  <label 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 500,
                      fontSize: '18px',
                      lineHeight: '100%',
                      color: '#1A3154'
                    }}
                  >
                    Name*
                  </label>
                  <div 
                    style={{
                      width: '100%',
                      padding: '16px',
                      background: '#FFFFFF',
                      border: '1px solid #E2E8F0',
                      borderRadius: '8px'
                    }}
                  >
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      style={{
                        width: '100%',
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 500,
                        fontSize: '16px',
                        color: '#6F7F9D',
                        border: 'none',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start" style={{ gap: '8px', flex: 1 }}>
                  <label 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 500,
                      fontSize: '18px',
                      lineHeight: '100%',
                      color: '#1A3154'
                    }}
                  >
                    Phone*
                  </label>
                  <div 
                    style={{
                      width: '100%',
                      padding: '16px',
                      background: '#FFFFFF',
                      border: '1px solid #E2E8F0',
                      borderRadius: '8px'
                    }}
                  >
                    <input 
                      type="tel" 
                      placeholder="+84..." 
                      style={{
                        width: '100%',
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 500,
                        fontSize: '16px',
                        color: '#6F7F9D',
                        border: 'none',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Work Email */}
              <div className="flex flex-col items-start" style={{ gap: '8px' }}>
                <label 
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                    fontSize: '18px',
                    lineHeight: '100%',
                    color: '#1A3154'
                  }}
                >
                  Work Email
                </label>
                <div 
                  style={{
                    width: '100%',
                    padding: '16px',
                    background: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '8px'
                  }}
                >
                  <input 
                    type="email" 
                    placeholder="john@company.com" 
                    style={{
                      width: '100%',
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 500,
                      fontSize: '16px',
                      color: '#6F7F9D',
                      border: 'none',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              {/* Form Row 2 */}
              <div className="flex flex-row items-center" style={{ gap: '16px' }}>
                <div className="flex flex-col items-start" style={{ gap: '8px', flex: 1 }}>
                  <label 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 500,
                      fontSize: '18px',
                      lineHeight: '100%',
                      color: '#1A3154'
                    }}
                  >
                    Company Name
                  </label>
                  <div 
                    style={{
                      width: '100%',
                      padding: '16px',
                      background: '#FFFFFF',
                      border: '1px solid #E2E8F0',
                      borderRadius: '8px'
                    }}
                  >
                    <input 
                      type="text" 
                      placeholder="Acme Inc." 
                      style={{
                        width: '100%',
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 500,
                        fontSize: '16px',
                        color: '#6F7F9D',
                        border: 'none',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start" style={{ gap: '8px', flex: 1 }}>
                  <label 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 500,
                      fontSize: '18px',
                      lineHeight: '100%',
                      color: '#1A3154'
                    }}
                  >
                    Company Size
                  </label>
                  <div 
                    className="flex flex-row justify-between items-center"
                    style={{
                      width: '100%',
                      padding: '16px',
                      background: '#FFFFFF',
                      border: '1px solid #E2E8F0',
                      borderRadius: '8px'
                    }}
                  >
                    <select 
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 500,
                        fontSize: '16px',
                        color: '#6F7F9D',
                        border: 'none',
                        outline: 'none',
                        appearance: 'none',
                        background: 'transparent',
                        flex: 1
                      }}
                    >
                      <option>1-50</option>
                      <option>51-200</option>
                      <option>201-1000</option>
                      <option>1000+</option>
                    </select>
                    <ChevronDown size={16} style={{ color: '#747F9F' }} />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col items-start" style={{ gap: '8px' }}>
                <label 
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                    fontSize: '18px',
                    lineHeight: '100%',
                    color: '#1A3154'
                  }}
                >
                  Message / Goals
                </label>
                <div 
                  style={{
                    width: '100%',
                    padding: '16px',
                    height: '80px',
                    background: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '8px'
                  }}
                >
                  <textarea 
                    placeholder="We want to improve leadership skills..." 
                    style={{
                      width: '100%',
                      height: '100%',
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 500,
                      fontSize: '16px',
                      color: '#6F7F9D',
                      border: 'none',
                      outline: 'none',
                      resize: 'none'
                    }}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="flex flex-row justify-center items-center"
                style={{
                  padding: '8px 14px',
                  gap: '8px',
                  width: '100%',
                  height: '60px',
                  background: 'linear-gradient(263.77deg, #F2A864 17.92%, #ED7873 85.49%)',
                  boxShadow: '0px 3px 0px #C8726B',
                  borderRadius: '30px'
                }}
              >
                <span
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: '18px',
                    lineHeight: '100%',
                    textAlign: 'center',
                    letterSpacing: '0.02em',
                    color: '#FFFFFF'
                  }}
                >
                  Request a Demo
                </span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer 
        className="flex flex-row justify-between items-center"
        style={{
          padding: '16px 256px',
          gap: '569px',
          background: '#0E172A',
          borderTop: '1px solid rgba(210, 231, 255, 0.2)'
        }}
      >
        {/* Footer Left */}
        <div 
          className="flex flex-row items-center"
          style={{ gap: '16px' }}
        >
          {/* Footer Logo */}
          <div 
            className="flex items-center justify-center"
            style={{
              width: '48px',
              height: '48px',
              background: 'linear-gradient(180deg, #1A1C20 0%, #152133 100%)',
              borderRadius: '8px'
            }}
          >
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.5 0L21 21H0L10.5 0Z" fill="#F47D42"/>
            </svg>
          </div>
          <span 
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              fontSize: '18px',
              lineHeight: '100%',
              textAlign: 'center',
              letterSpacing: '0.02em',
              color: 'rgba(255, 255, 255, 0.6)'
            }}
          >
            Elevate by Fonos
          </span>
        </div>

        {/* Footer Copyright */}
        <span 
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 500,
            fontSize: '18px',
            lineHeight: '100%',
            textAlign: 'center',
            letterSpacing: '0.02em',
            color: 'rgba(255, 255, 255, 0.6)'
          }}
        >
          © 2025 Elevate. All rights reserved.
        </span>
      </footer>
    </>
  );
};