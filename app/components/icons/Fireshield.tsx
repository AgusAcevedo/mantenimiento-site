import * as React from 'react'

type Props = React.SVGProps<SVGSVGElement>

export default function FireshieldIcon(props: Props) {
  return (
    <svg
      viewBox="0 0 30 30"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      focusable="false"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      {/* Shield outline (stroke-only) */}
      <path
        d="M25,6.7c-3.4,0-6.6-1.4-9-3.7c-2.4,2.3-5.6,3.7-9,3.7C5.6,6.7,4.3,6.4,3,6c0,14,5.5,19.6,13,23
    c7.5-3.4,13-9,13-23C27.7,6.4,26.4,6.7,25,6.7z"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />

      {/* Inner flame shape (stroke-only) */}
      <g>
        <path
          d="M20.2,14.7c-0.5,0.9-1.3,1.4-2.4,1.5c-0.6,0.1-1-0.3-1-0.8c-0.1-1.1-0.1-2.2-0.3-3.3c-0.2-1.2-0.8-2.2-1.6-3.1
    c0,0-0.1,0-0.1,0.1c-0.5,1.3-1.4,2.4-2.2,3.6c-1.1,1.4-1.6,3-1.6,4.8c0.1,2.4,2.4,4.6,5,4.5c2.4,0,4.5-1.7,4.9-3.9
    c0.3-1.2,0.1-2.7-0.4-3.8C20.4,14.5,20.3,14.6,20.2,14.7z"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinejoin="round"
          strokeMiterlimit={10}
        />
      </g>
    </svg>
  )
}
