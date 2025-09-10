import React from 'react'

export const TrafficEnforcement3DIcon = ({ className = "h-8 w-8" }: { className?: string }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 3D Camera with Traffic Focus */}
      <defs>
        <linearGradient id="cameraGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
        <linearGradient id="lensGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1f2937" />
          <stop offset="100%" stopColor="#111827" />
        </linearGradient>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="2" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.3"/>
        </filter>
      </defs>
      
      {/* Camera Body */}
      <rect 
        x="6" 
        y="8" 
        width="12" 
        height="8" 
        rx="2" 
        fill="url(#cameraGradient)" 
        filter="url(#shadow)"
        transform="perspective(1000px) rotateX(15deg) rotateY(-10deg)"
      />
      
      {/* Camera Lens */}
      <circle 
        cx="12" 
        cy="12" 
        r="3" 
        fill="url(#lensGradient)" 
        filter="url(#shadow)"
        transform="perspective(1000px) rotateX(15deg) rotateY(-10deg) translate(0, 1)"
      />
      
      {/* Lens Reflection */}
      <circle 
        cx="11" 
        cy="11" 
        r="1" 
        fill="white" 
        opacity="0.6"
        transform="perspective(1000px) rotateX(15deg) rotateY(-10deg) translate(0, 1)"
      />
      
      {/* Camera Flash */}
      <rect 
        x="14" 
        y="6" 
        width="2" 
        height="1.5" 
        rx="0.5" 
        fill="#fbbf24" 
        filter="url(#shadow)"
        transform="perspective(1000px) rotateX(15deg) rotateY(-10deg)"
      />
      
      {/* Traffic Light Indicator */}
      <circle 
        cx="18" 
        cy="18" 
        r="2" 
        fill="#ef4444" 
        filter="url(#shadow)"
        transform="perspective(1000px) rotateX(15deg) rotateY(-10deg)"
      />
    </svg>
  )
}
