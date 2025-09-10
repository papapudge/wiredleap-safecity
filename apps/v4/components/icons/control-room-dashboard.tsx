import React from 'react'

interface ControlRoomDashboardIconProps {
  className?: string
  size?: number
}

export const ControlRoomDashboardIcon: React.FC<ControlRoomDashboardIconProps> = ({ 
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
    {/* Command center shield with monitoring screens */}
    <path
      d="M12 2L3 6V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V6L12 2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Central monitoring screen */}
    <rect
      x="8"
      y="8"
      width="8"
      height="5"
      rx="1"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    {/* Data visualization bars */}
    <line x1="9.5" y1="11.5" x2="9.5" y2="10" stroke="currentColor" strokeWidth="1"/>
    <line x1="11" y1="11.5" x2="11" y2="9.5" stroke="currentColor" strokeWidth="1"/>
    <line x1="12.5" y1="11.5" x2="12.5" y2="10.5" stroke="currentColor" strokeWidth="1"/>
    <line x1="14" y1="11.5" x2="14" y2="9" stroke="currentColor" strokeWidth="1"/>
    {/* Alert indicators */}
    <circle cx="7" cy="15" r="1.5" fill="currentColor" opacity="0.6"/>
    <circle cx="12" cy="16" r="1" fill="currentColor" opacity="0.4"/>
    <circle cx="17" cy="15.5" r="1.2" fill="currentColor" opacity="0.5"/>
  </svg>
)