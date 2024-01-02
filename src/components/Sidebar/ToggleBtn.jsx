import React from 'react'

import styled from '@emotion/styled'
import { useGlobalContext } from '../../context'

export default function ToggleBtn() {
  const { toggleSidebar, isSidebarOpen } = useGlobalContext()

  const styles = { isSidebarOpen }
  return (
    <Wrapper styles={styles} onClick={toggleSidebar}>
      <div />
      <span></span>
      <span></span>
      <span></span>
    </Wrapper>
  )
}

const Wrapper = styled('div')(({ styles: { isSidebarOpen } }) => ({
  display: 'block',
  position: 'fixed',
  top: '1rem',
  right: '1rem',

  zIndex: 888,

  userSelect: 'none',
  div: {
    display: 'block',
    width: '40px',
    height: '32px',
    position: 'absolute',
    top: '-7px',
    right: ' -5px',

    cursor: 'pointer',

    opacity: '0' /* hide this */,
    zIndex: '999' /* and place it over the hamburger */,
  },
  /* hamburger */
  span: {
    display: 'block',
    width: '28px',
    height: '3px',
    marginBottom: ' 6px',
    position: 'relative',
    background: isSidebarOpen ? 'white' : 'var(--white)',
    borderRadius: '2px',
    zIndex: 888,
    transformOrigin: '-4px 0px',
    transition: `transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease`,
    opacity: isSidebarOpen && 1,
    transform: isSidebarOpen && 'rotate(45deg) translate(0px, -2px)',
  },
  ' span:first-of-type': {
    transformOrigin: '0% 0%',
  },

  'span:nth-last-of-type(2)': {
    transformOrigin: '0% 100%',
    opacity: isSidebarOpen && 0,
    transform: isSidebarOpen && 'rotate(0deg) scale(0.2, 0.2)',
  },

  'span:nth-last-of-type(1)': {
    transform: isSidebarOpen && 'rotate(-45deg) translate(-2px, 2px)',
  },
}))
