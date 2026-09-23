import React from 'react';

interface OrnamentalCornerProps {
  className?: string;
  size?: number;
  opacity?: number;
  color?: string;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export const OrnamentalCorner: React.FC<OrnamentalCornerProps> = ({
  className = '',
  size = 80,
  opacity = 0.5,
  color = '#A67838',
  position = 'top-left',
}) => {
  const rotationClass = {
    'top-left': 'rotate-0',
    'top-right': 'rotate-90',
    'bottom-right': 'rotate-180',
    'bottom-left': '-rotate-90',
  }[position];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none transition-transform ${rotationClass} ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* Corner Outer L-Frame */}
      <path d="M4 96 V16 Q4 4 16 4 H96" stroke={color} strokeWidth="2" />
      <path d="M12 96 V22 Q12 12 22 12 H96" stroke={color} strokeWidth="1.2" strokeDasharray="3 3" />
      
      {/* Corner Scrollwork / Acanthus Leaf */}
      <path
        d="M20 20 Q45 22 45 45 Q22 45 20 20 Z"
        stroke={color}
        strokeWidth="1.4"
        fill={color}
        fillOpacity="0.2"
      />
      <circle cx="32" cy="32" r="4" fill={color} />
      
      {/* Delicate floral sprigs */}
      <path d="M16 4 C28 10 38 18 50 16" stroke={color} strokeWidth="0.8" />
      <path d="M4 16 C10 28 18 38 16 50" stroke={color} strokeWidth="0.8" />
      <circle cx="16" cy="4" r="2" fill={color} />
      <circle cx="4" cy="16" r="2" fill={color} />
    </svg>
  );
};
