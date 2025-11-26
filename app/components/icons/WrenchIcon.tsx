import * as React from 'react'

export const WrenchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false" {...props}>
    <path d="M14.7 5.3a6 6 0 1 0 4 4l-4-4z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 14l-4 4 1 1 4-4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default WrenchIcon
