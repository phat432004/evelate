import React, { useState } from 'react';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] h-[82px]"
      style={{ height: '82px' }}
    >
      <div 
        className="mx-auto h-full flex flex-row justify-between items-center"
        style={{ padding: '16px 256px', maxWidth: '1728px' }}
      >
        {/* Logo */}
        <div className="relative flex items-center" style={{ width: '228px', height: '24px' }}>
          {/* E */}
          <span className="absolute font-bold text-xl" style={{ left: '0%', color: '#1A3154' }}>E</span>
          {/* L */}
          <span className="absolute font-bold text-xl" style={{ left: '14.19%', color: '#1A3154' }}>L</span>
          {/* E */}
          <span className="absolute font-bold text-xl" style={{ left: '27.87%', color: '#1A3154' }}>E</span>
          {/* V */}
          <span className="absolute font-bold text-xl" style={{ left: '41.97%', color: '#1A3154' }}>V</span>
          {/* Vector (A triangle) */}
          <span className="absolute flex items-center justify-center" style={{ left: '59.73%' }}>
            <svg width="24" height="24" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 0L16 14H0L8 0Z" fill="#F47D42"/>
            </svg>
          </span>
          {/* T */}
          <span className="absolute font-bold text-xl" style={{ left: '77.06%', color: '#1A3154' }}>T</span>
          {/* E */}
          <span className="absolute font-bold text-xl" style={{ left: '92.61%', color: '#1A3154' }}>E</span>
        </div>

        {/* Contact Button */}
        <div className="hidden md:flex flex-row justify-end items-center" style={{ gap: '40px' }}>
          {/* Language Selector */}
          <button 
            className="flex flex-row items-center hover:opacity-80"
            style={{ width: '90px', height: '30px', padding: 0 }}
          >
            <span 
              style={{ 
                width: '60px', 
                height: '18px', 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize: '18px',
                lineHeight: '100%',
                textAlign: 'center',
                letterSpacing: '0.02em',
                color: '#6B80A0'
              }}
            >
              English
            </span>
            <div 
              className="flex items-center justify-center"
              style={{ width: '30px', height: '30px', borderRadius: '100px' }}
            >
              <ChevronDown size={20} style={{ color: '#747F9F' }} />
            </div>
          </button>

          {/* Contact Us Button */}
          <button
            className="flex flex-row justify-center items-center"
            style={{
              padding: '16px 24px',
              gap: '8px',
              width: '143px',
              height: '50px',
              background: 'linear-gradient(263.77deg, #F2A864 17.92%, #ED7873 85.49%)',
              boxShadow: '0px 3px 0px #C8726B',
              borderRadius: '100px'
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
              Contact us
            </span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-slate-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-[82px] left-0 w-full bg-white border-b border-slate-100 p-4 flex flex-col gap-4 md:hidden shadow-lg">
          <div className="flex items-center justify-between px-2 py-2 border rounded-lg border-slate-200">
            <span className="flex items-center gap-2 text-slate-700"><Globe size={18}/> English</span>
            <ChevronDown size={16} className="text-slate-400" />
          </div>
          <button
            className="w-full flex flex-row justify-center items-center"
            style={{
              padding: '16px 24px',
              height: '50px',
              background: 'linear-gradient(263.77deg, #F2A864 17.92%, #ED7873 85.49%)',
              boxShadow: '0px 3px 0px #C8726B',
              borderRadius: '100px'
            }}
          >
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '18px',
                color: '#FFFFFF'
              }}
            >
              Contact us
            </span>
          </button>
        </div>
      )}
    </header>
  );
};