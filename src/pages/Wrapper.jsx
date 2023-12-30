import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '../components'
import styled from '@emotion/styled'
export default function Wrapper() {
  return (
    <Container>
      <Outlet />
      <Sidebar />
    </Container>
  )
}

const Container = styled('section')(() => ({
  position: 'relative',
  overflow: 'hidden',
}))
