import React from 'react'
import { Link } from 'react-router-dom'
import { currentUrl } from '../../functions'
import styled from '@emotion/styled'
export default function BreadCrumb() {
  return (
    <Wrapper>
      <Link to='/'>Hasan's world</Link>
      <span>/</span>
      <p>{currentUrl()}</p>
    </Wrapper>
  )
}

const Wrapper = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '.5rem',
  fontSize: '22px',
  a: {
    fontWeight: '700',
    color: 'var(--primary-500)',
    borderBottom: '.1rem solid transparent',

    ':hover': {
      borderBottom: '.1rem solid var(--primary-500)',
    },
  },
}))
