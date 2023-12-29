import React from 'react'
import styled from '@emotion/styled'

export default function CircleBtn({
  icon,
  text,
  fill = 'var(--white)',
  color = 'var(--white)',
  fontSize = '20px',
  background,
  hover,
  hoverText,
  style,
  fontWeight = '700',
}) {
  const styles = {
    background,
    hover,
    hoverText,
    color,
    fontSize,
    fontWeight,
  }
  return (
    <Wrapper styles={styles} style={{ fill, ...style }}>
      <span>{text}</span>
      {icon}
    </Wrapper>
  )
}

const Wrapper = styled('button')(
  ({
    styles: { background, hover, hoverText, color, fontSize, fontWeight },
  }) => ({
    color,
    outline: 'none',
    fontFamily: 'inherit',
    border: 'none',
    borderRadius: '50px',
    padding: '.4rem .5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '.5rem',
    lineHeight: '0',
    cursor: 'pointer',
    fontSize,
    background,
    fontWeight,
    transition: 'all .3s',
    svg: { fill: color, transition: 'all .3s' },

    ':hover': {
      background: hover,
      color: hoverText,
      svg: { fill: hoverText },
    },
    '*': {
      cursor: 'pointer',
    },
  })
)
