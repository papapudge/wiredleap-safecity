import React from 'react'

interface SocialInboxIconProps {
  className?: string
  size?: number
}

export const SocialInboxIcon: React.FC<SocialInboxIconProps> = ({ 
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
    {/* Message inbox container */}
    <rect
      x="3"
      y="5"
      width="18"
      height="14"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    {/* Inbox divider */}
    <line x1="3" y1="9" x2="21" y2="9" stroke="currentColor" strokeWidth="1"/>
    
    {/* Social media message bubbles */}
    <circle cx="7" cy="13" r="1.5" stroke="currentColor" strokeWidth="1" fill="none"/>
    <circle cx="12" cy="13" r="1.5" stroke="currentColor" strokeWidth="1" fill="none"/>
    <circle cx="17" cy="13" r="1.5" stroke="currentColor" strokeWidth="1" fill="none"/>
    
    {/* AI suggested response indicators */}
    <path
      d="M6 15.5L7 16.5L8 15.5"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M11 15.5L12 16.5L13 15.5"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M16 15.5L17 16.5L18 15.5"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    
    {/* Social platform indicators */}
    <circle cx="6" cy="7" r="1" fill="currentColor" opacity="0.6"/>
    <circle cx="9" cy="7" r="1" fill="currentColor" opacity="0.6"/>
    <circle cx="12" cy="7" r="1" fill="currentColor" opacity="0.6"/>
    
    {/* Notification badge */}
    <circle cx="19" cy="6" r="2" fill="currentColor" opacity="0.8"/>
    <text x="19" y="6.5" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">3</text>
  </svg>
)