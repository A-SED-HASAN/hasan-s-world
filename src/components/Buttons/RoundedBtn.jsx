import React from 'react'
import styled from '@emotion/styled'
import { BaseBtn } from '../../global'

export default function RoundedBtn({
  icon,
  text,
  fill = 'var(--white)',
  color = 'var(--white)',
  fontSize = '20px',
  background,
  hover,
  hoverText,
  style,
}) {
  const styles = {
    background,
    hover,
    hoverText,
    color,
    fontSize,
  }
  return (
    <Wrapper styles={styles} style={{ fill, ...style }}>
      <span>{text}</span>
      {icon}
    </Wrapper>
  )
}

const Wrapper = styled(BaseBtn)(
  ({ styles: { background, hover, hoverText, color, fontSize } }) => ({
    color,
    borderRadius: '50px',
    fontSize,
    background,
    svg: { fill: color },

    ':hover': {
      background: hover,
      color: hoverText,
      svg: { fill: hoverText },
    },
  })
)
