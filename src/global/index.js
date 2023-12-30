import styled from '@emotion/styled'

export const BaseBtn = styled('button')(() => ({
  color: 'var(--black)',
  outline: 'none',
  fontFamily: 'inherit',
  border: 'none',
  padding: '.4rem .5rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '.5rem',
  cursor: 'pointer',
  fontSize: '20px',
  background: 'transparent',
  fontWeight: '700',
  transition: 'background .3s',
  svg: { width: '80%', color: 'var(--black)', fill: 'black' },
  '*': {
    cursor: 'pointer',
  },
}))
