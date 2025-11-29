import * as React from 'react'

export const FaucetIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false" {...props}>
    {/* Faucet graphic: stroke-based so it scales and inherits color */}
    <g fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M1.5,12h21a0,0,0,0,1,0,0v1a8.59,8.59,0,0,1-8.59,8.59H10.09A8.59,8.59,0,0,1,1.5,12.93V12a0,0,0,0,1,1.5,12Z" />
      <polyline points="6.27 8.16 8.18 9.11 8.18 11.98" />
      <polyline points="17.73 8.16 15.82 9.11 15.82 11.98" />
      <path d="M12,12V4.34a2.86,2.86,0,0,1,2.86-2.86h0a2.86,2.86,0,0,1,2.87,2.86v1" />
    </g>
  </svg>
)

export default FaucetIcon
