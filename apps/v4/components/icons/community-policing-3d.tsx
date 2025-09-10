import React from 'react'

export const CommunityPolicing3DIcon = ({ className = "h-8 w-8" }: { className?: string }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 3D People/Community Icon */}
      <defs>
        <linearGradient id="person1Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <linearGradient id="person2Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
        <linearGradient id="person3Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="2" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.3"/>
        </filter>
      </defs>
      
      {/* Person 1 (Left) */}
      <g transform="perspective(1000px) rotateX(15deg) rotateY(-10deg)">
        {/* Head */}
        <circle 
          cx="8" 
          cy="6" 
          r="2" 
          fill="url(#person1Gradient)" 
          filter="url(#shadow)"
        />
        {/* Body */}
        <path 
          d="M6 10C6 12 7 14 8 14C9 14 10 12 10 10L8 8L6 10Z" 
          fill="url(#person1Gradient)" 
          filter="url(#shadow)"
        />
      </g>
      
      {/* Person 2 (Center) */}
      <g transform="perspective(1000px) rotateX(15deg) rotateY(-10deg) translate(0, 1)">
        {/* Head */}
        <circle 
          cx="12" 
          cy="5" 
          r="2.2" 
          fill="url(#person2Gradient)" 
          filter="url(#shadow)"
        />
        {/* Body */}
        <path 
          d="M9.5 9.5C9.5 12 10.5 14.5 12 14.5C13.5 14.5 14.5 12 14.5 9.5L12 7L9.5 9.5Z" 
          fill="url(#person2Gradient)" 
          filter="url(#shadow)"
        />
      </g>
      
      {/* Person 3 (Right) */}
      <g transform="perspective(1000px) rotateX(15deg) rotateY(-10deg) translate(0, 2)">
        {/* Head */}
        <circle 
          cx="16" 
          cy="6" 
          r="2" 
          fill="url(#person3Gradient)" 
          filter="url(#shadow)"
        />
        {/* Body */}
        <path 
          d="M14 10C14 12 15 14 16 14C17 14 18 12 18 10L16 8L14 10Z" 
          fill="url(#person3Gradient)" 
          filter="url(#shadow)"
        />
      </g>
      
      {/* Connection Lines */}
      <g transform="perspective(1000px) rotateX(15deg) rotateY(-10deg)">
        <path 
          d="M10 8Q12 6 14 8" 
          stroke="#6b7280" 
          strokeWidth="1" 
          fill="none" 
          opacity="0.6"
        />
        <path 
          d="M10 12Q12 10 14 12" 
          stroke="#6b7280" 
          strokeWidth="1" 
          fill="none" 
          opacity="0.6"
        />
      </g>
    </svg>
  )
}
