import React from 'react';

interface MandalaOrnamentProps {
  className?: string;
  size?: number;
  opacity?: number;
  color?: string;
  animate?: boolean;
}

export const MandalaOrnament: React.FC<MandalaOrnamentProps> = ({
  className = '',
  size = 200,
  opacity = 0.1,
  color = '#C89B3C',
  animate = false,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none transition-transform duration-1000 ${animate ? 'animate-[spin_60s_linear_infinite]' : ''} ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <circle cx="100" cy="100" r="92" stroke={color} strokeWidth="1" strokeDasharray="3 3" />
      <circle cx="100" cy="100" r="80" stroke={color} strokeWidth="1.2" />
      <circle cx="100" cy="100" r="64" stroke={color} strokeWidth="0.8" />
      <circle cx="100" cy="100" r="48" stroke={color} strokeWidth="1" />
      <circle cx="100" cy="100" r="28" stroke={color} strokeWidth="1" />
      <circle cx="100" cy="100" r="10" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="1" />
      
      {/* 8-fold radial petals */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <g key={i} transform={`rotate(${angle} 100 100)`}>
          <path
            d="M100 20 C108 40, 115 65, 100 80 C85 65, 92 40, 100 20 Z"
            stroke={color}
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M100 36 C104 50, 108 65, 100 74 C92 65, 96 50, 100 36 Z"
            stroke={color}
            strokeWidth="0.75"
            fill={color}
            fillOpacity="0.08"
          />
          <circle cx="100" cy="20" r="2.5" fill={color} />
          <circle cx="100" cy="85" r="1.5" fill={color} />
        </g>
      ))}

      {/* 16 intermediate micro-rays */}
      {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle, i) => (
        <g key={`sub-${i}`} transform={`rotate(${angle} 100 100)`}>
          <path
            d="M100 44 C104 60, 105 75, 100 86 C95 75, 96 60, 100 44 Z"
            stroke={color}
            strokeWidth="0.8"
            fill="none"
          />
          <circle cx="100" cy="44" r="1.5" fill={color} />
        </g>
      ))}
    </svg>
  );
};
