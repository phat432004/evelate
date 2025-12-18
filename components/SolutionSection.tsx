import React from 'react';
import { Zap, Brain, CheckCircle, Check } from 'lucide-react';

export const SolutionSection: React.FC = () => {
  return (
    <section 
      className="flex flex-row items-center border-t border-[#E2E8F0]"
      style={{ 
        padding: '80px 256px',
        gap: '80px',
        background: '#FFFFFF'
      }}
    >
      {/* Solution Container */}
      <div 
        className="flex flex-col items-start"
        style={{ width: '568px', gap: '30px' }}
      >
        {/* Solution Description */}
        <div className="flex flex-col items-start" style={{ gap: '8px' }}>
          {/* Solution Title Container */}
          <div 
            className="flex flex-row justify-center items-center"
            style={{
              padding: '8px 12px',
              gap: '10px',
              background: '#FFEDD5',
              borderRadius: '100px'
            }}
          >
            <span 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '14px',
                lineHeight: '100%',
                color: '#F47D42'
              }}
            >
              The Solution
            </span>
          </div>
          
          {/* Solution Subtitle */}
          <h2 
            style={{
              width: '568px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: '36px',
              lineHeight: '150%',
              color: '#1A3154'
            }}
          >
            Microlearning that finally works!
          </h2>
          
          {/* Solution Text */}
          <p 
            style={{
              width: '568px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              fontSize: '20px',
              lineHeight: '150%',
              color: '#6F7F9D'
            }}
          >
            We rebuilt corporate learning for the TikTok generation. Short, engaging, and designed to build habits.
          </p>
        </div>

        {/* Solution Features */}
        {/* Feature 1 */}
        <div 
          className="flex flex-row items-start"
          style={{ width: '568px', gap: '16px', borderRadius: '16px' }}
        >
          <div 
            className="flex items-center justify-center"
            style={{
              width: '48px',
              height: '48px',
              background: '#DCFCE7',
              borderRadius: '8px'
            }}
          >
            <Zap size={24} style={{ color: '#16A349' }} />
          </div>
          <div className="flex flex-col items-start" style={{ gap: '8px', flex: 1 }}>
            <h4 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '20px',
                lineHeight: '150%',
                color: '#1A3154'
              }}
            >
              5-10 Minutes a Day
            </h4>
            <p 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize: '18px',
                lineHeight: '150%',
                color: '#6F7F9D'
              }}
            >
              Bite-sized lessons that fit into a coffee break. No disruption to the workday.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div 
          className="flex flex-row items-start"
          style={{ width: '568px', gap: '16px', borderRadius: '16px' }}
        >
          <div 
            className="flex items-center justify-center"
            style={{
              width: '48px',
              height: '48px',
              background: '#F3E8FF',
              borderRadius: '8px'
            }}
          >
            <Brain size={24} style={{ color: '#9333EA' }} />
          </div>
          <div className="flex flex-col items-start" style={{ gap: '8px', flex: 1 }}>
            <h4 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '20px',
                lineHeight: '150%',
                color: '#1A3154'
              }}
            >
              Science-Backed Retention
            </h4>
            <p 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize: '18px',
                lineHeight: '150%',
                color: '#6F7F9D'
              }}
            >
              Active recall, spaced repetition, and gamification ensure skills stick.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div 
          className="flex flex-row items-start"
          style={{ width: '568px', gap: '16px', borderRadius: '16px' }}
        >
          <div 
            className="flex items-center justify-center"
            style={{
              width: '48px',
              height: '48px',
              background: '#FFEDD5',
              borderRadius: '8px'
            }}
          >
            <CheckCircle size={24} style={{ color: '#F47D42' }} />
          </div>
          <div className="flex flex-col items-start" style={{ gap: '8px', flex: 1 }}>
            <h4 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '20px',
                lineHeight: '150%',
                color: '#1A3154'
              }}
            >
              Proven Adoption
            </h4>
            <p 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize: '18px',
                lineHeight: '150%',
                color: '#6F7F9D'
              }}
            >
              Up to 80% voluntary completion rates across our partner companies.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonial Section (Right Side) */}
      <div 
        className="relative"
        style={{ width: '568px', height: '511px' }}
      >
        <div 
          className="absolute flex flex-col items-center"
          style={{
            width: '568px',
            height: '511px',
            left: 0,
            top: 0,
            padding: '60px 40px',
            gap: '40px',
            background: 'linear-gradient(180deg, #1A1C20 0%, #152133 100%)',
            border: '1px solid rgba(210, 231, 255, 0.2)',
            borderRadius: '24px'
          }}
        >
          {/* Testimonial Row - Day streak */}
          <div 
            className="flex flex-row justify-between items-center"
            style={{ width: '488px', padding: '24px', gap: '20px', borderRadius: '16px' }}
          >
            {[1, 2, 3, 4, 5, 6, 7].map((day, idx) => (
              <div 
                key={day} 
                className="flex flex-col items-center"
                style={{ gap: '8px', width: '30px' }}
              >
                <span 
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: '16px',
                    lineHeight: '100%',
                    textAlign: 'center',
                    color: idx === 4 ? '#F47D42' : '#FFFFFF'
                  }}
                >
                  {day}
                </span>
                <div 
                  className="flex items-center justify-center"
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    background: idx < 4 ? '#58A700' : idx === 4 ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.1)',
                    border: idx === 4 ? '1px solid #F47D42' : idx > 4 ? '1px solid rgba(210, 231, 255, 0.2)' : 'none'
                  }}
                >
                  {idx < 4 && <Check size={12} style={{ color: '#FFFFFF' }} />}
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial Content */}
          <div 
            className="flex flex-row items-center"
            style={{
              width: '488px',
              padding: '24px',
              gap: '16px',
              background: '#272E35',
              borderRadius: '16px'
            }}
          >
            {/* Image */}
            <div 
              style={{
                width: '100px',
                height: '150px',
                background: '#374151',
                border: '1px solid rgba(210, 231, 255, 0.2)',
                borderRadius: '8px',
                overflow: 'hidden'
              }}
            >
              <img 
                src="/img/solution_section.png" 
                alt="Course" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Testimonial Description */}
            <div className="flex flex-col items-start" style={{ gap: '12px', flex: 1 }}>
              {/* Title Row */}
              <div className="flex flex-row items-center" style={{ gap: '16px' }}>
                <h4 
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: '20px',
                    lineHeight: '150%',
                    color: '#FFFFFF',
                    textTransform: 'capitalize'
                  }}
                >
                  Vượt Qua Căng Thẳng Trong Công Việc
                </h4>
                <div 
                  className="flex flex-row items-center justify-center"
                  style={{
                    padding: '8px 12px',
                    background: '#FFEDD5',
                    borderRadius: '20px',
                    gap: '8px',
                    whiteSpace: 'nowrap'
                  }}
                >
                  <span 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 700,
                      fontSize: '14px',
                      lineHeight: '100%',
                      color: '#F47D42'
                    }}
                  >
                    3 mins left
                  </span>
                </div>
              </div>
              
              {/* Author */}
              <p 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  fontSize: '18px',
                  lineHeight: '150%',
                  color: 'rgba(255, 255, 255, 0.6)'
                }}
              >
                TS. Lê Nguyên Phương
              </p>
              
              {/* Progress Bar */}
              <div 
                style={{
                  width: '100%',
                  height: '8px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '100px'
                }}
              >
                <div 
                  style={{
                    width: '65%',
                    height: '8px',
                    background: 'linear-gradient(263.77deg, #F2A864 17.92%, #ED7873 85.49%)',
                    borderRadius: '100px'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Testimonial Quote */}
          <p 
            style={{
              width: '488px',
              fontFamily: 'Inter, sans-serif',
              fontStyle: 'italic',
              fontWeight: 500,
              fontSize: '18px',
              lineHeight: '150%',
              textAlign: 'center',
              color: 'rgba(255, 255, 255, 0.6)'
            }}
          >
            "Learning becomes a habit, not a chore."
          </p>
        </div>
      </div>
    </section>
  );
};