import React from 'react'
import styled from '@emotion/styled'
import { BreadCrumb } from '../components'
export default function About() {
  return (
    <Wrapper className='fixed-width'>
      <BreadCrumb />
      <h1>
        I'm Joshua, a designer who is enthusiastic about creating engaging and
        delightful digital experiences.
      </h1>
      <div>
        <h2>I have worked for and with</h2>
        <p>
          Blank, TRY Dig, Kunstkraftwerk Leipzig, Peter Schmidt Group,
          wirmachenbunt, Kiel Marine Science
        </p>
      </div>

      <div>
        <h2>I have worked for and with</h2>
        <p>
          Blank, TRY Dig, Kunstkraftwerk Leipzig, Peter Schmidt Group,
          wirmachenbunt, Kiel Marine Science
        </p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled('div')(() => ({
  margin: '10% auto ',
  color: 'var(--white)',
  display: 'flex',
  flexDirection: 'column',
  gap: '3rem',
  h1: {
    fontSize: '48px',
    fontWeight: 400,
    lineHeight: '120%',
  },
  h2: {
    fontSize: '26px',
    fontWeight: 600,
    lineHeight: '120%',
  },
  p: {
    fontSize: '22px',
    fontWeight: 400,
    lineHeight: '150%',
  },
  '@media (width<= 600px)': {
    gap: '1.5rem',

    h1: {
      fontSize: '24px',
    },
    h2: {
      fontSize: '20px',
    },
    lineHeight: '120%',

    p: {
      fontSize: '18px',
    },
  },
}))
