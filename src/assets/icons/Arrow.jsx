import React from 'react'

export default function Arrow({ deg, className }) {
  return (
    <svg
      className={className}
      style={{ transform: `rotate(${deg}deg)` }}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 32 32'
    >
      <path d='M13.28125 6.78125L4.78125 15.28125L4.09375 16L4.78125 16.71875L13.28125 25.21875L14.71875 23.78125L7.9375 17L28 17L28 15L7.9375 15L14.71875 8.21875Z' />
    </svg>
  )
}
