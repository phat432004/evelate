import React from 'react';
import { RefreshCcw, Users } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section 
      className="flex flex-col items-center"
      style={{ 
        padding: '80px 256px',
        gap: '60px',
        background: '#F9FAFC'
      }}
    >
      {/* Problem Description */}
      <div 
        className="flex flex-col items-center"
        style={{ width: '1216px', gap: '8px' }}
      >
        {/* Problem Title */}
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
          L&D is important.<br/>
          So why does traditional training fail?
        </h2>
        
        {/* Problem Subtitle */}
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
          Companies spend millions on training, but employees are too busy to engage.
        </p>
      </div>

      {/* Problem Stats */}
      <div 
        className="flex flex-row items-center"
        style={{ width: '1216px', gap: '30px' }}
      >
        {/* Stat Container 1 */}
        <div 
          className="flex flex-col items-center"
          style={{
            padding: '30px',
            gap: '16px',
            width: '385.33px',
            height: '232px',
            background: '#FFFFFF',
            border: '1px solid #DBEAFA',
            borderRadius: '16px',
            boxSizing: 'border-box'
          }}
        >
          {/* Stat Icon */}
          <div 
            className="flex items-center justify-center"
            style={{
              width: '64px',
              height: '64px',
              background: '#FFE4E7',
              borderRadius: '16px'
            }}
          >
            <span style={{ color: '#EF4444', fontWeight: 700, fontSize: '18px' }}>15%</span>
          </div>
          
          {/* Stat Description */}
          <div className="flex flex-col items-center" style={{ gap: '8px' }}>
            <h3 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '20px',
                lineHeight: '150%',
                textAlign: 'center',
                color: '#1A3154'
              }}
            >
              Average Completion Rate
            </h3>
            <p 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize: '18px',
                lineHeight: '150%',
                textAlign: 'center',
                color: '#6F7F9D'
              }}
            >
              Traditional LMS courses are too long and boring for today's workforce.
            </p>
          </div>
        </div>

        {/* Stat Container 2 */}
        <div 
          className="flex flex-col items-center"
          style={{
            padding: '30px',
            gap: '16px',
            width: '385.33px',
            height: '232px',
            background: '#FFFFFF',
            border: '1px solid #DBEAFA',
            borderRadius: '16px',
            boxSizing: 'border-box'
          }}
        >
          {/* Stat Icon */}
          <div 
            className="flex items-center justify-center"
            style={{
              width: '64px',
              height: '64px',
              background: '#FFEDD5',
              borderRadius: '16px'
            }}
          >
            <RefreshCcw size={32} style={{ color: '#F47D42' }} />
          </div>
          
          {/* Stat Description */}
          <div className="flex flex-col items-center" style={{ gap: '8px' }}>
            <h3 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '20px',
                lineHeight: '150%',
                textAlign: 'center',
                color: '#1A3154'
              }}
            >
              Zero Retention
            </h3>
            <p 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize: '18px',
                lineHeight: '150%',
                textAlign: 'center',
                color: '#6F7F9D'
              }}
            >
              Learning rarely sticks when it happens once a year in a dark meeting room.
            </p>
          </div>
        </div>

        {/* Stat Container 3 */}
        <div 
          className="flex flex-col items-center"
          style={{
            padding: '30px',
            gap: '16px',
            width: '385.33px',
            height: '232px',
            background: '#FFFFFF',
            border: '1px solid #DBEAFA',
            borderRadius: '16px',
            boxSizing: 'border-box'
          }}
        >
          {/* Stat Icon */}
          <div 
            className="flex items-center justify-center"
            style={{
              width: '64px',
              height: '64px',
              background: '#DBEAFE',
              borderRadius: '16px'
            }}
          >
            <Users size={32} style={{ color: '#2663EB' }} />
          </div>
          
          {/* Stat Description */}
          <div className="flex flex-col items-center" style={{ gap: '8px' }}>
            <h3 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '20px',
                lineHeight: '150%',
                textAlign: 'center',
                color: '#1A3154'
              }}
            >
              Low Engagement
            </h3>
            <p 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize: '18px',
                lineHeight: '150%',
                textAlign: 'center',
                color: '#6F7F9D'
              }}
            >
              Employees view training as a burden, not a benefit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};