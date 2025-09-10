import React from 'react'

interface AnalysisModuleIconProps {
  className?: string
  size?: number
}

export const AnalysisModuleIcon: React.FC<AnalysisModuleIconProps> = ({ 
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
    {/* Magnifying glass with data analysis */}
    <circle
      cx="11"
      cy="11"
      r="8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Search handle */}
    <path
      d="M21 21L16.65 16.65"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Historical data trend lines inside magnifying glass */}
    <path
      d="M8 14L10 12L12 13L14 10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Geographic markers */}
    <circle cx="9" cy="9" r="1" fill="currentColor" opacity="0.6"/>
    <circle cx="13" cy="8" r="0.8" fill="currentColor" opacity="0.4"/>
    <circle cx="11" cy="12" r="0.6" fill="currentColor" opacity="0.5"/>
    {/* Sentiment indicator */}
    <path
      d="M9 10.5C9.5 11 10.5 11 11 10.5"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
)