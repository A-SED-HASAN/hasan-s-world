import React, { useState, Suspense, useEffect } from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import { Moon } from '../models'
import { Spinner } from '../components'

export default function ErrorPage() {
  const [currentStage, setCurrentStage] = useState(1)
  const [moonScale, setMoonScale] = useState(1)

  useEffect(() => {
    if (window.innerWidth < 550) {
      setMoonScale([0.75, 0.75, 0.75])
    } else if (window.innerWidth < 750) {
      setMoonScale([0.85, 0.85, 0.85])
    } else {
      setMoonScale([1, 1, 1])
    }
  }, [])

  return (
    <Wrapper>
      <Info currentStage={currentStage} />
      <Suspense fallback={<Spinner />}>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <OrbitControls
            minAzimuthAngle={-Math.PI / 6.5}
            maxAzimuthAngle={Math.PI / 6.5}
            minPolarAngle={Math.PI / 2.7}
            maxPolarAngle={Math.PI - Math.PI / 2.7}
          />

          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          <Moon
            setCurrentStage={setCurrentStage}
            position={[0, -6.5, -43.4]}
            rotation={[0.1, 4.7077, 0]}
            scale={moonScale}
          />
        </Canvas>
      </Suspense>
    </Wrapper>
  )
}

const Wrapper = styled('section')(() => ({
  color: 'var(--white)',
  display: 'grid',
  placeItems: 'center',
  height: '100vh',
  width: '100vw',
  cursor: 'grab',
  h1: {
    position: 'fixed',
    top: '20%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    zIndex: '999',
    width: '100%',
    textAlign: 'center',
  },
  a: {
    color: 'var(--white)',
    borderBottom: '1px solid transparent',
    transition: '.3s all',
    ':hover': {
      borderBottom: '1px solid var(--white)',
    },
  },
}))

function Info({ currentStage }) {
  const content = [
    <h1> are You Lost ?</h1>,
    <h1>wanna back home ?</h1>,
    <h1>
      finally <Link to='/'>Home</Link> !
    </h1>,
  ]

  return content[currentStage]
}
