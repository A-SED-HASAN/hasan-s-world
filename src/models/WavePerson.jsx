import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

import { wavePerson } from '../assets/3D'
export default function WavePerson(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(wavePerson)
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    actions['Take 001'].play()
  }, [actions])

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
