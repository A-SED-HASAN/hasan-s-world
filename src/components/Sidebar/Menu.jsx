import React from 'react'
import styled from '@emotion/styled'

import { NavLink } from 'react-router-dom'
import { useGlobalContext } from '../../context'
import { links } from '../../assets/constants'
export default function Menu() {
  const { isSidebarOpen } = useGlobalContext()
  return (
    <Wrapper
      style={{
        transform: isSidebarOpen ? ' translate(100%, 0)' : 'translate(0%, 0)',
      }}
    >
      {links.map((item) => {
        const { id, to, text } = item
        return (
          <NavLink
            key={id}
            to={to}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <li>{text}</li>
          </NavLink>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.ul`
  position: fixed;
  width: 240px;
  height: 100vh;
  padding: 2rem;
  padding-top: 5rem;
  top: 0;
  right: 0;
  background: var(--black);
  list-style-type: none;
  -webkit-font-smoothing: antialiased;

  transform-origin: 0% 0%;

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);

  li {
    padding: 10px 0;
    font-size: 24px;
  }
  a {
    color: var(--white);
    transition: all 0.3s cubic-bezier(0.17, 0.2, 0.05, 1);
  }
  a:hover {
    color: var(--primary-500);
  }

  .active {
    color: var(--primary-500);
    pointer-events: none;
  }
`
