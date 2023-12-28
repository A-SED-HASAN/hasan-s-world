import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export default function LinkBtn({ children, to, line, style, borderColor }) {
  const styles = {
    line,
    borderColor,
  }
  return (
    <LinkBtnWrapper styles={styles} to={to} style={style}>
      {children}
    </LinkBtnWrapper>
  )
}

const LinkBtnWrapper = styled(Link)(({ styles: { line, borderColor } }) => ({
  cursor: 'pointer',
  color: 'inherit',
  borderBottom: `1px solid transparent`,
  ':hover': {
    borderBottom: line && `1px solid ${borderColor}`,
  },
}))
