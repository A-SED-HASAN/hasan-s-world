import React from 'react'
import styled from '@emotion/styled'

export default function Button({
  className,
  children,
  background,
  hover,
  circle,
  fn,
  style,
  type = 'button',
  disable,
  color = 'var(--text-white)',
  fill = 'var(--text-white)',
  fontSize = '14px',
  fontWeight = '500',
}) {
  const styles = {
    background,
    hover,
    circle,
    color,
    fill,
    fontSize,
    fontWeight,
  }
  return (
    <Btn
      styles={styles}
      disabled={disable}
      type={type}
      style={style}
      className={className}
      onClick={fn}
    >
      {children}
    </Btn>
  )
}

const Btn = styled('button')(
  ({
    styles: { background, hover, circle, color, fill, fontSize, fontWeight },
  }) => ({
    borderRadius: circle ? '50%' : '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '.5rem',
    borderBottom: '3px rgba(0, 0, 0, 0.2) solid',
    color,
    fontWeight,
    fontSize,
    padding: '10px',
    background,
    ':hover': {
      background: hover,
    },
    ':disabled': {
      background: 'var(--text-400)',
      cursor: 'default',
    },
    'svg , *': {
      cursor: 'pointer',
      fill,
    },
  })
)
