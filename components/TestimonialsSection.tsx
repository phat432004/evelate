import React from 'react';
import { Star } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      text: "Finally, a training tool my team actually wants to use. The mobile interface is seamless.",
      author: "HR Director",
      rating: 5
    },
    {
      text: "Our completion rates jumped from 20% to 85% within the first month. Incredible results.",
      author: "L&D Manager",
      rating: 5
    },
    {
      text: "The content is relevant to the Vietnamese market, not just translated western theory.",
      author: "CEO",
      rating: 5
    }
  ];

  return (
    <section 
      className="flex flex-col items-center border-t border-[#E2E8F0]"
      style={{ 
        padding: '80px 256px',
        gap: '60px',
        background: '#F9FAFC'
      }}
    >
      {/* Leaders Title */}
      <div 
        className="flex flex-col items-center"
        style={{ width: '1216px', gap: '8px' }}
      >
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
          Why leaders choose Elevate
        </h2>
      </div>

      {/* Leaders List */}
      <div 
        className="flex flex-row items-center"
        style={{ width: '1216px', gap: '30px' }}
      >
        {testimonials.map((item, index) => (
          <div 
            key={index}
            className="flex flex-col items-center"
            style={{
              padding: '30px',
              gap: '16px',
              width: '385.33px',
              height: '227px',
              background: '#FFFFFF',
              border: '1px solid #DBEAFA',
              borderRadius: '16px',
              boxSizing: 'border-box'
            }}
          >
            {/* Leader Rating */}
            <div 
              className="flex flex-row items-start"
              style={{ gap: '0px' }}
            >
              {[...Array(item.rating)].map((_, i) => (
                <Star key={i} size={24} fill="#FFC34B" style={{ color: '#FFC34B' }} />
              ))}
            </div>
            
            {/* Leader Quote */}
            <p 
              style={{
                width: '325.33px',
                fontFamily: 'Inter, sans-serif',
                fontStyle: 'italic',
                fontWeight: 500,
                fontSize: '18px',
                lineHeight: '150%',
                textAlign: 'center',
                color: '#6F7F9D'
              }}
            >
              "{item.text}"
            </p>
            
            {/* Leader Author */}
            <p 
              style={{
                width: '325.33px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '20px',
                lineHeight: '150%',
                textAlign: 'center',
                color: '#1A3154'
              }}
            >
              {item.author}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};