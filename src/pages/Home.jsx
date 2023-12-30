import React, { Suspense } from 'react'
import styled from '@emotion/styled'

import { CircleBtn, Greeting } from '../components'
import { Moon, Mute, Sun, UnMute } from '../assets/icons'
import { useGlobalContext } from '../context'

export default function Home() {
  const { isDarkMode, toggleDarkMode, isMute, toggleMute, toggleSideBar } =
    useGlobalContext()
  return (
    <Suspense fallback={<Greeting />}>
      {/* Main animation Here */}
      <Wrapper>
        <nav className='flex-between'>
          <h1>
            hasan's
            <br /> world
          </h1>
          <CircleBtn color='var(--white)' icon={'s'} fn={toggleSideBar} />
        </nav>
        <footer>
          <CircleBtn
            icon={isMute ? <UnMute /> : <Mute />}
            fn={toggleMute}
            background='white'
            color='black'
            hover='var(--primary-500)'
            hoverText='white'
          />
          <CircleBtn
            icon={isDarkMode ? <Sun /> : <Moon />}
            fn={toggleDarkMode}
            background='white'
            color='black'
            hover='var(--primary-500)'
            hoverText='white'
          />
        </footer>
      </Wrapper>
    </Suspense>
  )
}
const Wrapper = styled('section')(() => ({
  position: 'relative',
  width: '100%',
  height: '100vh',
  background: 'blue',
  'nav , footer': {
    padding: '1rem',
    position: 'fixed',
    width: '100%',
    left: '0',
    zIndex: '666',
  },
  nav: {
    top: '0',

    h1: {
      fontSize: '1rem',
      fontWeight: '600',
      lineHeight: '100%',
      textTransform: 'uppercase',
      color: 'var(--white)',
    },
    svg: {
      width: '40px',
    },
  },
  footer: {
    bottom: '0',
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
    gap: '.5rem',
    svg: {
      width: '24px',
    },
  },
}))
