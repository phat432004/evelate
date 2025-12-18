import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section 
      className="bg-white border-t border-[#E2E8F0]"
      style={{ 
        padding: '80px 256px',
        marginTop: '82px'
      }}
    >
      <div 
        className="mx-auto flex flex-row items-center"
        style={{ maxWidth: '1216px', gap: '80px', height: '604px' }}
      >
        {/* Intro Section */}
        <div 
          className="flex flex-col items-start"
          style={{ width: '568px', gap: '30px' }}
        >
          {/* Intro Title */}
          <h1 
            style={{
              width: '568px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: '48px',
              lineHeight: '125%',
              color: '#1A3154'
            }}
          >
            Unlock your team's full potential in 5 minutes a day.
          </h1>
          
          {/* Intro Description */}
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
            Elevate is the mobile-first learning app that helps modern Vietnamese teams build lasting skills through microlearning. No boring lectures—just results.
          </p>
          
          {/* CTA Button */}
          <button
            className="flex flex-row justify-center items-center"
            style={{
              padding: '20px 100px',
              gap: '8px',
              width: '343px',
              height: '58px',
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
          
          {/* Trusted by text */}
          <p 
            style={{
              width: '574px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '20px',
              color: '#6F7F9D'
            }}
          >
            Trusted by forward-thinking companies in Vietnam
          </p>
        </div>

        {/* Image Section */}
        <div 
          className="relative"
          style={{ width: '568px', height: '604px' }}
        >
          {/* Back Phone - rotated -7deg */}
          <div 
            className="absolute"
            style={{
              width: '251.88px',
              height: '512px',
              left: 'calc(50% - 251.87px/2 - 135.06px)',
              top: 'calc(50% - 512px/2 - 45.7px)',
              transform: 'rotate(-7deg)',
              borderRadius: '32px',
              overflow: 'hidden',
              background: '#1a1a1a'
            }}
          >
            <img 
              src="img/hero_section_1.png" 
              alt="App Screen 1" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Front Phone - rotated 5deg */}
          <div 
            className="absolute"
            style={{
              width: '251.88px',
              height: '512px',
              left: 'calc(50% - 251.88px/2 + 91.31px)',
              top: 'calc(50% - 512px/2 + 25px)',
              transform: 'rotate(5deg)',
              borderRadius: '32px',
              overflow: 'hidden',
              background: '#1a1a1a'
            }}
          >
            <img 
              src="img/hero_section_2.png" 
              alt="App Screen 2" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};