import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import * as THREE from 'three'

import { wavePerson } from '../assets/3D'
export default function WavePerson(props) {
  const group = useRef()
  const { nodes, materials, animations, scene } = useGLTF(wavePerson)
  const { actions } = useAnimations(animations, group)
  const shirtColor = new THREE.Color()
  const shirtPalette = [0xfa6d6d, 0xffffff]
  const skinPalette = [0x8d5524, 0xc68642, 0xe0ac69, 0xf1c27d, 0xffdbac]

  useEffect(() => {
    actions['Take 001'].play()
  }, [actions])

  scene.scale.set(0.49, 0.49, 0.49)
  scene.position.set(
    -8.5 + Math.random() * 2 - 1,
    -0.01,
    4.5 + Math.random() * 2 - 1
  )
  scene.rotation.y = Math.random() * 360

  // scene.traverse(function (node) {
  //   if (node.isMesh) {
  //     node.castShadow = true
  //     node.receiveShadow = true
  //   }
  // })
  // scene.getObjectByName('shirt').traverse(function (node) {
  //   if (node.isMesh) {
  //     shirtColor.setHex(
  //       shirtPalette[Math.floor(Math.random() * shirtPalette.length)]
  //     )
  //     node.material.color.set(shirtColor).convertSRGBToLinear()
  //   }
  // })
  // scene.getObjectByName('body').traverse(function (node) {
  //   if (node.isMesh) {
  //     shirtColor.setHex(
  //       skinPalette[Math.floor(Math.random() * skinPalette.length)]
  //     )
  //     node.material.color.set(shirtColor).convertSRGBToLinear()
  //   }
  // })

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Sketchfab_Scene'>
        <group name='Sketchfab_model' rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name='greeting_waving_110ffbx'
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name='Object_2'>
              <group name='RootNode'>
                <group name='lpMaleG' rotation={[-Math.PI / 2, 0, 0]} />
                <group name='rig_CharRoot' rotation={[-Math.PI / 2, 0, 0]}>
                  <group name='Object_6'>
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name='Object_9'
                      geometry={nodes.Object_9.geometry}
                      material={materials.peopleColors}
                      skeleton={nodes.Object_9.skeleton}
                    />
                    <group name='Object_8' rotation={[-Math.PI / 2, 0, 0]} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}
