import React, { Suspense } from 'react'
import styled from '@emotion/styled'

import { CircleBtn, Greeting, Spinner } from '../components'
import { Moon, Mute, Sun, UnMute } from '../assets/icons'
import { useGlobalContext } from '../context'

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import {
  Chair,
  Drifter,
  FoodTruck,
  LaserBot,
  MainTree,
  Store,
  Trunk,
  University,
  WavePerson,
  Cloud,
} from '../models'
import { Robot } from '../models'
import PeachTree from '../models/PeachTree'

export default function Home() {
  const { isDarkMode, toggleDarkMode, isMute, toggleMute } = useGlobalContext()

  return (
    <Suspense fallback={<Greeting />}>
      <Wrapper>
        <nav className='flex-between'>
          <h1>
            hasan's
            <br /> world
          </h1>
        </nav>

        <Suspense fallback={<Spinner />}>
          <Canvas
            camera={{
              position: [30, 100, 150],
              fov: 75,
              near: 0.1,
              far: 800,
            }}
          >
            <OrbitControls autoRotate />
            <directionalLight position={[0, 0, 1]} intensity={2.5} />
            <ambientLight intensity={1} />
            <pointLight position={[5, 10, 0]} intensity={2} />
            <spotLight
              position={[10, 10, 10]}
              angle={0.15}
              penumbra={1}
              intensity={2}
            />

            <MainTree position={[-45, -20, 0]} scale={[0.1, 0.1, 0.1]} />
            <Robot position={[60, 0, 0]} scale={[10, 10, 10]} />
            <WavePerson
              // position={[-50, 0, 0]}
              scale={[20, 20, 20]}
              rotation={[0, 0, 0]}
            />
            <LaserBot
              position={[10, 40, 0]}
              scale={[10, 10, 10]}
              rotation={[0, 0, 0]}
            />
            <FoodTruck
              position={[10, -40, 0]}
              scale={[15, 15, 15]}
              rotation={[0, 0, 0]}
            />
            <Drifter
              position={[-100, -40, 0]}
              scale={[0.1, 0.1, 0.1]}
              rotation={[-0.2, 4.5, 0.5]}
            />
            <University
              position={[100, 0, 0]}
              scale={[1, 1, 1]}
              rotation={[0, 10.9, 0.5]}
            />
            <Chair
              position={[100, -80, 0]}
              scale={[200, 200, 200]}
              rotation={[0, 9, 0]}
            />
            <PeachTree
              position={[50, -120, 0]}
              scale={[10, 10, 10]}
              rotation={[-0.5, 0, 0]}
            />
            <Store
              position={[-50, -140, 0]}
              scale={[10, 10, 10]}
              rotation={[-0.5, 0, 0]}
            />
            <Trunk
              position={[0, -140, 0]}
              scale={[20, 20, 20]}
              rotation={[-0.5, 0, 0]}
            />
            <Cloud
              numberOfCloud='15'
              position={[0, -140, 0]}
              scale={[20, 20, 20]}
              rotation={[-0.5, 0, 0]}
            />
          </Canvas>
        </Suspense>

        <footer>
          <CircleBtn
            icon={isMute ? <UnMute /> : <Mute />}
            fn={toggleMute}
            background='white'
            color='black'
            hover='var(--primary-500)'
            hoverText='white'
          />
          <CircleBtn
            icon={isDarkMode ? <Sun /> : <Moon />}
            fn={toggleDarkMode}
            background='white'
            color='black'
            hover='var(--primary-500)'
            hoverText='white'
          />
        </footer>
      </Wrapper>
    </Suspense>
  )
}
const Wrapper = styled('section')(() => ({
  position: 'relative',
  width: '100vw',
  height: '100vh',
  background: 'white',
  overflow: 'hidden',
  backgroundColor: 'black',
  'nav , footer': {
    padding: '1rem',
    position: 'fixed',
    width: '100%',
    left: '0',
    zIndex: '666',
  },
  nav: {
    top: '0',
    h1: {
      fontSize: '1rem',
      fontWeight: '600',
      lineHeight: '100%',
      textTransform: 'uppercase',
      color: 'var(--black)',
    },
    svg: {
      width: '40px',
    },
  },
  footer: {
    bottom: '0',
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
    gap: '.5rem',
    svg: {
      width: '24px',
    },
  },

  canvas: {
    background: `linear-gradient(
      0deg,
      hsl(200, 50%, 100%) 50%,
      hsl(214, 80%, 70%) 100%
    )`,
    cursor: 'move',
    cursor: 'grab',
  },
}))
