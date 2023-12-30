import React from 'react'
import styled from '@emotion/styled'
import { BreadCrumb } from '../components'
export default function Contact() {
  return (
    <Wrapper className='fixed-width'>
      <BreadCrumb />
      <h1>
        Thank you for all the positive feedback that I have received about my
        site! Unfortunately, I am not able to take on requests about mentorship
        or collaboration as I am currently in a full-time job. I hope for your
        understanding and good luck with your projects!
      </h1>
      <h1>
        If you would like to see more of my work, feel free to follow me on
      </h1>
      <h2>Links :</h2>
    </Wrapper>
  )
}

const Wrapper = styled('div')(() => ({
  margin: '5% auto ',
  color: 'var(--white)',
  display: 'flex',
  flexDirection: 'column',
  gap: '3rem',
  overflow: 'hidden',

  h1: {
    fontSize: '48px',
    fontWeight: 400,
    lineHeight: '120%',
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
