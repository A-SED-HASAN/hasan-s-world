import React, { Suspense } from 'react'
import styled from '@emotion/styled'

import { CircleBtn, Greeting } from '../components'
import { Bars } from '../assets/icons'

export default function Home() {
  return (
    <Suspense fallback={<Greeting />}>
      {/* Main animation Here */}
      <Wrapper>
        <nav className='flex-between'>
          <h1>
            hasan's
            <br /> world
          </h1>
          <Bars />
        </nav>
        <footer className='flex-between'>
          <CircleBtn text='aa' />
          <CircleBtn text='ba' />
        </footer>
      </Wrapper>
    </Suspense>
  )
}
const Wrapper = styled('section')(() => ({
  position: 'relative',
  'nav , footer': {
    padding: '1rem',
    background: 'blue',
    position: 'fixed',
    width: '100%',
    left: '0',
    zIndex: '666',
  },
  nav: {
    top: '0',
    color: 'var(--white)',

    h1: {
      fontSize: '1rem',
      fontWeight: '600',
      lineHeight: '100%',
      textTransform: 'uppercase',
    },
    svg: {
      width: '40px',
    },
  },
  footer: {
    bottom: '0',
  },
}))
