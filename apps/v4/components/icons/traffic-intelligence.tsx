import React from 'react'

interface TrafficIntelligenceIconProps {
  className?: string
  size?: number
}

export const TrafficIntelligenceIcon: React.FC<TrafficIntelligenceIconProps> = ({ 
  className = '', 
  size = 24 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* ANPR Camera housing */}
    <rect
      x="6"
      y="4"
      width="12"
      height="8"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    {/* Camera lens */}
    <circle
      cx="12"
      cy="8"
      r="2.5"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <circle cx="12" cy="8" r="1" fill="currentColor" opacity="0.6"/>
    
    {/* License plate detection area */}
    <rect
      x="8"
      y="14"
      width="8"
      height="3"
      rx="0.5"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    {/* License plate text simulation */}
    <line x1="9" y1="15.5" x2="10.5" y2="15.5" stroke="currentColor" strokeWidth="1"/>
    <line x1="11.5" y1="15.5" x2="13" y2="15.5" stroke="currentColor" strokeWidth="1"/>
    <line x1="13.5" y1="15.5" x2="15" y2="15.5" stroke="currentColor" strokeWidth="1"/>
    
    {/* Traffic flow indicators */}
    <path
      d="M3 18L6 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      markerEnd="url(#arrowhead)"
    />
    <path
      d="M18 18L21 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      markerEnd="url(#arrowhead)"
    />
    
    {/* Violation detection alerts */}
    <circle cx="16" cy="6" r="1.5" fill="currentColor" opacity="0.7">
      <animate attributeName="opacity" values="0.7;1;0.7" dur="1.5s" repeatCount="indefinite"/>
    </circle>
    
    {/* Driver profile connection */}
    <path
      d="M12 12L12 13.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeDasharray="2 1"
    />
    
    {/* Arrow marker definition */}
    <defs>
      <marker
        id="arrowhead"
        markerWidth="10"
        markerHeight="7" 
        refX="9"
        refY="3.5"
        orient="auto"
      >
        <polygon
          points="0 0, 10 3.5, 0 7"
          fill="currentColor"
        />
      </marker>
    </defs>
  </svg>
)