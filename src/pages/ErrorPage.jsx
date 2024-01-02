import React, { useState } from 'react'
import styled from '@emotion/styled'

import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

import { Moon } from '../models'
import { Spinner } from '../components'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
  const [currentStage, setCurrentStage] = useState(1)
  const [isRotating, setIsRotating] = useState(false)

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
    <Wrapper style={{ cursor: isRotating ? 'grabbing' : 'grab' }}>
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
            isRotating={isRotating}
            setIsRotating={setIsRotating}
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
  h1: {
    position: 'fixed',
    top: '20%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    background: 'red',
    zIndex: '999',
  },
}))

function Info({ currentStage }) {
  if (currentStage === 2) {
    return <h1> are You Lost ?</h1>
  }
  if (currentStage === 3) {
    return <h1>wanna back home ?</h1>
  }

  if (currentStage === 4) {
    return (
      <h1>
        finally <Link to='/'>Home</Link> !
      </h1>
    )
  }
}
