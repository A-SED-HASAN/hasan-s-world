import React, { useState } from 'react'
import styled from '@emotion/styled'

import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

import { Moon } from '../models'
import { Spinner } from '../components'
import { Link } from 'react-router-dom'
import { OrbitControls } from '@react-three/drei'

export default function ErrorPage() {
  const [currentStage, setCurrentStage] = useState(1)

  const adjustMoonForScreenSize = () => {
    let screenScale, screenPosition

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9]
      screenPosition = [0, -6.5, -43.4]
    } else {
      screenScale = [1, 1, 1]
      screenPosition = [0, -6.5, -43.4]
    }

    return [screenScale, screenPosition]
  }

  const [moonScale, moonPosition] = adjustMoonForScreenSize()

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
            position={moonPosition}
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
  if (currentStage === 1) {
    return <h1> are You Lost ?</h1>
  }
  if (currentStage === 2) {
    return <h1>wanna back home ?</h1>
  }

  if (currentStage === 3) {
    return (
      <h1>
        finally <Link to='/'>Home</Link> !
      </h1>
    )
  }
}
