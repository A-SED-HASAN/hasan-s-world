import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export default function RoundedBtn({
  icon,
  text,
  fill = 'var(--text-white)',
  color = 'var(--text-white)',
  background,
  hover,
  to,
  style,
}) {
  return (
    <LinkBtn
      to={to}
      hover={hover}
      background={background}
      style={{ color, fill, ...style }}
    >
      {icon}
      <span>{text}</span>
    </LinkBtn>
  )
}

const LinkBtn = styled(Link)(({ hover, background }) => ({
  color: 'var(--text-white)',
  outline: 'none',
  fontFamily: 'inherit',
  border: 'none',
  borderRadius: '50px',
  padding: '.4rem .5rem',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  gap: '.5rem',
  lineHeight: '0',
  cursor: 'pointer',
  fontWeight: 500,
  fontSize: '14px',
  background,
  '.icon': {
    transition: '.3s all',
  },

  ':hover': {
    background: hover,
    '.icon': {
      transform: 'scale(1.2) rotate(1turn)',
    },
  },
  '*': {
    cursor: 'pointer',
  },
}))
