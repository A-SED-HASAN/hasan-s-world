import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { store } from '../assets/3D'

export default function Store(props) {
  const { nodes, materials } = useGLTF(store)
  return (
    <group {...props} dispose={null}>
      <group position={[-0.086, 0.99, 1.57]} scale={[0.407, 0.29, 0.469]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube2_Foundation_0.geometry}
          material={materials.Foundation}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube2_Walls_0.geometry}
          material={materials.Walls}
        />
      </group>
      <group position={[0, -0.098, 0]} scale={0.394}>
        <group position={[-1.055, -2.743, 0.456]} rotation={[0, 0, -0.084]}>
          <group position={[0.322, -0.06, 0]} rotation={[0, 0, 0.015]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube3_Window_B_0.geometry}
              material={materials.Window_B}
              position={[4.614, 11.174, -0.509]}
              scale={[0.587, 1.378, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube4_Flower_Box_1_0.geometry}
              material={materials.Flower_Box_1}
              position={[5.41, 9.388, -0.509]}
              rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
              scale={[0.469, 1.055, 0.562]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube5_Window_B_0.geometry}
              material={materials.Window_B}
              position={[4.884, 11.366, -0.514]}
              scale={[0.225, 0.096, 0.852]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube6_Window_B_0.geometry}
              material={materials.Window_B}
              position={[4.884, 11.165, -0.496]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[0.225, 0.096, 1.323]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube7_Window_N_0.geometry}
              material={materials.Window_N}
              position={[4.614, 11.174, -3.138]}
              scale={[0.587, 1.378, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube8_Flower_Box_2_0.geometry}
              material={materials.Flower_Box_2}
              position={[5.41, 9.388, -3.138]}
              rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
              scale={[0.469, 1.055, 0.562]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube9_Window_N_0.geometry}
              material={materials.Window_N}
              position={[4.884, 11.366, -3.143]}
              scale={[0.225, 0.096, 0.852]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube10_Window_N_0.geometry}
              material={materials.Window_N}
              position={[4.884, 11.165, -3.125]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[0.225, 0.096, 1.323]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube11_Window_B_0.geometry}
              material={materials.Window_B}
              position={[4.614, 11.174, -5.731]}
              scale={[0.587, 1.378, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube12_Flower_Box_1_0.geometry}
              material={materials.Flower_Box_1}
              position={[5.41, 9.388, -5.731]}
              rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
              scale={[0.469, 1.055, 0.562]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube13_Window_B_0.geometry}
              material={materials.Window_B}
              position={[4.884, 11.366, -5.735]}
              scale={[0.225, 0.096, 0.852]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube14_Window_B_0.geometry}
              material={materials.Window_B}
              position={[4.884, 11.165, -5.718]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[0.225, 0.096, 1.323]}
            />
          </group>
        </group>
        <group position={[-0.735, 1.85, 0.456]} rotation={[0, 0, -0.084]}>
          <group position={[0.322, -0.06, 0]} rotation={[0, 0, 0.015]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube3_Window_B_0_1.geometry}
              material={materials.Window_B}
              position={[4.614, 11.174, -0.509]}
              scale={[0.587, 1.378, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube4_Flower_Box_1_0_1.geometry}
              material={materials.Flower_Box_1}
              position={[5.41, 9.388, -0.509]}
              rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
              scale={[0.469, 1.055, 0.562]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube5_Window_B_0_1.geometry}
              material={materials.Window_B}
              position={[4.884, 11.366, -0.514]}
              scale={[0.225, 0.096, 0.852]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube6_Window_B_0_1.geometry}
              material={materials.Window_B}
              position={[4.884, 11.165, -0.496]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[0.225, 0.096, 1.323]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube7_Window_N_0_1.geometry}
              material={materials.Window_N}
              position={[4.614, 11.174, -3.138]}
              scale={[0.587, 1.378, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube8_Flower_Box_2_0_1.geometry}
              material={materials.Flower_Box_2}
              position={[5.41, 9.388, -3.138]}
              rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
              scale={[0.469, 1.055, 0.562]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube9_Window_N_0_1.geometry}
              material={materials.Window_N}
              position={[4.884, 11.366, -3.143]}
              scale={[0.225, 0.096, 0.852]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube10_Window_N_0_1.geometry}
              material={materials.Window_N}
              position={[4.884, 11.165, -3.125]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[0.225, 0.096, 1.323]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube11_Window_B_0_1.geometry}
              material={materials.Window_B}
              position={[4.614, 11.174, -5.731]}
              scale={[0.587, 1.378, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube12_Flower_Box_1_0_1.geometry}
              material={materials.Flower_Box_1}
              position={[5.41, 9.388, -5.731]}
              rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
              scale={[0.469, 1.055, 0.562]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube13_Window_B_0_1.geometry}
              material={materials.Window_B}
              position={[4.884, 11.366, -5.735]}
              scale={[0.225, 0.096, 0.852]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube14_Window_B_0_1.geometry}
              material={materials.Window_B}
              position={[4.884, 11.165, -5.718]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[0.225, 0.096, 1.323]}
            />
          </group>
        </group>
      </group>
      <group position={[-0.086, 2.532, -1.043]} scale={[0.538, 0.748, 0.538]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube15_Walls_0.geometry}
          material={materials.Walls}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube15_Foundation_0.geometry}
          material={materials.Foundation}
        />
      </group>
      <group
        position={[-1.101, -0.098, -0.937]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.394}
      >
        <group position={[-1.099, -2.743, 0.456]} rotation={[0, 0, -0.084]}>
          <group position={[0.322, -0.06, 0]} rotation={[0, 0, 0.015]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube3_Window_B_0_2.geometry}
              material={materials.Window_B}
              position={[4.614, 11.174, -0.509]}
              scale={[0.587, 1.378, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube4_Flower_Box_1_0_2.geometry}
              material={materials.Flower_Box_1}
              position={[5.41, 9.388, -0.509]}
              rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
              scale={[0.469, 1.055, 0.562]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube5_Window_B_0_2.geometry}
              material={materials.Window_B}
              position={[4.884, 11.366, -0.514]}
              scale={[0.225, 0.096, 0.852]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube6_Window_B_0_2.geometry}
              material={materials.Window_B}
              position={[4.884, 11.165, -0.496]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[0.225, 0.096, 1.323]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube7_Window_N_0_2.geometry}
              material={materials.Window_N}
              position={[4.614, 11.174, -3.138]}
              scale={[0.587, 1.378, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube8_Flower_Box_2_0_2.geometry}
              material={materials.Flower_Box_2}
              position={[5.41, 9.388, -3.138]}
              rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
              scale={[0.469, 1.055, 0.562]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube9_Window_N_0_2.geometry}
              material={materials.Window_N}
              position={[4.884, 11.366, -3.143]}
              scale={[0.225, 0.096, 0.852]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube10_Window_N_0_2.geometry}
              material={materials.Window_N}
              position={[4.884, 11.165, -3.125]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[0.225, 0.096, 1.323]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube11_Window_B_0_2.geometry}
              material={materials.Window_B}
              position={[4.614, 11.174, -5.731]}
              scale={[0.587, 1.378, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube12_Flower_Box_1_0_2.geometry}
              material={materials.Flower_Box_1}
              position={[5.41, 9.388, -5.731]}
              rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
              scale={[0.469, 1.055, 0.562]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube13_Window_B_0_2.geometry}
              material={materials.Window_B}
              position={[4.884, 11.366, -5.735]}
              scale={[0.225, 0.096, 0.852]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube14_Window_B_0_2.geometry}
              material={materials.Window_B}
              position={[4.884, 11.165, -5.718]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[0.225, 0.096, 1.323]}
            />
          </group>
        </group>
        <group position={[-0.794, 1.85, 0.456]} rotation={[0, 0, -0.084]}>
          <group position={[0.322, -0.06, 0]} rotation={[0, 0, 0.015]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube3_Window_B_0_3.geometry}
              material={materials.Window_B}
              position={[4.614, 11.174, -0.509]}
              scale={[0.587, 1.378, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube4_Flower_Box_1_0_3.geometry}
              material={materials.Flower_Box_1}
              position={[5.41, 9.388, -0.509]}
              rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
              scale={[0.469, 1.055, 0.562]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube5_Window_B_0_3.geometry}
              material={materials.Window_B}
              position={[4.884, 11.366, -0.514]}
              scale={[0.225, 0.096, 0.852]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube6_Window_B_0_3.geometry}
              material={materials.Window_B}
              position={[4.884, 11.165, -0.496]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[0.225, 0.096, 1.323]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube7_Window_N_0_3.geometry}
              material={materials.Window_N}
              position={[4.614, 11.174, -3.138]}
              scale={[0.587, 1.378, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube8_Flower_Box_2_0_3.geometry}
              material={materials.Flower_Box_2}
              position={[5.41, 9.388, -3.138]}
              rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
              scale={[0.469, 1.055, 0.562]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube9_Window_N_0_3.geometry}
              material={materials.Window_N}
              position={[4.884, 11.366, -3.143]}
              scale={[0.225, 0.096, 0.852]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube10_Window_N_0_3.geometry}
              material={materials.Window_N}
              position={[4.884, 11.165, -3.125]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[0.225, 0.096, 1.323]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube11_Window_B_0_3.geometry}
              material={materials.Window_B}
              position={[4.614, 11.174, -5.731]}
              scale={[0.587, 1.378, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube12_Flower_Box_1_0_3.geometry}
              material={materials.Flower_Box_1}
              position={[5.41, 9.388, -5.731]}
              rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
              scale={[0.469, 1.055, 0.562]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube13_Window_B_0_3.geometry}
              material={materials.Window_B}
              position={[4.884, 11.366, -5.735]}
              scale={[0.225, 0.096, 0.852]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube14_Window_B_0_3.geometry}
              material={materials.Window_B}
              position={[4.884, 11.165, -5.718]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[0.225, 0.096, 1.323]}
            />
          </group>
        </group>
      </group>
      <group
        position={[0.997, -0.098, -1.102]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.394}
      >
        <group position={[-0.989, -2.743, 0.456]} rotation={[0, 0, -0.084]}>
          <group position={[0.322, -0.06, 0]} rotation={[0, 0, 0.015]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube3_Window_B_0_4.geometry}
              material={materials.Window_B}
              position={[4.614, 11.174, -0.509]}
              scale={[0.587, 1.378, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube4_Flower_Box_1_0_4.geometry}
              material={materials.Flower_Box_1}
              position={[5.41, 9.388, -0.509]}
              rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
              scale={[0.469, 1.055, 0.562]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube5_Window_B_0_4.geometry}
              material={materials.Window_B}
              position={[4.884, 11.366, -0.514]}
              scale={[0.225, 0.096, 0.852]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube6_Window_B_0_4.geometry}
              material={materials.Window_B}
              position={[4.884, 11.165, -0.496]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[0.225, 0.096, 1.323]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube7_Window_N_0_4.geometry}
              material={materials.Window_N}
              position={[4.614, 11.174, -3.138]}
              scale={[0.587, 1.378, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube8_Flower_Box_2_0_4.geometry}
              material={materials.Flower_Box_2}
              position={[5.41, 9.388, -3.138]}
              rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
              scale={[0.469, 1.055, 0.562]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube9_Window_N_0_4.geometry}
              material={materials.Window_N}
              position={[4.884, 11.366, -3.143]}
              scale={[0.225, 0.096, 0.852]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube10_Window_N_0_4.geometry}
              material={materials.Window_N}
              position={[4.884, 11.165, -3.125]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[0.225, 0.096, 1.323]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube11_Window_B_0_4.geometry}
              material={materials.Window_B}
              position={[4.614, 11.174, -5.731]}
              scale={[0.587, 1.378, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube12_Flower_Box_1_0_4.geometry}
              material={materials.Flower_Box_1}
              position={[5.41, 9.388, -5.731]}
              rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
              scale={[0.469, 1.055, 0.562]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube13_Window_B_0_4.geometry}
              material={materials.Window_B}
              position={[4.884, 11.366, -5.735]}
              scale={[0.225, 0.096, 0.852]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube14_Window_B_0_4.geometry}
              material={materials.Window_B}
              position={[4.884, 11.165, -5.718]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[0.225, 0.096, 1.323]}
            />
          </group>
        </group>
        <group position={[-0.649, 1.85, 0.456]} rotation={[0, 0, -0.084]}>
          <group position={[0.322, -0.06, 0]} rotation={[0, 0, 0.015]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube3_Window_B_0_5.geometry}
              material={materials.Window_B}
              position={[4.614, 11.174, -0.509]}
              scale={[0.587, 1.378, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube4_Flower_Box_1_0_5.geometry}
              material={materials.Flower_Box_1}
              position={[5.41, 9.388, -0.509]}
              rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
              scale={[0.469, 1.055, 0.562]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube5_Window_B_0_5.geometry}
              material={materials.Window_B}
              position={[4.884, 11.366, -0.514]}
              scale={[0.225, 0.096, 0.852]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube6_Window_B_0_5.geometry}
              material={materials.Window_B}
              position={[4.884, 11.165, -0.496]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[0.225, 0.096, 1.323]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube7_Window_N_0_5.geometry}
              material={materials.Window_N}
              position={[4.614, 11.174, -3.138]}
              scale={[0.587, 1.378, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube8_Flower_Box_2_0_5.geometry}
              material={materials.Flower_Box_2}
              position={[5.41, 9.388, -3.138]}
              rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
              scale={[0.469, 1.055, 0.562]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube9_Window_N_0_5.geometry}
              material={materials.Window_N}
              position={[4.884, 11.366, -3.143]}
              scale={[0.225, 0.096, 0.852]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube10_Window_N_0_5.geometry}
              material={materials.Window_N}
              position={[4.884, 11.165, -3.125]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[0.225, 0.096, 1.323]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube11_Window_B_0_5.geometry}
              material={materials.Window_B}
              position={[4.614, 11.174, -5.731]}
              scale={[0.587, 1.378, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube12_Flower_Box_1_0_5.geometry}
              material={materials.Flower_Box_1}
              position={[5.41, 9.388, -5.731]}
              rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
              scale={[0.469, 1.055, 0.562]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube13_Window_B_0_5.geometry}
              material={materials.Window_B}
              position={[4.884, 11.366, -5.735]}
              scale={[0.225, 0.096, 0.852]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube14_Window_B_0_5.geometry}
              material={materials.Window_B}
              position={[4.884, 11.165, -5.718]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[0.225, 0.096, 1.323]}
            />
          </group>
        </group>
      </group>
      <group scale={0.394}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube18_Window_N_0.geometry}
          material={materials.Window_N}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube18_Door_texture_0.geometry}
          material={materials.Door_texture}
        />
      </group>
      <group position={[0, -0.054, 0]} scale={0.394}>
        <group
          position={[4.339, 3.195, -0.053]}
          rotation={[0, 0, -0.069]}
          scale={[0.587, 1.378, 1]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube25_Window_B_0.geometry}
            material={materials.Window_B}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube25_Window_N_0.geometry}
            material={materials.Window_N}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube27_Window_onning_0.geometry}
          material={materials.Window_onning}
          position={[4.606, 1.661, -0.058]}
          scale={[0.878, 1, 0.795]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube26_Window_onning_0.geometry}
          material={materials.Window_onning}
          position={[4.888, 3.925, -0.052]}
          scale={[1, 0.598, 1.422]}
        />
      </group>
      <group position={[0, -0.054, -2.072]} scale={0.394}>
        <group
          position={[4.339, 3.195, -0.053]}
          rotation={[0, 0, -0.069]}
          scale={[0.587, 1.378, 1]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube25_Window_B_0_1.geometry}
            material={materials.Window_B}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube25_Window_N_0_1.geometry}
            material={materials.Window_N}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube27_Window_onning_0_1.geometry}
          material={materials.Window_onning}
          position={[4.606, 1.661, -0.058]}
          scale={[0.878, 1, 0.795]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube26_Window_onning_0_1.geometry}
          material={materials.Window_onning}
          position={[4.888, 3.925, -0.052]}
          scale={[1, 0.598, 1.422]}
        />
      </group>
      <group
        position={[-0.438, 0.095, 1.84]}
        rotation={[0, 0, -0.078]}
        scale={0.394}
      >
        <group
          position={[4.339, 3.195, -0.053]}
          rotation={[0, 0, -0.069]}
          scale={[0.587, 1.378, 1]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube25_Window_B_0_2.geometry}
            material={materials.Window_B}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube25_Window_N_0_2.geometry}
            material={materials.Window_N}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube27_Window_onning_0_2.geometry}
          material={materials.Window_onning}
          position={[4.606, 1.661, -0.058]}
          scale={[0.878, 1, 0.795]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube26_Window_onning_0_2.geometry}
          material={materials.Window_onning}
          position={[4.888, 3.925, -0.052]}
          scale={[1, 0.598, 1.422]}
        />
      </group>
      <group position={[-0.094, 2.127, 1.668]} scale={[0.649, 0.02, 0.525]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube28_Trim_0.geometry}
          material={materials.Trim}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube28_Roof1_0.geometry}
          material={materials.Roof1}
        />
      </group>
      <group position={[-0.094, 5.765, -1.055]} scale={[0.844, 0.022, 0.843]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube31_Trim_0.geometry}
          material={materials.Trim}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube31_Roof1_0.geometry}
          material={materials.Roof1}
        />
      </group>
      <group
        position={[-0.023, 1.453, -0.235]}
        rotation={[0.052, 0, 0]}
        scale={[0.394, 0.298, 0.394]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube33_Trim_detail_0.geometry}
          material={materials.Trim_detail}
          position={[-4.233, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube34_Trim_detail_0.geometry}
          material={materials.Trim_detail}
          position={[-3.217, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube35_Trim_detail_0.geometry}
          material={materials.Trim_detail}
          position={[-2.201, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube36_Trim_detail_0.geometry}
          material={materials.Trim_detail}
          position={[-1.185, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube37_Trim_detail_0.geometry}
          material={materials.Trim_detail}
          position={[-0.169, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube38_Trim_detail_0.geometry}
          material={materials.Trim_detail}
          position={[0.847, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube39_Trim_detail_0.geometry}
          material={materials.Trim_detail}
          position={[1.863, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube40_Trim_detail_0.geometry}
          material={materials.Trim_detail}
          position={[2.879, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube41_Trim_detail_0.geometry}
          material={materials.Trim_detail}
          position={[3.895, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube42_Trim_detail_0.geometry}
          material={materials.Trim_detail}
          position={[4.911, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube32_Trim_detail_0.geometry}
          material={materials.Trim_detail}
          position={[-5.249, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
      </group>
      <group
        position={[-0.148, 1.45, -1.86]}
        rotation={[3.091, 0, 3.14]}
        scale={[0.394, 0.298, 0.394]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube33_Trim_detail_0_1.geometry}
          material={materials.Trim_detail}
          position={[-4.233, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube34_Trim_detail_0_1.geometry}
          material={materials.Trim_detail}
          position={[-3.217, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube35_Trim_detail_0_1.geometry}
          material={materials.Trim_detail}
          position={[-2.201, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube36_Trim_detail_0_1.geometry}
          material={materials.Trim_detail}
          position={[-1.185, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube37_Trim_detail_0_1.geometry}
          material={materials.Trim_detail}
          position={[-0.169, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube38_Trim_detail_0_1.geometry}
          material={materials.Trim_detail}
          position={[0.847, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube39_Trim_detail_0_1.geometry}
          material={materials.Trim_detail}
          position={[1.863, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube40_Trim_detail_0_1.geometry}
          material={materials.Trim_detail}
          position={[2.879, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube41_Trim_detail_0_1.geometry}
          material={materials.Trim_detail}
          position={[3.895, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube42_Trim_detail_0_1.geometry}
          material={materials.Trim_detail}
          position={[4.911, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube32_Trim_detail_0_1.geometry}
          material={materials.Trim_detail}
          position={[-5.249, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
      </group>
      <group
        position={[0.734, 1.45, -1.07]}
        rotation={[Math.PI / 2, 1.521, -Math.PI / 2]}
        scale={[0.394, 0.298, 0.394]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube33_Trim_detail_0_2.geometry}
          material={materials.Trim_detail}
          position={[-4.233, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube34_Trim_detail_0_2.geometry}
          material={materials.Trim_detail}
          position={[-3.217, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube35_Trim_detail_0_2.geometry}
          material={materials.Trim_detail}
          position={[-2.201, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube36_Trim_detail_0_2.geometry}
          material={materials.Trim_detail}
          position={[-1.185, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube37_Trim_detail_0_2.geometry}
          material={materials.Trim_detail}
          position={[-0.169, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube38_Trim_detail_0_2.geometry}
          material={materials.Trim_detail}
          position={[0.847, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube39_Trim_detail_0_2.geometry}
          material={materials.Trim_detail}
          position={[1.863, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube40_Trim_detail_0_2.geometry}
          material={materials.Trim_detail}
          position={[2.879, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube41_Trim_detail_0_2.geometry}
          material={materials.Trim_detail}
          position={[3.895, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube42_Trim_detail_0_2.geometry}
          material={materials.Trim_detail}
          position={[4.911, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube32_Trim_detail_0_2.geometry}
          material={materials.Trim_detail}
          position={[-5.249, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
      </group>
      <group
        position={[-0.81, 1.482, -0.937]}
        rotation={[Math.PI / 2, -1.498, Math.PI / 2]}
        scale={[0.394, 0.298, 0.394]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube33_Trim_detail_0_3.geometry}
          material={materials.Trim_detail}
          position={[-4.233, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube34_Trim_detail_0_3.geometry}
          material={materials.Trim_detail}
          position={[-3.217, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube35_Trim_detail_0_3.geometry}
          material={materials.Trim_detail}
          position={[-2.201, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube36_Trim_detail_0_3.geometry}
          material={materials.Trim_detail}
          position={[-1.185, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube37_Trim_detail_0_3.geometry}
          material={materials.Trim_detail}
          position={[-0.169, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube38_Trim_detail_0_3.geometry}
          material={materials.Trim_detail}
          position={[0.847, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube39_Trim_detail_0_3.geometry}
          material={materials.Trim_detail}
          position={[1.863, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube40_Trim_detail_0_3.geometry}
          material={materials.Trim_detail}
          position={[2.879, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube41_Trim_detail_0_3.geometry}
          material={materials.Trim_detail}
          position={[3.895, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube42_Trim_detail_0_3.geometry}
          material={materials.Trim_detail}
          position={[4.911, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube32_Trim_detail_0_3.geometry}
          material={materials.Trim_detail}
          position={[-5.249, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
      </group>
      <group
        position={[0.4, -2.145, -1.07]}
        rotation={[Math.PI / 2, 1.501, -Math.PI / 2]}
        scale={[0.394, 0.298, 0.394]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube33_Trim_detail_0_4.geometry}
          material={materials.Trim_detail}
          position={[-4.233, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube34_Trim_detail_0_4.geometry}
          material={materials.Trim_detail}
          position={[-3.217, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube35_Trim_detail_0_4.geometry}
          material={materials.Trim_detail}
          position={[-2.201, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube36_Trim_detail_0_4.geometry}
          material={materials.Trim_detail}
          position={[-1.185, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube37_Trim_detail_0_4.geometry}
          material={materials.Trim_detail}
          position={[-0.169, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube38_Trim_detail_0_4.geometry}
          material={materials.Trim_detail}
          position={[0.847, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube39_Trim_detail_0_4.geometry}
          material={materials.Trim_detail}
          position={[1.863, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube40_Trim_detail_0_4.geometry}
          material={materials.Trim_detail}
          position={[2.879, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube41_Trim_detail_0_4.geometry}
          material={materials.Trim_detail}
          position={[3.895, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
      </group>
      <group
        position={[-0.148, -2.173, -1.612]}
        rotation={[3.091, 0, 3.14]}
        scale={[0.394, 0.298, 0.394]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube33_Trim_detail_0_5.geometry}
          material={materials.Trim_detail}
          position={[-4.233, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube34_Trim_detail_0_5.geometry}
          material={materials.Trim_detail}
          position={[-3.217, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube35_Trim_detail_0_5.geometry}
          material={materials.Trim_detail}
          position={[-2.201, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube36_Trim_detail_0_5.geometry}
          material={materials.Trim_detail}
          position={[-1.185, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube37_Trim_detail_0_5.geometry}
          material={materials.Trim_detail}
          position={[-0.169, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube38_Trim_detail_0_5.geometry}
          material={materials.Trim_detail}
          position={[0.847, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube39_Trim_detail_0_5.geometry}
          material={materials.Trim_detail}
          position={[1.863, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube40_Trim_detail_0_5.geometry}
          material={materials.Trim_detail}
          position={[2.879, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube41_Trim_detail_0_5.geometry}
          material={materials.Trim_detail}
          position={[3.895, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
      </group>
      <group
        position={[0.034, -2.014, -0.937]}
        rotation={[Math.PI / 2, -1.421, Math.PI / 2]}
        scale={[0.394, 0.298, 0.394]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube33_Trim_detail_0_6.geometry}
          material={materials.Trim_detail}
          position={[-4.233, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube34_Trim_detail_0_6.geometry}
          material={materials.Trim_detail}
          position={[-3.217, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube35_Trim_detail_0_6.geometry}
          material={materials.Trim_detail}
          position={[-2.201, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube36_Trim_detail_0_6.geometry}
          material={materials.Trim_detail}
          position={[-1.185, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube37_Trim_detail_0_6.geometry}
          material={materials.Trim_detail}
          position={[-0.169, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube38_Trim_detail_0_6.geometry}
          material={materials.Trim_detail}
          position={[0.847, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube39_Trim_detail_0_6.geometry}
          material={materials.Trim_detail}
          position={[1.863, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube40_Trim_detail_0_6.geometry}
          material={materials.Trim_detail}
          position={[2.879, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube41_Trim_detail_0_6.geometry}
          material={materials.Trim_detail}
          position={[3.895, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
      </group>
      <group
        position={[-0.326, -0.394, -1.736]}
        rotation={[3.091, 0, 3.14]}
        scale={[0.394, 0.298, 0.394]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube33_Trim_detail_0_7.geometry}
          material={materials.Trim_detail}
          position={[-4.233, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube34_Trim_detail_0_7.geometry}
          material={materials.Trim_detail}
          position={[-3.217, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube35_Trim_detail_0_7.geometry}
          material={materials.Trim_detail}
          position={[-2.201, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube36_Trim_detail_0_7.geometry}
          material={materials.Trim_detail}
          position={[-1.185, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube37_Trim_detail_0_7.geometry}
          material={materials.Trim_detail}
          position={[-0.169, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube38_Trim_detail_0_7.geometry}
          material={materials.Trim_detail}
          position={[0.847, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube39_Trim_detail_0_7.geometry}
          material={materials.Trim_detail}
          position={[1.863, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube40_Trim_detail_0_7.geometry}
          material={materials.Trim_detail}
          position={[2.879, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube41_Trim_detail_0_7.geometry}
          material={materials.Trim_detail}
          position={[3.895, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube32_Trim_detail_0_4.geometry}
          material={materials.Trim_detail}
          position={[-5.249, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
      </group>
      <group
        position={[0.605, -0.394, -1.303]}
        rotation={[Math.PI / 2, 1.521, -Math.PI / 2]}
        scale={[0.394, 0.298, 0.394]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube33_Trim_detail_0_8.geometry}
          material={materials.Trim_detail}
          position={[-4.233, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube34_Trim_detail_0_8.geometry}
          material={materials.Trim_detail}
          position={[-3.217, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube35_Trim_detail_0_8.geometry}
          material={materials.Trim_detail}
          position={[-2.201, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube36_Trim_detail_0_8.geometry}
          material={materials.Trim_detail}
          position={[-1.185, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube37_Trim_detail_0_8.geometry}
          material={materials.Trim_detail}
          position={[-0.169, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube38_Trim_detail_0_8.geometry}
          material={materials.Trim_detail}
          position={[0.847, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube39_Trim_detail_0_8.geometry}
          material={materials.Trim_detail}
          position={[1.863, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube40_Trim_detail_0_8.geometry}
          material={materials.Trim_detail}
          position={[2.879, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube41_Trim_detail_0_8.geometry}
          material={materials.Trim_detail}
          position={[3.895, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube32_Trim_detail_0_5.geometry}
          material={materials.Trim_detail}
          position={[-5.249, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
      </group>
      <group
        position={[-0.686, -0.362, -0.771]}
        rotation={[Math.PI / 2, -1.498, Math.PI / 2]}
        scale={[0.394, 0.298, 0.394]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube33_Trim_detail_0_9.geometry}
          material={materials.Trim_detail}
          position={[-4.233, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube34_Trim_detail_0_9.geometry}
          material={materials.Trim_detail}
          position={[-3.217, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube35_Trim_detail_0_9.geometry}
          material={materials.Trim_detail}
          position={[-2.201, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube36_Trim_detail_0_9.geometry}
          material={materials.Trim_detail}
          position={[-1.185, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube37_Trim_detail_0_9.geometry}
          material={materials.Trim_detail}
          position={[-0.169, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube38_Trim_detail_0_9.geometry}
          material={materials.Trim_detail}
          position={[0.847, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube39_Trim_detail_0_9.geometry}
          material={materials.Trim_detail}
          position={[1.863, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube40_Trim_detail_0_9.geometry}
          material={materials.Trim_detail}
          position={[2.879, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube41_Trim_detail_0_9.geometry}
          material={materials.Trim_detail}
          position={[3.895, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube32_Trim_detail_0_6.geometry}
          material={materials.Trim_detail}
          position={[-5.249, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
      </group>
      <group
        position={[0.202, -0.391, -0.362]}
        rotation={[0.052, 0, 0]}
        scale={[0.394, 0.298, 0.394]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube33_Trim_detail_0_10.geometry}
          material={materials.Trim_detail}
          position={[-4.233, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube34_Trim_detail_0_10.geometry}
          material={materials.Trim_detail}
          position={[-3.217, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube35_Trim_detail_0_10.geometry}
          material={materials.Trim_detail}
          position={[-2.201, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube36_Trim_detail_0_10.geometry}
          material={materials.Trim_detail}
          position={[-1.185, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube37_Trim_detail_0_10.geometry}
          material={materials.Trim_detail}
          position={[-0.169, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube38_Trim_detail_0_10.geometry}
          material={materials.Trim_detail}
          position={[0.847, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube39_Trim_detail_0_10.geometry}
          material={materials.Trim_detail}
          position={[1.863, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube40_Trim_detail_0_10.geometry}
          material={materials.Trim_detail}
          position={[2.879, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube41_Trim_detail_0_10.geometry}
          material={materials.Trim_detail}
          position={[3.895, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube32_Trim_detail_0_7.geometry}
          material={materials.Trim_detail}
          position={[-5.249, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
      </group>
      <group
        position={[-0.155, -2.037, 2.699]}
        rotation={[Math.PI / 2, 1.434, -Math.PI / 2]}
        scale={[0.394, 0.298, 0.394]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube37_Trim_detail_0_11.geometry}
          material={materials.Trim_detail}
          position={[-0.169, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube38_Trim_detail_0_11.geometry}
          material={materials.Trim_detail}
          position={[0.847, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube39_Trim_detail_0_11.geometry}
          material={materials.Trim_detail}
          position={[1.863, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube40_Trim_detail_0_11.geometry}
          material={materials.Trim_detail}
          position={[2.879, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube41_Trim_detail_0_11.geometry}
          material={materials.Trim_detail}
          position={[3.895, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
      </group>
      <group
        position={[0.034, -2.014, 2.832]}
        rotation={[Math.PI / 2, -1.421, Math.PI / 2]}
        scale={[0.394, 0.298, 0.394]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube33_Trim_detail_0_11.geometry}
          material={materials.Trim_detail}
          position={[-4.233, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube34_Trim_detail_0_11.geometry}
          material={materials.Trim_detail}
          position={[-3.217, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube35_Trim_detail_0_11.geometry}
          material={materials.Trim_detail}
          position={[-2.201, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube36_Trim_detail_0_11.geometry}
          material={materials.Trim_detail}
          position={[-1.185, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube37_Trim_detail_0_12.geometry}
          material={materials.Trim_detail}
          position={[-0.169, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
      </group>
      <group
        position={[-0.211, -1.991, 1.184]}
        rotation={[0.162, 0, 0]}
        scale={[0.394, 0.298, 0.394]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube34_Trim_detail_0_12.geometry}
          material={materials.Trim_detail}
          position={[-3.217, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube35_Trim_detail_0_12.geometry}
          material={materials.Trim_detail}
          position={[-2.201, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube36_Trim_detail_0_12.geometry}
          material={materials.Trim_detail}
          position={[-1.185, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube37_Trim_detail_0_13.geometry}
          material={materials.Trim_detail}
          position={[-0.169, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube38_Trim_detail_0_12.geometry}
          material={materials.Trim_detail}
          position={[0.847, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube39_Trim_detail_0_12.geometry}
          material={materials.Trim_detail}
          position={[1.863, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube40_Trim_detail_0_12.geometry}
          material={materials.Trim_detail}
          position={[2.879, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube41_Trim_detail_0_12.geometry}
          material={materials.Trim_detail}
          position={[3.895, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
      </group>
      <group
        position={[-0.626, -2.164, -0.937]}
        rotation={[Math.PI / 2, -1.514, Math.PI / 2]}
        scale={[0.394, 0.298, 0.394]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube33_Trim_detail_0_12.geometry}
          material={materials.Trim_detail}
          position={[-4.233, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube34_Trim_detail_0_13.geometry}
          material={materials.Trim_detail}
          position={[-3.217, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube35_Trim_detail_0_13.geometry}
          material={materials.Trim_detail}
          position={[-2.201, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube36_Trim_detail_0_13.geometry}
          material={materials.Trim_detail}
          position={[-1.185, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube37_Trim_detail_0_14.geometry}
          material={materials.Trim_detail}
          position={[-0.169, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube38_Trim_detail_0_13.geometry}
          material={materials.Trim_detail}
          position={[0.847, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube39_Trim_detail_0_13.geometry}
          material={materials.Trim_detail}
          position={[1.863, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube40_Trim_detail_0_13.geometry}
          material={materials.Trim_detail}
          position={[2.879, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube41_Trim_detail_0_13.geometry}
          material={materials.Trim_detail}
          position={[3.895, 14.228, 3.014]}
          scale={[0.191, 0.313, 0.319]}
        />
      </group>
      <group
        position={[0.271, 0.108, 1.799]}
        rotation={[Math.PI, 0, 3.057]}
        scale={0.394}
      >
        <group
          position={[4.339, 3.195, -0.053]}
          rotation={[0, 0, -0.069]}
          scale={[0.587, 1.378, 1]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube25_Window_B_0_3.geometry}
            material={materials.Window_B}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube25_Window_N_0_3.geometry}
            material={materials.Window_N}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube27_Window_onning_0_3.geometry}
          material={materials.Window_onning}
          position={[4.606, 1.661, -0.058]}
          scale={[0.878, 1, 0.795]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube26_Window_onning_0_3.geometry}
          material={materials.Window_onning}
          position={[4.888, 3.925, -0.052]}
          scale={[1, 0.598, 1.422]}
        />
      </group>
      <group
        position={[-0.17, -0.054, -0.284]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.394}
      >
        <group
          position={[4.339, 3.195, -0.053]}
          rotation={[0, 0, -0.069]}
          scale={[0.587, 1.378, 1]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube25_Window_B_0_4.geometry}
            material={materials.Window_B}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube25_Window_N_0_4.geometry}
            material={materials.Window_N}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube27_Window_onning_0_4.geometry}
          material={materials.Window_onning}
          position={[4.606, 1.661, -0.058]}
          scale={[0.878, 1, 0.795]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube26_Window_onning_0_4.geometry}
          material={materials.Window_onning}
          position={[4.888, 3.925, -0.052]}
          scale={[1, 0.598, 1.422]}
        />
      </group>
      <group
        position={[-0.17, -0.054, -1.825]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.394}
      >
        <group
          position={[4.339, 3.195, -0.053]}
          rotation={[0, 0, -0.069]}
          scale={[0.587, 1.378, 1]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube25_Window_B_0_5.geometry}
            material={materials.Window_B}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube25_Window_N_0_5.geometry}
            material={materials.Window_N}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube27_Window_onning_0_5.geometry}
          material={materials.Window_onning}
          position={[4.606, 1.661, -0.058]}
          scale={[0.878, 1, 0.795]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube26_Window_onning_0_5.geometry}
          material={materials.Window_onning}
          position={[4.888, 3.925, -0.052]}
          scale={[1, 0.598, 1.422]}
        />
      </group>
      <group
        position={[0.668, -0.054, -1.105]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.394}
      >
        <group
          position={[4.339, 3.195, -0.053]}
          rotation={[0, 0, -0.069]}
          scale={[0.587, 1.378, 1]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube25_Window_B_0_6.geometry}
            material={materials.Window_B}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube25_Window_N_0_6.geometry}
            material={materials.Window_N}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube27_Window_onning_0_6.geometry}
          material={materials.Window_onning}
          position={[4.606, 1.661, -0.058]}
          scale={[0.878, 1, 0.795]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube26_Window_onning_0_6.geometry}
          material={materials.Window_onning}
          position={[4.888, 3.925, -0.052]}
          scale={[1, 0.598, 1.422]}
        />
      </group>
      <group
        position={[-0.787, -0.054, -1.102]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.394}
      >
        <group
          position={[4.339, 3.195, -0.053]}
          rotation={[0, 0, -0.069]}
          scale={[0.587, 1.378, 1]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube25_Window_B_0_7.geometry}
            material={materials.Window_B}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube25_Window_N_0_7.geometry}
            material={materials.Window_N}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube27_Window_onning_0_7.geometry}
          material={materials.Window_onning}
          position={[4.606, 1.661, -0.058]}
          scale={[0.878, 1, 0.795]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube26_Window_onning_0_7.geometry}
          material={materials.Window_onning}
          position={[4.888, 3.925, -0.052]}
          scale={[1, 0.598, 1.422]}
        />
      </group>
      <group
        position={[0.627, 0.134, 0.955]}
        rotation={[0.098, -Math.PI / 2, 0]}
        scale={0.394}
      >
        <group
          position={[4.339, 3.195, -0.053]}
          rotation={[0, 0, -0.069]}
          scale={[0.587, 1.378, 1]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube25_Window_B_0_8.geometry}
            material={materials.Window_B}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube25_Window_N_0_8.geometry}
            material={materials.Window_N}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube27_Window_onning_0_8.geometry}
          material={materials.Window_onning}
          position={[4.606, 1.661, -0.058]}
          scale={[0.878, 1, 0.795]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube26_Window_onning_0_8.geometry}
          material={materials.Window_onning}
          position={[4.888, 3.925, -0.052]}
          scale={[1, 0.598, 1.422]}
        />
      </group>
      <group
        position={[-0.828, 0.134, 0.958]}
        rotation={[0.098, -Math.PI / 2, 0]}
        scale={0.394}
      >
        <group
          position={[4.339, 3.195, -0.053]}
          rotation={[0, 0, -0.069]}
          scale={[0.587, 1.378, 1]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube25_Window_B_0_9.geometry}
            material={materials.Window_B}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube25_Window_N_0_9.geometry}
            material={materials.Window_N}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube27_Window_onning_0_9.geometry}
          material={materials.Window_onning}
          position={[4.606, 1.661, -0.058]}
          scale={[0.878, 1, 0.795]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube26_Window_onning_0_9.geometry}
          material={materials.Window_onning}
          position={[4.888, 3.925, -0.052]}
          scale={[1, 0.598, 1.422]}
        />
      </group>
      <group
        position={[-0.171, -0.098, -2.098]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.394}
      >
        <group position={[-1.055, -2.743, 0.456]} rotation={[0, 0, -0.084]}>
          <group position={[0.322, -0.06, 0]} rotation={[0, 0, 0.015]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube3_Window_B_0_6.geometry}
              material={materials.Window_B}
              position={[4.614, 11.174, -0.509]}
              scale={[0.587, 1.378, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube4_Flower_Box_1_0_6.geometry}
              material={materials.Flower_Box_1}
              position={[5.41, 9.388, -0.509]}
              rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
              scale={[0.469, 1.055, 0.562]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube5_Window_B_0_6.geometry}
              material={materials.Window_B}
              position={[4.884, 11.366, -0.514]}
              scale={[0.225, 0.096, 0.852]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube6_Window_B_0_6.geometry}
              material={materials.Window_B}
              position={[4.884, 11.165, -0.496]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[0.225, 0.096, 1.323]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube7_Window_N_0_6.geometry}
              material={materials.Window_N}
              position={[4.614, 11.174, -3.138]}
              scale={[0.587, 1.378, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube8_Flower_Box_2_0_6.geometry}
              material={materials.Flower_Box_2}
              position={[5.41, 9.388, -3.138]}
              rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
              scale={[0.469, 1.055, 0.562]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube9_Window_N_0_6.geometry}
              material={materials.Window_N}
              position={[4.884, 11.366, -3.143]}
              scale={[0.225, 0.096, 0.852]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube10_Window_N_0_6.geometry}
              material={materials.Window_N}
              position={[4.884, 11.165, -3.125]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[0.225, 0.096, 1.323]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube11_Window_B_0_6.geometry}
              material={materials.Window_B}
              position={[4.614, 11.174, -5.731]}
              scale={[0.587, 1.378, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube12_Flower_Box_1_0_6.geometry}
              material={materials.Flower_Box_1}
              position={[5.41, 9.388, -5.731]}
              rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
              scale={[0.469, 1.055, 0.562]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube13_Window_B_0_6.geometry}
              material={materials.Window_B}
              position={[4.884, 11.366, -5.735]}
              scale={[0.225, 0.096, 0.852]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube14_Window_B_0_6.geometry}
              material={materials.Window_B}
              position={[4.884, 11.165, -5.718]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[0.225, 0.096, 1.323]}
            />
          </group>
        </group>
        <group position={[-0.735, 1.85, 0.456]} rotation={[0, 0, -0.084]}>
          <group position={[0.322, -0.06, 0]} rotation={[0, 0, 0.015]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube3_Window_B_0_7.geometry}
              material={materials.Window_B}
              position={[4.614, 11.174, -0.509]}
              scale={[0.587, 1.378, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube4_Flower_Box_1_0_7.geometry}
              material={materials.Flower_Box_1}
              position={[5.41, 9.388, -0.509]}
              rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
              scale={[0.469, 1.055, 0.562]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube5_Window_B_0_7.geometry}
              material={materials.Window_B}
              position={[4.884, 11.366, -0.514]}
              scale={[0.225, 0.096, 0.852]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube6_Window_B_0_7.geometry}
              material={materials.Window_B}
              position={[4.884, 11.165, -0.496]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[0.225, 0.096, 1.323]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube7_Window_N_0_7.geometry}
              material={materials.Window_N}
              position={[4.614, 11.174, -3.138]}
              scale={[0.587, 1.378, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube8_Flower_Box_2_0_7.geometry}
              material={materials.Flower_Box_2}
              position={[5.41, 9.388, -3.138]}
              rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
              scale={[0.469, 1.055, 0.562]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube9_Window_N_0_7.geometry}
              material={materials.Window_N}
              position={[4.884, 11.366, -3.143]}
              scale={[0.225, 0.096, 0.852]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube10_Window_N_0_7.geometry}
              material={materials.Window_N}
              position={[4.884, 11.165, -3.125]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[0.225, 0.096, 1.323]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube11_Window_B_0_7.geometry}
              material={materials.Window_B}
              position={[4.614, 11.174, -5.731]}
              scale={[0.587, 1.378, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube12_Flower_Box_1_0_7.geometry}
              material={materials.Flower_Box_1}
              position={[5.41, 9.388, -5.731]}
              rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
              scale={[0.469, 1.055, 0.562]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube13_Window_B_0_7.geometry}
              material={materials.Window_B}
              position={[4.884, 11.366, -5.735]}
              scale={[0.225, 0.096, 0.852]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCube14_Window_B_0_7.geometry}
              material={materials.Window_B}
              position={[4.884, 11.165, -5.718]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[0.225, 0.096, 1.323]}
            />
          </group>
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube19_Door_texture_0.geometry}
        material={materials.Door_texture}
        position={[2.039, 1.797, -1.037]}
        scale={0.991}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pSphere1_Door_texture_0.geometry}
        material={materials.Door_texture}
        position={[2.007, 0.946, -1.303]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.056}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube20_Stair_0.geometry}
        material={materials.Stair}
        position={[1.961, 0.304, -1.064]}
        scale={[0.186, 0.056, 0.245]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube21_Stair_0.geometry}
        material={materials.Stair}
        position={[1.789, 0.22, -0.605]}
        scale={[0.394, 0.394, 0.258]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube22_Stair_0.geometry}
        material={materials.Stair}
        position={[2.788, 0.137, -0.579]}
        scale={[0.394, 0.394, 0.421]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube23_Stair_0.geometry}
        material={materials.Stair}
        position={[1.789, 0.22, -1.569]}
        scale={[0.394, 0.394, 0.258]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube24_Stair_0.geometry}
        material={materials.Stair}
        position={[2.788, 0.137, -1.543]}
        scale={[0.394, 0.394, 0.421]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube29_Trim_0.geometry}
        material={materials.Trim}
        position={[-0.094, 2.127, -1.055]}
        scale={[0.759, 0.02, 0.747]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube30_Trim_0.geometry}
        material={materials.Trim}
        position={[-0.094, 3.911, -1.055]}
        scale={[0.795, 0.02, 0.798]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pPlane1_lambert1_0.geometry}
        material={materials.lambert1}
        position={[1.296, 0.154, 1.283]}
        rotation={[0, 0, -1.708]}
        scale={[0.298, 0.298, 0.394]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube43_Air_condi_0.geometry}
        material={materials.Air_condi}
        position={[-1.221, 6.044, -2.443]}
        scale={0.267}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube44_Air_condi_0.geometry}
        material={materials.Air_condi}
        position={[0.98, 5.613, 0.283]}
        scale={0.267}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube45_Air_condi_0.geometry}
        material={materials.Air_condi}
        position={[-0.099, 2.025, 2.261]}
        rotation={[-Math.PI, -0.016, -Math.PI]}
        scale={0.267}
      />
    </group>
  )
}
