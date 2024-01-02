import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { university } from '../assets/3D'

export default function University(props) {
  const { nodes, materials } = useGLTF(university)
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.School}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  )
}
