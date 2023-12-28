import React, { useState, useRef } from 'react'
import styled from '@emotion/styled'
import { Arrow, DoubleAngle } from '../../assets/icons'

export default function Accordion({ array, title }) {
  const [clicked, setClicked] = useState('0')
  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked('0')
    }
    setClicked(index)
  }
  return (
    <AccordionWrapper>
      <div className='header'>
        <Arrow />
        <h2>{title}</h2>
      </div>
      {array.map((item, index) => (
        <AccordionItem
          onToggle={() => handleToggle(index)}
          active={clicked === index}
          key={index}
          item={item}
        />
      ))}
    </AccordionWrapper>
  )
}

const AccordionItem = ({ item, onToggle, active }) => {
  const { question, answer } = item
  const contentEl = useRef()
  return (
    <AccordionItemWrapper active={active}>
      <div className='flex-between head' onClick={onToggle}>
        {question}
        <DoubleAngle />
      </div>

      <div
        ref={contentEl}
        className='body'
        style={{ height: active ? contentEl.current.scrollHeight : 0 }}
      >
        <div>{answer}</div>
      </div>
    </AccordionItemWrapper>
  )
}

const AccordionWrapper = styled('ul')(() => ({
  maxWidth: '600px',
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '2rem 0 3rem',
  borderBottom: '1px solid var(--card-bg)',
  ':last-of-type': {
    borderBottom: 'none',
  },
  '.header': {
    display: 'flex',
    alignItems: 'center',
    gap: '.4rem',
    svg: { fill: 'var(--primary-500)' },
    h2: {
      color: 'var(--text-white)',
    },
  },
}))

const AccordionItemWrapper = styled('li')(({ active }) => ({
  '.head': {
    background: 'var(--card-bg)',
    cursor: 'pointer',
    padding: '1rem',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',

    color: 'var(--text-white)',
    '.icon': {
      fill: 'var(--primary-500)',
      transition: 'all ease 0.2s',
      transform: active ? 'rotate(90deg)' : 'rotate(270deg)',
    },
    '*': {
      cursor: 'pointer',
    },
  },
  '.body': {
    overflow: 'hidden',
    transition: 'all ease .2s',
    background: 'var(--card-bg)',
    borderRadius: '10px',
    borderTopLeftRadius: '0',
    borderTopRightRadius: '0',
    color: 'var(--text-50)',
    div: {
      padding: '1rem',
    },
  },
}))
