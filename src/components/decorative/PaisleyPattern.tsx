import React from 'react';

interface PaisleyPatternProps {
  className?: string;
  width?: number;
  height?: number;
  opacity?: number;
  color?: string;
  flipped?: boolean;
}

export const PaisleyPattern: React.FC<PaisleyPatternProps> = ({
  className = '',
  width = 140,
  height = 180,
  opacity = 0.08,
  color = '#C89B3C',
  flipped = false,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 140 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${flipped ? '-scale-x-100' : ''} ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* Outer Paisley Body */}
      <path
        d="M70 160 C30 160 15 125 15 90 C15 50 45 25 70 10 C80 5 95 10 90 25 C82 50 115 55 120 85 C125 120 105 160 70 160 Z"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
      />
      {/* Inner Nested Paisley */}
      <path
        d="M70 145 C42 145 30 118 30 90 C30 60 52 38 72 24 C75 22 80 26 78 35 C70 56 100 64 104 88 C108 114 92 145 70 145 Z"
        stroke={color}
        strokeWidth="1"
        strokeDasharray="2 3"
        fill="none"
      />
      {/* Central Floral Eye */}
      <circle cx="68" cy="98" r="16" stroke={color} strokeWidth="1" fill={color} fillOpacity="0.08" />
      <circle cx="68" cy="98" r="6" stroke={color} strokeWidth="1" fill={color} />
      
      {/* Small internal filigree arcs */}
      <path d="M50 125 Q68 135 86 125" stroke={color} strokeWidth="0.8" fill="none" />
      <path d="M54 115 Q68 122 82 115" stroke={color} strokeWidth="0.8" fill="none" />
      <path d="M45 80 Q60 65 72 50" stroke={color} strokeWidth="0.8" fill="none" />
      
      {/* Delicate outer dots along the curve */}
      <circle cx="70" cy="10" r="2" fill={color} />
      <circle cx="85" cy="18" r="1.5" fill={color} />
      <circle cx="100" cy="40" r="1.5" fill={color} />
      <circle cx="118" cy="70" r="1.5" fill={color} />
      <circle cx="120" cy="100" r="1.5" fill={color} />
      <circle cx="108" cy="130" r="1.5" fill={color} />
      <circle cx="90" cy="152" r="1.5" fill={color} />
    </svg>
  );
};
