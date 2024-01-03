import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { peachTree } from '../assets/3D'

export default function PeachTree(props) {
  const { nodes, materials } = useGLTF(peachTree)
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.grassland_tree_col3_2_grassland_tree_mat_0.geometry}
        material={materials.grassland_tree_mat}
        scale={0.01}
      />
    </group>
  )
}
