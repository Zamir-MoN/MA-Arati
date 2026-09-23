import React from 'react';

interface GoldDividerProps {
  className?: string;
  width?: number;
  color?: string;
  subtle?: boolean;
}

export const GoldDivider: React.FC<GoldDividerProps> = ({
  className = '',
  width = 240,
  color = '#C89B3C',
  subtle = false,
}) => {
  return (
    <div className={`flex items-center justify-center my-4 ${className}`} aria-hidden="true">
      <svg
        width={width}
        height="24"
        viewBox="0 0 240 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="select-none"
        style={{ opacity: subtle ? 0.45 : 0.85 }}
      >
        {/* Left Tapering Line */}
        <line x1="10" y1="12" x2="92" y2="12" stroke={color} strokeWidth="1" strokeLinecap="round" />
        <circle cx="96" cy="12" r="1.5" fill={color} />
        
        {/* Left leaf swirl */}
        <path d="M102 12 Q108 7 114 12" stroke={color} strokeWidth="1" fill="none" />
        <path d="M102 12 Q108 17 114 12" stroke={color} strokeWidth="1" fill="none" />

        {/* Central 4-pointed Star / Diamond */}
        <g transform="translate(120, 12)">
          <path
            d="M0 -7 Q1.5 -1.5 7 0 Q1.5 1.5 0 7 Q-1.5 1.5 -7 0 Q-1.5 -1.5 0 -7 Z"
            fill={color}
          />
          <circle cx="0" cy="0" r="1.2" fill="#FFFDF7" />
        </g>

        {/* Right leaf swirl */}
        <path d="M126 12 Q132 7 138 12" stroke={color} strokeWidth="1" fill="none" />
        <path d="M126 12 Q132 17 138 12" stroke={color} strokeWidth="1" fill="none" />

        {/* Right Tapering Line */}
        <circle cx="144" cy="12" r="1.5" fill={color} />
        <line x1="148" y1="12" x2="230" y2="12" stroke={color} strokeWidth="1" strokeLinecap="round" />
      </svg>
    </div>
  );
};
