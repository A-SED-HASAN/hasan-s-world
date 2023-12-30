import React from 'react'

import styled from '@emotion/styled'
import { useGlobalContext } from '../../context'

export default function ToggleBtn() {
  const { toggleSidebar } = useGlobalContext()
  return (
    <Wrapper onClick={toggleSidebar}>
      <input type='checkbox' />
      <span></span>
      <span></span>
      <span></span>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: block;
  position: fixed;
  top: 1rem;
  right: 1rem;

  z-index: 888;

  -webkit-user-select: none;
  user-select: none;

  input {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    right: -5px;

    cursor: pointer;

    opacity: 0; /* hide this */
    z-index: 999; /* and place it over the hamburger */

    -webkit-touch-callout: none;
  }

  /* hamburger */
  span {
    display: block;
    width: 28px;
    height: 3px;
    margin-bottom: 6px;
    position: relative;

    background: var(--white);
    border-radius: 2px;

    z-index: 888;

    transform-origin: -4px 0px;

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }

  span:first-of-type {
    transform-origin: 0% 0%;
  }

  span:nth-last-of-type(2) {
    transform-origin: 0% 100%;
  }

  /* Transform into a crossmark. */

  input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(0px, -2px);
    background: white !important;
  }

  /* hide the middle one. */

  input:checked ~ span:nth-last-of-type(2) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  /* last one should go the other direction */
  input:checked ~ span:nth-last-of-type(1) {
    transform: rotate(-45deg) translate(-2px, 2px);
  }
`
