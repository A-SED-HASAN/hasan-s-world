import React from 'react'
import styled from '@emotion/styled'
import { BreadCrumb } from '../components'
import { socialLinks } from '../assets/constants'
import { Link } from 'react-router-dom'
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
      <div>
        <h2>Links :</h2>
        <div className='flex-between links'>
          {socialLinks.map((item) => {
            const { id, text, icon, to } = item
            return <LinkBtn to={to} key={id} text={text} icon={icon} />
          })}
        </div>
      </div>
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
  '.links': {
    maxWidth: '300px',
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

const LinkBtn = ({ to, text, icon }) => {
  return (
    <LinkWrapper to={to}>
      {icon}
      {text}
    </LinkWrapper>
  )
}
const LinkWrapper = styled(Link)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'var(--white)',
  gap: '.5rem',
  marginTop: '1rem',
  transition: '.3s all',
  svg: {
    transition: '.3s all',
    fill: 'var(--white)',
    width: '25px',
  },

  ':hover': {
    color: 'var(--primary-500)',
    svg: { fill: 'var(--primary-500)' },
  },
}))
