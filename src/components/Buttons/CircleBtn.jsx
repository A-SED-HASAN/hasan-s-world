import React from 'react'
import styled from '@emotion/styled'
import { BaseBtn } from '../../global'

export default function CircleBtn({
  icon,
  text,
  color,
  fontSize,
  background,
  hover,
  hoverText,
  style,
  fontWeight,
  fn,
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
    <Wrapper onClick={fn} styles={styles} style={{ ...style }}>
      {text && <span>{text}</span>}
      {icon && icon}
    </Wrapper>
  )
}

const Wrapper = styled(BaseBtn)(
  ({
    styles: { background, hover, hoverText, color, fontSize, fontWeight },
  }) => ({
    width: '48px',
    height: '48px',
    color,
    borderRadius: '50%',
    fontSize,
    background,
    fontWeight,
    svg: { width: '80%', color, fill: 'black' },

    ':hover': {
      background: hover,
      color: hoverText,
      svg: { fill: hoverText },
    },
  })
)
