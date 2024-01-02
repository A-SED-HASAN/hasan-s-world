import { a } from '@react-spring/three'
import { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'

import { tree } from '../assets/3D'

export default function Tree({ position, scale }) {
  const treeRef = useRef()
  // Get access to the Three.js renderer and viewport
  const { gl, viewport } = useThree()
  const { nodes, materials } = useGLTF(tree)

  return (
    <group ref={treeRef} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.initialShadingGroup}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={scale}
        position={position}
      />
    </group>
  )
}
