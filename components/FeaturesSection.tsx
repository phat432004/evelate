import React from 'react';
import { BarChart3, Users, Layers } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: 'Admin Dashboard',
      description: 'Real-time tracking, automated reports, and content assignment in clicks.',
      icon: BarChart3,
      color: '#F47D42'
    },
    {
      title: 'User Insights',
      description: 'Identify skill gaps early and track individual progress across departments.',
      icon: Users,
      color: '#60A6FA'
    },
    {
      title: 'Content Management',
      description: 'Create custom groups (e.g., "New Managers") and assign tailored training.',
      icon: Layers,
      color: '#C084FC'
    }
  ];

  return (
    <section 
      className="flex flex-col items-center border-t border-[#E2E8F0]"
      style={{ 
        padding: '80px 256px',
        gap: '60px',
        background: '#0E172A'
      }}
    >
      {/* Features Description */}
      <div 
        className="flex flex-col items-center"
        style={{ width: '1216px', gap: '8px' }}
      >
        {/* Features Title */}
        <h2 
          style={{
            width: '1216px',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            fontSize: '40px',
            lineHeight: '150%',
            textAlign: 'center',
            color: '#FFFFFF'
          }}
        >
          Powerful features for Teams & HR
        </h2>
        
        {/* Features Subtitle */}
        <p 
          style={{
            width: '1216px',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 500,
            fontSize: '20px',
            lineHeight: '150%',
            textAlign: 'center',
            color: '#A5A7A9'
          }}
        >
          Manage your entire company's learning journey from one intuitive dashboard.
        </p>
      </div>

      {/* Features List */}
      <div 
        className="flex flex-row items-start"
        style={{ width: '1216px', gap: '80px' }}
      >
        {/* Left Feature Container */}
        <div 
          className="flex flex-col items-start"
          style={{ width: '568px', gap: '24px' }}
        >
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex flex-col items-start"
              style={{
                padding: '24px',
                gap: '10px',
                width: '568px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(210, 231, 255, 0.2)',
                borderRadius: '16px',
                boxSizing: 'border-box'
              }}
            >
              <div 
                className="flex flex-row items-start"
                style={{ width: '520px', gap: '16px', borderRadius: '16px' }}
              >
                {/* Feature Icon */}
                <feature.icon size={24} style={{ color: feature.color }} />
                
                {/* Feature Content */}
                <div className="flex flex-col items-start" style={{ gap: '8px', flex: 1 }}>
                  <h3 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 700,
                      fontSize: '20px',
                      lineHeight: '150%',
                      color: '#FFFFFF'
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 500,
                      fontSize: '16px',
                      lineHeight: '150%',
                      color: '#A5A7A9'
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Feature Container - Dashboard Preview */}
        <div 
          className="flex flex-col items-start"
          style={{
            width: '568px',
            height: '450px',
            border: '1px solid #DBEAFA',
            borderRadius: '24px',
            overflow: 'hidden',
            boxSizing: 'border-box'
          }}
        >
          {/* Feature Dots (Browser Chrome) */}
          <div 
            className="flex flex-row items-center"
            style={{
              width: '568px',
              padding: '16px',
              gap: '8px',
              background: '#FFFFFF',
              borderBottom: '1px solid #DBEAFA'
            }}
          >
            <div style={{ width: '12px', height: '12px', background: '#F97171', borderRadius: '50%' }} />
            <div style={{ width: '12px', height: '12px', background: '#FACC14', borderRadius: '50%' }} />
            <div style={{ width: '12px', height: '12px', background: '#4BDE80', borderRadius: '50%' }} />
          </div>
          
          {/* Feature Content */}
          <div 
            className="flex flex-row items-center"
            style={{ width: '568px', flex: 1 }}
          >
            {/* Sidebar */}
            <div 
              className="flex flex-col items-start"
              style={{
                padding: '16px',
                gap: '24px',
                width: '193px',
                height: '100%',
                background: '#F9FAFC',
                borderRight: '1px solid #DBEAFA'
              }}
            >
              <div style={{ width: '80px', height: '16px', background: '#CBD5E1', borderRadius: '4px' }} />
              <div className="flex flex-col" style={{ gap: '16px', width: '100%' }}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} style={{ width: '100%', height: '12px', background: '#E2E8F0', borderRadius: '4px' }} />
                ))}
              </div>
            </div>
            
            {/* Main Content */}
            <div 
              className="flex flex-col items-start"
              style={{
                padding: '24px',
                gap: '24px',
                flex: 1,
                height: '100%',
                background: '#FCFDFD'
              }}
            >
              {/* Header Row */}
              <div 
                className="flex flex-row justify-between items-center"
                style={{ width: '100%' }}
              >
                <div style={{ width: '128px', height: '24px', background: '#1E293B', borderRadius: '4px' }} />
                <div style={{ width: '96px', height: '32px', background: '#FA7315', borderRadius: '100px' }} />
              </div>
              
              {/* Cards Row */}
              <div 
                className="flex flex-row items-center"
                style={{ gap: '16px', width: '100%' }}
              >
                {[1, 2, 3].map((i) => (
                  <div 
                    key={i}
                    className="flex flex-col items-start"
                    style={{
                      padding: '16px',
                      gap: '8px',
                      flex: 1,
                      border: '1px solid #DBEAFA',
                      borderRadius: '8px'
                    }}
                  >
                    <div style={{ width: '32px', height: '32px', background: '#DBEAFE', borderRadius: '4px' }} />
                    <div style={{ width: '64px', height: '16px', background: '#E2E8F0', borderRadius: '4px' }} />
                    <div style={{ width: '48px', height: '24px', background: '#1E293B', borderRadius: '4px' }} />
                  </div>
                ))}
              </div>
              
              {/* Chart Area */}
              <div 
                style={{
                  width: '100%',
                  flex: 1,
                  background: '#FFFFFF',
                  border: '1px solid #DBEAFA',
                  borderRadius: '8px'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};