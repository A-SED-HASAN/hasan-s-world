import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { sky } from '../assets/3D'

export default function Sky(props) {
  const { nodes, materials } = useGLTF(sky)
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.548}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object001_Material__25__background_JPG_002_0.geometry}
          material={materials.Material__25__background_JPG_002}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  )
}
