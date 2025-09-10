import React from 'react'

interface IntelligenceCenterIconProps {
  className?: string
  size?: number
}

export const IntelligenceCenterIcon: React.FC<IntelligenceCenterIconProps> = ({ 
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
    {/* Central intelligence hub with radiating connections */}
    <circle
      cx="12"
      cy="12"
      r="3"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    {/* Virality tracking waves */}
    <circle
      cx="12"
      cy="12"
      r="6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeDasharray="2 2"
      fill="none"
      opacity="0.6"
    />
    <circle
      cx="12"
      cy="12"
      r="9"
      stroke="currentColor"
      strokeWidth="1"
      strokeDasharray="3 3"
      fill="none"
      opacity="0.4"
    />
    {/* Sentiment analysis nodes */}
    <circle cx="12" cy="3" r="1.5" fill="currentColor" opacity="0.7">
      <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="21" cy="12" r="1.5" fill="currentColor" opacity="0.7">
      <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" begin="0.5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="12" cy="21" r="1.5" fill="currentColor" opacity="0.7">
      <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" begin="1s" repeatCount="indefinite"/>
    </circle>
    <circle cx="3" cy="12" r="1.5" fill="currentColor" opacity="0.7">
      <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" begin="1.5s" repeatCount="indefinite"/>
    </circle>
    {/* Connection lines */}
    <line x1="12" y1="6" x2="12" y2="9" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
    <line x1="18" y1="12" x2="15" y2="12" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
    <line x1="12" y1="18" x2="12" y2="15" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
    <line x1="6" y1="12" x2="9" y2="12" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
    {/* Misinformation detection indicator */}
    <path
      d="M10.5 12L11.5 13L13.5 11"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
)