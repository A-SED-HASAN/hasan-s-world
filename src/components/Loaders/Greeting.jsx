import React from 'react'
import styled from '@emotion/styled'
import { RoundedBtn } from '../'
import { Arrow } from '../../assets/icons'
export default function Greeting() {
  return (
    <Wrapper className='fixed-width '>
      <article className='flex-column gap-6'>
        <h1>welcome to my World!</h1>
        <p>
          I'm Hasan, a Front-End Developer who is enthusiastic about creating
          engaging and delightful digital experiences.
        </p>
        <RoundedBtn
          text={`${true ? 'loading ...' : 'Explore my world'}`}
          background='var(--primary-500)'
          hover='var(--white)'
          hoverText='var(--black)'
          icon={!true && <Arrow deg={180} />}
        />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled('div')(() => ({
  color: 'var(--white)',
  display: 'grid',
  placeItems: 'center',
  height: '100vh',
  width: '100vw',

  article: {
    width: '100%',
    h1: {
      fontSize: '96px',
      fontWeight: '600',
      lineHeight: '100%',
      textTransform: 'uppercase',
    },
    p: {
      fontSize: '48px',
      fontWeight: '400',
      lineHeight: '120%',
      textAlign: 'right',
    },
    button: {
      alignSelf: 'start',
      width: '320px',
      height: '64px',
      svg: {
        width: '30px',
      },
    },
    '@media (width <= 600px)': {
      h1: {
        fontSize: '64px',
      },
      p: {
        fontSize: '24px',
      },
      button: {
        width: '100%',
      },
    },
  },
}))
