import React from 'react'

export const CrisisManagement3DIcon = ({ className = "h-8 w-8" }: { className?: string }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 3D Shield with Alert Symbol */}
      <defs>
        <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#dc2626" />
        </linearGradient>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="2" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.3"/>
        </filter>
      </defs>
      
      {/* Shield Base */}
      <path 
        d="M12 2L4 6V12C4 16.5 7.5 20.5 12 22C16.5 20.5 20 16.5 20 12V6L12 2Z" 
        fill="url(#shieldGradient)" 
        filter="url(#shadow)"
        transform="perspective(1000px) rotateX(15deg) rotateY(-10deg)"
      />
      
      {/* Alert Triangle */}
      <path 
        d="M12 8L16 14H8L12 8Z" 
        fill="white" 
        opacity="0.9"
        transform="perspective(1000px) rotateX(15deg) rotateY(-10deg) translate(0, 2)"
      />
      
      {/* Exclamation Mark */}
      <circle 
        cx="12" 
        cy="16" 
        r="1" 
        fill="white" 
        opacity="0.9"
        transform="perspective(1000px) rotateX(15deg) rotateY(-10deg) translate(0, 2)"
      />
    </svg>
  )
}
