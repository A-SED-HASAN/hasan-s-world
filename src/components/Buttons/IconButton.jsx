import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export default function IconButton({ icon, title, to }) {
  return (
    <BtnWrapper to={to}>
      {icon}
      <span>{title}</span>
    </BtnWrapper>
  )
}

const BtnWrapper = styled(Link)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'var(--text-white)',
  cursor: 'pointer',
  transition: '0.5s',
  gap: '.35rem',
  margin: '0 .5rem',
  svg: {
    fill: '#fff',
    width: '24px',
    height: '24px',
    transition: '1s transform ',
  },
  '.cube': {
    fill: 'none',
  },

  ':hover': {
    color: 'var(--primary-600)',
    svg: {
      fill: 'var(--primary-600)',
      transform: 'rotateY(360deg)',
    },
    '.cube': {
      fill: 'none',
    },
  },
  '*': {
    cursor: 'pointer',
  },
}))
