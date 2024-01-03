import { a } from '@react-spring/three'
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { moon } from '../assets/3D'

export default function Moon({ setCurrentStage, ...props }) {
  const moonRef = useRef()
  const { nodes, materials } = useGLTF(moon)

  useFrame(({ clock }) => {
    moonRef.current.rotation.y = clock.getElapsedTime() / 5
    if (clock.elapsedTime < 2.5) {
      setCurrentStage(1)
    } else if (clock.elapsedTime < 5.5) {
      setCurrentStage(2)
    } else {
      setCurrentStage(3)
    }
  })
  return (
    <a.group ref={moonRef} {...props} dispose={null}>
      <group scale={0.01}>
        <group scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.node_id30_50_0.geometry}
            material={materials.material}
            position={[0, -0.256, 0]}
            scale={2}
          />
        </group>
      </group>
    </a.group>
  )
}
