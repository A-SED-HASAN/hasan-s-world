import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { trunk } from '../assets/3D'

export default function Trunk(props) {
  const { nodes, materials } = useGLTF(trunk)
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.Wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.Wood_light}
        />
      </group>
    </group>
  )
}
