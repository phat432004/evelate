import React from 'react';
import { Briefcase, ShoppingBag, MessageCircle, BookOpen, Headphones, Video, Phone } from 'lucide-react';

export const ExpertsSection: React.FC = () => {
  const categories = [
    {
      title: 'Management',
      description: 'First-time manager essentials, delegation, and coaching skills.',
      icon: Briefcase,
      bgColor: '#F3E8FF',
      iconColor: '#9333EA'
    },
    {
      title: 'Sales Skills',
      description: 'Consultative selling, handling objections, and account management.',
      icon: ShoppingBag,
      bgColor: '#DCFCE7',
      iconColor: '#16A349'
    },
    {
      title: 'Customer Service',
      description: 'Handling difficult customers, service recovery, and AI support.',
      icon: MessageCircle,
      bgColor: '#FFE4E7',
      iconColor: '#E11D47'
    },
    {
      title: 'Professional Skills',
      description: 'Communication, cross-cultural skills, time management.',
      icon: BookOpen,
      bgColor: '#FFEDD5',
      iconColor: '#F47D42'
    }
  ];

  return (
    <>
      {/* Experts Section */}
      <section 
        className="flex flex-col items-center border-t border-[#E2E8F0]"
        style={{ 
          padding: '80px 256px',
          gap: '60px',
          background: '#F9FAFC'
        }}
      >
        {/* Experts Description */}
        <div 
          className="flex flex-col items-center"
          style={{ width: '1216px', gap: '8px' }}
        >
          {/* Experts Title Container */}
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
              World-Class Content
            </span>
          </div>
          
          {/* Experts Subtitle */}
          <h2 
            style={{
              width: '1216px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: '36px',
              lineHeight: '150%',
              textAlign: 'center',
              color: '#1A3154'
            }}
          >
            Learnings from Vietnam's Leading Experts
          </h2>
          
          {/* Experts Text */}
          <p 
            style={{
              width: '1216px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              fontSize: '20px',
              lineHeight: '150%',
              textAlign: 'center',
              color: '#6F7F9D'
            }}
          >
            A curated library created with top local experts, tailored to the real-world needs of Vietnamese businesses.
          </p>
        </div>

        {/* Experts List */}
        <div 
          className="flex flex-row items-center"
          style={{ width: '1216px', gap: '30px' }}
        >
          {categories.map((cat, index) => (
            <div 
              key={index}
              className="flex flex-col justify-center items-start"
              style={{
                padding: '30px',
                gap: '16px',
                width: '281.5px',
                height: '243px',
                background: '#FFFFFF',
                border: '1px solid #DBEAFA',
                borderRadius: '16px',
                boxSizing: 'border-box'
              }}
            >
              {/* Expert Icon */}
              <div 
                className="flex items-center justify-center"
                style={{
                  width: '48px',
                  height: '48px',
                  background: cat.bgColor,
                  borderRadius: '8px'
                }}
              >
                <cat.icon size={24} style={{ color: cat.iconColor }} />
              </div>
              
              {/* Expert Description */}
              <div className="flex flex-col justify-center items-start" style={{ gap: '8px' }}>
                <h3 
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: '20px',
                    lineHeight: '150%',
                    color: '#1A3154'
                  }}
                >
                  {cat.title}
                </h3>
                <p 
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                    fontSize: '18px',
                    lineHeight: '150%',
                    color: '#6F7F9D'
                  }}
                >
                  {cat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ecosystem Section */}
      <section 
        className="flex flex-col items-center border-t border-[#E2E8F0]"
        style={{ 
          padding: '80px 256px',
          gap: '24px',
          background: '#FFFFFF'
        }}
      >
        {/* Ecosystem Title */}
        <h4 
          style={{
            width: '1216px',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            fontSize: '18px',
            lineHeight: '150%',
            textAlign: 'center',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#6F7F9D'
          }}
        >
          Also available in the Elevate Ecosystem
        </h4>
        
        {/* Ecosystem List */}
        <div 
          className="flex flex-row items-center"
          style={{ gap: '80px' }}
        >
          {/* Audiobooks */}
          <div 
            className="flex flex-row items-center"
            style={{ gap: '8px' }}
          >
            <div 
              className="flex items-center justify-center"
              style={{
                width: '48px',
                height: '48px',
                background: '#DFE7FF',
                borderRadius: '8px'
              }}
            >
              <Headphones size={24} style={{ color: '#6366F1' }} />
            </div>
            <span 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '18px',
                lineHeight: '100%',
                color: '#1A3154'
              }}
            >
              Audiobooks
            </span>
          </div>
          
          {/* Expert Calls */}
          <div 
            className="flex flex-row items-center"
            style={{ gap: '8px' }}
          >
            <div 
              className="flex items-center justify-center"
              style={{
                width: '48px',
                height: '48px',
                background: '#DFE7FF',
                borderRadius: '8px'
              }}
            >
              <Phone size={24} style={{ color: '#6366F1' }} />
            </div>
            <span 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '18px',
                lineHeight: '100%',
                color: '#1A3154'
              }}
            >
              Expert Calls
            </span>
          </div>
          
          {/* PodCourse */}
          <div 
            className="flex flex-row items-center"
            style={{ gap: '8px' }}
          >
            <div 
              className="flex items-center justify-center"
              style={{
                width: '48px',
                height: '48px',
                background: '#DFE7FF',
                borderRadius: '8px'
              }}
            >
              <Video size={24} style={{ color: '#6366F1' }} />
            </div>
            <span 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '18px',
                lineHeight: '100%',
                color: '#1A3154'
              }}
            >
              PodCourse
            </span>
          </div>
        </div>
      </section>
    </>
  );
};