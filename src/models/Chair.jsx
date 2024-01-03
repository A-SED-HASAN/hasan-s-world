import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { woodenChair } from '../assets/3D'

export default function Chair(props) {
  const { nodes, materials } = useGLTF(woodenChair)
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube6_lambert1_0.geometry}
        material={materials.lambert1}
        scale={0.01}
      />
    </group>
  )
}
