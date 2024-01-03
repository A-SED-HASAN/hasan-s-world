import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { clouds } from '../assets/3D'

export default function Cloud({ numberOfCloud }) {
  const { nodes, materials } = useGLTF(clouds)

  const number = nodes[`Clouds_${numberOfCloud}_Clouds_SG_0`]
  return (
    <mesh
      castShadow
      receiveShadow
      geometry={number.geometry}
      material={materials.Clouds_SG}
    />
  )
}
