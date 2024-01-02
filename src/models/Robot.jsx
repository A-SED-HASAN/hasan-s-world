import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { robot } from '../assets/3D'

export default function Robot(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(robot)
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    actions['Take 001'].play()
  }, [actions])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Sketchfab_Scene'>
        <group name='Sketchfab_model' rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name='974347854dd1434eaa4dedd31cd9b2fdfbx'
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name='Object_2'>
              <group name='RootNode'>
                <group name='Object_4'>
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name='Object_7'
                    geometry={nodes.Object_7.geometry}
                    material={materials.blinn2}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name='Object_8'
                    geometry={nodes.Object_8.geometry}
                    material={materials.lambert2}
                    skeleton={nodes.Object_8.skeleton}
                  />
                  <skinnedMesh
                    name='Object_10'
                    geometry={nodes.Object_10.geometry}
                    material={materials.lambert2}
                    skeleton={nodes.Object_10.skeleton}
                  />
                  <skinnedMesh
                    name='Object_11'
                    geometry={nodes.Object_11.geometry}
                    material={materials.blinn1}
                    skeleton={nodes.Object_11.skeleton}
                  />
                  <skinnedMesh
                    name='Object_13'
                    geometry={nodes.Object_13.geometry}
                    material={materials.lambert2}
                    skeleton={nodes.Object_13.skeleton}
                  />
                  <skinnedMesh
                    name='Object_15'
                    geometry={nodes.Object_15.geometry}
                    material={materials.lambert2}
                    skeleton={nodes.Object_15.skeleton}
                  />
                  {/* little top lamp */}
                  {/* <skinnedMesh
                    name='Object_17'
                    geometry={nodes.Object_17.geometry}
                    material={materials.lambert2}
                    skeleton={nodes.Object_17.skeleton}
                  /> */}
                  <skinnedMesh
                    name='Object_19'
                    geometry={nodes.Object_19.geometry}
                    material={materials.blinn2}
                    skeleton={nodes.Object_19.skeleton}
                  />
                  <skinnedMesh
                    name='Object_20'
                    geometry={nodes.Object_20.geometry}
                    material={materials.lambert2}
                    skeleton={nodes.Object_20.skeleton}
                  />
                  <skinnedMesh
                    name='Object_22'
                    geometry={nodes.Object_22.geometry}
                    material={materials.lambert2}
                    skeleton={nodes.Object_22.skeleton}
                  />
                  <skinnedMesh
                    name='Object_24'
                    geometry={nodes.Object_24.geometry}
                    material={materials.blinn2}
                    skeleton={nodes.Object_24.skeleton}
                  />
                  <skinnedMesh
                    name='Object_26'
                    geometry={nodes.Object_26.geometry}
                    material={materials.blinn2}
                    skeleton={nodes.Object_26.skeleton}
                  />
                  <skinnedMesh
                    name='Object_27'
                    geometry={nodes.Object_27.geometry}
                    material={materials.lambert2}
                    skeleton={nodes.Object_27.skeleton}
                  />
                  <skinnedMesh
                    name='Object_29'
                    geometry={nodes.Object_29.geometry}
                    material={materials.lambert2}
                    skeleton={nodes.Object_29.skeleton}
                  />
                  <skinnedMesh
                    name='Object_31'
                    geometry={nodes.Object_31.geometry}
                    material={materials.blinn2}
                    skeleton={nodes.Object_31.skeleton}
                  />
                  <skinnedMesh
                    name='Object_33'
                    geometry={nodes.Object_33.geometry}
                    material={materials.blinn2}
                    skeleton={nodes.Object_33.skeleton}
                  />
                  <skinnedMesh
                    name='Object_34'
                    geometry={nodes.Object_34.geometry}
                    material={materials.lambert2}
                    skeleton={nodes.Object_34.skeleton}
                  />
                  <skinnedMesh
                    name='Object_36'
                    geometry={nodes.Object_36.geometry}
                    material={materials.lambert2}
                    skeleton={nodes.Object_36.skeleton}
                  />
                  <skinnedMesh
                    name='Object_38'
                    geometry={nodes.Object_38.geometry}
                    material={materials.blinn2}
                    skeleton={nodes.Object_38.skeleton}
                  />
                  <skinnedMesh
                    name='Object_40'
                    geometry={nodes.Object_40.geometry}
                    material={materials.blinn2}
                    skeleton={nodes.Object_40.skeleton}
                  />
                  <skinnedMesh
                    name='Object_41'
                    geometry={nodes.Object_41.geometry}
                    material={materials.lambert2}
                    skeleton={nodes.Object_41.skeleton}
                  />
                  <skinnedMesh
                    name='Object_43'
                    geometry={nodes.Object_43.geometry}
                    material={materials.lambert2}
                    skeleton={nodes.Object_43.skeleton}
                  />
                  <skinnedMesh
                    name='Object_45'
                    geometry={nodes.Object_45.geometry}
                    material={materials.blinn2}
                    skeleton={nodes.Object_45.skeleton}
                  />
                  <group
                    name='Object_6'
                    position={[0.011, 1.687, 0]}
                    rotation={[Math.PI / 2, 0, 0]}
                  />
                  <group name='Object_9' position={[0.011, 1.687, 0]} />
                  <group
                    name='Object_12'
                    position={[0.011, 2.686, -0.999]}
                    rotation={[-Math.PI / 4, 0, 0]}
                    scale={[0.057, 0.156, 0.057]}
                  />
                  <group
                    name='Object_14'
                    position={[0.011, 2.504, -0.818]}
                    rotation={[-Math.PI / 4, 0, 0]}
                    scale={0.221}
                  />
                  <group
                    name='Object_16'
                    position={[0.155, 4.81, -3.304]}
                    rotation={[Math.PI / 4, 0, 0]}
                    scale={0.177}
                  />
                  <group
                    name='Object_18'
                    position={[-0.98, 0.897, 0.566]}
                    rotation={[0, Math.PI / 6, -Math.PI / 4]}
                    scale={0.405}
                  />
                  <group
                    name='Object_21'
                    position={[-0.975, 0.278, 0.553]}
                    rotation={[0, Math.PI / 6, -Math.PI / 4]}
                    scale={0.542}
                  />
                  <group
                    name='Object_23'
                    position={[-1.046, 0.173, 0.604]}
                    rotation={[0, Math.PI / 6, 0]}
                    scale={[0.346, 0.346, 0.315]}
                  />
                  <group
                    name='Object_25'
                    position={[0.98, 0.897, 0.566]}
                    rotation={[0, -Math.PI / 6, Math.PI / 4]}
                    scale={[-0.405, 0.405, 0.405]}
                  />
                  <group
                    name='Object_28'
                    position={[0.975, 0.278, 0.553]}
                    rotation={[0, -Math.PI / 6, Math.PI / 4]}
                    scale={[-0.542, 0.542, 0.542]}
                  />
                  <group
                    name='Object_30'
                    position={[1.046, 0.173, 0.604]}
                    rotation={[0, -Math.PI / 6, 0]}
                    scale={[-0.346, 0.346, 0.315]}
                  />
                  <group
                    name='Object_32'
                    position={[-0.8, 0.897, -0.8]}
                    rotation={[0, -Math.PI / 4, -Math.PI / 4]}
                    scale={0.405}
                  />
                  <group
                    name='Object_35'
                    position={[-0.787, 0.278, -0.799]}
                    rotation={[0, -Math.PI / 4, -Math.PI / 4]}
                    scale={0.542}
                  />
                  <group
                    name='Object_37'
                    position={[-0.854, 0.173, -0.854]}
                    rotation={[0, -Math.PI / 4, 0]}
                    scale={[0.346, 0.346, 0.315]}
                  />
                  <group
                    name='Object_39'
                    position={[0.8, 0.897, -0.8]}
                    rotation={[0, Math.PI / 4, Math.PI / 4]}
                    scale={[-0.405, 0.405, 0.405]}
                  />
                  <group
                    name='Object_42'
                    position={[0.787, 0.278, -0.799]}
                    rotation={[0, Math.PI / 4, Math.PI / 4]}
                    scale={[-0.542, 0.542, 0.542]}
                  />
                  <group
                    name='Object_44'
                    position={[0.854, 0.173, -0.854]}
                    rotation={[0, Math.PI / 4, 0]}
                    scale={[-0.346, 0.346, 0.315]}
                  />
                  <group name='group1' position={[0.011, 1.687, 0]}>
                    <group name='pSphere1' rotation={[Math.PI / 2, 0, 0]} />
                    <group name='pSphere2' />
                    <group
                      name='pCylinder1'
                      position={[0, 0.999, -0.999]}
                      rotation={[-Math.PI / 4, 0, 0]}
                      scale={[0.057, 0.156, 0.057]}
                    />
                    <group
                      name='pCylinder2'
                      position={[0, 0.818, -0.818]}
                      rotation={[-Math.PI / 4, 0, 0]}
                      scale={0.221}
                    />
                  </group>
                  <group
                    name='pCube7'
                    position={[0.155, 4.81, -3.304]}
                    rotation={[Math.PI / 4, 0, 0]}
                    scale={0.177}
                  />
                  <group name='group3' rotation={[0, Math.PI / 6, 0]}>
                    <group
                      name='group2'
                      position={[0.196, -0.124, 0]}
                      scale={0.923}
                    >
                      <group
                        name='pCube2'
                        position={[-1.439, 1.106, 0]}
                        rotation={[0, 0, -Math.PI / 4]}
                        scale={0.439}
                      />
                      <group
                        name='pCube6'
                        position={[-1.427, 0.436, -0.009]}
                        rotation={[0, 0, -Math.PI / 4]}
                        scale={0.588}
                      />
                    </group>
                    <group
                      name='pCube1'
                      position={[-1.208, 0.173, 0]}
                      scale={[0.346, 0.346, 0.315]}
                    />
                  </group>
                  <group
                    name='group4'
                    rotation={[-Math.PI, Math.PI / 6, 0]}
                    scale={-1}
                  >
                    <group
                      name='group2_1'
                      position={[0.196, -0.124, 0]}
                      scale={0.923}
                    >
                      <group
                        name='pCube2_1'
                        position={[-1.439, 1.106, 0]}
                        rotation={[0, 0, -Math.PI / 4]}
                        scale={0.439}
                      />
                      <group
                        name='pCube6_1'
                        position={[-1.427, 0.436, -0.009]}
                        rotation={[0, 0, -Math.PI / 4]}
                        scale={0.588}
                      />
                    </group>
                    <group
                      name='pCube1_1'
                      position={[-1.208, 0.173, 0]}
                      scale={[0.346, 0.346, 0.315]}
                    />
                  </group>
                  <group name='group5' rotation={[0, -Math.PI / 4, 0]}>
                    <group
                      name='group2_2'
                      position={[0.196, -0.124, 0]}
                      scale={0.923}
                    >
                      <group
                        name='pCube2_2'
                        position={[-1.439, 1.106, 0]}
                        rotation={[0, 0, -Math.PI / 4]}
                        scale={0.439}
                      />
                      <group
                        name='pCube6_2'
                        position={[-1.427, 0.436, -0.009]}
                        rotation={[0, 0, -Math.PI / 4]}
                        scale={0.588}
                      />
                    </group>
                    <group
                      name='pCube1_2'
                      position={[-1.208, 0.173, 0]}
                      scale={[0.346, 0.346, 0.315]}
                    />
                  </group>
                  <group
                    name='group6'
                    rotation={[-Math.PI, -Math.PI / 4, 0]}
                    scale={-1}
                  >
                    <group
                      name='group2_3'
                      position={[0.196, -0.124, 0]}
                      scale={0.923}
                    >
                      <group
                        name='pCube2_3'
                        position={[-1.439, 1.106, 0]}
                        rotation={[0, 0, -Math.PI / 4]}
                        scale={0.439}
                      />
                      <group
                        name='pCube6_3'
                        position={[-1.427, 0.436, -0.009]}
                        rotation={[0, 0, -Math.PI / 4]}
                        scale={0.588}
                      />
                    </group>
                    <group
                      name='pCube1_3'
                      position={[-1.208, 0.173, 0]}
                      scale={[0.346, 0.346, 0.315]}
                    />
                  </group>
                  <group name='ikHandle1' position={[-1.301, 0, 0.321]} />
                  <group name='ikHandle2' position={[-0.854, 0, -0.854]} />
                  <group name='ikHandle3' position={[0.854, 0, -0.854]} />
                  <group name='ikHandle4' position={[1.046, 0, 1.02]} />
                  <group name='nurbsCircle5'>
                    <group name='nurbsCircle2' position={[0, 0, 0.416]}>
                      <group name='locator2' />
                    </group>
                    <group name='nurbsCircle1' position={[-0.255, 0, -0.283]}>
                      <group name='locator1' />
                    </group>
                    <group name='nurbsCircle4'>
                      <group name='locator3' />
                    </group>
                    <group name='nurbsCircle3'>
                      <group name='locator4' />
                    </group>
                  </group>
                  <group name='group8' />
                  <group name='group9' rotation={[-Math.PI, 0, 0]} scale={-1} />
                  <group
                    name='nurbsCircle6'
                    position={[0.081, -0.451, 0.161]}
                    rotation={[-0.063, -0.319, -0.022]}
                  >
                    <group name='nurbsCircle7'>
                      <group name='nurbsCircle8'>
                        <group name='nurbsCircle9'>
                          <group name='nurbsCircle10' />
                        </group>
                      </group>
                    </group>
                    <group
                      name='nurbsCircle11'
                      position={[-0.042, 0.022, 0.266]}
                      rotation={[-0.166, -0.279, -0.026]}
                    />
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
