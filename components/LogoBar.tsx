import React from 'react';

export const LogoBar: React.FC = () => {
  const logos = [
    "Vietcetera", "Forbes", "VN EXPRESS", "NHÀ XUẤT BẢN TRẺ", "THAIHA BOOKS", "crunchbase", "Vietcetera"
  ];

  return (
    <section 
      className="flex flex-col justify-center items-center"
      style={{ 
        padding: '32px 0px',
        gap: '10px',
        width: '100%',
        height: '93px',
        background: '#F9E7CB'
      }}
    >
      {/* Partners Row */}
      <div 
        className="flex flex-row justify-center items-center"
        style={{ gap: '100px' }}
      >
        {logos.map((logo, index) => (
          <div 
            key={index} 
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: '16px',
              color: 'rgba(0, 0, 0, 0.7)',
              opacity: index >= 5 ? 0.6 : 1
            }}
          >
            {logo}
          </div>
        ))}
      </div>
    </section>
  );
};