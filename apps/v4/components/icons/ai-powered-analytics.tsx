import React from 'react'

interface AIPoweredAnalyticsIconProps {
  className?: string
  size?: number
}

export const AIPoweredAnalyticsIcon: React.FC<AIPoweredAnalyticsIconProps> = ({ 
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
    {/* Neural network brain structure */}
    <path
      d="M12 3C8.5 3 6 5.5 6 9C6 11 7 12.5 8.5 13.5C8.5 15.5 10 17 12 17C14 17 15.5 15.5 15.5 13.5C17 12.5 18 11 18 9C18 5.5 15.5 3 12 3Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    
    {/* Neural pathways */}
    <path
      d="M9 8C9.5 8.5 10.5 8.5 11 8"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
    <path
      d="M13 8C13.5 8.5 14.5 8.5 15 8"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
    <path
      d="M10.5 10.5C11 11 12 11 12.5 10.5"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
    
    {/* Machine learning nodes */}
    <circle cx="9" cy="7" r="1" fill="currentColor" opacity="0.7">
      <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="15" cy="7" r="1" fill="currentColor" opacity="0.7">
      <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" begin="0.5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="12" cy="10" r="1" fill="currentColor" opacity="0.7">
      <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" begin="1s" repeatCount="indefinite"/>
    </circle>
    <circle cx="10" cy="12" r="0.8" fill="currentColor" opacity="0.6">
      <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" begin="1.5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="14" cy="12" r="0.8" fill="currentColor" opacity="0.6">
      <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" begin="0.3s" repeatCount="indefinite"/>
    </circle>
    
    {/* Predictive analytics wave */}
    <path
      d="M4 18C6 16 8 20 10 18C12 16 14 20 16 18C18 16 20 20 22 18"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      opacity="0.6"
    />
    
    {/* Data processing indicators */}
    <rect x="3" y="20" width="2" height="1" fill="currentColor" opacity="0.5"/>
    <rect x="6" y="19" width="2" height="2" fill="currentColor" opacity="0.6"/>
    <rect x="9" y="20.5" width="2" height="0.5" fill="currentColor" opacity="0.4"/>
    <rect x="12" y="19.5" width="2" height="1.5" fill="currentColor" opacity="0.7"/>
    <rect x="15" y="20" width="2" height="1" fill="currentColor" opacity="0.5"/>
    <rect x="18" y="19" width="2" height="2" fill="currentColor" opacity="0.6"/>
  </svg>
)