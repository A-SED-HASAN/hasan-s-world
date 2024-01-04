import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { island } from '../assets/3D'

export default function Island(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(island)
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    actions['Take 001'].play()
  }, [actions])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Sketchfab_Scene'>
        <group name='Sketchfab_model' rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name='Plane_TakeOfffbx'
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name='Object_2'>
              <group name='RootNode'>
                <group
                  name='Environment'
                  position={[130.239, 400.72, -828.549]}
                >
                  <group
                    name='EA04_Env_Rocks_Sand_01c_PRE__1_'
                    position={[770.671, -333.02, 7283.64]}
                  >
                    <group name='EA04_Env_Rocks_Sand_01c_LOD0'>
                      <mesh
                        name='EA04_Env_Rocks_Sand_01c_LOD0_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.EA04_Env_Rocks_Sand_01c_LOD0_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Rocks_Sand_01c_PRE'
                    position={[1994.699, -386.826, 4937.181]}
                  >
                    <group name='EA04_Env_Rocks_Sand_01c_LOD0_1'>
                      <mesh
                        name='EA04_Env_Rocks_Sand_01c_LOD0_1_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Rocks_Sand_01c_LOD0_1_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Rocks_Sand_01b_PRE'
                    position={[-1261.156, -461.298, 4933.744]}
                  >
                    <group name='EA04_Env_Rocks_Sand_01b_LOD0'>
                      <mesh
                        name='EA04_Env_Rocks_Sand_01b_LOD0_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.EA04_Env_Rocks_Sand_01b_LOD0_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='Flat_Plant_02__2_'
                    position={[758.868, -475.133, 4582.262]}
                  >
                    <mesh
                      name='Flat_Plant_02__2__Material_standard_0'
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Flat_Plant_02__2__Material_standard_0.geometry
                      }
                      material={materials.Material_standard}
                    />
                  </group>
                  <group
                    name='Mixed_Plant_02__1_'
                    position={[764.181, -462.442, 5714.506]}
                  >
                    <mesh
                      name='Mixed_Plant_02__1__Material_standard_0'
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Mixed_Plant_02__1__Material_standard_0.geometry
                      }
                      material={materials.Material_standard}
                    />
                  </group>
                  <group
                    name='Mixed_Cactus_01__1_'
                    position={[-947.434, -476.606, 5100.619]}
                  >
                    <mesh
                      name='Mixed_Cactus_01__1__Material_standard_0'
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Mixed_Cactus_01__1__Material_standard_0.geometry
                      }
                      material={materials.Material_standard}
                    />
                  </group>
                  <group
                    name='Flat_Cactus_02__1_'
                    position={[870.95, -476.733, 4133.672]}
                  >
                    <mesh
                      name='Flat_Cactus_02__1__Material_standard_0'
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Flat_Cactus_02__1__Material_standard_0.geometry
                      }
                      material={materials.Material_standard}
                    />
                  </group>
                  <group
                    name='Flat_Ground_01'
                    position={[-130.239, -400, 757.77]}
                    scale={[1, 0.159, 1]}
                  >
                    <group name='transform5' />
                  </group>
                  <group
                    name='Mixed_Well_01'
                    position={[504.999, -419.113, -198.272]}
                  >
                    <mesh
                      name='Mixed_Well_01_Material_standard_0'
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Mixed_Well_01_Material_standard_0.geometry
                      }
                      material={materials.Material_standard}
                    />
                  </group>
                  <group
                    name='Flat_Well_01'
                    position={[1406.677, -413.737, 66.899]}
                  >
                    <mesh
                      name='Flat_Well_01_Material_standard_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Flat_Well_01_Material_standard_0.geometry}
                      material={materials.Material_standard}
                    />
                  </group>
                  <group
                    name='Flat_Cactus_01'
                    position={[-924.323, -437.939, 4112.77]}
                  >
                    <mesh
                      name='Flat_Cactus_01_Material_standard_0'
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Flat_Cactus_01_Material_standard_0.geometry
                      }
                      material={materials.Material_standard}
                    />
                  </group>
                  <group
                    name='Flat_Cactus_02'
                    position={[760.677, -435.285, 2798.77]}
                  >
                    <mesh
                      name='Flat_Cactus_02_Material_standard_0'
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Flat_Cactus_02_Material_standard_0.geometry
                      }
                      material={materials.Material_standard}
                    />
                  </group>
                  <group
                    name='Flat_Plant_02__1_'
                    position={[785.056, -439.429, 63.937]}
                  >
                    <mesh
                      name='Flat_Plant_02__1__Material_standard_0'
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Flat_Plant_02__1__Material_standard_0.geometry
                      }
                      material={materials.Material_standard}
                    />
                  </group>
                  <group
                    name='Flat_Plant_02'
                    position={[827.328, -441.443, -79.322]}
                  >
                    <mesh
                      name='Flat_Plant_02_Material_standard_0'
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Flat_Plant_02_Material_standard_0.geometry
                      }
                      material={materials.Material_standard}
                    />
                  </group>
                  <group
                    name='Mixed_Cactus_01'
                    position={[1002.77, -440.836, -90.735]}
                  >
                    <mesh
                      name='Mixed_Cactus_01_Material_standard_0'
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Mixed_Cactus_01_Material_standard_0.geometry
                      }
                      material={materials.Material_standard}
                    />
                  </group>
                  <group
                    name='Mixed_Cactus_02'
                    position={[-781.323, -437.604, 1839.77]}
                  >
                    <mesh
                      name='Mixed_Cactus_02_Material_standard_0'
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Mixed_Cactus_02_Material_standard_0.geometry
                      }
                      material={materials.Material_standard}
                    />
                  </group>
                  <group
                    name='Mixed_Plant_02'
                    position={[876.545, -437.832, 119.994]}
                  >
                    <mesh
                      name='Mixed_Plant_02_Material_standard_0'
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Mixed_Plant_02_Material_standard_0.geometry
                      }
                      material={materials.Material_standard}
                    />
                  </group>
                  <group
                    name='Mixed_Tree_02'
                    position={[820.572, -432.684, 505.083]}
                  >
                    <mesh
                      name='Mixed_Tree_02_Material_standard_0'
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Mixed_Tree_02_Material_standard_0.geometry
                      }
                      material={materials.Material_standard}
                    />
                  </group>
                  <group
                    name='Flat_Tree_02'
                    position={[1057.376, -432.173, 427.623]}
                  >
                    <mesh
                      name='Flat_Tree_02_Material_standard_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Flat_Tree_02_Material_standard_0.geometry}
                      material={materials.Material_standard}
                    />
                  </group>
                  <group
                    name='Mixed_Palm_tree_01'
                    position={[1167.923, -430.829, 872.884]}
                  >
                    <mesh
                      name='Mixed_Palm_tree_01_Material_standard_0'
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Mixed_Palm_tree_01_Material_standard_0.geometry
                      }
                      material={materials.Material_standard}
                    />
                  </group>
                  <group
                    name='Flat_Palm_tree_01'
                    position={[676.592, -472, 1855.77]}
                  >
                    <mesh
                      name='Flat_Palm_tree_01_Material_standard_0'
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Flat_Palm_tree_01_Material_standard_0.geometry
                      }
                      material={materials.Material_standard}
                    />
                  </group>
                  <group
                    name='Flat_Rock_01'
                    position={[813.383, -435.807, 1602.491]}
                  >
                    <mesh
                      name='Flat_Rock_01_Material_standard_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Flat_Rock_01_Material_standard_0.geometry}
                      material={materials.Material_standard}
                    />
                  </group>
                  <group
                    name='Mixed_Rock_01'
                    position={[797.094, -447.508, 2259.924]}
                  >
                    <mesh
                      name='Mixed_Rock_01_Material_standard_0'
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Mixed_Rock_01_Material_standard_0.geometry
                      }
                      material={materials.Material_standard}
                    />
                  </group>
                  <group
                    name='Rocks'
                    position={[-2090.982, -466.234, -99.781]}
                  />
                  <group
                    name='EA04_Env_Rocks_Sand_01a_PRE__2_'
                    position={[-1376.5, -511.338, -1691.003]}
                    rotation={[0, 1.367, 0]}
                    scale={[0.815, 0.814, 0.815]}
                  >
                    <group name='EA04_Env_Rocks_Sand_01a_LOD0'>
                      <mesh
                        name='EA04_Env_Rocks_Sand_01a_LOD0_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.EA04_Env_Rocks_Sand_01a_LOD0_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Rocks_Sand_01b_PRE_1'
                    position={[-2997.79, -464.339, 564.997]}
                    rotation={[0.108, -0.426, 0.258]}
                    scale={1.884}
                  >
                    <group name='EA04_Env_Rocks_Sand_01b_LOD0_1'>
                      <mesh
                        name='EA04_Env_Rocks_Sand_01b_LOD0_1_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Rocks_Sand_01b_LOD0_1_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Rocks_Sand_01a_PRE__1_'
                    position={[-2846.5, -401.338, 396.997]}
                    rotation={[-Math.PI, 1.518, -Math.PI]}
                  >
                    <group name='EA04_Env_Rocks_Sand_01a_LOD0_1'>
                      <mesh
                        name='EA04_Env_Rocks_Sand_01a_LOD0_1_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Rocks_Sand_01a_LOD0_1_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Rocks_Sand_01b_PRE__1_'
                    position={[-1201.118, -548.407, -1566.18]}
                  >
                    <group name='EA04_Env_Rocks_Sand_01b_LOD0_2'>
                      <mesh
                        name='EA04_Env_Rocks_Sand_01b_LOD0_2_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Rocks_Sand_01b_LOD0_2_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Rocks_Sand_01d_PRE'
                    position={[-2937.5, -373.338, 140.997]}
                    rotation={[0, 1.411, 0]}
                    scale={1.769}
                  >
                    <group name='EA04_Env_Rocks_Sand_01d_LOD0'>
                      <mesh
                        name='EA04_Env_Rocks_Sand_01d_LOD0_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.EA04_Env_Rocks_Sand_01d_LOD0_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Rocks_Gray_01c_PRE'
                    position={[-3232.537, -607.339, 1414.961]}
                    rotation={[0.024, -0.052, 0.134]}
                    scale={1.602}
                  >
                    <group name='EA04_Env_Rocks_Gray_01c_LOD0'>
                      <mesh
                        name='EA04_Env_Rocks_Gray_01c_LOD0_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.EA04_Env_Rocks_Gray_01c_LOD0_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Rocks_Sand_01c_PRE__2_'
                    position={[-2866.5, -450.339, 1444.997]}
                    rotation={[3.071, -0.175, -3.116]}
                    scale={0.589}
                  >
                    <group name='EA04_Env_Rocks_Sand_01c_LOD0_2'>
                      <mesh
                        name='EA04_Env_Rocks_Sand_01c_LOD0_2_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Rocks_Sand_01c_LOD0_2_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Rocks_Sand_01a_PRE__3_'
                    position={[-1711, -487.339, -1691.003]}
                    rotation={[-Math.PI, -1.57, -Math.PI]}
                    scale={0.814}
                  >
                    <group name='EA04_Env_Rocks_Sand_01a_LOD0_2'>
                      <mesh
                        name='EA04_Env_Rocks_Sand_01a_LOD0_2_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Rocks_Sand_01a_LOD0_2_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Rocks_Sand_01a_PRE'
                    position={[-2800.5, -448.339, 930.997]}
                    rotation={[0, 0.189, 0]}
                  >
                    <group name='EA04_Env_Rocks_Sand_01a_LOD0_3'>
                      <mesh
                        name='EA04_Env_Rocks_Sand_01a_LOD0_3_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Rocks_Sand_01a_LOD0_3_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Rocks_Gray_01c_PRE__1_'
                    position={[-1075.5, -421.339, -1657.003]}
                    rotation={[0, 0.171, 0]}
                    scale={1.129}
                  >
                    <group name='EA04_Env_Rocks_Gray_01c_LOD0_1'>
                      <mesh
                        name='EA04_Env_Rocks_Gray_01c_LOD0_1_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Rocks_Gray_01c_LOD0_1_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Rocks_Gray_01a_PRE__1_'
                    position={[-2878.316, -462.916, 2093.106]}
                    rotation={[0, -1.227, 0]}
                    scale={1.138}
                  >
                    <group name='EA04_Env_Rocks_Gray_01a_LOD0'>
                      <mesh
                        name='EA04_Env_Rocks_Gray_01a_LOD0_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.EA04_Env_Rocks_Gray_01a_LOD0_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Rocks_Sand_01c_PRE__1__1'
                    position={[-140.982, -371.234, -1925.781]}
                    rotation={[3.037, 0.875, -3.102]}
                  >
                    <group name='EA04_Env_Rocks_Sand_01c_LOD0_3'>
                      <mesh
                        name='EA04_Env_Rocks_Sand_01c_LOD0_3_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Rocks_Sand_01c_LOD0_3_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Rocks_Gray_01d_PRE'
                    position={[-1115.5, -414.339, 238.997]}
                    scale={[2.445, 0.895, 2.445]}
                  >
                    <group name='EA04_Env_Rocks_Gray_01d_LOD0'>
                      <mesh
                        name='EA04_Env_Rocks_Gray_01d_LOD0_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.EA04_Env_Rocks_Gray_01d_LOD0_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='Grass'
                    position={[-1314.725, -414.321, 1362.641]}
                  >
                    <group
                      name='EA04_Env_Plants_Grass_Dry_01b_PRE__3_'
                      position={[849.524, -0.962, -1142.213]}
                      rotation={[-3.133, 0.021, -3.127]}
                      scale={0.94}
                    >
                      <group name='EA04_Env_Plants_Grass_Dry_01b_LOD0'>
                        <mesh
                          name='EA04_Env_Plants_Grass_Dry_01b_LOD0_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_Dry_01b_LOD0_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_Dry_01b_PRE__2_'
                      position={[678.201, 7.928, -526.888]}
                      rotation={[0.02, 0, -0.029]}
                    >
                      <group name='EA04_Env_Plants_Grass_Dry_01b_LOD0_1'>
                        <mesh
                          name='EA04_Env_Plants_Grass_Dry_01b_LOD0_1_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_Dry_01b_LOD0_1_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_Dry_01a_PRE__7_'
                      position={[-407.025, -2.067, 94.139]}
                      rotation={[0.016, -0.777, 0.001]}
                      scale={0.853}
                    >
                      <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0'>
                        <mesh
                          name='EA04_Env_Plants_Grass_Dry_01a_LOD0_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_Dry_01a_LOD0_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_01a_PRE__2_'
                      position={[162.904, 16.369, -209.53]}
                      rotation={[2.973, 1.294, -2.97]}
                      scale={1.048}
                    >
                      <group name='EA04_Env_Plants_Grass_01a_LOD0'>
                        <mesh
                          name='EA04_Env_Plants_Grass_01a_LOD0_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_01a_LOD0_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_Dry_01a_PRE__12_'
                      position={[-94.667, -0.199, -51.675]}
                      rotation={[-3.132, 0.399, 3.139]}
                      scale={1.172}
                    >
                      <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_1'>
                        <mesh
                          name='EA04_Env_Plants_Grass_Dry_01a_LOD0_1_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_Dry_01a_LOD0_1_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_Dry_01a_PRE__13_'
                      position={[-430.92, -5.162, 299.554]}
                      rotation={[0.015, 0.047, 0.001]}
                      scale={1.151}
                    >
                      <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_2'>
                        <mesh
                          name='EA04_Env_Plants_Grass_Dry_01a_LOD0_2_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_Dry_01a_LOD0_2_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_Dry_01a_PRE__8_'
                      position={[-293.057, -1.989, 102.713]}
                      rotation={[0.008, 0.307, 0.003]}
                      scale={1.19}
                    >
                      <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_3'>
                        <mesh
                          name='EA04_Env_Plants_Grass_Dry_01a_LOD0_3_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_Dry_01a_LOD0_3_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_Dry_01a_PRE__9_'
                      position={[-106.838, -0.568, -11.361]}
                      rotation={[0.009, -0.242, 0.003]}
                      scale={0.879}
                    >
                      <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_4'>
                        <mesh
                          name='EA04_Env_Plants_Grass_Dry_01a_LOD0_4_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_Dry_01a_LOD0_4_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_Dry_01a_PRE__6_'
                      position={[-105.54, -0.343, -37.748]}
                      rotation={[0.017, -1.3, 0.009]}
                      scale={0.904}
                    >
                      <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_5'>
                        <mesh
                          name='EA04_Env_Plants_Grass_Dry_01a_LOD0_5_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_Dry_01a_LOD0_5_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_01a_PRE__3_'
                      position={[-376.35, -12.894, 867.478]}
                      rotation={[-0.045, 1.389, 0.059]}
                      scale={0.932}
                    >
                      <group name='EA04_Env_Plants_Grass_01a_LOD0_1'>
                        <mesh
                          name='EA04_Env_Plants_Grass_01a_LOD0_1_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_01a_LOD0_1_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_Dry_01a_PRE__2_'
                      position={[-396.46, -4.869, 282.362]}
                      rotation={[-3.127, -0.479, 3.14]}
                      scale={1.179}
                    >
                      <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_6'>
                        <mesh
                          name='EA04_Env_Plants_Grass_Dry_01a_LOD0_6_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_Dry_01a_LOD0_6_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_Dry_01a_PRE__3_'
                      position={[-106.067, -1.496, 99.037]}
                      rotation={[0.011, -0.826, 0.004]}
                      scale={0.818}
                    >
                      <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_7'>
                        <mesh
                          name='EA04_Env_Plants_Grass_Dry_01a_LOD0_7_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_Dry_01a_LOD0_7_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_Dry_01a_PRE__5_'
                      position={[-325.177, -2.119, 103.489]}
                      rotation={[-1.496, 1.57, 1.511]}
                      scale={0.907}
                    >
                      <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_8'>
                        <mesh
                          name='EA04_Env_Plants_Grass_Dry_01a_LOD0_8_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_Dry_01a_LOD0_8_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_01a_PRE'
                      position={[393.924, -3.181, 249.455]}
                      rotation={[0, 0, -0.033]}
                    >
                      <group name='EA04_Env_Plants_Grass_01a_LOD0_2'>
                        <mesh
                          name='EA04_Env_Plants_Grass_01a_LOD0_2_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_01a_LOD0_2_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_Dry_01b_PRE'
                      position={[-805.576, -3.258, 228.055]}
                      rotation={[-0.034, -0.002, 0.11]}
                    >
                      <group name='EA04_Env_Plants_Grass_Dry_01b_LOD0_2'>
                        <mesh
                          name='EA04_Env_Plants_Grass_Dry_01b_LOD0_2_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_Dry_01b_LOD0_2_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_Dry_01a_PRE__11_'
                      position={[61.125, 0.081, -49.691]}
                      rotation={[-3.127, -0.73, 3.135]}
                      scale={0.818}
                    >
                      <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_9'>
                        <mesh
                          name='EA04_Env_Plants_Grass_Dry_01a_LOD0_9_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_Dry_01a_LOD0_9_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_Dry_01a_PRE__10_'
                      position={[156.349, 0.379, -41.139]}
                      rotation={[-3.123, 0.012, 3.137]}
                      scale={0.963}
                    >
                      <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_10'>
                        <mesh
                          name='EA04_Env_Plants_Grass_Dry_01a_LOD0_10_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_Dry_01a_LOD0_10_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_01a_PRE__1_'
                      position={[411.733, 6.164, -191.563]}
                      rotation={[0.029, 0, -0.007]}
                    >
                      <group name='EA04_Env_Plants_Grass_01a_LOD0_3'>
                        <mesh
                          name='EA04_Env_Plants_Grass_01a_LOD0_3_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_01a_LOD0_3_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_Dry_01a_PRE'
                      position={[218.924, -3.018, 267.155]}
                      rotation={[0.009, 0.652, -0.003]}
                    >
                      <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_11'>
                        <mesh
                          name='EA04_Env_Plants_Grass_Dry_01a_LOD0_11_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_Dry_01a_LOD0_11_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_Dry_01b_PRE__1_'
                      position={[-238.376, -5.719, 437.655]}
                      rotation={[-3.123, 0.433, 3.13]}
                    >
                      <group name='EA04_Env_Plants_Grass_Dry_01b_LOD0_3'>
                        <mesh
                          name='EA04_Env_Plants_Grass_Dry_01b_LOD0_3_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_Dry_01b_LOD0_3_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_Dry_01a_PRE__4_'
                      position={[-174.651, -1.741, 107.959]}
                      rotation={[-3.134, -0.197, 3.139]}
                      scale={1.104}
                    >
                      <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_12'>
                        <mesh
                          name='EA04_Env_Plants_Grass_Dry_01a_LOD0_12_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_Dry_01a_LOD0_12_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_01b_PRE__1_'
                      position={[1026.025, 8.381, -1280.839]}
                      rotation={[0.055, -0.001, -0.025]}
                    >
                      <group name='EA04_Env_Plants_Grass_01b_LOD0'>
                        <mesh
                          name='EA04_Env_Plants_Grass_01b_LOD0_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_01b_LOD0_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_Dry_01a_PRE__1_'
                      position={[-258.476, -5.558, 409.255]}
                      rotation={[0.013, 0, 0.011]}
                    >
                      <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_13'>
                        <mesh
                          name='EA04_Env_Plants_Grass_Dry_01a_LOD0_13_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_Dry_01a_LOD0_13_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_01b_PRE'
                      position={[387.624, -1.926, 143.456]}
                      rotation={[0.018, 0, 0.005]}
                    >
                      <group name='EA04_Env_Plants_Grass_01b_LOD0_1'>
                        <mesh
                          name='EA04_Env_Plants_Grass_01b_LOD0_1_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_01b_LOD0_1_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_01b_PRE__2_'
                      position={[-98.116, 21.881, -712.038]}
                      rotation={[3.113, -0.417, 3.114]}
                      scale={1.166}
                    >
                      <group name='EA04_Env_Plants_Grass_01b_LOD0_2'>
                        <mesh
                          name='EA04_Env_Plants_Grass_01b_LOD0_2_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_01b_LOD0_2_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_01a_PRE__4_'
                      position={[-129.037, -4.116, 403.353]}
                      rotation={[-0.021, 1.487, 0.029]}
                      scale={0.563}
                    >
                      <group name='EA04_Env_Plants_Grass_01a_LOD0_4'>
                        <mesh
                          name='EA04_Env_Plants_Grass_01a_LOD0_4_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_01a_LOD0_4_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                  </group>
                  <group
                    name='Stone'
                    position={[2985.534, -466.008, 3182.742]}
                  />
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE'
                    position={[-1158.466, -435.346, 1953.673]}
                    rotation={[0.02, 0.713, -0.004]}
                    scale={0.86}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.EA04_Env_Stone_Gray_01b_LOD0_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_1'
                    position={[-2081.847, -402.865, 1041.462]}
                    rotation={[-3.085, -0.693, 3.134]}
                    scale={0.687}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_1'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_1_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_1_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Sand_01b_PRE__1_'
                    position={[-1277.601, -397.238, 632.797]}
                    rotation={[-3.088, -0.739, 3.077]}
                    scale={1.912}
                  >
                    <group name='EA04_Env_Stone_Sand_01b_LOD0'>
                      <mesh
                        name='EA04_Env_Stone_Sand_01b_LOD0_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.EA04_Env_Stone_Sand_01b_LOD0_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_2'
                    position={[-1024.331, -416.519, 476.408]}
                    rotation={[0.445, 1.21, -0.521]}
                    scale={1.475}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_2'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_2_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_2_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_3'
                    position={[-2458.789, -419.372, 1429.038]}
                    rotation={[0.061, 0.207, -0.043]}
                    scale={1.464}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_3'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_3_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_3_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE'
                    position={[1549.316, -451.672, 4791.189]}
                    rotation={[3.106, -0.352, 3.085]}
                    scale={1.472}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.EA04_Env_Stone_Gray_01a_LOD0_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Sand_01b_PRE'
                    position={[-2467.347, -412.556, 1000.411]}
                    rotation={[-3.086, 1.142, 3.048]}
                    scale={0.513}
                  >
                    <group name='EA04_Env_Stone_Sand_01b_LOD0_1'>
                      <mesh
                        name='EA04_Env_Stone_Sand_01b_LOD0_1_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Sand_01b_LOD0_1_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_4'
                    position={[-1911.234, -405.973, -268]}
                    rotation={[-3.082, 0.259, -3.105]}
                    scale={1.23}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_4'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_4_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_4_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Sand_01b_PRE_1'
                    position={[-304.016, -438.756, -1147.251]}
                    rotation={[3.109, -0.339, 3.132]}
                    scale={1.311}
                  >
                    <group name='EA04_Env_Stone_Sand_01b_LOD0_2'>
                      <mesh
                        name='EA04_Env_Stone_Sand_01b_LOD0_2_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Sand_01b_LOD0_2_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_5'
                    position={[-2707.692, -412.539, 870.092]}
                    rotation={[-2.905, -1.243, -3.004]}
                    scale={1.127}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_5'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_5_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_5_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_1'
                    position={[4776.376, -640.896, 12932.26]}
                    rotation={[0.389, 1.552, -0.376]}
                    scale={0.516}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_1'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_1_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_1_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_6'
                    position={[-2002.989, -407.421, -1352.961]}
                    rotation={[0.114, 0.723, -0.258]}
                    scale={1.199}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_6'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_6_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_6_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_2'
                    position={[18494.414, -709.619, 12750.597]}
                    rotation={[-3.073, -0.368, -3.11]}
                    scale={1.479}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_2'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_2_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_2_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_7'
                    position={[-1078.853, -499.994, -903.282]}
                    rotation={[3.132, -1.038, -2.891]}
                    scale={0.723}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_7'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_7_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_7_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_8'
                    position={[496.534, -432.669, 418.26]}
                    rotation={[3.129, 0.966, -3.116]}
                    scale={1.026}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_8'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_8_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_8_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Sand_01b_PRE_2'
                    position={[-1009.097, -429.202, -540.083]}
                    rotation={[3.072, 0.217, 3.13]}
                    scale={1.434}
                  >
                    <group name='EA04_Env_Stone_Sand_01b_LOD0_3'>
                      <mesh
                        name='EA04_Env_Stone_Sand_01b_LOD0_3_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Sand_01b_LOD0_3_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Sand_01b_PRE_3'
                    position={[-90.73, -428.566, 269.672]}
                    rotation={[0.035, 1.067, -0.03]}
                    scale={0.906}
                  >
                    <group name='EA04_Env_Stone_Sand_01b_LOD0_4'>
                      <mesh
                        name='EA04_Env_Stone_Sand_01b_LOD0_4_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Sand_01b_LOD0_4_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_9'
                    position={[-2517.477, -317.099, 45.728]}
                    rotation={[3.002, 1.195, -2.709]}
                    scale={0.61}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_9'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_9_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_9_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Sand_01b_PRE_4'
                    position={[-1755.894, -405.349, -868.128]}
                    rotation={[1.18, 1.25, -1.348]}
                    scale={1.077}
                  >
                    <group name='EA04_Env_Stone_Sand_01b_LOD0_5'>
                      <mesh
                        name='EA04_Env_Stone_Sand_01b_LOD0_5_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Sand_01b_LOD0_5_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_3'
                    position={[2699.231, -570.875, 12213.208]}
                    rotation={[-3.114, 0.132, -3.106]}
                    scale={1.207}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_3'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_3_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_3_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Sand_01b_PRE_5'
                    position={[-505.351, -437.878, -1054.941]}
                    rotation={[3.065, -1.378, 3.094]}
                    scale={0.606}
                  >
                    <group name='EA04_Env_Stone_Sand_01b_LOD0_6'>
                      <mesh
                        name='EA04_Env_Stone_Sand_01b_LOD0_6_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Sand_01b_LOD0_6_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_10'
                    position={[-2755.07, -286.818, 347.704]}
                    rotation={[3.108, 0.81, -2.837]}
                    scale={0.986}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_10'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_10_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_10_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_11'
                    position={[491.534, -420.315, 1361.523]}
                    rotation={[-0.033, 0.343, 0.056]}
                    scale={1.244}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_11'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_11_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_11_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_4'
                    position={[-1191.57, -461.896, 14880.235]}
                    rotation={[-3.093, -0.397, -3.073]}
                    scale={0.719}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_4'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_4_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_4_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE__2_'
                    position={[-1674.151, -383.038, 1099.164]}
                    rotation={[-1.419, -0.272, 3.14]}
                    scale={0.57}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_5'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_5_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_5_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Sand_01b_PRE_6'
                    position={[-1461.601, -404.6, 529.697]}
                    rotation={[3.14, 0.539, 3.112]}
                    scale={1.09}
                  >
                    <group name='EA04_Env_Stone_Sand_01b_LOD0_7'>
                      <mesh
                        name='EA04_Env_Stone_Sand_01b_LOD0_7_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Sand_01b_LOD0_7_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_12'
                    position={[-693.99, -412.9, 804.675]}
                    rotation={[-3.137, 0.479, -3.108]}
                    scale={0.785}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_12'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_12_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_12_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Sand_01b_PRE_7'
                    position={[-2351.482, -371.582, 235.565]}
                    rotation={[-2.916, -0.686, -2.991]}
                    scale={1.43}
                  >
                    <group name='EA04_Env_Stone_Sand_01b_LOD0_8'>
                      <mesh
                        name='EA04_Env_Stone_Sand_01b_LOD0_8_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Sand_01b_LOD0_8_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_13'
                    position={[-894.346, -413.066, 950.447]}
                    rotation={[3.061, 0.863, -3.086]}
                    scale={0.939}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_13'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_13_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_13_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Sand_01b_PRE_8'
                    position={[-230.218, -436.241, -1046.387]}
                    rotation={[-0.018, 0.471, 0.001]}
                    scale={1.189}
                  >
                    <group name='EA04_Env_Stone_Sand_01b_LOD0_9'>
                      <mesh
                        name='EA04_Env_Stone_Sand_01b_LOD0_9_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Sand_01b_LOD0_9_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_14'
                    position={[-758.041, -453.354, -1008.903]}
                    rotation={[-0.27, 0.766, 0.227]}
                    scale={0.667}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_14'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_14_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_14_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Sand_01b_PRE_9'
                    position={[-2312.264, -261.913, -665.006]}
                    rotation={[-2.89, -0.95, -2.806]}
                    scale={1.278}
                  >
                    <group name='EA04_Env_Stone_Sand_01b_LOD0_10'>
                      <mesh
                        name='EA04_Env_Stone_Sand_01b_LOD0_10_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Sand_01b_LOD0_10_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_15'
                    position={[-507.611, -417.763, -252.026]}
                    rotation={[3.015, -1.243, 3.017]}
                    scale={0.905}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_15'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_15_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_15_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_16'
                    position={[-2779.044, -486.055, 2194.241]}
                    rotation={[-3.038, 0.587, 3.049]}
                    scale={1.146}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_16'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_16_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_16_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_17'
                    position={[-64.448, -441.345, -1309.438]}
                    rotation={[-0.061, 1.285, 0.032]}
                    scale={0.588}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_17'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_17_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_17_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_5'
                    position={[12678.68, -637.364, 9386.36]}
                    rotation={[0.021, 1.276, -0.015]}
                    scale={0.952}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_6'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_6_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_6_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Sand_01b_PRE_10'
                    position={[-1679.137, -406.598, 298.431]}
                    rotation={[-3.051, 0.308, 3.074]}
                    scale={0.507}
                  >
                    <group name='EA04_Env_Stone_Sand_01b_LOD0_11'>
                      <mesh
                        name='EA04_Env_Stone_Sand_01b_LOD0_11_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Sand_01b_LOD0_11_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Sand_01b_PRE__6_'
                    position={[-1410.732, -408.325, 1221.178]}
                    rotation={[1.888, -0.229, 1.248]}
                    scale={0.898}
                  >
                    <group name='EA04_Env_Stone_Sand_01b_LOD0_12'>
                      <mesh
                        name='EA04_Env_Stone_Sand_01b_LOD0_12_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Sand_01b_LOD0_12_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Sand_01b_PRE_11'
                    position={[-1909.244, -394.512, -351.288]}
                    rotation={[-3.045, -0.633, 3.094]}
                    scale={1.328}
                  >
                    <group name='EA04_Env_Stone_Sand_01b_LOD0_13'>
                      <mesh
                        name='EA04_Env_Stone_Sand_01b_LOD0_13_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Sand_01b_LOD0_13_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_6'
                    position={[9440.812, -674.735, 13038.054]}
                    rotation={[-0.001, -1.107, -0.016]}
                    scale={1.388}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_7'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_7_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_7_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_7'
                    position={[5400.136, -962.19, 21751.754]}
                    rotation={[-3.054, 0.069, 3.104]}
                    scale={1.329}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_8'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_8_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_8_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Sand_01b_PRE_12'
                    position={[383.204, -432.925, 630.767]}
                    rotation={[0.026, 0.87, -0.023]}
                    scale={1.01}
                  >
                    <group name='EA04_Env_Stone_Sand_01b_LOD0_14'>
                      <mesh
                        name='EA04_Env_Stone_Sand_01b_LOD0_14_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Sand_01b_LOD0_14_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_18'
                    position={[-1065.649, -425.844, 1572.969]}
                    rotation={[-3.133, -0.577, -3.139]}
                    scale={1.222}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_18'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_18_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_18_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Sand_01b_PRE_13'
                    position={[-1217.201, -424.226, 1393.497]}
                    rotation={[0.011, 1.083, -0.005]}
                    scale={0.698}
                  >
                    <group name='EA04_Env_Stone_Sand_01b_LOD0_15'>
                      <mesh
                        name='EA04_Env_Stone_Sand_01b_LOD0_15_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Sand_01b_LOD0_15_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Sand_01b_PRE_14'
                    position={[-2904.023, -257.054, -32.737]}
                    rotation={[-2.91, -0.728, -3.057]}
                    scale={0.864}
                  >
                    <group name='EA04_Env_Stone_Sand_01b_LOD0_16'>
                      <mesh
                        name='EA04_Env_Stone_Sand_01b_LOD0_16_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Sand_01b_LOD0_16_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_19'
                    position={[-669.982, -422.142, 1185.844]}
                    rotation={[-3.09, -1.057, -3.103]}
                    scale={1.008}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_19'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_19_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_19_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_20'
                    position={[-679.466, -423.874, 1257.536]}
                    rotation={[-3.051, -1.314, -3.067]}
                    scale={1.006}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_20'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_20_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_20_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_21'
                    position={[-745.466, -427.456, 1378.709]}
                    rotation={[0.029, 1.016, -0.036]}
                    scale={1.396}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_21'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_21_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_21_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Sand_01b_PRE_15'
                    position={[-205.647, -420.46, 147.902]}
                    rotation={[-3.04, -1.083, -3.088]}
                    scale={1.074}
                  >
                    <group name='EA04_Env_Stone_Sand_01b_LOD0_17'>
                      <mesh
                        name='EA04_Env_Stone_Sand_01b_LOD0_17_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Sand_01b_LOD0_17_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_22'
                    position={[-651.168, -511.416, -1348.936]}
                    rotation={[1.754, -0.841, 2.218]}
                    scale={0.656}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_22'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_22_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_22_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_23'
                    position={[-948.411, -421.463, 1305.564]}
                    rotation={[-3.122, 0.253, 3.137]}
                    scale={1.108}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_23'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_23_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_23_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_24'
                    position={[-1789.262, -422.087, 1306.293]}
                    rotation={[-3.118, 0.416, 3.139]}
                    scale={1.31}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_24'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_24_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_24_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE__4_'
                    position={[-881.617, -427.665, 1807.379]}
                    rotation={[0.054, 1.016, -0.063]}
                    scale={1.396}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_25'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_25_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_25_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Sand_01b_PRE__3_'
                    position={[-961.3, -407.882, 732.797]}
                    rotation={[2.828, -1.185, 2.659]}
                    scale={1.912}
                  >
                    <group name='EA04_Env_Stone_Sand_01b_LOD0_18'>
                      <mesh
                        name='EA04_Env_Stone_Sand_01b_LOD0_18_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Sand_01b_LOD0_18_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE__5_'
                    position={[-1673.301, -419.638, 1244.873]}
                    rotation={[1.411, -0.117, -0.213]}
                    scale={0.57}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_9'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_9_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_9_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_25'
                    position={[-2622.626, -233.829, -134.131]}
                    rotation={[-2.468, 1.042, 2.986]}
                    scale={1.194}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_26'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_26_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_26_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_26'
                    position={[-244.768, -418.856, 136.555]}
                    rotation={[0.062, 0.302, -0.026]}
                    scale={1.044}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_27'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_27_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_27_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Sand_01b_PRE_16'
                    position={[-2443.501, -396.299, 637.997]}
                    rotation={[2.964, 1.013, -2.853]}
                    scale={1.477}
                  >
                    <group name='EA04_Env_Stone_Sand_01b_LOD0_19'>
                      <mesh
                        name='EA04_Env_Stone_Sand_01b_LOD0_19_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Sand_01b_LOD0_19_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_27'
                    position={[-2647.849, -334.914, 477.58]}
                    rotation={[1.752, 1.363, -1.562]}
                    scale={1.444}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_28'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_28_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_28_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_28'
                    position={[-472.145, -435.536, -985.867]}
                    rotation={[3.126, 0.979, 3.125]}
                    scale={0.738}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_29'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_29_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_29_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_8'
                    position={[-406.142, -398.342, 8949.617]}
                    rotation={[3.138, -0.083, 3.086]}
                    scale={0.794}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_10'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_10_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_10_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Sand_01b_PRE_17'
                    position={[-1828.307, -433.644, 2013.548]}
                    rotation={[-3.121, 1.399, 3.135]}
                    scale={0.944}
                  >
                    <group name='EA04_Env_Stone_Sand_01b_LOD0_20'>
                      <mesh
                        name='EA04_Env_Stone_Sand_01b_LOD0_20_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Sand_01b_LOD0_20_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Sand_01b_PRE_18'
                    position={[-2514.737, -339.546, 151.053]}
                    rotation={[0.059, 0.215, -0.363]}
                    scale={1.139}
                  >
                    <group name='EA04_Env_Stone_Sand_01b_LOD0_21'>
                      <mesh
                        name='EA04_Env_Stone_Sand_01b_LOD0_21_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Sand_01b_LOD0_21_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_9'
                    position={[-779, -423.42, 361.997]}
                    rotation={[0.057, 0.001, 0.04]}
                    scale={0.57}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_11'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_11_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_11_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Sand_01b_PRE_19'
                    position={[-2659.09, -414.122, 864.592]}
                    rotation={[0.111, 0.122, -0.045]}
                    scale={0.796}
                  >
                    <group name='EA04_Env_Stone_Sand_01b_LOD0_22'>
                      <mesh
                        name='EA04_Env_Stone_Sand_01b_LOD0_22_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Sand_01b_LOD0_22_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Sand_01b_PRE_20'
                    position={[-509.455, -428.282, -557.893]}
                    rotation={[3.126, -0.578, -3.138]}
                    scale={0.911}
                  >
                    <group name='EA04_Env_Stone_Sand_01b_LOD0_23'>
                      <mesh
                        name='EA04_Env_Stone_Sand_01b_LOD0_23_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Sand_01b_LOD0_23_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_29'
                    position={[-2434.244, -194.393, -583.721]}
                    rotation={[2.942, 0.094, -2.467]}
                    scale={0.867}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_30'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_30_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_30_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_10'
                    position={[10376.021, -672.888, 12904.94]}
                    rotation={[-3.125, -0.06, 3.139]}
                    scale={0.928}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_12'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_12_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_12_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Sand_01b_PRE_21'
                    position={[-324.611, -409.68, -41.454]}
                    rotation={[3.129, -0.641, 3.099]}
                    scale={0.509}
                  >
                    <group name='EA04_Env_Stone_Sand_01b_LOD0_24'>
                      <mesh
                        name='EA04_Env_Stone_Sand_01b_LOD0_24_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Sand_01b_LOD0_24_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_11'
                    position={[-72.024, -486.124, 12754.907]}
                    rotation={[0.053, 0.458, -0.071]}
                    scale={0.518}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_13'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_13_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_13_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_30'
                    position={[-2174.886, -427.763, 1600.853]}
                    rotation={[-3.118, -1.365, -3.134]}
                    scale={0.531}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_31'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_31_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_31_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_31'
                    position={[-1212.8, -388.338, 667.797]}
                    rotation={[3.137, -1.131, 3.03]}
                    scale={1.234}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_32'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_32_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_32_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Sand_01b_PRE_22'
                    position={[-2277.601, -432.945, 1917.297]}
                    rotation={[-3.068, 0.265, 3.062]}
                    scale={0.868}
                  >
                    <group name='EA04_Env_Stone_Sand_01b_LOD0_25'>
                      <mesh
                        name='EA04_Env_Stone_Sand_01b_LOD0_25_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Sand_01b_LOD0_25_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Sand_01b_PRE_23'
                    position={[564.207, -424.397, 1091.822]}
                    rotation={[0.04, 1.06, -0.07]}
                    scale={0.543}
                  >
                    <group name='EA04_Env_Stone_Sand_01b_LOD0_26'>
                      <mesh
                        name='EA04_Env_Stone_Sand_01b_LOD0_26_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Sand_01b_LOD0_26_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE__1_'
                    position={[-1682.501, -433.57, 2050.997]}
                    rotation={[-3.131, -0.272, 3.13]}
                    scale={0.867}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_14'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_14_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_14_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_12'
                    position={[12630.804, -644.532, 10462.611]}
                    rotation={[-3.129, -0.942, -3.134]}
                    scale={0.566}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_15'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_15_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_15_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_32'
                    position={[-2774.238, -422.069, 987.92]}
                    rotation={[0.523, 1.462, -0.419]}
                    scale={0.606}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_33'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_33_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_33_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Sand_01b_PRE_24'
                    position={[-2347.603, -249.878, -299.091]}
                    rotation={[-2.484, -0.437, -2.379]}
                    scale={0.93}
                  >
                    <group name='EA04_Env_Stone_Sand_01b_LOD0_27'>
                      <mesh
                        name='EA04_Env_Stone_Sand_01b_LOD0_27_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Sand_01b_LOD0_27_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_33'
                    position={[-1548.447, -422.496, 1291.612]}
                    rotation={[3.119, 1.441, -3.101]}
                    scale={0.673}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_34'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_34_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_34_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_34'
                    position={[-2376.273, -248.683, -218.143]}
                    rotation={[0.752, 0.522, -0.806]}
                    scale={0.552}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_35'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_35_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_35_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_35'
                    position={[455.534, -425.129, 1287.82]}
                    rotation={[-0.053, 1.229, 0.015]}
                    scale={0.752}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_36'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_36_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_36_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Sand_01b_PRE_25'
                    position={[-859.274, -438.774, 2076.224]}
                    rotation={[-3.118, -0.945, -3.134]}
                    scale={0.957}
                  >
                    <group name='EA04_Env_Stone_Sand_01b_LOD0_28'>
                      <mesh
                        name='EA04_Env_Stone_Sand_01b_LOD0_28_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Sand_01b_LOD0_28_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_36'
                    position={[-1244.776, -569.858, -1304.747]}
                    rotation={[0.599, 1.367, -0.817]}
                    scale={0.532}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_37'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_37_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_37_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_37'
                    position={[-2446.214, -227.483, -186.444]}
                    rotation={[0.452, -0.064, -0.343]}
                    scale={1.075}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_38'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_38_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_38_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Sand_01b_PRE_26'
                    position={[-1438.601, -404.738, 1115.997]}
                    rotation={[3.067, -1.166, 3.084]}
                    scale={0.817}
                  >
                    <group name='EA04_Env_Stone_Sand_01b_LOD0_29'>
                      <mesh
                        name='EA04_Env_Stone_Sand_01b_LOD0_29_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Sand_01b_LOD0_29_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Sand_01b_PRE_27'
                    position={[-2432.931, -211.047, -648.946]}
                    rotation={[-0.167, 0.091, -0.265]}
                    scale={0.896}
                  >
                    <group name='EA04_Env_Stone_Sand_01b_LOD0_30'>
                      <mesh
                        name='EA04_Env_Stone_Sand_01b_LOD0_30_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Sand_01b_LOD0_30_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_38'
                    position={[-384.488, -427.726, -507.355]}
                    rotation={[-0.013, 1.05, -0.005]}
                    scale={0.546}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_39'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_39_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_39_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_39'
                    position={[-437.377, -428, -530.939]}
                    rotation={[-0.004, 1.384, -0.014]}
                    scale={0.641}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_40'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_40_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_40_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Sand_01b_PRE_28'
                    position={[-765, -419.153, 912.197]}
                    rotation={[-2.995, -1.366, -3.013]}
                    scale={1.474}
                  >
                    <group name='EA04_Env_Stone_Sand_01b_LOD0_31'>
                      <mesh
                        name='EA04_Env_Stone_Sand_01b_LOD0_31_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Sand_01b_LOD0_31_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE__12_'
                    position={[-735.546, -429.602, 1712.574]}
                    rotation={[-3.126, 0.724, -3.137]}
                    scale={0.77}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_41'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_41_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_41_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_40'
                    position={[-1275.578, -559.428, -1277.512]}
                    rotation={[3.067, -0.729, -2.943]}
                    scale={0.941}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_42'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_42_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_42_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Sand_01b_PRE_29'
                    position={[-425.639, -435.418, -985.537]}
                    rotation={[3.12, -1.346, 3.137]}
                    scale={1.093}
                  >
                    <group name='EA04_Env_Stone_Sand_01b_LOD0_32'>
                      <mesh
                        name='EA04_Env_Stone_Sand_01b_LOD0_32_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Sand_01b_LOD0_32_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_41'
                    position={[-1460.484, -466.048, -940.567]}
                    rotation={[-0.017, 0.743, -0.162]}
                    scale={1.095}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_43'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_43_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_43_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_42'
                    position={[-2266.313, -438.601, 2041.79]}
                    rotation={[0.031, 0.27, 0.08]}
                    scale={0.982}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_44'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_44_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_44_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_43'
                    position={[-2014.993, -413.594, 570.675]}
                    rotation={[-3.094, -0.873, -3.101]}
                    scale={1.334}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_45'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_45_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_45_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Sand_01b_PRE_30'
                    position={[-152.426, -428.318, -521.196]}
                    rotation={[3.096, 0.763, 3.121]}
                    scale={0.612}
                  >
                    <group name='EA04_Env_Stone_Sand_01b_LOD0_33'>
                      <mesh
                        name='EA04_Env_Stone_Sand_01b_LOD0_33_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Sand_01b_LOD0_33_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_44'
                    position={[-1466.291, -400.842, 691.269]}
                    rotation={[3.11, 1.324, 3.115]}
                    scale={0.726}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_46'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_46_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_46_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Sand_01b_PRE_31'
                    position={[534.834, -425.146, 1011.764]}
                    rotation={[-3.077, -1.192, -3.048]}
                    scale={0.85}
                  >
                    <group name='EA04_Env_Stone_Sand_01b_LOD0_34'>
                      <mesh
                        name='EA04_Env_Stone_Sand_01b_LOD0_34_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Sand_01b_LOD0_34_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Sand_01b_PRE_32'
                    position={[-544.466, -426.404, 208.334]}
                    rotation={[0.019, 0.582, -0.017]}
                    scale={1.004}
                  >
                    <group name='EA04_Env_Stone_Sand_01b_LOD0_35'>
                      <mesh
                        name='EA04_Env_Stone_Sand_01b_LOD0_35_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Sand_01b_LOD0_35_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_45'
                    position={[-2220.219, -403.641, 1040.678]}
                    rotation={[-3.079, 0.067, 3.136]}
                    scale={1.203}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_47'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_47_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_47_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_46'
                    position={[-2543.075, -213.599, -821.949]}
                    rotation={[2.983, -0.131, -2.863]}
                    scale={0.751}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_48'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_48_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_48_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE__6_'
                    position={[-1420.4, -406.238, 1138.497]}
                    rotation={[1.411, -0.117, -0.213]}
                    scale={0.57}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_16'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_16_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_16_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_47'
                    position={[-968.644, -558.209, -1131.513]}
                    rotation={[2.898, 0.411, 3.129]}
                    scale={0.604}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_49'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_49_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_49_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE__9_'
                    position={[-1319.5, -424.438, 1800.297]}
                    rotation={[-3.134, 0.188, -3.142]}
                    scale={1.396}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_50'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_50_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_50_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_48'
                    position={[-1907.57, -429.107, 1704.331]}
                    rotation={[-3.127, -0.234, 3.14]}
                    scale={0.601}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_51'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_51_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_51_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE__2_'
                    position={[-1355.567, -400.337, 721.162]}
                    rotation={[-3.069, -0.471, 3.088]}
                    scale={1.234}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_52'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_52_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_52_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_49'
                    position={[-2485.051, -453.456, 2003.99]}
                    rotation={[-2.945, 1.079, 2.979]}
                    scale={1.133}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_53'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_53_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_53_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_13'
                    position={[-4979.979, -398.46, 12417.098]}
                    rotation={[-0.107, -1.31, -0.139]}
                    scale={0.561}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_17'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_17_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_17_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_50'
                    position={[-872.28, -427.682, 1638.089]}
                    rotation={[-3.132, 0.828, -3.133]}
                    scale={1.226}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_54'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_54_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_54_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Sand_01b_PRE_33'
                    position={[-1026.597, -433.95, 1845.343]}
                    rotation={[0.056, 1.459, -0.039]}
                    scale={0.575}
                  >
                    <group name='EA04_Env_Stone_Sand_01b_LOD0_36'>
                      <mesh
                        name='EA04_Env_Stone_Sand_01b_LOD0_36_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Sand_01b_LOD0_36_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_51'
                    position={[486.052, -425.214, 1281.519]}
                    rotation={[-0.04, 0.203, 0.005]}
                    scale={0.763}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_55'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_55_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_55_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Sand_01b_PRE_34'
                    position={[-2534.319, -416.178, 966.836]}
                    rotation={[-0.167, 1.292, 0.143]}
                    scale={1.233}
                  >
                    <group name='EA04_Env_Stone_Sand_01b_LOD0_37'>
                      <mesh
                        name='EA04_Env_Stone_Sand_01b_LOD0_37_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Sand_01b_LOD0_37_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Sand_01b_PRE_35'
                    position={[-584.08, -426.246, 255]}
                    rotation={[0.023, 0.773, -0.02]}
                    scale={0.815}
                  >
                    <group name='EA04_Env_Stone_Sand_01b_LOD0_38'>
                      <mesh
                        name='EA04_Env_Stone_Sand_01b_LOD0_38_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Sand_01b_LOD0_38_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_52'
                    position={[672.534, -423.045, 1751.64]}
                    rotation={[-2.961, 1.297, 3.024]}
                    scale={1.06}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_56'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_56_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_56_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Sand_01b_PRE_36'
                    position={[-1573.554, -406.732, 525.082]}
                    rotation={[3.116, -0.122, 3.127]}
                    scale={0.54}
                  >
                    <group name='EA04_Env_Stone_Sand_01b_LOD0_39'>
                      <mesh
                        name='EA04_Env_Stone_Sand_01b_LOD0_39_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Sand_01b_LOD0_39_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Sand_01b_PRE_37'
                    position={[455.227, -427.657, 1074.083]}
                    rotation={[3.093, 0.661, -3.098]}
                    scale={1.128}
                  >
                    <group name='EA04_Env_Stone_Sand_01b_LOD0_40'>
                      <mesh
                        name='EA04_Env_Stone_Sand_01b_LOD0_40_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Sand_01b_LOD0_40_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_53'
                    position={[-725.168, -435.063, -891.236]}
                    rotation={[-0.035, 0.514, 0.011]}
                    scale={0.776}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_57'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_57_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_57_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_54'
                    position={[47.116, -424.387, -504.041]}
                    rotation={[-0.074, 0.805, 0.021]}
                    scale={0.703}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_58'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_58_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_58_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Sand_01b_PRE_38'
                    position={[-1684.218, -517.255, -1435.348]}
                    rotation={[-2.878, -0.873, -2.623]}
                    scale={0.796}
                  >
                    <group name='EA04_Env_Stone_Sand_01b_LOD0_41'>
                      <mesh
                        name='EA04_Env_Stone_Sand_01b_LOD0_41_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Sand_01b_LOD0_41_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE__1_'
                    position={[-1107, -413.439, 736.797]}
                    rotation={[3.013, 1.19, -3.044]}
                    scale={1.234}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_59'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_59_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_59_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_14'
                    position={[10211.05, -643.955, 11098.985]}
                    rotation={[0.014, 1.151, -0.006]}
                    scale={1.13}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_18'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_18_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_18_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Sand_01b_PRE_39'
                    position={[-2500.672, -454.021, 1991.844]}
                    rotation={[-2.608, 1.406, 2.654]}
                    scale={0.885}
                  >
                    <group name='EA04_Env_Stone_Sand_01b_LOD0_42'>
                      <mesh
                        name='EA04_Env_Stone_Sand_01b_LOD0_42_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Sand_01b_LOD0_42_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE__11_'
                    position={[-1338.995, -429.797, 2043.86]}
                    rotation={[0.012, 0.111, 0.011]}
                    scale={1.006}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_60'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_60_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_60_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_15'
                    position={[-16204.689, -302.136, 15537.256]}
                    rotation={[-0.887, 1.282, 1.712]}
                    scale={0.914}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_19'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_19_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_19_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Sand_01b_PRE_40'
                    position={[-2132.241, -403.858, 1052.629]}
                    rotation={[-3.083, -0.565, 3.135]}
                    scale={1.348}
                  >
                    <group name='EA04_Env_Stone_Sand_01b_LOD0_43'>
                      <mesh
                        name='EA04_Env_Stone_Sand_01b_LOD0_43_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Sand_01b_LOD0_43_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_55'
                    position={[-2767.633, -485.374, 2198.014]}
                    rotation={[-0.058, 0.962, 0.134]}
                    scale={0.857}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_61'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_61_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_61_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_56'
                    position={[-656.98, -435.21, 2161.257]}
                    rotation={[-3.091, -0.99, -3.081]}
                    scale={1.443}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_62'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_62_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_62_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Sand_01b_PRE_41'
                    position={[-1967.163, -380.137, -921.375]}
                    rotation={[2.71, 1.018, -2.745]}
                    scale={1.476}
                  >
                    <group name='EA04_Env_Stone_Sand_01b_LOD0_44'>
                      <mesh
                        name='EA04_Env_Stone_Sand_01b_LOD0_44_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Sand_01b_LOD0_44_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_57'
                    position={[-1171.501, -419.038, 1314.797]}
                    rotation={[0.008, 0.353, -0.002]}
                    scale={0.591}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_63'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_63_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_63_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_58'
                    position={[-727.46, -420.428, -352.406]}
                    rotation={[-3.017, -1.247, -2.885]}
                    scale={1.264}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_64'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_64_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_64_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_16'
                    position={[4729.873, -635.085, 12518.766]}
                    rotation={[3.136, 1.223, -3.121]}
                    scale={0.962}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_20'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_20_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_20_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE__7_'
                    position={[-967.5, -441.357, 2367.997]}
                    rotation={[0.033, 0.48, -0.005]}
                    scale={0.77}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_65'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_65_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_65_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_59'
                    position={[-555.309, -434.347, 1939.327]}
                    rotation={[0.019, 0.48, -0.004]}
                    scale={0.77}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_66'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_66_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_66_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_60'
                    position={[-89.536, -414.161, -298.266]}
                    rotation={[-0.09, 1.131, 0.034]}
                    scale={1.438}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_67'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_67_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_67_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_61'
                    position={[-292.658, -439.145, -1163.959]}
                    rotation={[-3.132, 1.342, 3.101]}
                    scale={0.732}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_68'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_68_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_68_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Sand_01b_PRE_42'
                    position={[-2172.012, -350.412, -1158.112]}
                    rotation={[1.798, 1.123, -1.968]}
                    scale={0.516}
                  >
                    <group name='EA04_Env_Stone_Sand_01b_LOD0_45'>
                      <mesh
                        name='EA04_Env_Stone_Sand_01b_LOD0_45_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Sand_01b_LOD0_45_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_17'
                    position={[13163.227, -663.308, 12573.349]}
                    rotation={[0.004, -1.07, -0.005]}
                    scale={0.646}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_21'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_21_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_21_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_18'
                    position={[2263.099, -421.692, 9581.711]}
                    rotation={[0.014, -0.53, -0.054]}
                    scale={0.871}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_22'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_22_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_22_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_19'
                    position={[-12.653, -484.296, 12500.608]}
                    rotation={[-2.556, -1.453, -2.574]}
                    scale={1.169}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_23'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_23_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_23_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_62'
                    position={[-1804.05, -424.243, 1401.201]}
                    rotation={[0.002, 1.466, 0.021]}
                    scale={0.704}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_69'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_69_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_69_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE__10_'
                    position={[-1386.612, -436.239, 2303.052]}
                    rotation={[-3.114, 0.002, -3.133]}
                    scale={0.698}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_70'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_70_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_70_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_63'
                    position={[-873.246, -415.702, 1120.331]}
                    rotation={[0.047, 1.203, -0.019]}
                    scale={0.698}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_71'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_71_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_71_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Sand_01b_PRE_43'
                    position={[-2670.704, -342.677, 538.643]}
                    rotation={[2.61, 1.289, -2.366]}
                    scale={0.541}
                  >
                    <group name='EA04_Env_Stone_Sand_01b_LOD0_46'>
                      <mesh
                        name='EA04_Env_Stone_Sand_01b_LOD0_46_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Sand_01b_LOD0_46_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_64'
                    position={[-1004.286, -423.602, 1896.479]}
                    rotation={[-3.099, -0.91, -3.087]}
                    scale={0.896}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_72'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_72_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_72_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Sand_01b_PRE_44'
                    position={[-1362.432, -447.983, -726.956]}
                    rotation={[2.857, 1.077, -2.96]}
                    scale={0.505}
                  >
                    <group name='EA04_Env_Stone_Sand_01b_LOD0_47'>
                      <mesh
                        name='EA04_Env_Stone_Sand_01b_LOD0_47_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Sand_01b_LOD0_47_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_65'
                    position={[-991.569, -434.992, 1895.482]}
                    rotation={[-3.108, -1.299, -3.126]}
                    scale={0.668}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_73'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_73_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_73_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Sand_01b_PRE_45'
                    position={[-1118.466, -423.208, 1615.742]}
                    rotation={[-3.136, 0.564, -3.139]}
                    scale={0.654}
                  >
                    <group name='EA04_Env_Stone_Sand_01b_LOD0_48'>
                      <mesh
                        name='EA04_Env_Stone_Sand_01b_LOD0_48_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Sand_01b_LOD0_48_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_66'
                    position={[-32.969, -435.306, -969.038]}
                    rotation={[-0.009, 0.712, -0.005]}
                    scale={0.742}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_74'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_74_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_74_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_67'
                    position={[-270.831, -423.106, 756.031]}
                    rotation={[-3.138, 0.585, -3.11]}
                    scale={0.81}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_75'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_75_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_75_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_20'
                    position={[18532.604, -724.02, 12982.614]}
                    rotation={[-3.066, -0.554, -3.107]}
                    scale={1.195}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_24'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_24_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_24_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Sand_01b_PRE_46'
                    position={[481.028, -432.896, 468.774]}
                    rotation={[-3.122, -0.638, -3.123]}
                    scale={1.126}
                  >
                    <group name='EA04_Env_Stone_Sand_01b_LOD0_49'>
                      <mesh
                        name='EA04_Env_Stone_Sand_01b_LOD0_49_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Sand_01b_LOD0_49_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_68'
                    position={[-139.012, -416.114, -319.004]}
                    rotation={[3.09, 0.476, 3.125]}
                    scale={0.683}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_76'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_76_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_76_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_69'
                    position={[-2152.835, -295.403, -765.535]}
                    rotation={[-3.038, -0.58, -2.911]}
                    scale={0.891}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_77'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_77_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_77_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_70'
                    position={[-2099.164, -314.208, -516.732]}
                    rotation={[-3.021, -0.304, -2.86]}
                    scale={0.705}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_78'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_78_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_78_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_21'
                    position={[12670.031, -631.984, 8410.367]}
                    rotation={[0, -0.739, -0.008]}
                    scale={0.575}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_25'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_25_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_25_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_71'
                    position={[-426.914, -413.791, -159.248]}
                    rotation={[-0.019, 0.278, 0.042]}
                    scale={1.471}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_79'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_79_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_79_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Sand_01b_PRE_47'
                    position={[-713.896, -429.969, -649.452]}
                    rotation={[-0.018, 0.533, 0.001]}
                    scale={0.6}
                  >
                    <group name='EA04_Env_Stone_Sand_01b_LOD0_50'>
                      <mesh
                        name='EA04_Env_Stone_Sand_01b_LOD0_50_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Sand_01b_LOD0_50_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Sand_01b_PRE_48'
                    position={[-1511.58, -395.7, 973.121]}
                    rotation={[3.118, 0.463, -3.118]}
                    scale={0.709}
                  >
                    <group name='EA04_Env_Stone_Sand_01b_LOD0_51'>
                      <mesh
                        name='EA04_Env_Stone_Sand_01b_LOD0_51_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Sand_01b_LOD0_51_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_22'
                    position={[5024.547, -600.672, 10765.021]}
                    rotation={[3.126, 0.878, -3.068]}
                    scale={0.808}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_26'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_26_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_26_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Sand_01b_PRE_49'
                    position={[-913.589, -460.516, -841.733]}
                    rotation={[3.103, 0.414, 2.963]}
                    scale={0.669}
                  >
                    <group name='EA04_Env_Stone_Sand_01b_LOD0_52'>
                      <mesh
                        name='EA04_Env_Stone_Sand_01b_LOD0_52_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Sand_01b_LOD0_52_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Sand_01b_PRE_50'
                    position={[-1519.61, -420.356, -436.017]}
                    rotation={[0.039, 1.257, -0.046]}
                    scale={1.019}
                  >
                    <group name='EA04_Env_Stone_Sand_01b_LOD0_53'>
                      <mesh
                        name='EA04_Env_Stone_Sand_01b_LOD0_53_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Sand_01b_LOD0_53_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE__13_'
                    position={[-1424.301, -421.638, 1280.497]}
                    rotation={[3.137, -1.131, 3.03]}
                    scale={1.662}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_80'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_80_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_80_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_23'
                    position={[-16273.891, -323.365, 6936.638]}
                    rotation={[2.86, 1.093, -3.072]}
                    scale={0.972}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_27'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_27_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_27_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_24'
                    position={[14869.222, -320.5, -2569.902]}
                    rotation={[0.021, 0.834, -0.229]}
                    scale={1.041}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_28'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_28_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_28_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_25'
                    position={[21453.193, -842.754, 15513.599]}
                    rotation={[-3.114, -0.206, -3.121]}
                    scale={1.16}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_29'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_29_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_29_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_26'
                    position={[27281.68, -812.783, 9188.916]}
                    rotation={[-2.963, -1.492, -2.976]}
                    scale={1.275}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_30'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_30_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_30_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_27'
                    position={[-6665.431, -333.929, 11639.279]}
                    rotation={[2.987, -0.427, 3.113]}
                    scale={1.058}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_31'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_31_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_31_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_28'
                    position={[-12837.132, -82.188, 7724.638]}
                    rotation={[0.064, -1.304, 0.1]}
                    scale={1.256}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_32'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_32_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_32_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_29'
                    position={[7198.814, -565.322, 8179.657]}
                    rotation={[3.105, 1.191, -3.021]}
                    scale={1.241}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_33'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_33_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_33_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_30'
                    position={[-16480.904, -1290.601, 3933.947]}
                    rotation={[-0.801, -0.028, 0.393]}
                    scale={1.414}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_34'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_34_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_34_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_31'
                    position={[-4967.548, -205.445, 3959.766]}
                    rotation={[-0.033, -0.453, -0.186]}
                    scale={1.457}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_35'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_35_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_35_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_32'
                    position={[3954.428, -440.989, 6975.05]}
                    rotation={[0.095, 0.3, 0.035]}
                    scale={1.175}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_36'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_36_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_36_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Sand_01b_PRE_51'
                    position={[-2505.443, -410.052, 1214.631]}
                    rotation={[-0.097, 0.751, 0.084]}
                    scale={1.04}
                  >
                    <group name='EA04_Env_Stone_Sand_01b_LOD0_54'>
                      <mesh
                        name='EA04_Env_Stone_Sand_01b_LOD0_54_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Sand_01b_LOD0_54_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_33'
                    position={[10668.303, -233.166, 3783.122]}
                    rotation={[0.495, -0.188, 0.394]}
                    scale={1.017}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_37'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_37_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_37_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_34'
                    position={[12408.871, -627.944, 7883.98]}
                    rotation={[0.021, 1.232, -0.017]}
                    scale={1.017}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_38'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_38_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_38_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_35'
                    position={[11618.808, -641.751, 10451.191]}
                    rotation={[-3.128, -1.124, -3.136]}
                    scale={0.569}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_39'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_39_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_39_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_36'
                    position={[8829.334, -402.845, -10018.861]}
                    rotation={[-0.048, -0.211, -0.018]}
                    scale={0.571}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_40'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_40_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_40_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_37'
                    position={[9808.188, -390.593, 3567.959]}
                    rotation={[0.457, 1.49, -0.486]}
                    scale={1.416}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_41'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_41_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_41_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_38'
                    position={[14242.957, -99.242, 578.251]}
                    rotation={[3.108, 0.029, -3.135]}
                    scale={0.737}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_42'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_42_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_42_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_39'
                    position={[14290.885, -732.321, 16914.914]}
                    rotation={[0.017, -0.182, 0.002]}
                    scale={1.239}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_43'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_43_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_43_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_40'
                    position={[5579.471, -675.569, -15049.925]}
                    rotation={[3.133, 0.553, 3.13]}
                    scale={0.836}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_44'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_44_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_44_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_41'
                    position={[17584.801, -820.043, 18522.885]}
                    rotation={[-0.034, -1.173, -0.058]}
                    scale={0.54}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_45'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_45_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_45_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_42'
                    position={[9859.834, -531.163, -13239.301]}
                    rotation={[-0.042, 0.266, 0.088]}
                    scale={1.006}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_46'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_46_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_46_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_72'
                    position={[-328.376, -424.336, -410.922]}
                    rotation={[3.078, -0.291, 3.126]}
                    scale={0.811}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_81'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_81_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_81_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_73'
                    position={[-2298.463, -333.324, -108.945]}
                    rotation={[0.926, 1.033, -0.875]}
                    scale={0.745}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_82'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_82_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_82_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_43'
                    position={[-10328.458, -259.315, 16337.889]}
                    rotation={[-2.9, -0.88, -3.064]}
                    scale={1.335}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_47'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_47_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_47_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Sand_01b_PRE_52'
                    position={[-1451.856, -467.79, -946.931]}
                    rotation={[-0.08, 0.477, -0.096]}
                    scale={1.144}
                  >
                    <group name='EA04_Env_Stone_Sand_01b_LOD0_55'>
                      <mesh
                        name='EA04_Env_Stone_Sand_01b_LOD0_55_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Sand_01b_LOD0_55_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_44'
                    position={[-10628.91, -183.638, 12487.646]}
                    rotation={[-0.139, 0.094, 0.044]}
                    scale={0.65}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_48'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_48_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_48_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_45'
                    position={[7973.093, -617.598, 9857.424]}
                    rotation={[0.015, 0.127, -0.014]}
                    scale={1.027}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_49'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_49_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_49_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_46'
                    position={[20283.186, -759.621, 12986.85]}
                    rotation={[-0.181, -1.472, -0.206]}
                    scale={0.773}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_50'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_50_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_50_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_47'
                    position={[23567.045, -708.167, 4021.909]}
                    rotation={[3.094, 1.173, -3.102]}
                    scale={1.366}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_51'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_51_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_51_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_48'
                    position={[11105.687, -564.827, 6145.789]}
                    rotation={[-2.773, -1.281, -2.89]}
                    scale={0.801}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_52'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_52_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_52_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_49'
                    position={[24685.24, -820.228, 11929.731]}
                    rotation={[-3.133, 0.742, -3.121]}
                    scale={1.475}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_53'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_53_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_53_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_50'
                    position={[-9471.049, -294.189, 12414.342]}
                    rotation={[0.024, -0.617, -0.118]}
                    scale={1.255}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_54'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_54_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_54_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_51'
                    position={[20091.396, -741.403, 12483.222]}
                    rotation={[-3.028, -1.087, -3.078]}
                    scale={0.571}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_55'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_55_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_55_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_52'
                    position={[14712.906, -811.084, 21422.287]}
                    rotation={[0.004, -0.59, -0.027]}
                    scale={1.118}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_56'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_56_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_56_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_53'
                    position={[5501.133, -231.573, -1191.569]}
                    rotation={[3.12, 0.3, 3.117]}
                    scale={0.825}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_57'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_57_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_57_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_54'
                    position={[14235.718, -660.338, 11754.91]}
                    rotation={[0.008, 0.179, -0.004]}
                    scale={0.997}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_58'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_58_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_58_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_55'
                    position={[6444.462, -165.463, 326.008]}
                    rotation={[-0.017, -0.48, 0.026]}
                    scale={1.412}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_59'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_59_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_59_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_56'
                    position={[24362.438, -848.749, 13394.197]}
                    rotation={[-3.061, -1.318, -3.082]}
                    scale={0.789}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_60'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_60_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_60_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_57'
                    position={[15763.49, 377.877, -16953.531]}
                    rotation={[0.098, -0.844, 0.204]}
                    scale={1.291}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_61'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_61_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_61_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_58'
                    position={[12138.488, -42.818, 2210.035]}
                    rotation={[3.11, 0.457, -3.141]}
                    scale={1.376}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_62'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_62_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_62_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_59'
                    position={[-10253.291, -147.953, 13999.864]}
                    rotation={[-0.069, -0.463, -0.211]}
                    scale={0.924}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_63'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_63_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_63_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_60'
                    position={[25522.73, -845.682, 12498.104]}
                    rotation={[-3.134, 0.778, -3.121]}
                    scale={0.849}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_64'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_64_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_64_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_61'
                    position={[15462.258, -705.268, 14992.595]}
                    rotation={[0.169, 1.422, -0.151]}
                    scale={0.521}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_65'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_65_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_65_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE__4_'
                    position={[-1480.601, -413.738, 1123.797]}
                    rotation={[-0.635, 1.428, 0.605]}
                    scale={0.492}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_66'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_66_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_66_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE__3_'
                    position={[-1586.4, -414.438, 1126.597]}
                    rotation={[-3.054, -0.272, 3.14]}
                    scale={0.492}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_67'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_67_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_67_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_62'
                    position={[258.338, -481.857, 12116.179]}
                    rotation={[0.03, -0.044, -0.035]}
                    scale={0.623}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_68'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_68_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_68_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_63'
                    position={[16001.369, -641.402, 8755.437]}
                    rotation={[-3.114, 1.117, 3.107]}
                    scale={0.658}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_69'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_69_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_69_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_64'
                    position={[-4788.612, -214.627, 3530.356]}
                    rotation={[-3.095, 0.015, -2.974]}
                    scale={0.648}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_70'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_70_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_70_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_65'
                    position={[-4880.848, -366.315, 10362.617]}
                    rotation={[3.077, 1.181, -3.034]}
                    scale={1.101}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_71'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_71_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_71_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_66'
                    position={[-11183.467, -194.138, 14693.807]}
                    rotation={[-3.13, 0.993, 3.117]}
                    scale={0.555}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_72'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_72_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_72_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_67'
                    position={[17325.609, -647.556, 6295.524]}
                    rotation={[-0.04, -1.334, -0.058]}
                    scale={1.133}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_73'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_73_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_73_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_68'
                    position={[-2923.05, -468.631, 6354.661]}
                    rotation={[-2.811, -1.332, -2.831]}
                    scale={1.42}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_74'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_74_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_74_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_69'
                    position={[13004.099, -779.404, -25960.76]}
                    rotation={[-0.013, 0.222, 0.003]}
                    scale={1.014}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_75'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_75_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_75_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_70'
                    position={[12431.484, -726.458, -21521.152]}
                    rotation={[-0.026, 1.337, 0.014]}
                    scale={1.136}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_76'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_76_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_76_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Sand_01b_PRE_53'
                    position={[-2101.043, -402.323, 1030.888]}
                    rotation={[-3.073, 0.863, 3.132]}
                    scale={0.603}
                  >
                    <group name='EA04_Env_Stone_Sand_01b_LOD0_56'>
                      <mesh
                        name='EA04_Env_Stone_Sand_01b_LOD0_56_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Sand_01b_LOD0_56_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_71'
                    position={[14384.631, -342.193, 5536.838]}
                    rotation={[-3.024, -1.109, 2.996]}
                    scale={1.429}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_77'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_77_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_77_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_72'
                    position={[-5722.455, -441.27, 14318.161]}
                    rotation={[0.112, 1.012, -0.073]}
                    scale={0.526}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_78'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_78_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_78_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_73'
                    position={[7253.061, -686.052, 16240.197]}
                    rotation={[-0.004, 0.507, -0.095]}
                    scale={0.923}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_79'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_79_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_79_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_74'
                    position={[-6154.558, -383.214, 13402.788]}
                    rotation={[0.036, 0.24, -0.037]}
                    scale={0.722}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_80'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_80_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_80_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_75'
                    position={[5387.342, -603.799, 15895.161]}
                    rotation={[2.949, -1.1, 2.894]}
                    scale={1.191}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_81'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_81_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_81_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_76'
                    position={[8671.953, -268.971, -8295.255]}
                    rotation={[0.024, 1.243, -0.196]}
                    scale={1.325}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_82'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_82_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_82_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_77'
                    position={[12563.722, -659.137, 12245.478]}
                    rotation={[3.141, 1.319, -3.132]}
                    scale={1.109}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_83'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_83_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_83_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_78'
                    position={[5660.171, -312.58, 3754.315]}
                    rotation={[3.141, -1.117, -3.11]}
                    scale={0.854}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_84'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_84_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_84_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_79'
                    position={[27480.756, -922.089, 14568.988]}
                    rotation={[0.05, 1.073, -0.031]}
                    scale={1.056}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_85'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_85_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_85_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_80'
                    position={[1104.665, -313.669, 8242.63]}
                    rotation={[-3.107, 0.655, -3.107]}
                    scale={0.973}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_86'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_86_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_86_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_81'
                    position={[16692.559, -611.063, 2335.445]}
                    rotation={[3.095, 1.11, -3.084]}
                    scale={0.787}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_87'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_87_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_87_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_82'
                    position={[14565.857, -716.217, 15997.104]}
                    rotation={[-3.122, 0.801, 3.139]}
                    scale={0.609}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_88'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_88_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_88_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_83'
                    position={[9845.384, -454.275, 5990.131]}
                    rotation={[-0.119, -1.286, -0.256]}
                    scale={0.721}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_89'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_89_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_89_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_84'
                    position={[7154.195, -634.168, 11179.492]}
                    rotation={[-0.014, -1.321, -0.028]}
                    scale={0.806}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_90'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_90_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_90_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_85'
                    position={[8706.49, -822.943, -27751.404]}
                    rotation={[3.021, -1.343, 3.038]}
                    scale={1.461}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_91'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_91_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_91_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_86'
                    position={[5050.041, -887.352, -26724.934]}
                    rotation={[3.058, -1.218, 3.074]}
                    scale={0.984}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_92'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_92_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_92_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_87'
                    position={[16370.624, -522.38, 2103.41]}
                    rotation={[-2.057, -0.831, -2.128]}
                    scale={0.665}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_93'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_93_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_93_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_88'
                    position={[8177.894, -623.062, 10056.95]}
                    rotation={[-3.123, -0.356, -3.126]}
                    scale={0.77}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_94'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_94_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_94_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_89'
                    position={[7497.016, -350.954, 3286.783]}
                    rotation={[-0.017, 0.693, -0.018]}
                    scale={1.418}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_95'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_95_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_95_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_90'
                    position={[10441.549, -390.513, -14665.356]}
                    rotation={[-2.987, 0.298, 2.839]}
                    scale={1.01}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_96'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_96_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_96_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01b_PRE_74'
                    position={[-1051.114, -501.194, -902.61]}
                    rotation={[2.904, 0.738, 3.126]}
                    scale={1.176}
                  >
                    <group name='EA04_Env_Stone_Gray_01b_LOD0_83'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01b_LOD0_83_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01b_LOD0_83_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_91'
                    position={[5102.652, -645.027, 13072.515]}
                    rotation={[-3.124, -0.554, -3.133]}
                    scale={1.22}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_97'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_97_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_97_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_92'
                    position={[-2449.276, -437.059, 1367.528]}
                    rotation={[-3.126, 0.753, -3.138]}
                    scale={0.821}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_98'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_98_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_98_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_93'
                    position={[-3927.053, -372.981, 9436.486]}
                    rotation={[-3.118, 0.271, -3.099]}
                    scale={1.244}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_99'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_99_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_99_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_94'
                    position={[24038.609, -771.76, 9244.772]}
                    rotation={[-3.12, -0.663, -3.127]}
                    scale={1.32}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_100'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_100_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_100_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_95'
                    position={[-9344.041, -116.359, 8941.521]}
                    rotation={[-3.091, -0.016, 3.127]}
                    scale={0.873}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_101'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_101_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_101_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_96'
                    position={[2811.76, -597.932, 12939.058]}
                    rotation={[-3.129, 0.51, -3.101]}
                    scale={0.558}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_102'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_102_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_102_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_97'
                    position={[3671.071, -634.045, 13138.596]}
                    rotation={[0.065, 1.385, -0.053]}
                    scale={1.027}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_103'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_103_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_103_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_98'
                    position={[18809.531, -794.787, 15761.162]}
                    rotation={[-3.13, 0.323, -3.118]}
                    scale={0.685}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_104'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_104_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_104_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_99'
                    position={[13903.987, -623.137, 6662.435]}
                    rotation={[-3.121, -0.403, -3.135]}
                    scale={0.727}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_105'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_105_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_105_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_100'
                    position={[16669.25, -107.27, -8915.302]}
                    rotation={[0.182, 0.204, 0.005]}
                    scale={1.373}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_106'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_106_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_106_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_101'
                    position={[24429.369, -662.684, 3618.835]}
                    rotation={[0.11, -1.068, 0.04]}
                    scale={0.771}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_107'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_107_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_107_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_102'
                    position={[-15223.402, -936.18, 4131.191]}
                    rotation={[2.952, -0.194, 3.016]}
                    scale={0.776}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_108'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_108_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_108_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_103'
                    position={[-10185.055, -81.746, 7023.911]}
                    rotation={[0.201, 1.483, -0.183]}
                    scale={0.919}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_109'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_109_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_109_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_104'
                    position={[15450.005, -646.074, 8077.179]}
                    rotation={[-3.117, -1.292, -3.121]}
                    scale={1.432}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_110'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_110_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_110_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_105'
                    position={[6969.967, -319.449, 4144.058]}
                    rotation={[-0.034, -0.411, -0.015]}
                    scale={0.997}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_111'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_111_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_111_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_106'
                    position={[2942.911, -616.918, 13390.633]}
                    rotation={[0.044, 0.335, -0.037]}
                    scale={0.657}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_112'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_112_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_112_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_107'
                    position={[10949.279, -405.227, -17471.211]}
                    rotation={[-2.645, 1.078, 2.441]}
                    scale={0.601}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_113'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_113_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_113_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_108'
                    position={[12565.986, -691.144, 14261.434]}
                    rotation={[-0.023, 1.518, 0.04]}
                    scale={1.197}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_114'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_114_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_114_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_109'
                    position={[25061.18, -867.781, 13771.549]}
                    rotation={[-3.134, 0.787, -3.12]}
                    scale={0.922}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_115'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_115_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_115_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_110'
                    position={[-4204.674, -396.246, 11911.989]}
                    rotation={[-0.035, -0.692, -0.052]}
                    scale={1.051}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_116'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_116_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_116_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_111'
                    position={[15368.828, -646.701, 9989.188]}
                    rotation={[3.133, -0.33, 3.126]}
                    scale={0.673}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_117'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_117_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_117_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_112'
                    position={[15238.005, -180.132, -8057.068]}
                    rotation={[2.857, 1.276, -2.821]}
                    scale={0.584}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_118'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_118_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_118_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_113'
                    position={[9169.076, -611.659, 8074.341]}
                    rotation={[-3.107, -1.002, -3.115]}
                    scale={1.081}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_119'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_119_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_119_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_114'
                    position={[9663.581, -366.088, 4255.833]}
                    rotation={[-3.101, -1.068, -3.063]}
                    scale={1.272}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_120'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_120_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_120_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_115'
                    position={[5824.088, -297.853, 4494.557]}
                    rotation={[3.129, -0.701, -3.127]}
                    scale={0.66}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_121'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_121_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_121_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_116'
                    position={[14125.252, -719.67, 16145.677]}
                    rotation={[-3.129, -1.066, 3.137]}
                    scale={1.014}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_122'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_122_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_122_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_117'
                    position={[16598.156, -607.71, 2174.667]}
                    rotation={[3.141, 0.23, -3.115]}
                    scale={0.698}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_123'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_123_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_123_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_118'
                    position={[17480.613, -74.344, -9064.223]}
                    rotation={[0.407, -0.574, -0.02]}
                    scale={1.479}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_124'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_124_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_124_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_119'
                    position={[6933.877, -502.043, 7506.111]}
                    rotation={[0.042, -0.65, -0.056]}
                    scale={1.078}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_125'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_125_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_125_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_120'
                    position={[7964.293, -379.83, -10069.602]}
                    rotation={[-2.893, -1.404, -2.866]}
                    scale={0.565}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_126'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_126_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_126_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_121'
                    position={[17430.34, -606.476, -408.484]}
                    rotation={[3.139, -0.4, -3.128]}
                    scale={0.638}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_127'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_127_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_127_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_122'
                    position={[17312.766, -626.797, 2295.645]}
                    rotation={[-0.034, -0.997, -0.047]}
                    scale={0.91}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_128'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_128_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_128_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_123'
                    position={[15040.871, -556.604, -5182.27]}
                    rotation={[0.181, 0.102, -0.151]}
                    scale={1.486}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_129'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_129_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_129_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_124'
                    position={[9610.333, -604.873, 7278.696]}
                    rotation={[-3.069, 0.071, -3.097]}
                    scale={0.509}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_130'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_130_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_130_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_125'
                    position={[9659.282, -668.318, -17189.492]}
                    rotation={[-2.811, 1.237, 2.754]}
                    scale={0.89}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_131'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_131_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_131_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_126'
                    position={[15220.923, -712.906, 15676.349]}
                    rotation={[-3.111, -0.48, -3.116]}
                    scale={0.93}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_132'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_132_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_132_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_127'
                    position={[9440.19, -504.271, -11943.954]}
                    rotation={[0.033, -1.006, 0.064]}
                    scale={1.23}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_133'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_133_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_133_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_128'
                    position={[10904.765, -681.146, -19918.434]}
                    rotation={[-3.037, 0.737, 2.869]}
                    scale={0.976}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_134'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_134_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_134_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_129'
                    position={[4967.145, -643.947, 13257.1]}
                    rotation={[-0.112, -0.639, -0.104]}
                    scale={1.168}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_135'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_135_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_135_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_130'
                    position={[4913.186, -651.011, 15689.063]}
                    rotation={[0.005, 0.207, 0.114]}
                    scale={0.844}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_136'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_136_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_136_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_131'
                    position={[13820.009, -50.375, 1981.165]}
                    rotation={[-0.031, 0.421, 0]}
                    scale={1.451}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_137'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_137_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_137_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA_04_Trunk_and_stone_PRE'
                    position={[-2442.489, -390.858, 1316.036]}
                  >
                    <group
                      name='EA04_Env_Tree_Trunk_01b_PRE'
                      position={[6.787, 46.2, -51.493]}
                      rotation={[-0.325, 0.221, -0.064]}
                    >
                      <group name='EA04_Env_Tree_Trunk_01b_LOD0'>
                        <mesh
                          name='EA04_Env_Tree_Trunk_01b_LOD0_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Tree_Trunk_01b_LOD0_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_132'
                    position={[-14299.702, -720.193, 4728.325]}
                    rotation={[2.843, -0.819, 2.96]}
                    scale={1.278}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_138'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_138_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_138_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_133'
                    position={[-3951.917, -380.12, 9671.622]}
                    rotation={[-0.17, -1.373, -0.209]}
                    scale={0.582}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_139'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_139_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_139_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_134'
                    position={[-13362.795, -144.119, 6094.236]}
                    rotation={[0.599, -1.255, 0.588]}
                    scale={1.343}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_140'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_140_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_140_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Stone_Gray_01a_PRE_135'
                    position={[20486.074, -828.102, 15719.401]}
                    rotation={[0.033, 0.425, -0.022]}
                    scale={0.888}
                  >
                    <group name='EA04_Env_Stone_Gray_01a_LOD0_141'>
                      <mesh
                        name='EA04_Env_Stone_Gray_01a_LOD0_141_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Stone_Gray_01a_LOD0_141_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='Cactus'
                    position={[11023.499, 4078.661, -2769.003]}
                    rotation={[0, Math.PI / 2, 0]}
                  >
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE'
                      position={[-17971.936, -4780.977, 3765.333]}
                      rotation={[-3.101, 1.193, 3.096]}
                      scale={0.554}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_1'
                      position={[-25099.285, -5000.162, -3251.245]}
                      rotation={[-0.851, 1.454, 0.816]}
                      scale={1.006}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_1'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_1_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_1_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_2'
                      position={[21317.863, -4844.5, -1012.988]}
                      rotation={[-3.138, -0.507, -3.127]}
                      scale={1.465}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_2'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_2_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_2_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_3'
                      position={[-5509.71, -4111.932, 3838.309]}
                      rotation={[-3.111, -0.252, -3.104]}
                      scale={1.419}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_3'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_3_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_3_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_4'
                      position={[5277.727, -4399.51, -2002.474]}
                      rotation={[3.076, -0.497, -3.072]}
                      scale={1.257}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_4'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_4_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_4_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_5'
                      position={[-13348.633, -4691.287, -4888.095]}
                      rotation={[0.034, -0.864, 0.031]}
                      scale={0.996}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_5'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_5_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_5_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_6'
                      position={[9059.973, -3591.631, 3351.894]}
                      rotation={[2.391, -0.406, 2.604]}
                      scale={0.549}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_6'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_6_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_6_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_7'
                      position={[-1656.309, -4221.515, 326.299]}
                      rotation={[-0.145, -1.373, -0.154]}
                      scale={0.801}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_7'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_7_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_7_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_8'
                      position={[17151.682, -4813.679, -4545.044]}
                      rotation={[3.128, 0.238, -3.127]}
                      scale={0.909}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_8'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_8_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_8_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_9'
                      position={[-24553.143, -4896.78, 3695.477]}
                      rotation={[0.3, -1.501, 0.279]}
                      scale={0.788}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_9'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_9_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_9_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_10'
                      position={[-8565.134, -4434.732, -3273.088]}
                      rotation={[-3.019, 0.599, 2.963]}
                      scale={0.713}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_10'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_10_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_10_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_11'
                      position={[3894.501, -4301.824, -4549.074]}
                      rotation={[3.018, -0.464, 3.099]}
                      scale={0.731}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_11'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_11_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_11_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_12'
                      position={[-20656.205, -4827.318, 3315.436]}
                      rotation={[-0.018, 0.75, 0.023]}
                      scale={0.953}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_12'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_12_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_12_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_13'
                      position={[19670.842, -4816.86, 1280.557]}
                      rotation={[3.133, 0.384, -3.128]}
                      scale={1.249}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_13'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_13_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_13_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_14'
                      position={[-4059.995, -4150.333, 2318.457]}
                      rotation={[-0.057, -1.076, -0.065]}
                      scale={0.692}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_14'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_14_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_14_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_15'
                      position={[-16151.463, -4754.112, 1932.852]}
                      rotation={[-0.021, 0.851, 0.026]}
                      scale={1.448}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_15'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_15_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_15_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_16'
                      position={[-8832.424, -4623.775, -45.435]}
                      rotation={[0.346, -1.13, 0.301]}
                      scale={1.065}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_16'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_16_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_16_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_17'
                      position={[3319.636, -4414.391, 2627.131]}
                      rotation={[-3.118, -1.314, 3.124]}
                      scale={0.581}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_17'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_17_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_17_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_18'
                      position={[-21133.645, -4870.523, 5436.154]}
                      rotation={[-3.134, -0.669, 3.117]}
                      scale={0.617}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_18'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_18_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_18_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_19'
                      position={[22373.908, -4923.992, -5546.171]}
                      rotation={[3.1, 0.73, -3.114]}
                      scale={0.622}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_19'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_19_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_19_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_20'
                      position={[-2351.466, -4201.409, 477.828]}
                      rotation={[3.071, 1.195, -3.059]}
                      scale={0.737}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_20'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_20_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_20_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_21'
                      position={[-6374.369, -4700.625, 6532.48]}
                      rotation={[0.02, 0.431, -0.013]}
                      scale={0.928}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_21'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_21_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_21_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_22'
                      position={[-11345.812, -4700.789, -1019.862]}
                      rotation={[0.008, -0.606, 0.01]}
                      scale={0.618}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_22'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_22_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_22_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_23'
                      position={[15339.1, -3954.332, 2531.142]}
                      rotation={[-0.049, 0.4, -0.053]}
                      scale={0.679}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_23'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_23_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_23_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_24'
                      position={[23643.795, -4922.076, -4359.546]}
                      rotation={[-0.057, -1.032, -0.04]}
                      scale={0.936}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_24'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_24_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_24_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_25'
                      position={[-22329.506, -4830.227, -1003.133]}
                      rotation={[0.381, 1.403, -0.302]}
                      scale={0.971}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_25'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_25_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_25_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_26'
                      position={[-3244.713, -4158.404, -2483.618]}
                      rotation={[3.124, -0.914, -3.132]}
                      scale={1.34}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_26'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_26_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_26_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_27'
                      position={[-22100.031, -4888.626, 5421.852]}
                      rotation={[-3.073, 1.178, 3.092]}
                      scale={0.546}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_27'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_27_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_27_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_28'
                      position={[16226.649, -4778.334, -598.009]}
                      rotation={[0.339, 1.523, -0.347]}
                      scale={0.885}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_28'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_28_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_28_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_29'
                      position={[12390.464, -4715.625, -3929.112]}
                      rotation={[3.113, -1.163, -3.093]}
                      scale={1.219}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_29'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_29_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_29_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_30'
                      position={[24213.133, -4885.646, -1863.165]}
                      rotation={[-0.024, -0.781, -0.02]}
                      scale={1.202}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_30'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_30_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_30_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_31'
                      position={[-24248.971, -4925.462, 5237.146]}
                      rotation={[-3.118, 0.075, 3.122]}
                      scale={0.735}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_31'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_31_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_31_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_32'
                      position={[13872.992, -3977.167, 1183.966]}
                      rotation={[-0.053, 0.325, -0.051]}
                      scale={1.04}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_32'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_32_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_32_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_33'
                      position={[-18774.213, -4697.617, -4713.11]}
                      rotation={[-3.081, 0.431, -3.087]}
                      scale={0.756}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_33'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_33_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_33_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_34'
                      position={[-7772.895, -4410.027, 1343.431]}
                      rotation={[-0.293, 0.679, 0.376]}
                      scale={1.207}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_34'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_34_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_34_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_35'
                      position={[-494.068, -4260.912, 1254.465]}
                      rotation={[-0.058, -1.092, -0.073]}
                      scale={0.533}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_35'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_35_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_35_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_36'
                      position={[16197.536, -4715.858, -282.79]}
                      rotation={[-0.348, -1.072, -0.167]}
                      scale={1.499}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_36'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_36_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_36_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_37'
                      position={[19585.504, -4834.885, -3259.462]}
                      rotation={[0.075, 1.407, -0.086]}
                      scale={1.282}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_37'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_37_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_37_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_38'
                      position={[-20262.305, -4728.328, -3456.738]}
                      rotation={[0.133, 0.786, -0.07]}
                      scale={1.485}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_38'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_38_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_38_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_39'
                      position={[-11409.265, -4665.539, -4115.528]}
                      rotation={[0.033, -0.974, 0.023]}
                      scale={1.149}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_39'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_39_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_39_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_40'
                      position={[10682.937, -2769.371, 4681.279]}
                      rotation={[-0.291, 0.33, -0.116]}
                      scale={0.755}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_40'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_40_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_40_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_41'
                      position={[-2146.036, -4212.546, 2346.691]}
                      rotation={[-3.101, -0.786, -3.094]}
                      scale={0.767}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_41'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_41_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_41_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_42'
                      position={[-4753.237, -4258.54, -4000.269]}
                      rotation={[0.323, -1.106, 0.252]}
                      scale={0.714}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_42'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_42_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_42_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_43'
                      position={[12037.682, -3960.921, 1853.538]}
                      rotation={[-0.011, -0.706, 0.03]}
                      scale={0.684}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_43'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_43_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_43_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_44'
                      position={[-6709.501, -4692.482, 6248.572]}
                      rotation={[-0.029, -1.314, -0.045]}
                      scale={0.804}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_44'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_44_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_44_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01c_PRE__2_'
                      position={[-4933.563, -4473.419, -13542.868]}
                      rotation={[1.623, -1.556, 1.519]}
                    >
                      <group name='EA04_Env_Plants_Cactus_01c_LOD0'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01c_LOD0_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01c_LOD0_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01c_PRE__1_'
                      position={[-4518.002, -4536, -9423]}
                      rotation={[1.543, -1.517, 1.599]}
                    >
                      <group name='EA04_Env_Plants_Cactus_01c_LOD0_1'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01c_LOD0_1_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01c_LOD0_1_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01c_PRE'
                      position={[-3922.591, -4491.187, -12048.601]}
                      rotation={[-3.093, -0.457, -3.137]}
                      scale={0.551}
                    >
                      <group name='EA04_Env_Plants_Cactus_01c_LOD0_2'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01c_LOD0_2_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01c_LOD0_2_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE__3_'
                      position={[-4621.173, -4457.157, -13697.645]}
                      rotation={[0.023, -0.56, -0.089]}
                      scale={1.06}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_45'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_45_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_45_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01b_PRE__3_'
                      position={[-6148.302, -4556, -10180.701]}
                      rotation={[-3.134, -0.309, 3.084]}
                      scale={1.011}
                    >
                      <group name='EA04_Env_Plants_Cactus_01b_LOD0'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01b_LOD0_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01b_LOD0_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE__2_'
                      position={[-3976.592, -4494.602, -13730.602]}
                      rotation={[1.565, -1.527, 1.576]}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_46'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_46_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_46_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01b_PRE__2_'
                      position={[-2470.591, -4482.065, -12673.603]}
                      rotation={[2.654, -0.984, 2.553]}
                    >
                      <group name='EA04_Env_Plants_Cactus_01b_LOD0_1'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01b_LOD0_1_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01b_LOD0_1_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01b_PRE__1_'
                      position={[-4788.246, -4508.98, -12453.809]}
                      rotation={[3.14, 0.621, 3.125]}
                      scale={1.055}
                    >
                      <group name='EA04_Env_Plants_Cactus_01b_LOD0_2'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01b_LOD0_2_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01b_LOD0_2_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE__1_'
                      position={[-2315.002, -4505, -11817.001]}
                      rotation={[3.089, 1.216, -3.087]}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_47'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_47_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_47_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01b_PRE'
                      position={[-4276.94, -4503.622, -11948.201]}
                      rotation={[3.125, -0.581, 3.119]}
                    >
                      <group name='EA04_Env_Plants_Cactus_01b_LOD0_3'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01b_LOD0_3_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01b_LOD0_3_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_45'
                      position={[-3638.592, -4487.279, -12969.602]}
                      rotation={[-1.54, -1.521, -1.601]}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_48'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_48_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_48_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                  </group>
                  <group
                    name='Raft'
                    position={[-1583.249, -314.969, 1344.899]}
                    rotation={[0.174, 0.018, 0.098]}
                  />
                  <group
                    name='Point_Light'
                    position={[-1634.522, -340.746, 1377.919]}
                    rotation={[0.174, 0.018, 0.098]}
                  >
                    <group name='Object_1198' rotation={[Math.PI / 2, 0, 0]}>
                      <group name='Object_1199' />
                    </group>
                  </group>
                  <group
                    name='EA04_Prop_Fireplace_01a_PRE'
                    position={[-1641.483, -354.571, 1366.782]}
                    rotation={[0.016, 0.033, -0.096]}
                  >
                    <group name='EA04_Prop_Fireplace_01a_LOD0'>
                      <mesh
                        name='EA04_Prop_Fireplace_01a_LOD0_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.EA04_Prop_Fireplace_01a_LOD0_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Prop_cover_01a_PRE'
                    position={[-1518.3, -331.417, 1307.503]}
                    rotation={[0.276, -0.796, -1.221]}
                  >
                    <group name='EA04_Prop_cover_01a_LOD0'>
                      <mesh
                        name='EA04_Prop_cover_01a_LOD0_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.EA04_Prop_cover_01a_LOD0_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Prop_Oar_01a_PRE'
                    position={[-1464.058, -290.976, 1314.881]}
                    rotation={[-0.235, 0.098, -1.909]}
                  >
                    <group name='EA04_Prop_Oar_01a_LOD0'>
                      <mesh
                        name='EA04_Prop_Oar_01a_LOD0_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.EA04_Prop_Oar_01a_LOD0_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Wehicule_Raft_01a_PRE'
                    position={[-1566.439, -395.629, 1304.609]}
                    rotation={[0.201, 0.025, -0.059]}
                  >
                    <group name='EA04_Wehicule_Raft_01a_LOD0'>
                      <mesh
                        name='EA04_Wehicule_Raft_01a_LOD0_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.EA04_Wehicule_Raft_01a_LOD0_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Prop_cauldron_01a_PRE'
                    position={[-1653.672, -256.961, 1372.867]}
                    rotation={[0.174, 0.018, 0.098]}
                  >
                    <group
                      name='EA04_Prop_cauldron_01a_LOD0'
                      rotation={[0, 0.368, 0]}
                    >
                      <mesh
                        name='EA04_Prop_cauldron_01a_LOD0_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.EA04_Prop_cauldron_01a_LOD0_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Animal_Bird_01a_PRE'
                    position={[-1481.117, -158.824, 1317.437]}
                    rotation={[0.282, -0.824, 0.145]}
                  >
                    <group name='EA04_Animal_Bird_01a_LOD0'>
                      <mesh
                        name='EA04_Animal_Bird_01a_LOD0_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.EA04_Animal_Bird_01a_LOD0_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='Roots'
                    position={[-1315.756, -375.362, 1010.565]}
                  >
                    <group
                      name='EA04_Env_Tree_Root_01d_PRE__1_'
                      position={[-293.1, -35.1, 889.7]}
                      rotation={[2.816, 0.748, 1.432]}
                    >
                      <group name='EA04_Env_Tree_Root_01d_LOD0'>
                        <mesh
                          name='EA04_Env_Tree_Root_01d_LOD0_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Tree_Root_01d_LOD0_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Tree_Root_01b_PRE'
                      position={[-118.392, -23.758, 42.501]}
                      rotation={[0.031, 0, -0.03]}
                    >
                      <group name='EA04_Env_Tree_Root_01b_LOD0'>
                        <mesh
                          name='EA04_Env_Tree_Root_01b_LOD0_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Tree_Root_01b_LOD0_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Tree_Root_01d_PRE'
                      position={[-314.662, 32.763, 364.01]}
                      rotation={[0.433, -0.092, -2.608]}
                    >
                      <group name='EA04_Env_Tree_Root_01d_LOD0_1'>
                        <mesh
                          name='EA04_Env_Tree_Root_01d_LOD0_1_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Tree_Root_01d_LOD0_1_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Tree_Root_01a_PRE__1_'
                      position={[-784.445, -8.076, 33.932]}
                      rotation={[2.7, 0.524, -2.68]}
                    >
                      <group name='EA04_Env_Tree_Root_01a_LOD0'>
                        <mesh
                          name='EA04_Env_Tree_Root_01a_LOD0_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Tree_Root_01a_LOD0_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Tree_Root_01a_PRE__5_'
                      position={[920.255, 63.324, -1315.568]}
                      rotation={[1.748, 0.152, -2.668]}
                      scale={2.182}
                    >
                      <group name='EA04_Env_Tree_Root_01a_LOD0_1'>
                        <mesh
                          name='EA04_Env_Tree_Root_01a_LOD0_1_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Tree_Root_01a_LOD0_1_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Tree_Root_01a_PRE'
                      position={[-657.645, -51.876, 848.532]}
                      rotation={[0.024, -0.064, -1.311]}
                    >
                      <group name='EA04_Env_Tree_Root_01a_LOD0_2'>
                        <mesh
                          name='EA04_Env_Tree_Root_01a_LOD0_2_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Tree_Root_01a_LOD0_2_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Tree_Root_01a_PRE__2_'
                      position={[-38.745, 21.024, -324.568]}
                      rotation={[0.88, 0.276, -0.318]}
                    >
                      <group name='EA04_Env_Tree_Root_01a_LOD0_3'>
                        <mesh
                          name='EA04_Env_Tree_Root_01a_LOD0_3_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Tree_Root_01a_LOD0_3_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Tree_Root_01c_PRE__1_'
                      position={[735.255, -14.976, -1176.568]}
                      rotation={[3.101, -0.938, 3.127]}
                      scale={[1.297, 1.296, 1.297]}
                    >
                      <group name='EA04_Env_Tree_Root_01c_LOD0'>
                        <mesh
                          name='EA04_Env_Tree_Root_01c_LOD0_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Tree_Root_01c_LOD0_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Tree_Root_01a_PRE__3_'
                      position={[-38.94, -26.868, 847.422]}
                      rotation={[2.958, 0.537, 1.404]}
                    >
                      <group name='EA04_Env_Tree_Root_01a_LOD0_4'>
                        <mesh
                          name='EA04_Env_Tree_Root_01a_LOD0_4_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Tree_Root_01a_LOD0_4_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Tree_Root_01c_PRE'
                      position={[489.155, -55.976, -205.668]}
                      rotation={[3.079, 1.173, -3.065]}
                      scale={[1.297, 1.296, 1.297]}
                    >
                      <group name='EA04_Env_Tree_Root_01c_LOD0_1'>
                        <mesh
                          name='EA04_Env_Tree_Root_01c_LOD0_1_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Tree_Root_01c_LOD0_1_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Tree_Root_01b_PRE__1_'
                      position={[-334.648, 25.573, 357.014]}
                      rotation={[-2.689, 0.298, 2.962]}
                      scale={0.5}
                    >
                      <group name='EA04_Env_Tree_Root_01b_LOD0_1'>
                        <mesh
                          name='EA04_Env_Tree_Root_01b_LOD0_1_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Tree_Root_01b_LOD0_1_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Tree_Root_01a_PRE__4_'
                      position={[361.555, 63.324, -174.668]}
                      rotation={[1.918, 1.032, -2.942]}
                      scale={2.182}
                    >
                      <group name='EA04_Env_Tree_Root_01a_LOD0_5'>
                        <mesh
                          name='EA04_Env_Tree_Root_01a_LOD0_5_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Tree_Root_01a_LOD0_5_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                  </group>
                  <group
                    name='Other'
                    position={[-1362.516, -434.698, 467.035]}
                  />
                  <group
                    name='EA04_Prop_washing_Comp'
                    position={[-1390, -391.638, 1128.797]}
                    rotation={[0, -0.348, 0]}
                    scale={1.341}
                  >
                    <group name='EA04_Prop_washing_Comp_LOD0'>
                      <mesh
                        name='EA04_Prop_washing_Comp_LOD0_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.EA04_Prop_washing_Comp_LOD0_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Prop_Barrel_01a_PRE'
                    position={[-972.501, -418.838, 1559.097]}
                    rotation={[-Math.PI, -0.494, -Math.PI]}
                  >
                    <group name='EA04_Prop_Barrel_01a_LOD0'>
                      <mesh
                        name='EA04_Prop_Barrel_01a_LOD0_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.EA04_Prop_Barrel_01a_LOD0_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Prop_Skull_01a_PRE'
                    position={[-985.016, -425.038, 1598.435]}
                    rotation={[0, -0.525, 0]}
                  >
                    <group name='EA04_Prop_Skull_01a_LOD0'>
                      <mesh
                        name='EA04_Prop_Skull_01a_LOD0_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.EA04_Prop_Skull_01a_LOD0_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Prop_Pole_01a_001_PRE'
                    position={[-1821.501, -404.038, 1359.997]}
                    rotation={[0.25, -0.206, 0.13]}
                  >
                    <group name='EA04_Prop_Pole_01a_001_LOD0'>
                      <mesh
                        name='EA04_Prop_Pole_01a_001_LOD0_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.EA04_Prop_Pole_01a_001_LOD0_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Terrain_Desert_01a_PRE'
                    position={[-1946.501, -765.338, 210.997]}
                  >
                    <group
                      name='EA04_Env_Terrain_Desert_01a_LOD0'
                      position={[0, -4.223, 0]}
                    >
                      <mesh
                        name='EA04_Env_Terrain_Desert_01a_LOD0_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Terrain_Desert_01a_LOD0_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Terrain_Desert_01a_PRE__1_'
                    position={[-1946.501, -4611.339, 210.997]}
                    rotation={[0, 0.554, 0]}
                    scale={11.453}
                  >
                    <group
                      name='EA04_Env_Terrain_Desert_01a_LOD0_1'
                      position={[0, 2.7, 0]}
                    >
                      <mesh
                        name='EA04_Env_Terrain_Desert_01a_LOD0_1_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Terrain_Desert_01a_LOD0_1_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Terrain_Desert_01a_PRE__2_'
                    position={[-14856.502, -1991.339, 14030.997]}
                    rotation={[0.051, 0.588, -0.028]}
                    scale={5.151}
                  >
                    <group name='EA04_Env_Terrain_Desert_01a_LOD0_2'>
                      <mesh
                        name='EA04_Env_Terrain_Desert_01a_LOD0_2_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Terrain_Desert_01a_LOD0_2_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Terrain_Desert_01a_PRE__3_'
                    position={[11053.5, -2281.338, -10759.003]}
                    rotation={[3.079, -1.184, 3.116]}
                    scale={5.151}
                  >
                    <group name='EA04_Env_Terrain_Desert_01a_LOD0_3'>
                      <mesh
                        name='EA04_Env_Terrain_Desert_01a_LOD0_3_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Terrain_Desert_01a_LOD0_3_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Prop_Barrel_01a_PRE__1_'
                    position={[-972.501, -418.838, 4628.035]}
                    rotation={[-Math.PI, -0.494, -Math.PI]}
                  >
                    <group name='EA04_Prop_Barrel_01a_LOD0_1'>
                      <mesh
                        name='EA04_Prop_Barrel_01a_LOD0_1_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.EA04_Prop_Barrel_01a_LOD0_1_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='Reflection_Probe'
                    position={[-1272.501, -183.339, 1301.997]}
                  />
                  <group
                    name='Flat_Ground_01__1_'
                    position={[-130.239, -400, 1756.77]}
                    scale={[1, 0.159, 1]}
                  >
                    <group name='transform6' />
                  </group>
                  <group
                    name='Flat_Ground_01__2_'
                    position={[-130.239, -400, 2760.77]}
                    scale={[1, 0.159, 1]}
                  >
                    <group name='transform7' />
                  </group>
                  <group
                    name='Flat_Ground_01__3_'
                    position={[-130.239, -400, 3759.77]}
                    scale={[1, 0.159, 1]}
                  >
                    <group name='transform4' />
                  </group>
                  <group
                    name='Flat_Ground_01__4_'
                    position={[-130.239, -400, 4762.77]}
                    scale={[1, 0.159, 1]}
                  >
                    <group name='transform2' />
                  </group>
                  <group
                    name='Flat_Ground_01__5_'
                    position={[-130.239, -400, 5761.77]}
                    scale={[1, 0.159, 1]}
                  >
                    <group name='transform3' />
                  </group>
                  <group
                    name='Rocks__1_'
                    position={[-3109.323, -466.234, 4667.77]}
                  />
                  <group
                    name='EA04_Env_Rocks_Sand_01a_PRE__2__1'
                    position={[-2394.841, -511.338, 3076.547]}
                    rotation={[0, 1.367, 0]}
                    scale={[0.815, 0.814, 0.815]}
                  >
                    <group name='EA04_Env_Rocks_Sand_01a_LOD0_4'>
                      <mesh
                        name='EA04_Env_Rocks_Sand_01a_LOD0_4_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Rocks_Sand_01a_LOD0_4_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Rocks_Sand_01b_PRE_2'
                    position={[-4016.131, -464.339, 5332.546]}
                    rotation={[0.108, -0.426, 0.258]}
                    scale={1.884}
                  >
                    <group name='EA04_Env_Rocks_Sand_01b_LOD0_3'>
                      <mesh
                        name='EA04_Env_Rocks_Sand_01b_LOD0_3_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Rocks_Sand_01b_LOD0_3_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Rocks_Sand_01a_PRE__1__1'
                    position={[-3864.842, -401.338, 5164.546]}
                    rotation={[-Math.PI, 1.518, -Math.PI]}
                  >
                    <group name='EA04_Env_Rocks_Sand_01a_LOD0_5'>
                      <mesh
                        name='EA04_Env_Rocks_Sand_01a_LOD0_5_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Rocks_Sand_01a_LOD0_5_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Rocks_Sand_01b_PRE__1__1'
                    position={[-2219.459, -548.407, 3201.37]}
                  >
                    <group name='EA04_Env_Rocks_Sand_01b_LOD0_4'>
                      <mesh
                        name='EA04_Env_Rocks_Sand_01b_LOD0_4_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Rocks_Sand_01b_LOD0_4_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Rocks_Sand_01d_PRE_1'
                    position={[-3955.842, -373.338, 4908.547]}
                    rotation={[0, 1.411, 0]}
                    scale={1.769}
                  >
                    <group name='EA04_Env_Rocks_Sand_01d_LOD0_1'>
                      <mesh
                        name='EA04_Env_Rocks_Sand_01d_LOD0_1_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Rocks_Sand_01d_LOD0_1_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Rocks_Gray_01c_PRE_1'
                    position={[-4250.878, -607.339, 6182.511]}
                    rotation={[0.024, -0.052, 0.134]}
                    scale={1.602}
                  >
                    <group name='EA04_Env_Rocks_Gray_01c_LOD0_2'>
                      <mesh
                        name='EA04_Env_Rocks_Gray_01c_LOD0_2_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Rocks_Gray_01c_LOD0_2_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Rocks_Sand_01c_PRE__2__1'
                    position={[-3884.842, -450.339, 6212.546]}
                    rotation={[3.071, -0.175, -3.116]}
                    scale={0.589}
                  >
                    <group name='EA04_Env_Rocks_Sand_01c_LOD0_4'>
                      <mesh
                        name='EA04_Env_Rocks_Sand_01c_LOD0_4_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Rocks_Sand_01c_LOD0_4_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Rocks_Sand_01a_PRE__3__1'
                    position={[-2729.342, -487.339, 3076.547]}
                    rotation={[-Math.PI, -1.57, -Math.PI]}
                    scale={0.814}
                  >
                    <group name='EA04_Env_Rocks_Sand_01a_LOD0_6'>
                      <mesh
                        name='EA04_Env_Rocks_Sand_01a_LOD0_6_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Rocks_Sand_01a_LOD0_6_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Rocks_Sand_01a_PRE_1'
                    position={[-3818.842, -448.339, 5698.546]}
                    rotation={[0, 0.189, 0]}
                  >
                    <group name='EA04_Env_Rocks_Sand_01a_LOD0_7'>
                      <mesh
                        name='EA04_Env_Rocks_Sand_01a_LOD0_7_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Rocks_Sand_01a_LOD0_7_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Rocks_Gray_01c_PRE__1__1'
                    position={[-2093.841, -421.339, 3110.547]}
                    rotation={[0, 0.171, 0]}
                    scale={1.129}
                  >
                    <group name='EA04_Env_Rocks_Gray_01c_LOD0_3'>
                      <mesh
                        name='EA04_Env_Rocks_Gray_01c_LOD0_3_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Rocks_Gray_01c_LOD0_3_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Rocks_Gray_01a_PRE__1__1'
                    position={[-3896.657, -462.916, 6860.657]}
                    rotation={[0, -1.227, 0]}
                    scale={1.138}
                  >
                    <group name='EA04_Env_Rocks_Gray_01a_LOD0_1'>
                      <mesh
                        name='EA04_Env_Rocks_Gray_01a_LOD0_1_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Rocks_Gray_01a_LOD0_1_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Rocks_Sand_01c_PRE__1__2'
                    position={[-1159.323, -371.234, 2841.77]}
                    rotation={[3.037, 0.875, -3.102]}
                  >
                    <group
                      name='EA04_Env_Rocks_Sand_01c_LOD0_5'
                      position={[4.294, -103.835, 6.987]}
                    >
                      <mesh
                        name='EA04_Env_Rocks_Sand_01c_LOD0_5_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Rocks_Sand_01c_LOD0_5_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Rocks_Gray_01d_PRE_1'
                    position={[-2289.323, -414.339, 6407.77]}
                    scale={[2.445, 0.895, 2.445]}
                  >
                    <group name='EA04_Env_Rocks_Gray_01d_LOD0_1'>
                      <mesh
                        name='EA04_Env_Rocks_Gray_01d_LOD0_1_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Rocks_Gray_01d_LOD0_1_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='Rocks__2_'
                    position={[2249.677, -466.234, 4696.304]}
                    rotation={[-Math.PI, -0.652, -Math.PI]}
                  />
                  <group
                    name='EA04_Env_Rocks_Sand_01a_PRE__2__2'
                    position={[2647.613, -511.338, 6394.574]}
                    rotation={[0, -1.122, 0]}
                    scale={[0.815, 0.814, 0.815]}
                  >
                    <group name='EA04_Env_Rocks_Sand_01a_LOD0_8'>
                      <mesh
                        name='EA04_Env_Rocks_Sand_01a_LOD0_8_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Rocks_Sand_01a_LOD0_8_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Rocks_Sand_01b_PRE_3'
                    position={[2566.886, -464.339, 3617.597]}
                    rotation={[3.04, -0.223, -2.951]}
                    scale={1.884}
                  >
                    <group name='EA04_Env_Rocks_Sand_01b_LOD0_5'>
                      <mesh
                        name='EA04_Env_Rocks_Sand_01b_LOD0_5_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Rocks_Sand_01b_LOD0_5_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Rocks_Sand_01a_PRE__1__2'
                    position={[2548.614, -401.338, 3842.938]}
                    rotation={[0, -0.866, 0]}
                  >
                    <group name='EA04_Env_Rocks_Sand_01a_LOD0_9'>
                      <mesh
                        name='EA04_Env_Rocks_Sand_01a_LOD0_9_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Rocks_Sand_01a_LOD0_9_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Rocks_Sand_01b_PRE__1__2'
                    position={[2432.468, -548.407, 6401.816]}
                    rotation={[-Math.PI, -0.652, -Math.PI]}
                  >
                    <group name='EA04_Env_Rocks_Sand_01b_LOD0_6'>
                      <mesh
                        name='EA04_Env_Rocks_Sand_01b_LOD0_6_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Rocks_Sand_01b_LOD0_6_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Rocks_Sand_01d_PRE_2'
                    position={[2776.312, -373.338, 3991.163]}
                    rotation={[0, -1.078, 0]}
                    scale={1.769}
                  >
                    <group name='EA04_Env_Rocks_Sand_01d_LOD0_2'>
                      <mesh
                        name='EA04_Env_Rocks_Sand_01d_LOD0_2_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Rocks_Sand_01d_LOD0_2_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Rocks_Gray_01c_PRE_2'
                    position={[2237.578, -607.339, 2799.611]}
                    rotation={[3.112, -0.6, -3.026]}
                    scale={1.602}
                  >
                    <group name='EA04_Env_Rocks_Gray_01c_LOD0_4'>
                      <mesh
                        name='EA04_Env_Rocks_Gray_01c_LOD0_4_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Rocks_Gray_01c_LOD0_4_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Rocks_Sand_01c_PRE__2__2'
                    position={[1928.44, -450.339, 2997.901]}
                    rotation={[0.102, 0.825, -0.037]}
                    scale={0.589}
                  >
                    <group name='EA04_Env_Rocks_Sand_01c_LOD0_6'>
                      <mesh
                        name='EA04_Env_Rocks_Sand_01c_LOD0_6_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Rocks_Sand_01c_LOD0_6_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Rocks_Sand_01a_PRE__3__2'
                    position={[2913.457, -487.339, 6191.554]}
                    rotation={[-Math.PI, 0.92, -Math.PI]}
                    scale={0.814}
                  >
                    <group name='EA04_Env_Rocks_Sand_01a_LOD0_10'>
                      <mesh
                        name='EA04_Env_Rocks_Sand_01a_LOD0_10_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Rocks_Sand_01a_LOD0_10_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Rocks_Sand_01a_PRE_2'
                    position={[2187.952, -448.339, 3446.46]}
                    rotation={[-Math.PI, -0.841, -Math.PI]}
                  >
                    <group name='EA04_Env_Rocks_Sand_01a_LOD0_11'>
                      <mesh
                        name='EA04_Env_Rocks_Sand_01a_LOD0_11_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Rocks_Sand_01a_LOD0_11_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Rocks_Gray_01c_PRE__1__2'
                    position={[2387.757, -421.339, 6550.24]}
                    rotation={[-Math.PI, -0.823, -Math.PI]}
                    scale={1.129}
                  >
                    <group name='EA04_Env_Rocks_Gray_01c_LOD0_5'>
                      <mesh
                        name='EA04_Env_Rocks_Gray_01c_LOD0_5_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Rocks_Gray_01c_LOD0_5_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Rocks_Gray_01a_PRE__1__2'
                    position={[1544.47, -462.916, 2475.644]}
                    rotation={[-Math.PI, 0.575, -Math.PI]}
                    scale={1.138}
                  >
                    <group name='EA04_Env_Rocks_Gray_01a_LOD0_2'>
                      <mesh
                        name='EA04_Env_Rocks_Gray_01a_LOD0_2_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Rocks_Gray_01a_LOD0_2_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Rocks_Sand_01c_PRE__1__3'
                    position={[1808.178, -371.234, 7331.044]}
                    rotation={[0.069, -0.225, -0.026]}
                  >
                    <group name='EA04_Env_Rocks_Sand_01c_LOD0_7'>
                      <mesh
                        name='EA04_Env_Rocks_Sand_01c_LOD0_7_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Rocks_Sand_01c_LOD0_7_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Rocks_Gray_01d_PRE_2'
                    position={[1268.796, -414.339, 5019.115]}
                    rotation={[-Math.PI, -0.652, -Math.PI]}
                    scale={[2.445, 0.895, 2.445]}
                  >
                    <group name='EA04_Env_Rocks_Gray_01d_LOD0_2'>
                      <mesh
                        name='EA04_Env_Rocks_Gray_01d_LOD0_2_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Rocks_Gray_01d_LOD0_2_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='Rocks__3_'
                    position={[-2630.323, -466.234, 7231.632]}
                    rotation={[0, 0.496, 0]}
                  >
                    <group
                      name='EA04_Env_Rocks_Sand_01a_PRE__2__3'
                      position={[714.482, -45.104, -1591.223]}
                      rotation={[0, 1.367, 0]}
                      scale={[0.815, 0.814, 0.815]}
                    >
                      <group name='EA04_Env_Rocks_Sand_01a_LOD0_12'>
                        <mesh
                          name='EA04_Env_Rocks_Sand_01a_LOD0_12_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Rocks_Sand_01a_LOD0_12_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Rocks_Sand_01b_PRE_4'
                      position={[-906.808, 1.896, 664.777]}
                      rotation={[0.108, -0.426, 0.258]}
                      scale={1.884}
                    >
                      <group name='EA04_Env_Rocks_Sand_01b_LOD0_7'>
                        <mesh
                          name='EA04_Env_Rocks_Sand_01b_LOD0_7_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Rocks_Sand_01b_LOD0_7_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Rocks_Sand_01a_PRE__1__3'
                      position={[-755.518, 64.896, 496.777]}
                      rotation={[-Math.PI, 1.518, -Math.PI]}
                    >
                      <group name='EA04_Env_Rocks_Sand_01a_LOD0_13'>
                        <mesh
                          name='EA04_Env_Rocks_Sand_01a_LOD0_13_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Rocks_Sand_01a_LOD0_13_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Rocks_Sand_01b_PRE__1__3'
                      position={[889.864, -82.173, -1466.399]}
                    >
                      <group name='EA04_Env_Rocks_Sand_01b_LOD0_8'>
                        <mesh
                          name='EA04_Env_Rocks_Sand_01b_LOD0_8_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Rocks_Sand_01b_LOD0_8_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Rocks_Sand_01d_PRE_3'
                      position={[-846.518, 92.896, 240.777]}
                      rotation={[0, 1.411, 0]}
                      scale={1.769}
                    >
                      <group name='EA04_Env_Rocks_Sand_01d_LOD0_3'>
                        <mesh
                          name='EA04_Env_Rocks_Sand_01d_LOD0_3_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Rocks_Sand_01d_LOD0_3_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Rocks_Gray_01c_PRE_3'
                      position={[-1141.555, -141.104, 1514.742]}
                      rotation={[0.024, -0.052, 0.134]}
                      scale={1.602}
                    >
                      <group name='EA04_Env_Rocks_Gray_01c_LOD0_6'>
                        <mesh
                          name='EA04_Env_Rocks_Gray_01c_LOD0_6_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Rocks_Gray_01c_LOD0_6_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Rocks_Sand_01c_PRE__2__3'
                      position={[-775.518, 15.896, 1544.777]}
                      rotation={[3.071, -0.175, -3.116]}
                      scale={0.589}
                    >
                      <group name='EA04_Env_Rocks_Sand_01c_LOD0_8'>
                        <mesh
                          name='EA04_Env_Rocks_Sand_01c_LOD0_8_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Rocks_Sand_01c_LOD0_8_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Rocks_Sand_01a_PRE__3__3'
                      position={[379.982, -21.104, -1591.223]}
                      rotation={[-Math.PI, -1.57, -Math.PI]}
                      scale={0.814}
                    >
                      <group name='EA04_Env_Rocks_Sand_01a_LOD0_14'>
                        <mesh
                          name='EA04_Env_Rocks_Sand_01a_LOD0_14_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Rocks_Sand_01a_LOD0_14_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Rocks_Sand_01a_PRE_3'
                      position={[-709.518, 17.896, 1030.777]}
                      rotation={[0, 0.189, 0]}
                    >
                      <group name='EA04_Env_Rocks_Sand_01a_LOD0_15'>
                        <mesh
                          name='EA04_Env_Rocks_Sand_01a_LOD0_15_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Rocks_Sand_01a_LOD0_15_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Rocks_Gray_01c_PRE__1__3'
                      position={[1015.482, 44.896, -1557.223]}
                      rotation={[0, 0.171, 0]}
                      scale={1.129}
                    >
                      <group name='EA04_Env_Rocks_Gray_01c_LOD0_7'>
                        <mesh
                          name='EA04_Env_Rocks_Gray_01c_LOD0_7_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Rocks_Gray_01c_LOD0_7_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Rocks_Gray_01a_PRE__1__3'
                      position={[-787.334, 3.318, 2192.887]}
                      rotation={[0, -1.227, 0]}
                      scale={1.138}
                    >
                      <group name='EA04_Env_Rocks_Gray_01a_LOD0_3'>
                        <mesh
                          name='EA04_Env_Rocks_Gray_01a_LOD0_3_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Rocks_Gray_01a_LOD0_3_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Rocks_Sand_01c_PRE__1__4'
                      position={[1950, 95, -1826]}
                      rotation={[3.037, 0.875, -3.102]}
                    >
                      <group name='EA04_Env_Rocks_Sand_01c_LOD0_9'>
                        <mesh
                          name='EA04_Env_Rocks_Sand_01c_LOD0_9_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Rocks_Sand_01c_LOD0_9_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Rocks_Gray_01d_PRE_3'
                      position={[975.482, 51.896, 338.777]}
                      scale={[2.445, 0.895, 2.445]}
                    >
                      <group name='EA04_Env_Rocks_Gray_01d_LOD0_3'>
                        <mesh
                          name='EA04_Env_Rocks_Gray_01d_LOD0_3_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Rocks_Gray_01d_LOD0_3_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                  </group>
                  <group
                    name='Mixed_Palm_tree_01__1_'
                    position={[1167.923, -430.829, 3706.77]}
                  >
                    <mesh
                      name='Mixed_Palm_tree_01__1__Material_standard_0'
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Mixed_Palm_tree_01__1__Material_standard_0
                          .geometry
                      }
                      material={materials.Material_standard}
                    />
                  </group>
                  <group
                    name='Mixed_Palm_tree_01__2_'
                    position={[-1152.933, -471, 3643.436]}
                    rotation={[0, -0.465, 0]}
                  >
                    <mesh
                      name='Mixed_Palm_tree_01__2__Material_standard_0'
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Mixed_Palm_tree_01__2__Material_standard_0
                          .geometry
                      }
                      material={materials.Material_standard}
                    />
                  </group>
                  <group
                    name='Mixed_Palm_tree_01__3_'
                    position={[-1209.323, -471, 6059.77]}
                  >
                    <mesh
                      name='Mixed_Palm_tree_01__3__Material_standard_0'
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Mixed_Palm_tree_01__3__Material_standard_0
                          .geometry
                      }
                      material={materials.Material_standard}
                    />
                  </group>
                  <group
                    name='Mixed_Palm_tree_01__4_'
                    position={[883.677, -471, 6059.77]}
                  >
                    <mesh
                      name='Mixed_Palm_tree_01__4__Material_standard_0'
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Mixed_Palm_tree_01__4__Material_standard_0
                          .geometry
                      }
                      material={materials.Material_standard}
                    />
                  </group>
                  <group
                    name='Mixed_Palm_tree_01__5_'
                    position={[883.677, -471, 9276.77]}
                  >
                    <mesh
                      name='Mixed_Palm_tree_01__5__Material_standard_0'
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Mixed_Palm_tree_01__5__Material_standard_0
                          .geometry
                      }
                      material={materials.Material_standard}
                    />
                  </group>
                  <group
                    name='Mixed_Palm_tree_01__6_'
                    position={[-2128.323, -471, 9276.77]}
                  >
                    <mesh
                      name='Mixed_Palm_tree_01__6__Material_standard_0'
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Mixed_Palm_tree_01__6__Material_standard_0
                          .geometry
                      }
                      material={materials.Material_standard}
                    />
                  </group>
                  <group
                    name='Flat_Palm_tree_01__1_'
                    position={[-1136.005, -435.499, 2299.002]}
                    rotation={[0, 1.284, 0]}
                  >
                    <mesh
                      name='Flat_Palm_tree_01__1__Material_standard_0'
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Flat_Palm_tree_01__1__Material_standard_0.geometry
                      }
                      material={materials.Material_standard}
                    />
                  </group>
                  <group
                    name='Flat_Palm_tree_01__2_'
                    position={[-1168.323, -435.499, 8547.77]}
                  >
                    <mesh
                      name='Flat_Palm_tree_01__2__Material_standard_0'
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Flat_Palm_tree_01__2__Material_standard_0.geometry
                      }
                      material={materials.Material_standard}
                    />
                  </group>
                  <group
                    name='Cactus__1_'
                    position={[11023.499, 4078.661, 1427.77]}
                    rotation={[0, Math.PI / 2, 0]}
                  >
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_46'
                      position={[-17971.936, -4780.977, 3765.333]}
                      rotation={[-3.101, 1.193, 3.096]}
                      scale={0.554}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_49'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_49_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_49_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_47'
                      position={[-25099.285, -5000.162, -3251.245]}
                      rotation={[-0.851, 1.454, 0.816]}
                      scale={1.006}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_50'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_50_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_50_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_48'
                      position={[21317.863, -4844.5, -1012.988]}
                      rotation={[-3.138, -0.507, -3.127]}
                      scale={1.465}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_51'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_51_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_51_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_49'
                      position={[-5509.71, -4111.932, 3838.309]}
                      rotation={[-3.111, -0.252, -3.104]}
                      scale={1.419}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_52'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_52_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_52_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_50'
                      position={[5277.727, -4399.51, -2002.474]}
                      rotation={[3.076, -0.497, -3.072]}
                      scale={1.257}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_53'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_53_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_53_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_51'
                      position={[-13348.633, -4691.287, -4888.095]}
                      rotation={[0.034, -0.864, 0.031]}
                      scale={0.996}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_54'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_54_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_54_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_52'
                      position={[9059.973, -3591.631, 3351.894]}
                      rotation={[2.391, -0.406, 2.604]}
                      scale={0.549}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_55'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_55_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_55_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_53'
                      position={[-1656.309, -4221.515, 326.299]}
                      rotation={[-0.145, -1.373, -0.154]}
                      scale={0.801}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_56'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_56_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_56_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_54'
                      position={[17151.682, -4813.679, -4545.044]}
                      rotation={[3.128, 0.238, -3.127]}
                      scale={0.909}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_57'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_57_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_57_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_55'
                      position={[-24553.143, -4896.78, 3695.477]}
                      rotation={[0.3, -1.501, 0.279]}
                      scale={0.788}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_58'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_58_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_58_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_56'
                      position={[-8565.134, -4434.732, -3273.088]}
                      rotation={[-3.019, 0.599, 2.963]}
                      scale={0.713}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_59'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_59_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_59_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_57'
                      position={[3894.501, -4301.824, -4549.074]}
                      rotation={[3.018, -0.464, 3.099]}
                      scale={0.731}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_60'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_60_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_60_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_58'
                      position={[-20656.205, -4827.318, 3315.436]}
                      rotation={[-0.018, 0.75, 0.023]}
                      scale={0.953}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_61'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_61_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_61_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_59'
                      position={[19670.842, -4816.86, 1280.557]}
                      rotation={[3.133, 0.384, -3.128]}
                      scale={1.249}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_62'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_62_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_62_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_60'
                      position={[-4059.995, -4150.333, 2318.457]}
                      rotation={[-0.057, -1.076, -0.065]}
                      scale={0.692}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_63'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_63_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_63_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_61'
                      position={[-16151.463, -4754.112, 1932.852]}
                      rotation={[-0.021, 0.851, 0.026]}
                      scale={1.448}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_64'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_64_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_64_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_62'
                      position={[-8832.424, -4623.775, -45.435]}
                      rotation={[0.346, -1.13, 0.301]}
                      scale={1.065}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_65'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_65_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_65_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_63'
                      position={[3319.636, -4414.391, 2627.131]}
                      rotation={[-3.118, -1.314, 3.124]}
                      scale={0.581}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_66'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_66_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_66_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_64'
                      position={[-21133.645, -4870.523, 5436.154]}
                      rotation={[-3.134, -0.669, 3.117]}
                      scale={0.617}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_67'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_67_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_67_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_65'
                      position={[22373.908, -4923.992, -5546.171]}
                      rotation={[3.1, 0.73, -3.114]}
                      scale={0.622}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_68'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_68_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_68_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_66'
                      position={[-2351.466, -4201.409, 477.828]}
                      rotation={[3.071, 1.195, -3.059]}
                      scale={0.737}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_69'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_69_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_69_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_67'
                      position={[-6374.369, -4700.625, 6532.48]}
                      rotation={[0.02, 0.431, -0.013]}
                      scale={0.928}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_70'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_70_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_70_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_68'
                      position={[-11345.812, -4700.789, -1019.862]}
                      rotation={[0.008, -0.606, 0.01]}
                      scale={0.618}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_71'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_71_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_71_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_69'
                      position={[15339.1, -3954.332, 2531.142]}
                      rotation={[-0.049, 0.4, -0.053]}
                      scale={0.679}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_72'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_72_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_72_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_70'
                      position={[23643.795, -4922.076, -4359.546]}
                      rotation={[-0.057, -1.032, -0.04]}
                      scale={0.936}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_73'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_73_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_73_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_71'
                      position={[-22329.506, -4830.227, -1003.133]}
                      rotation={[0.381, 1.403, -0.302]}
                      scale={0.971}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_74'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_74_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_74_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_72'
                      position={[-3244.713, -4158.404, -2483.618]}
                      rotation={[3.124, -0.914, -3.132]}
                      scale={1.34}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_75'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_75_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_75_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_73'
                      position={[-22100.031, -4888.626, 5421.852]}
                      rotation={[-3.073, 1.178, 3.092]}
                      scale={0.546}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_76'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_76_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_76_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_74'
                      position={[16226.649, -4778.334, -598.009]}
                      rotation={[0.339, 1.523, -0.347]}
                      scale={0.885}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_77'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_77_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_77_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_75'
                      position={[12390.464, -4715.625, -3929.112]}
                      rotation={[3.113, -1.163, -3.093]}
                      scale={1.219}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_78'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_78_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_78_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_76'
                      position={[24213.133, -4885.646, -1863.165]}
                      rotation={[-0.024, -0.781, -0.02]}
                      scale={1.202}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_79'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_79_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_79_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_77'
                      position={[-24248.971, -4925.462, 5237.146]}
                      rotation={[-3.118, 0.075, 3.122]}
                      scale={0.735}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_80'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_80_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_80_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_78'
                      position={[13872.992, -3977.167, 1183.966]}
                      rotation={[-0.053, 0.325, -0.051]}
                      scale={1.04}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_81'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_81_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_81_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_79'
                      position={[-18774.213, -4697.617, -4713.11]}
                      rotation={[-3.081, 0.431, -3.087]}
                      scale={0.756}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_82'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_82_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_82_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_80'
                      position={[-7772.894, -4410.027, 1343.431]}
                      rotation={[-0.293, 0.679, 0.376]}
                      scale={1.207}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_83'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_83_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_83_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_81'
                      position={[-494.068, -4260.912, 1254.465]}
                      rotation={[-0.058, -1.092, -0.073]}
                      scale={0.533}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_84'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_84_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_84_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_82'
                      position={[16197.536, -4715.858, -282.79]}
                      rotation={[-0.348, -1.072, -0.167]}
                      scale={1.499}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_85'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_85_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_85_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_83'
                      position={[19585.504, -4834.885, -3259.462]}
                      rotation={[0.075, 1.407, -0.086]}
                      scale={1.282}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_86'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_86_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_86_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_84'
                      position={[-20262.305, -4728.328, -3456.738]}
                      rotation={[0.133, 0.786, -0.07]}
                      scale={1.485}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_87'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_87_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_87_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_85'
                      position={[-11409.265, -4665.539, -4115.528]}
                      rotation={[0.033, -0.974, 0.023]}
                      scale={1.149}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_88'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_88_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_88_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_86'
                      position={[10682.937, -2769.371, 4681.279]}
                      rotation={[-0.291, 0.33, -0.116]}
                      scale={0.755}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_89'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_89_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_89_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_87'
                      position={[-2146.036, -4212.546, 2346.691]}
                      rotation={[-3.101, -0.786, -3.094]}
                      scale={0.767}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_90'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_90_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_90_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_88'
                      position={[-4753.237, -4258.54, -4000.269]}
                      rotation={[0.323, -1.106, 0.252]}
                      scale={0.714}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_91'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_91_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_91_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_89'
                      position={[12037.682, -3960.921, 1853.538]}
                      rotation={[-0.011, -0.706, 0.03]}
                      scale={0.684}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_92'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_92_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_92_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_90'
                      position={[-6709.501, -4692.482, 6248.572]}
                      rotation={[-0.029, -1.314, -0.045]}
                      scale={0.804}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_93'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_93_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_93_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01c_PRE__2__1'
                      position={[-4933.563, -4473.419, -13542.868]}
                      rotation={[1.623, -1.556, 1.519]}
                    >
                      <group name='EA04_Env_Plants_Cactus_01c_LOD0_3'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01c_LOD0_3_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01c_LOD0_3_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01c_PRE__1__1'
                      position={[-4518.002, -4536, -9423]}
                      rotation={[1.543, -1.517, 1.599]}
                    >
                      <group name='EA04_Env_Plants_Cactus_01c_LOD0_4'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01c_LOD0_4_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01c_LOD0_4_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01c_PRE_1'
                      position={[-3922.591, -4491.187, -12048.601]}
                      rotation={[-3.093, -0.457, -3.137]}
                      scale={0.551}
                    >
                      <group name='EA04_Env_Plants_Cactus_01c_LOD0_5'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01c_LOD0_5_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01c_LOD0_5_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE__3__1'
                      position={[-4621.173, -4457.157, -13697.645]}
                      rotation={[0.023, -0.56, -0.089]}
                      scale={1.06}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_94'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_94_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_94_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01b_PRE__3__1'
                      position={[-6148.302, -4556, -10180.701]}
                      rotation={[-3.134, -0.309, 3.084]}
                      scale={1.011}
                    >
                      <group name='EA04_Env_Plants_Cactus_01b_LOD0_4'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01b_LOD0_4_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01b_LOD0_4_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE__2__1'
                      position={[-3976.592, -4494.602, -13730.602]}
                      rotation={[1.565, -1.527, 1.576]}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_95'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_95_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_95_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01b_PRE__2__1'
                      position={[-2470.591, -4482.065, -12673.603]}
                      rotation={[2.654, -0.984, 2.553]}
                    >
                      <group name='EA04_Env_Plants_Cactus_01b_LOD0_5'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01b_LOD0_5_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01b_LOD0_5_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01b_PRE__1__1'
                      position={[-4788.246, -4508.98, -12453.809]}
                      rotation={[3.14, 0.621, 3.125]}
                      scale={1.055}
                    >
                      <group name='EA04_Env_Plants_Cactus_01b_LOD0_6'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01b_LOD0_6_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01b_LOD0_6_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE__1__1'
                      position={[-2315.002, -4505, -11817.001]}
                      rotation={[3.089, 1.216, -3.087]}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_96'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_96_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_96_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01b_PRE_1'
                      position={[-4276.94, -4503.622, -11948.201]}
                      rotation={[3.125, -0.581, 3.119]}
                    >
                      <group name='EA04_Env_Plants_Cactus_01b_LOD0_7'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01b_LOD0_7_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01b_LOD0_7_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Cactus_01a_PRE_91'
                      position={[-3638.592, -4487.279, -12969.602]}
                      rotation={[-1.54, -1.521, -1.601]}
                    >
                      <group name='EA04_Env_Plants_Cactus_01a_LOD0_97'>
                        <mesh
                          name='EA04_Env_Plants_Cactus_01a_LOD0_97_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Cactus_01a_LOD0_97_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                  </group>
                  <group
                    name='Stone__1_'
                    position={[2985.534, -466.008, 2697.77]}
                  >
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_75'
                      position={[-4144, 30.662, -1229.069]}
                      rotation={[0.02, 0.713, -0.004]}
                      scale={0.86}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_84'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_84_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_84_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_76'
                      position={[-5067.381, 63.143, -2141.281]}
                      rotation={[-3.085, -0.693, 3.134]}
                      scale={0.687}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_85'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_85_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_85_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Sand_01b_PRE__1__1'
                      position={[-4263.134, 68.769, -2549.946]}
                      rotation={[-3.088, -0.739, 3.077]}
                      scale={1.912}
                    >
                      <group name='EA04_Env_Stone_Sand_01b_LOD0_57'>
                        <mesh
                          name='EA04_Env_Stone_Sand_01b_LOD0_57_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Sand_01b_LOD0_57_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_77'
                      position={[-4009.865, 49.489, -2706.334]}
                      rotation={[0.445, 1.21, -0.521]}
                      scale={1.475}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_86'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_86_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_86_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_78'
                      position={[-5444.322, 46.636, -1753.704]}
                      rotation={[0.061, 0.207, -0.043]}
                      scale={1.464}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_87'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_87_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_87_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_136'
                      position={[-1436.218, 14.335, 1608.447]}
                      rotation={[3.106, -0.352, 3.085]}
                      scale={1.472}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_142'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_142_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_142_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Sand_01b_PRE_54'
                      position={[-5452.88, 53.452, -2182.332]}
                      rotation={[-3.086, 1.142, 3.048]}
                      scale={0.513}
                    >
                      <group name='EA04_Env_Stone_Sand_01b_LOD0_58'>
                        <mesh
                          name='EA04_Env_Stone_Sand_01b_LOD0_58_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Sand_01b_LOD0_58_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_79'
                      position={[-4896.768, 60.035, -3450.742]}
                      rotation={[-3.082, 0.259, -3.105]}
                      scale={1.23}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_88'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_88_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_88_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Sand_01b_PRE_55'
                      position={[-3289.549, 27.252, -4329.994]}
                      rotation={[3.109, -0.339, 3.132]}
                      scale={1.311}
                    >
                      <group name='EA04_Env_Stone_Sand_01b_LOD0_59'>
                        <mesh
                          name='EA04_Env_Stone_Sand_01b_LOD0_59_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Sand_01b_LOD0_59_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_80'
                      position={[-5693.226, 53.468, -2312.65]}
                      rotation={[-2.905, -1.243, -3.004]}
                      scale={1.127}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_89'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_89_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_89_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_137'
                      position={[1790.842, -174.888, 9749.518]}
                      rotation={[0.389, 1.552, -0.376]}
                      scale={0.516}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_143'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_143_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_143_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_81'
                      position={[-4988.523, 58.587, -4535.703]}
                      rotation={[0.114, 0.723, -0.258]}
                      scale={1.199}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_90'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_90_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_90_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_138'
                      position={[15508.881, -243.611, 9567.854]}
                      rotation={[-3.073, -0.368, -3.11]}
                      scale={1.479}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_144'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_144_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_144_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_82'
                      position={[-4064.387, -33.987, -4086.024]}
                      rotation={[3.132, -1.038, -2.891]}
                      scale={0.723}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_91'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_91_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_91_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_83'
                      position={[-2489, 33.339, -2764.482]}
                      rotation={[3.129, 0.966, -3.116]}
                      scale={1.026}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_92'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_92_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_92_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Sand_01b_PRE_56'
                      position={[-3994.631, 36.805, -3722.826]}
                      rotation={[3.072, 0.217, 3.13]}
                      scale={1.434}
                    >
                      <group name='EA04_Env_Stone_Sand_01b_LOD0_60'>
                        <mesh
                          name='EA04_Env_Stone_Sand_01b_LOD0_60_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Sand_01b_LOD0_60_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Sand_01b_PRE_57'
                      position={[-3076.264, 37.442, -2913.07]}
                      rotation={[0.035, 1.067, -0.03]}
                      scale={0.906}
                    >
                      <group name='EA04_Env_Stone_Sand_01b_LOD0_61'>
                        <mesh
                          name='EA04_Env_Stone_Sand_01b_LOD0_61_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Sand_01b_LOD0_61_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_84'
                      position={[-5503.01, 148.909, -3137.014]}
                      rotation={[3.002, 1.195, -2.709]}
                      scale={0.61}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_93'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_93_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_93_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Sand_01b_PRE_58'
                      position={[-4741.427, 60.659, -4050.87]}
                      rotation={[1.18, 1.25, -1.348]}
                      scale={1.077}
                    >
                      <group name='EA04_Env_Stone_Sand_01b_LOD0_62'>
                        <mesh
                          name='EA04_Env_Stone_Sand_01b_LOD0_62_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Sand_01b_LOD0_62_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_139'
                      position={[-286.302, -104.867, 9030.466]}
                      rotation={[-3.114, 0.132, -3.106]}
                      scale={1.207}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_145'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_145_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_145_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Sand_01b_PRE_59'
                      position={[-3490.884, 28.13, -4237.684]}
                      rotation={[3.065, -1.378, 3.094]}
                      scale={0.606}
                    >
                      <group name='EA04_Env_Stone_Sand_01b_LOD0_63'>
                        <mesh
                          name='EA04_Env_Stone_Sand_01b_LOD0_63_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Sand_01b_LOD0_63_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_85'
                      position={[-5740.604, 179.189, -2835.038]}
                      rotation={[3.108, 0.81, -2.837]}
                      scale={0.986}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_94'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_94_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_94_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_86'
                      position={[-2494, 45.693, -1821.22]}
                      rotation={[-0.033, 0.343, 0.056]}
                      scale={1.244}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_95'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_95_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_95_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_140'
                      position={[-4177.104, 4.112, 11697.493]}
                      rotation={[-3.093, -0.397, -3.073]}
                      scale={0.719}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_146'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_146_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_146_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE__2__1'
                      position={[-4659.685, 82.969, -2083.578]}
                      rotation={[-1.419, -0.272, 3.14]}
                      scale={0.57}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_147'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_147_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_147_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Sand_01b_PRE_60'
                      position={[-4447.134, 61.408, -2653.046]}
                      rotation={[3.14, 0.539, 3.112]}
                      scale={1.09}
                    >
                      <group name='EA04_Env_Stone_Sand_01b_LOD0_64'>
                        <mesh
                          name='EA04_Env_Stone_Sand_01b_LOD0_64_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Sand_01b_LOD0_64_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_87'
                      position={[-3679.523, 53.108, -2378.067]}
                      rotation={[-3.137, 0.479, -3.108]}
                      scale={0.785}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_96'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_96_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_96_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Sand_01b_PRE_61'
                      position={[-5337.016, 94.426, -2947.177]}
                      rotation={[-2.916, -0.686, -2.991]}
                      scale={1.43}
                    >
                      <group name='EA04_Env_Stone_Sand_01b_LOD0_65'>
                        <mesh
                          name='EA04_Env_Stone_Sand_01b_LOD0_65_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Sand_01b_LOD0_65_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_88'
                      position={[-3879.88, 52.942, -2232.295]}
                      rotation={[3.061, 0.863, -3.086]}
                      scale={0.939}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_97'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_97_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_97_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Sand_01b_PRE_62'
                      position={[-3215.752, 29.767, -4229.13]}
                      rotation={[-0.018, 0.471, 0.001]}
                      scale={1.189}
                    >
                      <group name='EA04_Env_Stone_Sand_01b_LOD0_66'>
                        <mesh
                          name='EA04_Env_Stone_Sand_01b_LOD0_66_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Sand_01b_LOD0_66_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_89'
                      position={[-3743.574, 12.654, -4191.645]}
                      rotation={[-0.27, 0.766, 0.227]}
                      scale={0.667}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_98'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_98_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_98_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Sand_01b_PRE_63'
                      position={[-5297.798, 204.094, -3847.748]}
                      rotation={[-2.89, -0.95, -2.806]}
                      scale={1.278}
                    >
                      <group name='EA04_Env_Stone_Sand_01b_LOD0_67'>
                        <mesh
                          name='EA04_Env_Stone_Sand_01b_LOD0_67_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Sand_01b_LOD0_67_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_90'
                      position={[-3493.145, 48.245, -3434.769]}
                      rotation={[3.015, -1.243, 3.017]}
                      scale={0.905}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_99'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_99_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_99_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_91'
                      position={[-5764.578, -20.047, -988.502]}
                      rotation={[-3.038, 0.587, 3.049]}
                      scale={1.146}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_100'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_100_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_100_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_92'
                      position={[-3049.981, 24.663, -4492.18]}
                      rotation={[-0.061, 1.285, 0.032]}
                      scale={0.588}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_101'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_101_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_101_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_141'
                      position={[9693.146, -171.356, 6203.618]}
                      rotation={[0.021, 1.276, -0.015]}
                      scale={0.952}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_148'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_148_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_148_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Sand_01b_PRE_64'
                      position={[-4664.671, 59.409, -2884.311]}
                      rotation={[-3.051, 0.308, 3.074]}
                      scale={0.507}
                    >
                      <group name='EA04_Env_Stone_Sand_01b_LOD0_68'>
                        <mesh
                          name='EA04_Env_Stone_Sand_01b_LOD0_68_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Sand_01b_LOD0_68_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Sand_01b_PRE__6__1'
                      position={[-4396.266, 57.683, -1961.564]}
                      rotation={[1.888, -0.229, 1.248]}
                      scale={0.898}
                    >
                      <group name='EA04_Env_Stone_Sand_01b_LOD0_69'>
                        <mesh
                          name='EA04_Env_Stone_Sand_01b_LOD0_69_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Sand_01b_LOD0_69_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Sand_01b_PRE_65'
                      position={[-4894.778, 71.495, -3534.03]}
                      rotation={[-3.045, -0.633, 3.094]}
                      scale={1.328}
                    >
                      <group name='EA04_Env_Stone_Sand_01b_LOD0_70'>
                        <mesh
                          name='EA04_Env_Stone_Sand_01b_LOD0_70_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Sand_01b_LOD0_70_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_142'
                      position={[6455.277, -208.728, 9855.312]}
                      rotation={[-0.001, -1.107, -0.016]}
                      scale={1.388}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_149'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_149_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_149_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_143'
                      position={[2414.602, -496.182, 18569.012]}
                      rotation={[-3.054, 0.069, 3.104]}
                      scale={1.329}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_150'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_150_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_150_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Sand_01b_PRE_66'
                      position={[-2602.33, 33.083, -2551.976]}
                      rotation={[0.026, 0.87, -0.023]}
                      scale={1.01}
                    >
                      <group name='EA04_Env_Stone_Sand_01b_LOD0_71'>
                        <mesh
                          name='EA04_Env_Stone_Sand_01b_LOD0_71_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Sand_01b_LOD0_71_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_93'
                      position={[-4051.183, 40.164, -1609.774]}
                      rotation={[-3.133, -0.577, -3.139]}
                      scale={1.222}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_102'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_102_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_102_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Sand_01b_PRE_67'
                      position={[-4202.734, 41.782, -1789.246]}
                      rotation={[0.011, 1.083, -0.005]}
                      scale={0.698}
                    >
                      <group name='EA04_Env_Stone_Sand_01b_LOD0_72'>
                        <mesh
                          name='EA04_Env_Stone_Sand_01b_LOD0_72_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Sand_01b_LOD0_72_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Sand_01b_PRE_68'
                      position={[-5889.557, 208.954, -3215.479]}
                      rotation={[-2.91, -0.728, -3.057]}
                      scale={0.864}
                    >
                      <group name='EA04_Env_Stone_Sand_01b_LOD0_73'>
                        <mesh
                          name='EA04_Env_Stone_Sand_01b_LOD0_73_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Sand_01b_LOD0_73_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_94'
                      position={[-3655.515, 43.866, -1996.898]}
                      rotation={[-3.09, -1.057, -3.103]}
                      scale={1.008}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_103'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_103_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_103_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_95'
                      position={[-3665, 42.134, -1925.207]}
                      rotation={[-3.051, -1.314, -3.067]}
                      scale={1.006}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_104'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_104_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_104_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_96'
                      position={[-3731, 38.552, -1804.033]}
                      rotation={[0.029, 1.016, -0.036]}
                      scale={1.396}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_105'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_105_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_105_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Sand_01b_PRE_69'
                      position={[-3191.181, 45.548, -3034.841]}
                      rotation={[-3.04, -1.083, -3.088]}
                      scale={1.074}
                    >
                      <group name='EA04_Env_Stone_Sand_01b_LOD0_74'>
                        <mesh
                          name='EA04_Env_Stone_Sand_01b_LOD0_74_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Sand_01b_LOD0_74_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_97'
                      position={[-3636.702, -45.408, -4531.679]}
                      rotation={[1.754, -0.841, 2.218]}
                      scale={0.656}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_106'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_106_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_106_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_98'
                      position={[-3933.944, 44.545, -1877.178]}
                      rotation={[-3.122, 0.253, 3.137]}
                      scale={1.108}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_107'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_107_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_107_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_99'
                      position={[-4774.795, 43.921, -1876.449]}
                      rotation={[-3.118, 0.416, 3.139]}
                      scale={1.31}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_108'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_108_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_108_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE__4__1'
                      position={[-3867.151, 38.342, -1375.363]}
                      rotation={[0.054, 1.016, -0.063]}
                      scale={1.396}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_109'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_109_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_109_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Sand_01b_PRE__3__1'
                      position={[-3946.834, 58.126, -2449.946]}
                      rotation={[2.828, -1.185, 2.659]}
                      scale={1.912}
                    >
                      <group name='EA04_Env_Stone_Sand_01b_LOD0_75'>
                        <mesh
                          name='EA04_Env_Stone_Sand_01b_LOD0_75_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Sand_01b_LOD0_75_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE__5__1'
                      position={[-4658.834, 46.369, -1937.869]}
                      rotation={[1.411, -0.117, -0.213]}
                      scale={0.57}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_151'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_151_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_151_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_100'
                      position={[-5608.16, 232.179, -3316.874]}
                      rotation={[-2.468, 1.042, 2.986]}
                      scale={1.194}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_110'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_110_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_110_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_101'
                      position={[-3230.301, 47.151, -3046.188]}
                      rotation={[0.062, 0.302, -0.026]}
                      scale={1.044}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_111'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_111_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_111_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Sand_01b_PRE_70'
                      position={[-5429.034, 69.709, -2544.746]}
                      rotation={[2.964, 1.013, -2.853]}
                      scale={1.477}
                    >
                      <group name='EA04_Env_Stone_Sand_01b_LOD0_76'>
                        <mesh
                          name='EA04_Env_Stone_Sand_01b_LOD0_76_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Sand_01b_LOD0_76_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_102'
                      position={[-5633.383, 131.094, -2705.162]}
                      rotation={[1.752, 1.363, -1.562]}
                      scale={1.444}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_112'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_112_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_112_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_103'
                      position={[-3457.679, 30.472, -4168.609]}
                      rotation={[3.126, 0.979, 3.125]}
                      scale={0.738}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_113'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_113_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_113_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_144'
                      position={[-3391.676, 67.666, 5766.875]}
                      rotation={[3.138, -0.083, 3.086]}
                      scale={0.794}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_152'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_152_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_152_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Sand_01b_PRE_71'
                      position={[-4813.841, 32.364, -1169.194]}
                      rotation={[-3.121, 1.399, 3.135]}
                      scale={0.944}
                    >
                      <group name='EA04_Env_Stone_Sand_01b_LOD0_77'>
                        <mesh
                          name='EA04_Env_Stone_Sand_01b_LOD0_77_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Sand_01b_LOD0_77_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Sand_01b_PRE_72'
                      position={[-5500.271, 126.462, -3031.689]}
                      rotation={[0.059, 0.215, -0.363]}
                      scale={1.139}
                    >
                      <group name='EA04_Env_Stone_Sand_01b_LOD0_78'>
                        <mesh
                          name='EA04_Env_Stone_Sand_01b_LOD0_78_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Sand_01b_LOD0_78_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_145'
                      position={[-3548.034, 42.588, -2820.746]}
                      rotation={[0.057, 0.001, 0.04]}
                      scale={0.57}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_153'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_153_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_153_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Sand_01b_PRE_73'
                      position={[-5644.624, 51.886, -2318.15]}
                      rotation={[0.111, 0.122, -0.045]}
                      scale={0.796}
                    >
                      <group name='EA04_Env_Stone_Sand_01b_LOD0_79'>
                        <mesh
                          name='EA04_Env_Stone_Sand_01b_LOD0_79_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Sand_01b_LOD0_79_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Sand_01b_PRE_74'
                      position={[-3494.988, 37.726, -3740.636]}
                      rotation={[3.126, -0.578, -3.138]}
                      scale={0.911}
                    >
                      <group name='EA04_Env_Stone_Sand_01b_LOD0_80'>
                        <mesh
                          name='EA04_Env_Stone_Sand_01b_LOD0_80_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Sand_01b_LOD0_80_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_104'
                      position={[-5419.778, 271.615, -3766.463]}
                      rotation={[2.942, 0.094, -2.467]}
                      scale={0.867}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_114'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_114_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_114_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_146'
                      position={[7390.487, -206.88, 9722.198]}
                      rotation={[-3.125, -0.06, 3.139]}
                      scale={0.928}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_154'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_154_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_154_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Sand_01b_PRE_75'
                      position={[-3310.145, 56.328, -3224.197]}
                      rotation={[3.129, -0.641, 3.099]}
                      scale={0.509}
                    >
                      <group name='EA04_Env_Stone_Sand_01b_LOD0_81'>
                        <mesh
                          name='EA04_Env_Stone_Sand_01b_LOD0_81_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Sand_01b_LOD0_81_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_147'
                      position={[-3057.557, -20.117, 9572.165]}
                      rotation={[0.053, 0.458, -0.071]}
                      scale={0.518}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_155'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_155_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_155_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_105'
                      position={[-5160.42, 38.244, -1581.889]}
                      rotation={[-3.118, -1.365, -3.134]}
                      scale={0.531}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_115'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_115_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_115_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_106'
                      position={[-4198.334, 77.669, -2514.946]}
                      rotation={[3.137, -1.131, 3.03]}
                      scale={1.234}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_116'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_116_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_116_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Sand_01b_PRE_76'
                      position={[-5263.134, 33.063, -1265.446]}
                      rotation={[-3.068, 0.265, 3.062]}
                      scale={0.868}
                    >
                      <group name='EA04_Env_Stone_Sand_01b_LOD0_82'>
                        <mesh
                          name='EA04_Env_Stone_Sand_01b_LOD0_82_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Sand_01b_LOD0_82_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Sand_01b_PRE_77'
                      position={[-2613.627, 41.611, -2090.921]}
                      rotation={[0.04, 1.06, -0.07]}
                      scale={0.543}
                    >
                      <group name='EA04_Env_Stone_Sand_01b_LOD0_83'>
                        <mesh
                          name='EA04_Env_Stone_Sand_01b_LOD0_83_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Sand_01b_LOD0_83_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE__1__1'
                      position={[-4668.034, 32.438, -1131.746]}
                      rotation={[-3.131, -0.272, 3.13]}
                      scale={0.867}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_156'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_156_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_156_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_148'
                      position={[9645.27, -178.524, 7279.869]}
                      rotation={[-3.129, -0.942, -3.134]}
                      scale={0.566}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_157'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_157_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_157_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_107'
                      position={[-5759.771, 43.939, -2194.822]}
                      rotation={[0.523, 1.462, -0.419]}
                      scale={0.606}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_117'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_117_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_117_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Sand_01b_PRE_78'
                      position={[-5333.137, 216.129, -3481.833]}
                      rotation={[-2.484, -0.437, -2.379]}
                      scale={0.93}
                    >
                      <group name='EA04_Env_Stone_Sand_01b_LOD0_84'>
                        <mesh
                          name='EA04_Env_Stone_Sand_01b_LOD0_84_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Sand_01b_LOD0_84_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_108'
                      position={[-4533.981, 43.512, -1891.13]}
                      rotation={[3.119, 1.441, -3.101]}
                      scale={0.673}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_118'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_118_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_118_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_109'
                      position={[-5361.807, 217.324, -3400.885]}
                      rotation={[0.752, 0.522, -0.806]}
                      scale={0.552}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_119'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_119_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_119_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_110'
                      position={[-2530, 40.879, -1894.923]}
                      rotation={[-0.053, 1.229, 0.015]}
                      scale={0.752}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_120'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_120_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_120_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Sand_01b_PRE_79'
                      position={[-3844.808, 27.234, -1106.518]}
                      rotation={[-3.118, -0.945, -3.134]}
                      scale={0.957}
                    >
                      <group name='EA04_Env_Stone_Sand_01b_LOD0_85'>
                        <mesh
                          name='EA04_Env_Stone_Sand_01b_LOD0_85_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Sand_01b_LOD0_85_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_111'
                      position={[-4230.31, -103.85, -4487.489]}
                      rotation={[0.599, 1.367, -0.817]}
                      scale={0.532}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_121'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_121_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_121_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_112'
                      position={[-5431.748, 238.525, -3369.187]}
                      rotation={[0.452, -0.064, -0.343]}
                      scale={1.075}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_122'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_122_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_122_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Sand_01b_PRE_80'
                      position={[-4424.134, 61.269, -2066.746]}
                      rotation={[3.067, -1.166, 3.084]}
                      scale={0.817}
                    >
                      <group name='EA04_Env_Stone_Sand_01b_LOD0_86'>
                        <mesh
                          name='EA04_Env_Stone_Sand_01b_LOD0_86_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Sand_01b_LOD0_86_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Sand_01b_PRE_81'
                      position={[-5418.465, 254.961, -3831.689]}
                      rotation={[-0.167, 0.091, -0.265]}
                      scale={0.896}
                    >
                      <group name='EA04_Env_Stone_Sand_01b_LOD0_87'>
                        <mesh
                          name='EA04_Env_Stone_Sand_01b_LOD0_87_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Sand_01b_LOD0_87_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_113'
                      position={[-3370.022, 38.282, -3690.097]}
                      rotation={[-0.013, 1.05, -0.005]}
                      scale={0.546}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_123'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_123_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_123_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_114'
                      position={[-3422.91, 38.008, -3713.681]}
                      rotation={[-0.004, 1.384, -0.014]}
                      scale={0.641}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_124'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_124_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_124_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Sand_01b_PRE_82'
                      position={[-3750.534, 46.855, -2270.546]}
                      rotation={[-2.995, -1.366, -3.013]}
                      scale={1.474}
                    >
                      <group name='EA04_Env_Stone_Sand_01b_LOD0_88'>
                        <mesh
                          name='EA04_Env_Stone_Sand_01b_LOD0_88_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Sand_01b_LOD0_88_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE__12__1'
                      position={[-3721.079, 36.405, -1470.169]}
                      rotation={[-3.126, 0.724, -3.137]}
                      scale={0.77}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_125'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_125_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_125_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_115'
                      position={[-4261.112, -93.42, -4460.254]}
                      rotation={[3.067, -0.729, -2.943]}
                      scale={0.941}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_126'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_126_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_126_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Sand_01b_PRE_83'
                      position={[-3411.172, 30.59, -4168.28]}
                      rotation={[3.12, -1.346, 3.137]}
                      scale={1.093}
                    >
                      <group name='EA04_Env_Stone_Sand_01b_LOD0_89'>
                        <mesh
                          name='EA04_Env_Stone_Sand_01b_LOD0_89_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Sand_01b_LOD0_89_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_116'
                      position={[-4446.018, -0.04, -4123.31]}
                      rotation={[-0.017, 0.743, -0.162]}
                      scale={1.095}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_127'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_127_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_127_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_117'
                      position={[-5251.847, 27.407, -1140.953]}
                      rotation={[0.031, 0.27, 0.08]}
                      scale={0.982}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_128'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_128_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_128_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_118'
                      position={[-5000.526, 52.413, -2612.067]}
                      rotation={[-3.094, -0.873, -3.101]}
                      scale={1.334}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_129'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_129_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_129_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Sand_01b_PRE_84'
                      position={[-3137.959, 37.69, -3703.939]}
                      rotation={[3.096, 0.763, 3.121]}
                      scale={0.612}
                    >
                      <group name='EA04_Env_Stone_Sand_01b_LOD0_90'>
                        <mesh
                          name='EA04_Env_Stone_Sand_01b_LOD0_90_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Sand_01b_LOD0_90_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_119'
                      position={[-4451.824, 65.165, -2491.474]}
                      rotation={[3.11, 1.324, 3.115]}
                      scale={0.726}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_130'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_130_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_130_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Sand_01b_PRE_85'
                      position={[-2643, 40.862, -2170.979]}
                      rotation={[-3.077, -1.192, -3.048]}
                      scale={0.85}
                    >
                      <group name='EA04_Env_Stone_Sand_01b_LOD0_91'>
                        <mesh
                          name='EA04_Env_Stone_Sand_01b_LOD0_91_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Sand_01b_LOD0_91_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Sand_01b_PRE_86'
                      position={[-3530, 39.604, -2814.839]}
                      rotation={[0.019, 0.582, -0.017]}
                      scale={1.004}
                    >
                      <group name='EA04_Env_Stone_Sand_01b_LOD0_92'>
                        <mesh
                          name='EA04_Env_Stone_Sand_01b_LOD0_92_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Sand_01b_LOD0_92_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_120'
                      position={[-5205.752, 62.367, -2142.064]}
                      rotation={[-3.079, 0.067, 3.136]}
                      scale={1.203}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_131'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_131_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_131_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_121'
                      position={[-5528.609, 252.409, -4004.692]}
                      rotation={[2.983, -0.131, -2.863]}
                      scale={0.751}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_132'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_132_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_132_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE__6__1'
                      position={[-4405.934, 59.769, -2044.246]}
                      rotation={[1.411, -0.117, -0.213]}
                      scale={0.57}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_158'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_158_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_158_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_122'
                      position={[-3954.178, -92.202, -4314.255]}
                      rotation={[2.898, 0.411, 3.129]}
                      scale={0.604}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_133'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_133_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_133_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE__9__1'
                      position={[-4305.034, 41.569, -1382.446]}
                      rotation={[-3.134, 0.188, -3.142]}
                      scale={1.396}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_134'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_134_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_134_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_123'
                      position={[-4893.104, 36.901, -1478.411]}
                      rotation={[-3.127, -0.234, 3.14]}
                      scale={0.601}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_135'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_135_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_135_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE__2__1'
                      position={[-4341.1, 65.671, -2461.58]}
                      rotation={[-3.069, -0.471, 3.088]}
                      scale={1.234}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_136'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_136_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_136_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_124'
                      position={[-5470.584, 12.552, -1178.753]}
                      rotation={[-2.945, 1.079, 2.979]}
                      scale={1.133}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_137'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_137_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_137_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_149'
                      position={[-7965.513, 67.548, 9234.355]}
                      rotation={[-0.107, -1.31, -0.139]}
                      scale={0.561}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_159'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_159_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_159_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_125'
                      position={[-3857.814, 38.326, -1544.654]}
                      rotation={[-3.132, 0.828, -3.133]}
                      scale={1.226}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_138'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_138_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_138_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Sand_01b_PRE_87'
                      position={[-4012.13, 32.058, -1337.399]}
                      rotation={[0.056, 1.459, -0.039]}
                      scale={0.575}
                    >
                      <group name='EA04_Env_Stone_Sand_01b_LOD0_93'>
                        <mesh
                          name='EA04_Env_Stone_Sand_01b_LOD0_93_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Sand_01b_LOD0_93_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_126'
                      position={[-2499.482, 40.793, -1901.224]}
                      rotation={[-0.04, 0.203, 0.005]}
                      scale={0.763}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_139'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_139_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_139_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Sand_01b_PRE_88'
                      position={[-5519.853, 49.83, -2215.906]}
                      rotation={[-0.167, 1.292, 0.143]}
                      scale={1.233}
                    >
                      <group name='EA04_Env_Stone_Sand_01b_LOD0_94'>
                        <mesh
                          name='EA04_Env_Stone_Sand_01b_LOD0_94_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Sand_01b_LOD0_94_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Sand_01b_PRE_89'
                      position={[-3569.613, 39.762, -2768.174]}
                      rotation={[0.023, 0.773, -0.02]}
                      scale={0.815}
                    >
                      <group name='EA04_Env_Stone_Sand_01b_LOD0_95'>
                        <mesh
                          name='EA04_Env_Stone_Sand_01b_LOD0_95_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Sand_01b_LOD0_95_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_127'
                      position={[-2313, 42.962, -1431.102]}
                      rotation={[-2.961, 1.297, 3.024]}
                      scale={1.06}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_140'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_140_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_140_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Sand_01b_PRE_90'
                      position={[-4559.088, 59.275, -2657.661]}
                      rotation={[3.116, -0.122, 3.127]}
                      scale={0.54}
                    >
                      <group name='EA04_Env_Stone_Sand_01b_LOD0_96'>
                        <mesh
                          name='EA04_Env_Stone_Sand_01b_LOD0_96_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Sand_01b_LOD0_96_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Sand_01b_PRE_91'
                      position={[-2530.306, 38.351, -2108.659]}
                      rotation={[3.093, 0.661, -3.098]}
                      scale={1.128}
                    >
                      <group name='EA04_Env_Stone_Sand_01b_LOD0_97'>
                        <mesh
                          name='EA04_Env_Stone_Sand_01b_LOD0_97_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Sand_01b_LOD0_97_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_128'
                      position={[-3710.702, 30.945, -4073.979]}
                      rotation={[-0.035, 0.514, 0.011]}
                      scale={0.776}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_141'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_141_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_141_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_129'
                      position={[-2938.418, 41.62, -3686.783]}
                      rotation={[-0.074, 0.805, 0.021]}
                      scale={0.703}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_142'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_142_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_142_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Sand_01b_PRE_92'
                      position={[-4669.752, -51.248, -4618.09]}
                      rotation={[-2.878, -0.873, -2.623]}
                      scale={0.796}
                    >
                      <group name='EA04_Env_Stone_Sand_01b_LOD0_98'>
                        <mesh
                          name='EA04_Env_Stone_Sand_01b_LOD0_98_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Sand_01b_LOD0_98_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE__1__1'
                      position={[-4092.534, 52.569, -2445.946]}
                      rotation={[3.013, 1.19, -3.044]}
                      scale={1.234}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_143'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_143_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_143_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_150'
                      position={[7225.516, -177.947, 7916.243]}
                      rotation={[0.014, 1.151, -0.006]}
                      scale={1.13}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_160'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_160_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_160_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Sand_01b_PRE_93'
                      position={[-5486.205, 11.986, -1190.899]}
                      rotation={[-2.608, 1.406, 2.654]}
                      scale={0.885}
                    >
                      <group name='EA04_Env_Stone_Sand_01b_LOD0_99'>
                        <mesh
                          name='EA04_Env_Stone_Sand_01b_LOD0_99_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Sand_01b_LOD0_99_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE__11__1'
                      position={[-4324.528, 36.211, -1138.882]}
                      rotation={[0.012, 0.111, 0.011]}
                      scale={1.006}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_144'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_144_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_144_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_151'
                      position={[-19190.223, 163.872, 12354.514]}
                      rotation={[-0.887, 1.282, 1.712]}
                      scale={0.914}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_161'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_161_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_161_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Sand_01b_PRE_94'
                      position={[-5117.774, 62.15, -2130.113]}
                      rotation={[-3.083, -0.565, 3.135]}
                      scale={1.348}
                    >
                      <group name='EA04_Env_Stone_Sand_01b_LOD0_100'>
                        <mesh
                          name='EA04_Env_Stone_Sand_01b_LOD0_100_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Sand_01b_LOD0_100_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_130'
                      position={[-5753.166, -19.366, -984.729]}
                      rotation={[-0.058, 0.962, 0.134]}
                      scale={0.857}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_145'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_145_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_145_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_131'
                      position={[-3642.514, 30.798, -1021.485]}
                      rotation={[-3.091, -0.99, -3.081]}
                      scale={1.443}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_146'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_146_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_146_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Sand_01b_PRE_95'
                      position={[-4952.697, 85.871, -4104.117]}
                      rotation={[2.71, 1.018, -2.745]}
                      scale={1.476}
                    >
                      <group name='EA04_Env_Stone_Sand_01b_LOD0_101'>
                        <mesh
                          name='EA04_Env_Stone_Sand_01b_LOD0_101_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Sand_01b_LOD0_101_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_132'
                      position={[-4157.034, 46.969, -1867.946]}
                      rotation={[0.008, 0.353, -0.002]}
                      scale={0.591}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_147'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_147_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_147_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_133'
                      position={[-3712.994, 45.58, -3535.148]}
                      rotation={[-3.017, -1.247, -2.885]}
                      scale={1.264}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_148'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_148_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_148_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_152'
                      position={[1744.339, -169.077, 9336.023]}
                      rotation={[3.136, 1.223, -3.121]}
                      scale={0.962}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_162'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_162_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_162_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE__7__1'
                      position={[-3953.034, 24.65, -814.746]}
                      rotation={[0.033, 0.48, -0.005]}
                      scale={0.77}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_149'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_149_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_149_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_134'
                      position={[-3540.843, 31.661, -1243.416]}
                      rotation={[0.019, 0.48, -0.004]}
                      scale={0.77}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_150'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_150_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_150_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_135'
                      position={[-3075.069, 51.847, -3481.008]}
                      rotation={[-0.09, 1.131, 0.034]}
                      scale={1.438}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_151'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_151_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_151_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_136'
                      position={[-3278.192, 26.863, -4346.702]}
                      rotation={[-3.132, 1.342, 3.101]}
                      scale={0.732}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_152'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_152_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_152_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Sand_01b_PRE_96'
                      position={[-5157.545, 115.596, -4340.854]}
                      rotation={[1.798, 1.123, -1.968]}
                      scale={0.516}
                    >
                      <group name='EA04_Env_Stone_Sand_01b_LOD0_102'>
                        <mesh
                          name='EA04_Env_Stone_Sand_01b_LOD0_102_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Sand_01b_LOD0_102_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_153'
                      position={[10177.693, -197.3, 9390.606]}
                      rotation={[0.004, -1.07, -0.005]}
                      scale={0.646}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_163'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_163_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_163_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_154'
                      position={[-722.434, 44.316, 6398.969]}
                      rotation={[0.014, -0.53, -0.054]}
                      scale={0.871}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_164'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_164_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_164_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_155'
                      position={[-2998.186, -18.288, 9317.866]}
                      rotation={[-2.556, -1.453, -2.574]}
                      scale={1.169}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_165'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_165_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_165_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_137'
                      position={[-4789.583, 41.764, -1781.541]}
                      rotation={[0.002, 1.466, 0.021]}
                      scale={0.704}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_153'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_153_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_153_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE__10__1'
                      position={[-4372.146, 29.768, -879.691]}
                      rotation={[-3.114, 0.002, -3.133]}
                      scale={0.698}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_154'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_154_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_154_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_138'
                      position={[-3858.78, 50.306, -2062.411]}
                      rotation={[0.047, 1.203, -0.019]}
                      scale={0.698}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_155'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_155_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_155_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Sand_01b_PRE_97'
                      position={[-5656.238, 123.33, -2644.099]}
                      rotation={[2.61, 1.289, -2.366]}
                      scale={0.541}
                    >
                      <group name='EA04_Env_Stone_Sand_01b_LOD0_103'>
                        <mesh
                          name='EA04_Env_Stone_Sand_01b_LOD0_103_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Sand_01b_LOD0_103_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_139'
                      position={[-3989.82, 42.406, -1286.263]}
                      rotation={[-3.099, -0.91, -3.087]}
                      scale={0.896}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_156'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_156_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_156_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Sand_01b_PRE_98'
                      position={[-4347.966, 18.025, -3909.698]}
                      rotation={[2.857, 1.077, -2.96]}
                      scale={0.505}
                    >
                      <group name='EA04_Env_Stone_Sand_01b_LOD0_104'>
                        <mesh
                          name='EA04_Env_Stone_Sand_01b_LOD0_104_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Sand_01b_LOD0_104_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_140'
                      position={[-3977.103, 31.016, -1287.26]}
                      rotation={[-3.108, -1.299, -3.126]}
                      scale={0.668}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_157'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_157_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_157_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Sand_01b_PRE_99'
                      position={[-4104, 42.8, -1567]}
                      rotation={[-3.136, 0.564, -3.139]}
                      scale={0.654}
                    >
                      <group name='EA04_Env_Stone_Sand_01b_LOD0_105'>
                        <mesh
                          name='EA04_Env_Stone_Sand_01b_LOD0_105_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Sand_01b_LOD0_105_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_141'
                      position={[-3018.503, 30.702, -4151.781]}
                      rotation={[-0.009, 0.712, -0.005]}
                      scale={0.742}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_158'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_158_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_158_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_142'
                      position={[-3256.365, 42.901, -2426.711]}
                      rotation={[-3.138, 0.585, -3.11]}
                      scale={0.81}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_159'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_159_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_159_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_156'
                      position={[15547.07, -258.012, 9799.872]}
                      rotation={[-3.066, -0.554, -3.107]}
                      scale={1.195}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_166'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_166_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_166_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Sand_01b_PRE_100'
                      position={[-2504.506, 33.112, -2713.968]}
                      rotation={[-3.122, -0.638, -3.123]}
                      scale={1.126}
                    >
                      <group name='EA04_Env_Stone_Sand_01b_LOD0_106'>
                        <mesh
                          name='EA04_Env_Stone_Sand_01b_LOD0_106_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Sand_01b_LOD0_106_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_143'
                      position={[-3124.545, 49.894, -3501.746]}
                      rotation={[3.09, 0.476, 3.125]}
                      scale={0.683}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_160'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_160_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_160_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_144'
                      position={[-5138.369, 170.605, -3948.278]}
                      rotation={[-3.038, -0.58, -2.911]}
                      scale={0.891}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_161'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_161_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_161_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_145'
                      position={[-5084.698, 151.8, -3699.474]}
                      rotation={[-3.021, -0.304, -2.86]}
                      scale={0.705}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_162'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_162_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_162_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_157'
                      position={[9684.497, -165.976, 5227.624]}
                      rotation={[0, -0.739, -0.008]}
                      scale={0.575}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_167'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_167_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_167_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_146'
                      position={[-3412.447, 52.217, -3341.99]}
                      rotation={[-0.019, 0.278, 0.042]}
                      scale={1.471}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_163'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_163_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_163_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Sand_01b_PRE_101'
                      position={[-3699.43, 36.039, -3832.195]}
                      rotation={[-0.018, 0.533, 0.001]}
                      scale={0.6}
                    >
                      <group name='EA04_Env_Stone_Sand_01b_LOD0_107'>
                        <mesh
                          name='EA04_Env_Stone_Sand_01b_LOD0_107_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Sand_01b_LOD0_107_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Sand_01b_PRE_102'
                      position={[-4497.114, 70.308, -2209.621]}
                      rotation={[3.118, 0.463, -3.118]}
                      scale={0.709}
                    >
                      <group name='EA04_Env_Stone_Sand_01b_LOD0_108'>
                        <mesh
                          name='EA04_Env_Stone_Sand_01b_LOD0_108_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Sand_01b_LOD0_108_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_158'
                      position={[2039.013, -134.665, 7582.278]}
                      rotation={[3.126, 0.878, -3.068]}
                      scale={0.808}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_168'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_168_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_168_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Sand_01b_PRE_103'
                      position={[-3899.122, 5.492, -4024.475]}
                      rotation={[3.103, 0.414, 2.963]}
                      scale={0.669}
                    >
                      <group name='EA04_Env_Stone_Sand_01b_LOD0_109'>
                        <mesh
                          name='EA04_Env_Stone_Sand_01b_LOD0_109_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Sand_01b_LOD0_109_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Sand_01b_PRE_104'
                      position={[-4505.144, 45.652, -3618.759]}
                      rotation={[0.039, 1.257, -0.046]}
                      scale={1.019}
                    >
                      <group name='EA04_Env_Stone_Sand_01b_LOD0_110'>
                        <mesh
                          name='EA04_Env_Stone_Sand_01b_LOD0_110_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Sand_01b_LOD0_110_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE__13__1'
                      position={[-4409.834, 44.369, -1902.246]}
                      rotation={[3.137, -1.131, 3.03]}
                      scale={1.662}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_164'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_164_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_164_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_159'
                      position={[-19259.424, 142.643, 3753.896]}
                      rotation={[2.86, 1.093, -3.072]}
                      scale={0.972}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_169'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_169_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_169_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_160'
                      position={[11883.688, 145.508, -5752.645]}
                      rotation={[0.021, 0.834, -0.229]}
                      scale={1.041}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_170'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_170_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_170_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_161'
                      position={[18467.66, -376.747, 12330.856]}
                      rotation={[-3.114, -0.206, -3.121]}
                      scale={1.16}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_171'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_171_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_171_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_162'
                      position={[24296.146, -346.775, 6006.174]}
                      rotation={[-2.963, -1.492, -2.976]}
                      scale={1.275}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_172'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_172_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_172_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_163'
                      position={[-9650.965, 132.078, 8456.537]}
                      rotation={[2.987, -0.427, 3.113]}
                      scale={1.058}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_173'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_173_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_173_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_164'
                      position={[-15822.665, 383.82, 4541.896]}
                      rotation={[0.064, -1.304, 0.1]}
                      scale={1.256}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_174'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_174_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_174_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_165'
                      position={[4213.28, -99.314, 4996.914]}
                      rotation={[3.105, 1.191, -3.021]}
                      scale={1.241}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_175'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_175_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_175_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_166'
                      position={[-19466.438, -824.594, 751.205]}
                      rotation={[-0.801, -0.028, 0.393]}
                      scale={1.414}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_176'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_176_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_176_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_167'
                      position={[-7953.082, 260.563, 777.024]}
                      rotation={[-0.033, -0.453, -0.186]}
                      scale={1.457}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_177'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_177_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_177_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_168'
                      position={[968.895, 25.019, 3792.308]}
                      rotation={[0.095, 0.3, 0.035]}
                      scale={1.175}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_178'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_178_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_178_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Sand_01b_PRE_105'
                      position={[-5490.977, 55.956, -1968.111]}
                      rotation={[-0.097, 0.751, 0.084]}
                      scale={1.04}
                    >
                      <group name='EA04_Env_Stone_Sand_01b_LOD0_111'>
                        <mesh
                          name='EA04_Env_Stone_Sand_01b_LOD0_111_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Sand_01b_LOD0_111_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_169'
                      position={[7682.769, 232.842, 600.379]}
                      rotation={[0.495, -0.188, 0.394]}
                      scale={1.017}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_179'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_179_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_179_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_170'
                      position={[9423.337, -161.936, 4701.237]}
                      rotation={[0.021, 1.232, -0.017]}
                      scale={1.017}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_180'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_180_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_180_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_171'
                      position={[8633.273, -175.743, 7268.449]}
                      rotation={[-3.128, -1.124, -3.136]}
                      scale={0.569}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_181'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_181_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_181_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_172'
                      position={[5843.8, 63.163, -13201.604]}
                      rotation={[-0.048, -0.211, -0.018]}
                      scale={0.571}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_182'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_182_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_182_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_173'
                      position={[6822.653, 75.415, 385.217]}
                      rotation={[0.457, 1.49, -0.486]}
                      scale={1.416}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_183'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_183_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_183_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_174'
                      position={[11257.424, 366.766, -2604.491]}
                      rotation={[3.108, 0.029, -3.135]}
                      scale={0.737}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_184'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_184_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_184_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_175'
                      position={[11305.352, -266.313, 13732.172]}
                      rotation={[0.017, -0.182, 0.002]}
                      scale={1.239}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_185'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_185_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_185_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_176'
                      position={[2593.937, -209.561, -18232.668]}
                      rotation={[3.133, 0.553, 3.13]}
                      scale={0.836}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_186'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_186_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_186_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_177'
                      position={[14599.268, -354.035, 15340.143]}
                      rotation={[-0.034, -1.173, -0.058]}
                      scale={0.54}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_187'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_187_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_187_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_178'
                      position={[6874.3, -65.155, -16422.043]}
                      rotation={[-0.042, 0.266, 0.088]}
                      scale={1.006}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_188'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_188_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_188_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_147'
                      position={[-3313.909, 41.672, -3593.665]}
                      rotation={[3.078, -0.291, 3.126]}
                      scale={0.811}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_165'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_165_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_165_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_148'
                      position={[-5283.997, 132.684, -3291.688]}
                      rotation={[0.926, 1.033, -0.875]}
                      scale={0.745}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_166'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_166_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_166_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_179'
                      position={[-13313.992, 206.693, 13155.146]}
                      rotation={[-2.9, -0.88, -3.064]}
                      scale={1.335}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_189'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_189_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_189_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Sand_01b_PRE_106'
                      position={[-4437.389, -1.782, -4129.673]}
                      rotation={[-0.08, 0.477, -0.096]}
                      scale={1.144}
                    >
                      <group name='EA04_Env_Stone_Sand_01b_LOD0_112'>
                        <mesh
                          name='EA04_Env_Stone_Sand_01b_LOD0_112_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Sand_01b_LOD0_112_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_180'
                      position={[-13614.444, 282.37, 9304.904]}
                      rotation={[-0.139, 0.094, 0.044]}
                      scale={0.65}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_190'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_190_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_190_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_181'
                      position={[4987.56, -151.59, 6674.681]}
                      rotation={[0.015, 0.127, -0.014]}
                      scale={1.027}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_191'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_191_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_191_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_182'
                      position={[17297.652, -293.613, 9804.107]}
                      rotation={[-0.181, -1.472, -0.206]}
                      scale={0.773}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_192'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_192_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_192_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_183'
                      position={[20581.512, -242.16, 839.167]}
                      rotation={[3.094, 1.173, -3.102]}
                      scale={1.366}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_193'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_193_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_193_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_184'
                      position={[8120.152, -98.819, 2963.046]}
                      rotation={[-2.773, -1.281, -2.89]}
                      scale={0.801}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_194'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_194_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_194_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_185'
                      position={[21699.707, -354.22, 8746.989]}
                      rotation={[-3.133, 0.742, -3.121]}
                      scale={1.475}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_195'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_195_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_195_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_186'
                      position={[-12456.583, 171.819, 9231.6]}
                      rotation={[0.024, -0.617, -0.118]}
                      scale={1.255}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_196'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_196_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_196_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_187'
                      position={[17105.863, -275.395, 9300.479]}
                      rotation={[-3.028, -1.087, -3.078]}
                      scale={0.571}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_197'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_197_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_197_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_188'
                      position={[11727.373, -345.076, 18239.545]}
                      rotation={[0.004, -0.59, -0.027]}
                      scale={1.118}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_198'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_198_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_198_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_189'
                      position={[2515.599, 234.435, -4374.312]}
                      rotation={[3.12, 0.3, 3.117]}
                      scale={0.825}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_199'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_199_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_199_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_190'
                      position={[11250.185, -194.33, 8572.168]}
                      rotation={[0.008, 0.179, -0.004]}
                      scale={0.997}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_200'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_200_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_200_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_191'
                      position={[3458.928, 300.545, -2856.734]}
                      rotation={[-0.017, -0.48, 0.026]}
                      scale={1.412}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_201'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_201_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_201_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_192'
                      position={[21376.904, -382.741, 10211.455]}
                      rotation={[-3.061, -1.318, -3.082]}
                      scale={0.789}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_202'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_202_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_202_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_193'
                      position={[12777.957, 843.885, -20136.273]}
                      rotation={[0.098, -0.844, 0.204]}
                      scale={1.291}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_203'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_203_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_203_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_194'
                      position={[9152.954, 423.19, -972.707]}
                      rotation={[3.11, 0.457, -3.141]}
                      scale={1.376}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_204'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_204_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_204_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_195'
                      position={[-13238.824, 318.055, 10817.122]}
                      rotation={[-0.069, -0.463, -0.211]}
                      scale={0.924}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_205'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_205_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_205_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_196'
                      position={[22537.197, -379.675, 9315.362]}
                      rotation={[-3.134, 0.778, -3.121]}
                      scale={0.849}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_206'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_206_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_206_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_197'
                      position={[12476.725, -239.261, 11809.853]}
                      rotation={[0.169, 1.422, -0.151]}
                      scale={0.521}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_207'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_207_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_207_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE__4__1'
                      position={[-4466.134, 52.269, -2058.946]}
                      rotation={[-0.635, 1.428, 0.605]}
                      scale={0.492}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_208'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_208_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_208_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE__3__1'
                      position={[-4571.934, 51.569, -2056.146]}
                      rotation={[-3.054, -0.272, 3.14]}
                      scale={0.492}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_209'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_209_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_209_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_198'
                      position={[-2727.196, -15.849, 8933.437]}
                      rotation={[0.03, -0.044, -0.035]}
                      scale={0.623}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_210'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_210_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_210_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_199'
                      position={[13015.836, -175.394, 5572.695]}
                      rotation={[-3.114, 1.117, 3.107]}
                      scale={0.658}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_211'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_211_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_211_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_200'
                      position={[-7774.146, 251.381, 347.614]}
                      rotation={[-3.095, 0.015, -2.974]}
                      scale={0.648}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_212'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_212_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_212_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_201'
                      position={[-7866.382, 99.693, 7179.875]}
                      rotation={[3.077, 1.181, -3.034]}
                      scale={1.101}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_213'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_213_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_213_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_202'
                      position={[-14169, 271.87, 11511.064]}
                      rotation={[-3.13, 0.993, 3.117]}
                      scale={0.555}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_214'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_214_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_214_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_203'
                      position={[14340.076, -181.549, 3112.782]}
                      rotation={[-0.04, -1.334, -0.058]}
                      scale={1.133}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_215'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_215_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_215_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_204'
                      position={[-5908.584, -2.623, 3171.918]}
                      rotation={[-2.811, -1.332, -2.831]}
                      scale={1.42}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_216'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_216_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_216_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_205'
                      position={[10018.565, -313.396, -29143.502]}
                      rotation={[-0.013, 0.222, 0.003]}
                      scale={1.014}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_217'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_217_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_217_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_206'
                      position={[9445.95, -260.451, -24703.895]}
                      rotation={[-0.026, 1.337, 0.014]}
                      scale={1.136}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_218'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_218_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_218_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Sand_01b_PRE_107'
                      position={[-5086.577, 63.685, -2151.854]}
                      rotation={[-3.073, 0.863, 3.132]}
                      scale={0.603}
                    >
                      <group name='EA04_Env_Stone_Sand_01b_LOD0_113'>
                        <mesh
                          name='EA04_Env_Stone_Sand_01b_LOD0_113_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Sand_01b_LOD0_113_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_207'
                      position={[11399.099, 123.815, 2354.096]}
                      rotation={[-3.024, -1.109, 2.996]}
                      scale={1.429}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_219'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_219_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_219_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_208'
                      position={[-8707.988, 24.737, 11135.419]}
                      rotation={[0.112, 1.012, -0.073]}
                      scale={0.526}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_220'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_220_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_220_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_209'
                      position={[4267.527, -220.044, 13057.455]}
                      rotation={[-0.004, 0.507, -0.095]}
                      scale={0.923}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_221'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_221_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_221_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_210'
                      position={[-9140.092, 82.793, 10220.046]}
                      rotation={[0.036, 0.24, -0.037]}
                      scale={0.722}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_222'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_222_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_222_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_211'
                      position={[2401.808, -137.792, 12712.419]}
                      rotation={[2.949, -1.1, 2.894]}
                      scale={1.191}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_223'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_223_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_223_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_212'
                      position={[5686.419, 197.037, -11477.997]}
                      rotation={[0.024, 1.243, -0.196]}
                      scale={1.325}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_224'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_224_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_224_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_213'
                      position={[9578.188, -193.129, 9062.735]}
                      rotation={[3.141, 1.319, -3.132]}
                      scale={1.109}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_225'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_225_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_225_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_214'
                      position={[2674.637, 153.428, 571.573]}
                      rotation={[3.141, -1.117, -3.11]}
                      scale={0.854}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_226'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_226_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_226_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_215'
                      position={[24495.221, -456.082, 11386.246]}
                      rotation={[0.05, 1.073, -0.031]}
                      scale={1.056}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_227'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_227_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_227_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_216'
                      position={[-1880.869, 152.339, 5059.888]}
                      rotation={[-3.107, 0.655, -3.107]}
                      scale={0.973}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_228'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_228_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_228_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_217'
                      position={[13707.025, -145.056, -847.297]}
                      rotation={[3.095, 1.11, -3.084]}
                      scale={0.787}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_229'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_229_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_229_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_218'
                      position={[11580.324, -250.21, 12814.361]}
                      rotation={[-3.122, 0.801, 3.139]}
                      scale={0.609}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_230'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_230_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_230_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_219'
                      position={[6859.85, 11.733, 2807.388]}
                      rotation={[-0.119, -1.286, -0.256]}
                      scale={0.721}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_231'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_231_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_231_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_220'
                      position={[4168.662, -168.16, 7996.75]}
                      rotation={[-0.014, -1.321, -0.028]}
                      scale={0.806}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_232'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_232_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_232_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_221'
                      position={[5720.957, -356.935, -30934.146]}
                      rotation={[3.021, -1.343, 3.038]}
                      scale={1.461}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_233'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_233_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_233_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_222'
                      position={[2064.507, -421.344, -29907.676]}
                      rotation={[3.058, -1.218, 3.074]}
                      scale={0.984}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_234'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_234_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_234_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_223'
                      position={[13385.091, -56.372, -1079.332]}
                      rotation={[-2.057, -0.831, -2.128]}
                      scale={0.665}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_235'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_235_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_235_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_224'
                      position={[5192.36, -157.054, 6874.208]}
                      rotation={[-3.123, -0.356, -3.126]}
                      scale={0.77}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_236'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_236_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_236_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_225'
                      position={[4511.481, 115.054, 104.041]}
                      rotation={[-0.017, 0.693, -0.018]}
                      scale={1.418}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_237'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_237_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_237_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_226'
                      position={[7456.015, 75.495, -17848.1]}
                      rotation={[-2.987, 0.298, 2.839]}
                      scale={1.01}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_238'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_238_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_238_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01b_PRE_149'
                      position={[-4036.647, -35.186, -4085.352]}
                      rotation={[2.904, 0.738, 3.126]}
                      scale={1.176}
                    >
                      <group name='EA04_Env_Stone_Gray_01b_LOD0_167'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01b_LOD0_167_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01b_LOD0_167_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_227'
                      position={[2117.118, -179.019, 9889.772]}
                      rotation={[-3.124, -0.554, -3.133]}
                      scale={1.22}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_239'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_239_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_239_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_228'
                      position={[-5434.81, 28.949, -1815.214]}
                      rotation={[-3.126, 0.753, -3.138]}
                      scale={0.821}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_240'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_240_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_240_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_229'
                      position={[-6912.587, 93.027, 6253.745]}
                      rotation={[-3.118, 0.271, -3.099]}
                      scale={1.244}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_241'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_241_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_241_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_230'
                      position={[21053.076, -305.752, 6062.03]}
                      rotation={[-3.12, -0.663, -3.127]}
                      scale={1.32}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_242'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_242_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_242_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_231'
                      position={[-12329.574, 349.648, 5758.778]}
                      rotation={[-3.091, -0.016, 3.127]}
                      scale={0.873}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_243'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_243_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_243_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_232'
                      position={[-173.774, -131.924, 9756.315]}
                      rotation={[-3.129, 0.51, -3.101]}
                      scale={0.558}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_244'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_244_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_244_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_233'
                      position={[685.537, -168.038, 9955.854]}
                      rotation={[0.065, 1.385, -0.053]}
                      scale={1.027}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_245'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_245_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_245_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_234'
                      position={[15823.999, -328.779, 12578.42]}
                      rotation={[-3.13, 0.323, -3.118]}
                      scale={0.685}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_246'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_246_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_246_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_235'
                      position={[10918.454, -157.13, 3479.692]}
                      rotation={[-3.121, -0.403, -3.135]}
                      scale={0.727}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_247'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_247_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_247_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_236'
                      position={[13683.718, 358.738, -12098.044]}
                      rotation={[0.182, 0.204, 0.005]}
                      scale={1.373}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_248'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_248_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_248_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_237'
                      position={[21443.836, -196.676, 436.093]}
                      rotation={[0.11, -1.068, 0.04]}
                      scale={0.771}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_249'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_249_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_249_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_238'
                      position={[-18208.936, -470.172, 948.449]}
                      rotation={[2.952, -0.194, 3.016]}
                      scale={0.776}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_250'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_250_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_250_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_239'
                      position={[-13170.589, 384.262, 3841.169]}
                      rotation={[0.201, 1.483, -0.183]}
                      scale={0.919}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_251'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_251_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_251_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_240'
                      position={[12464.472, -180.066, 4894.436]}
                      rotation={[-3.117, -1.292, -3.121]}
                      scale={1.432}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_252'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_252_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_252_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_241'
                      position={[3984.433, 146.559, 961.315]}
                      rotation={[-0.034, -0.411, -0.015]}
                      scale={0.997}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_253'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_253_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_253_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_242'
                      position={[-42.622, -150.91, 10207.891]}
                      rotation={[0.044, 0.335, -0.037]}
                      scale={0.657}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_254'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_254_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_254_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_243'
                      position={[7963.745, 60.78, -20653.953]}
                      rotation={[-2.645, 1.078, 2.441]}
                      scale={0.601}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_255'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_255_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_255_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_244'
                      position={[9580.452, -225.136, 11078.691]}
                      rotation={[-0.023, 1.518, 0.04]}
                      scale={1.197}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_256'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_256_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_256_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_245'
                      position={[22075.646, -401.773, 10588.807]}
                      rotation={[-3.134, 0.787, -3.12]}
                      scale={0.922}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_257'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_257_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_257_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_246'
                      position={[-7190.208, 69.761, 8729.246]}
                      rotation={[-0.035, -0.692, -0.052]}
                      scale={1.051}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_258'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_258_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_258_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_247'
                      position={[12383.295, -180.693, 6806.445]}
                      rotation={[3.133, -0.33, 3.126]}
                      scale={0.673}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_259'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_259_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_259_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_248'
                      position={[12252.472, 285.875, -11239.811]}
                      rotation={[2.857, 1.276, -2.821]}
                      scale={0.584}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_260'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_260_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_260_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_249'
                      position={[6183.542, -145.651, 4891.598]}
                      rotation={[-3.107, -1.002, -3.115]}
                      scale={1.081}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_261'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_261_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_261_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_250'
                      position={[6678.047, 99.92, 1073.091]}
                      rotation={[-3.101, -1.068, -3.063]}
                      scale={1.272}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_262'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_262_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_262_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_251'
                      position={[2838.554, 168.155, 1311.815]}
                      rotation={[3.129, -0.701, -3.127]}
                      scale={0.66}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_263'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_263_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_263_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_252'
                      position={[11139.719, -253.662, 12962.935]}
                      rotation={[-3.129, -1.066, 3.137]}
                      scale={1.014}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_264'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_264_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_264_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_253'
                      position={[13612.624, -141.703, -1008.076]}
                      rotation={[3.141, 0.23, -3.115]}
                      scale={0.698}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_265'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_265_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_265_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_254'
                      position={[14495.08, 391.664, -12246.965]}
                      rotation={[0.407, -0.574, -0.02]}
                      scale={1.479}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_266'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_266_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_266_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_255'
                      position={[3948.343, -36.035, 4323.369]}
                      rotation={[0.042, -0.65, -0.056]}
                      scale={1.078}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_267'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_267_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_267_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_256'
                      position={[4978.76, 86.178, -13252.344]}
                      rotation={[-2.893, -1.404, -2.866]}
                      scale={0.565}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_268'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_268_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_268_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_257'
                      position={[14444.808, -140.468, -3591.226]}
                      rotation={[3.139, -0.4, -3.128]}
                      scale={0.638}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_269'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_269_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_269_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_258'
                      position={[14327.232, -160.789, -887.097]}
                      rotation={[-0.034, -0.997, -0.047]}
                      scale={0.91}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_270'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_270_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_270_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_259'
                      position={[12055.338, -90.596, -8365.012]}
                      rotation={[0.181, 0.102, -0.151]}
                      scale={1.486}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_271'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_271_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_271_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_260'
                      position={[6624.799, -138.865, 4095.953]}
                      rotation={[-3.069, 0.071, -3.097]}
                      scale={0.509}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_272'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_272_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_272_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_261'
                      position={[6673.749, -202.31, -20372.234]}
                      rotation={[-2.811, 1.237, 2.754]}
                      scale={0.89}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_273'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_273_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_273_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_262'
                      position={[12235.39, -246.898, 12493.606]}
                      rotation={[-3.111, -0.48, -3.116]}
                      scale={0.93}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_274'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_274_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_274_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_263'
                      position={[6454.657, -38.263, -15126.697]}
                      rotation={[0.033, -1.006, 0.064]}
                      scale={1.23}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_275'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_275_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_275_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_264'
                      position={[7919.23, -215.138, -23101.176]}
                      rotation={[-3.037, 0.737, 2.869]}
                      scale={0.976}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_276'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_276_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_276_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_265'
                      position={[1981.611, -177.939, 10074.357]}
                      rotation={[-0.112, -0.639, -0.104]}
                      scale={1.168}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_277'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_277_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_277_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_266'
                      position={[1927.652, -185.003, 12506.32]}
                      rotation={[0.005, 0.207, 0.114]}
                      scale={0.844}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_278'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_278_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_278_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_267'
                      position={[10834.476, 415.632, -1201.578]}
                      rotation={[-0.031, 0.421, 0]}
                      scale={1.451}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_279'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_279_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_279_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA_04_Trunk_and_stone_PRE_1'
                      position={[-5428.022, 75.15, -1866.706]}
                    >
                      <group
                        name='EA04_Env_Tree_Trunk_01b_PRE_1'
                        position={[6.787, 46.2, -51.493]}
                        rotation={[-0.325, 0.221, -0.064]}
                      >
                        <group name='EA04_Env_Tree_Trunk_01b_LOD0_1'>
                          <mesh
                            name='EA04_Env_Tree_Trunk_01b_LOD0_1_Material_standard_0'
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .EA04_Env_Tree_Trunk_01b_LOD0_1_Material_standard_0
                                .geometry
                            }
                            material={materials.Material_standard}
                          />
                        </group>
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_268'
                      position={[-17285.236, -254.185, 1545.583]}
                      rotation={[2.843, -0.819, 2.96]}
                      scale={1.278}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_280'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_280_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_280_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_269'
                      position={[-6937.451, 85.888, 6488.879]}
                      rotation={[-0.17, -1.373, -0.209]}
                      scale={0.582}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_281'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_281_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_281_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_270'
                      position={[-16348.328, 321.889, 2911.494]}
                      rotation={[0.599, -1.255, 0.588]}
                      scale={1.343}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_282'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_282_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_282_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Stone_Gray_01a_PRE_271'
                      position={[17500.541, -362.094, 12536.659]}
                      rotation={[0.033, 0.425, -0.022]}
                      scale={0.888}
                    >
                      <group name='EA04_Env_Stone_Gray_01a_LOD0_283'>
                        <mesh
                          name='EA04_Env_Stone_Gray_01a_LOD0_283_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Stone_Gray_01a_LOD0_283_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                  </group>
                  <group
                    name='Grass__1_'
                    position={[-1130.574, -414.321, 3839.436]}
                    rotation={[0, 0.806, 0]}
                  >
                    <group
                      name='EA04_Env_Plants_Grass_Dry_01b_PRE__3__1'
                      position={[849.524, -0.962, -982.644]}
                      rotation={[-3.133, 0.021, -3.127]}
                      scale={0.94}
                    >
                      <group name='EA04_Env_Plants_Grass_Dry_01b_LOD0_4'>
                        <mesh
                          name='EA04_Env_Plants_Grass_Dry_01b_LOD0_4_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_Dry_01b_LOD0_4_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_Dry_01b_PRE__2__1'
                      position={[678.201, 7.928, -526.888]}
                      rotation={[0.02, 0, -0.029]}
                    >
                      <group name='EA04_Env_Plants_Grass_Dry_01b_LOD0_5'>
                        <mesh
                          name='EA04_Env_Plants_Grass_Dry_01b_LOD0_5_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_Dry_01b_LOD0_5_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_Dry_01a_PRE__7__1'
                      position={[-407.025, -2.067, 94.139]}
                      rotation={[0.016, -0.777, 0.001]}
                      scale={0.853}
                    >
                      <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_14'>
                        <mesh
                          name='EA04_Env_Plants_Grass_Dry_01a_LOD0_14_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_Dry_01a_LOD0_14_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_01a_PRE__2__1'
                      position={[162.904, 16.369, -209.53]}
                      rotation={[2.973, 1.294, -2.97]}
                      scale={1.048}
                    >
                      <group name='EA04_Env_Plants_Grass_01a_LOD0_5'>
                        <mesh
                          name='EA04_Env_Plants_Grass_01a_LOD0_5_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_01a_LOD0_5_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_Dry_01a_PRE__12__1'
                      position={[-94.667, -0.199, -51.675]}
                      rotation={[-3.132, 0.399, 3.139]}
                      scale={1.172}
                    >
                      <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_15'>
                        <mesh
                          name='EA04_Env_Plants_Grass_Dry_01a_LOD0_15_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_Dry_01a_LOD0_15_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_Dry_01a_PRE__13__1'
                      position={[-430.92, -5.162, 299.554]}
                      rotation={[0.015, 0.047, 0.001]}
                      scale={1.151}
                    >
                      <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_16'>
                        <mesh
                          name='EA04_Env_Plants_Grass_Dry_01a_LOD0_16_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_Dry_01a_LOD0_16_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_Dry_01a_PRE__8__1'
                      position={[-293.057, -1.989, 102.713]}
                      rotation={[0.008, 0.307, 0.003]}
                      scale={1.19}
                    >
                      <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_17'>
                        <mesh
                          name='EA04_Env_Plants_Grass_Dry_01a_LOD0_17_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_Dry_01a_LOD0_17_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_Dry_01a_PRE__9__1'
                      position={[-106.838, -0.568, -11.361]}
                      rotation={[0.009, -0.242, 0.003]}
                      scale={0.879}
                    >
                      <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_18'>
                        <mesh
                          name='EA04_Env_Plants_Grass_Dry_01a_LOD0_18_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_Dry_01a_LOD0_18_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_Dry_01a_PRE__6__1'
                      position={[-105.54, -0.343, -37.748]}
                      rotation={[0.017, -1.3, 0.009]}
                      scale={0.904}
                    >
                      <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_19'>
                        <mesh
                          name='EA04_Env_Plants_Grass_Dry_01a_LOD0_19_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_Dry_01a_LOD0_19_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_01a_PRE__3__1'
                      position={[-376.35, -12.894, 867.478]}
                      rotation={[-0.045, 1.389, 0.059]}
                      scale={0.932}
                    >
                      <group name='EA04_Env_Plants_Grass_01a_LOD0_6'>
                        <mesh
                          name='EA04_Env_Plants_Grass_01a_LOD0_6_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_01a_LOD0_6_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_Dry_01a_PRE__2__1'
                      position={[-396.46, -4.869, 282.362]}
                      rotation={[-3.127, -0.479, 3.14]}
                      scale={1.179}
                    >
                      <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_20'>
                        <mesh
                          name='EA04_Env_Plants_Grass_Dry_01a_LOD0_20_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_Dry_01a_LOD0_20_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_Dry_01a_PRE__3__1'
                      position={[-106.067, -1.496, 99.037]}
                      rotation={[0.011, -0.826, 0.004]}
                      scale={0.818}
                    >
                      <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_21'>
                        <mesh
                          name='EA04_Env_Plants_Grass_Dry_01a_LOD0_21_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_Dry_01a_LOD0_21_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_Dry_01a_PRE__5__1'
                      position={[-325.177, -2.119, 103.489]}
                      rotation={[-1.496, 1.57, 1.511]}
                      scale={0.907}
                    >
                      <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_22'>
                        <mesh
                          name='EA04_Env_Plants_Grass_Dry_01a_LOD0_22_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_Dry_01a_LOD0_22_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_01a_PRE_1'
                      position={[393.924, -3.181, 249.455]}
                      rotation={[0, 0, -0.033]}
                    >
                      <group name='EA04_Env_Plants_Grass_01a_LOD0_7'>
                        <mesh
                          name='EA04_Env_Plants_Grass_01a_LOD0_7_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_01a_LOD0_7_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_Dry_01b_PRE_1'
                      position={[-805.576, -3.258, 228.055]}
                      rotation={[-0.034, -0.002, 0.11]}
                    >
                      <group name='EA04_Env_Plants_Grass_Dry_01b_LOD0_6'>
                        <mesh
                          name='EA04_Env_Plants_Grass_Dry_01b_LOD0_6_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_Dry_01b_LOD0_6_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_Dry_01a_PRE__11__1'
                      position={[61.125, 0.081, -49.691]}
                      rotation={[-3.127, -0.73, 3.135]}
                      scale={0.818}
                    >
                      <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_23'>
                        <mesh
                          name='EA04_Env_Plants_Grass_Dry_01a_LOD0_23_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_Dry_01a_LOD0_23_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_Dry_01a_PRE__10__1'
                      position={[156.349, 0.379, -41.139]}
                      rotation={[-3.123, 0.012, 3.137]}
                      scale={0.963}
                    >
                      <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_24'>
                        <mesh
                          name='EA04_Env_Plants_Grass_Dry_01a_LOD0_24_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_Dry_01a_LOD0_24_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_01a_PRE__1__1'
                      position={[411.733, 6.164, -191.563]}
                      rotation={[0.029, 0, -0.007]}
                    >
                      <group name='EA04_Env_Plants_Grass_01a_LOD0_8'>
                        <mesh
                          name='EA04_Env_Plants_Grass_01a_LOD0_8_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_01a_LOD0_8_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_Dry_01a_PRE_1'
                      position={[218.924, -3.018, 267.155]}
                      rotation={[0.009, 0.652, -0.003]}
                    >
                      <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_25'>
                        <mesh
                          name='EA04_Env_Plants_Grass_Dry_01a_LOD0_25_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_Dry_01a_LOD0_25_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_Dry_01b_PRE__1__1'
                      position={[-238.376, -5.719, 437.655]}
                      rotation={[-3.123, 0.433, 3.13]}
                    >
                      <group name='EA04_Env_Plants_Grass_Dry_01b_LOD0_7'>
                        <mesh
                          name='EA04_Env_Plants_Grass_Dry_01b_LOD0_7_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_Dry_01b_LOD0_7_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_Dry_01a_PRE__4__1'
                      position={[-174.651, -1.741, 107.959]}
                      rotation={[-3.134, -0.197, 3.139]}
                      scale={1.104}
                    >
                      <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_26'>
                        <mesh
                          name='EA04_Env_Plants_Grass_Dry_01a_LOD0_26_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_Dry_01a_LOD0_26_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_01b_PRE__1__1'
                      position={[1026.025, 8.381, -1280.839]}
                      rotation={[0.055, -0.001, -0.025]}
                    >
                      <group name='EA04_Env_Plants_Grass_01b_LOD0_3'>
                        <mesh
                          name='EA04_Env_Plants_Grass_01b_LOD0_3_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_01b_LOD0_3_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_Dry_01a_PRE__1__1'
                      position={[-258.476, -5.558, 409.255]}
                      rotation={[0.013, 0, 0.011]}
                    >
                      <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_27'>
                        <mesh
                          name='EA04_Env_Plants_Grass_Dry_01a_LOD0_27_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_Dry_01a_LOD0_27_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_01b_PRE_1'
                      position={[387.624, -1.926, 143.456]}
                      rotation={[0.018, 0, 0.005]}
                    >
                      <group name='EA04_Env_Plants_Grass_01b_LOD0_4'>
                        <mesh
                          name='EA04_Env_Plants_Grass_01b_LOD0_4_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_01b_LOD0_4_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_01b_PRE__2__1'
                      position={[-98.116, 21.881, -712.038]}
                      rotation={[3.113, -0.417, 3.114]}
                      scale={1.166}
                    >
                      <group name='EA04_Env_Plants_Grass_01b_LOD0_5'>
                        <mesh
                          name='EA04_Env_Plants_Grass_01b_LOD0_5_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_01b_LOD0_5_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_01a_PRE__4__1'
                      position={[-129.037, -4.116, 403.353]}
                      rotation={[-0.021, 1.487, 0.029]}
                      scale={0.563}
                    >
                      <group name='EA04_Env_Plants_Grass_01a_LOD0_9'>
                        <mesh
                          name='EA04_Env_Plants_Grass_01a_LOD0_9_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_01a_LOD0_9_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                  </group>
                  <group
                    name='Grass__2_'
                    position={[-1130.574, -414.321, 6353.77]}
                    rotation={[0, 0.806, 0]}
                  />
                  <group
                    name='EA04_Env_Plants_Grass_Dry_01b_PRE__3__2'
                    position={[-1250.91, -415.283, 5060.402]}
                    rotation={[-3.129, -0.785, -3.118]}
                    scale={0.94}
                  >
                    <group name='EA04_Env_Plants_Grass_Dry_01b_LOD0_8'>
                      <mesh
                        name='EA04_Env_Plants_Grass_Dry_01b_LOD0_8_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Plants_Grass_Dry_01b_LOD0_8_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Plants_Grass_Dry_01b_PRE__2__2'
                    position={[-1040.851, -406.393, 5499.652]}
                    rotation={[0.029, 0.805, -0.05]}
                  >
                    <group name='EA04_Env_Plants_Grass_Dry_01b_LOD0_9'>
                      <mesh
                        name='EA04_Env_Plants_Grass_Dry_01b_LOD0_9_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Plants_Grass_Dry_01b_LOD0_9_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Plants_Grass_Dry_01a_PRE__7__2'
                    position={[-1344.599, -416.388, 6712.553]}
                    rotation={[0.011, 0.028, -0.01]}
                    scale={0.853}
                  >
                    <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_28'>
                      <mesh
                        name='EA04_Env_Plants_Grass_Dry_01a_LOD0_28_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Plants_Grass_Dry_01a_LOD0_28_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Plants_Grass_01a_PRE__2__2'
                    position={[-1168.868, -397.952, 6091.141]}
                    rotation={[3.09, 0.492, -3.108]}
                    scale={1.048}
                  >
                    <group name='EA04_Env_Plants_Grass_01a_LOD0_10'>
                      <mesh
                        name='EA04_Env_Plants_Grass_01a_LOD0_10_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Plants_Grass_01a_LOD0_10_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Plants_Grass_Dry_01a_PRE__12__2'
                    position={[-1233.416, -414.52, 6386.258]}
                    rotation={[-3.132, -0.407, -3.137]}
                    scale={1.172}
                  >
                    <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_29'>
                      <mesh
                        name='EA04_Env_Plants_Grass_Dry_01a_LOD0_29_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Plants_Grass_Dry_01a_LOD0_29_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Plants_Grass_Dry_01a_PRE__13__2'
                    position={[-1212.989, -419.483, 6872.068]}
                    rotation={[0.023, 0.853, -0.015]}
                    scale={1.151}
                  >
                    <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_30'>
                      <mesh
                        name='EA04_Env_Plants_Grass_Dry_01a_LOD0_30_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Plants_Grass_Dry_01a_LOD0_30_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Plants_Grass_Dry_01a_PRE__8__2'
                    position={[-1259.475, -416.31, 6636.289]}
                    rotation={[0.016, 1.113, -0.01]}
                    scale={1.19}
                  >
                    <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_31'>
                      <mesh
                        name='EA04_Env_Plants_Grass_Dry_01a_LOD0_31_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Plants_Grass_Dry_01a_LOD0_31_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Plants_Grass_Dry_01a_PRE__9__2'
                    position={[-1212.77, -414.889, 6422.96]}
                    rotation={[0.01, 0.564, -0.005]}
                    scale={0.879}
                  >
                    <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_32'>
                      <mesh
                        name='EA04_Env_Plants_Grass_Dry_01a_LOD0_32_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Plants_Grass_Dry_01a_LOD0_32_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Plants_Grass_Dry_01a_PRE__6__2'
                    position={[-1230.902, -414.664, 6403.748]}
                    rotation={[0.005, -0.494, -0.005]}
                    scale={0.904}
                  >
                    <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_33'>
                      <mesh
                        name='EA04_Env_Plants_Grass_Dry_01a_LOD0_33_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Plants_Grass_Dry_01a_LOD0_33_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Plants_Grass_01a_PRE__3__2'
                    position={[-765.562, -427.215, 7226.079]}
                    rotation={[-3.128, 0.946, -3.138]}
                    scale={0.932}
                  >
                    <group name='EA04_Env_Plants_Grass_01a_LOD0_11'>
                      <mesh
                        name='EA04_Env_Plants_Grass_01a_LOD0_11_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Plants_Grass_01a_LOD0_11_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Plants_Grass_Dry_01a_PRE__2__2'
                    position={[-1201.521, -419.189, 6835.304]}
                    rotation={[-3.096, -1.284, -3.106]}
                    scale={1.179}
                  >
                    <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_34'>
                      <mesh
                        name='EA04_Env_Plants_Grass_Dry_01a_LOD0_34_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Plants_Grass_Dry_01a_LOD0_34_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Plants_Grass_Dry_01a_PRE__3__2'
                    position={[-1132.608, -415.817, 6498.872]}
                    rotation={[0.008, -0.021, -0.004]}
                    scale={0.818}
                  >
                    <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_35'>
                      <mesh
                        name='EA04_Env_Plants_Grass_Dry_01a_LOD0_35_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Plants_Grass_Dry_01a_LOD0_35_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Plants_Grass_Dry_01a_PRE__5__2'
                    position={[-1281.163, -416.44, 6659.994]}
                    rotation={[-3.14, 0.765, -3.128]}
                    scale={0.907}
                  >
                    <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_36'>
                      <mesh
                        name='EA04_Env_Plants_Grass_Dry_01a_LOD0_36_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Plants_Grass_Dry_01a_LOD0_36_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Plants_Grass_01a_PRE_2'
                    position={[-677.797, -417.502, 6242.427]}
                    rotation={[0, 0.806, -0.033]}
                  >
                    <group name='EA04_Env_Plants_Grass_01a_LOD0_12'>
                      <mesh
                        name='EA04_Env_Plants_Grass_01a_LOD0_12_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Plants_Grass_01a_LOD0_12_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Plants_Grass_Dry_01b_PRE_2'
                    position={[-1524.064, -417.579, 7092.774]}
                    rotation={[-0.049, 0.803, 0.146]}
                  >
                    <group name='EA04_Env_Plants_Grass_Dry_01b_LOD0_10'>
                      <mesh
                        name='EA04_Env_Plants_Grass_Dry_01b_LOD0_10_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Plants_Grass_Dry_01b_LOD0_10_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Plants_Grass_Dry_01a_PRE__11__2'
                    position={[-1124.077, -414.24, 6275.264]}
                    rotation={[-2.851, -1.534, -2.867]}
                    scale={0.818}
                  >
                    <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_37'>
                      <mesh
                        name='EA04_Env_Plants_Grass_Dry_01a_LOD0_37_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Plants_Grass_Dry_01a_LOD0_37_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Plants_Grass_Dry_01a_PRE__10__2'
                    position={[-1051.952, -413.942, 6212.504]}
                    rotation={[-3.115, -0.794, -3.127]}
                    scale={0.963}
                  >
                    <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_38'>
                      <mesh
                        name='EA04_Env_Plants_Grass_Dry_01a_LOD0_38_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Plants_Grass_Dry_01a_LOD0_38_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Plants_Grass_01a_PRE__1__2'
                    position={[-983.558, -408.157, 5924.111]}
                    rotation={[0.042, 0.805, -0.037]}
                  >
                    <group name='EA04_Env_Plants_Grass_01a_LOD0_13'>
                      <mesh
                        name='EA04_Env_Plants_Grass_01a_LOD0_13_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Plants_Grass_01a_LOD0_13_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Plants_Grass_Dry_01a_PRE_2'
                    position={[-786.244, -417.338, 6380.91]}
                    rotation={[0.062, 1.457, -0.059]}
                  >
                    <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_39'>
                      <mesh
                        name='EA04_Env_Plants_Grass_Dry_01a_LOD0_39_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Plants_Grass_Dry_01a_LOD0_39_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Plants_Grass_Dry_01b_PRE__1__2'
                    position={[-980.015, -420.04, 6828.846]}
                    rotation={[-3.124, -0.372, -3.139]}
                  >
                    <group name='EA04_Env_Plants_Grass_Dry_01b_LOD0_11'>
                      <mesh
                        name='EA04_Env_Plants_Grass_Dry_01b_LOD0_11_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Plants_Grass_Dry_01b_LOD0_11_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Plants_Grass_Dry_01a_PRE__4__2'
                    position={[-1173.678, -416.062, 6554.518]}
                    rotation={[-3.127, -1.003, -3.133]}
                    scale={1.104}
                  >
                    <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_40'>
                      <mesh
                        name='EA04_Env_Plants_Grass_Dry_01a_LOD0_40_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Plants_Grass_Dry_01a_LOD0_40_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Plants_Grass_01b_PRE__1__2'
                    position={[-1343.738, -405.94, 4726.552]}
                    rotation={[0.079, 0.803, -0.082]}
                  >
                    <group name='EA04_Env_Plants_Grass_01b_LOD0_6'>
                      <mesh
                        name='EA04_Env_Plants_Grass_01b_LOD0_6_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Plants_Grass_01b_LOD0_6_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Plants_Grass_Dry_01a_PRE__1__2'
                    position={[-1014.421, -419.879, 6823.672]}
                    rotation={[0.019, 0.806, -0.003]}
                  >
                    <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_41'>
                      <mesh
                        name='EA04_Env_Plants_Grass_Dry_01a_LOD0_41_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Plants_Grass_Dry_01a_LOD0_41_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Plants_Grass_01b_PRE_2'
                    position={[-758.616, -416.247, 6173.55]}
                    rotation={[0.027, 0.806, -0.014]}
                  >
                    <group name='EA04_Env_Plants_Grass_01b_LOD0_7'>
                      <mesh
                        name='EA04_Env_Plants_Grass_01b_LOD0_7_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Plants_Grass_01b_LOD0_7_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Plants_Grass_01b_PRE__2__2'
                    position={[-1712.109, -392.439, 5931.346]}
                    rotation={[3.065, -1.222, 3.053]}
                    scale={1.166}
                  >
                    <group name='EA04_Env_Plants_Grass_01b_LOD0_8'>
                      <mesh
                        name='EA04_Env_Plants_Grass_01b_LOD0_8_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Plants_Grass_01b_LOD0_8_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Plants_Grass_01a_PRE__4__2'
                    position={[-929.023, -418.437, 6726.223]}
                    rotation={[-3.139, 0.849, -3.135]}
                    scale={0.563}
                  >
                    <group name='EA04_Env_Plants_Grass_01a_LOD0_14'>
                      <mesh
                        name='EA04_Env_Plants_Grass_01a_LOD0_14_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Plants_Grass_01a_LOD0_14_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='Grass__3_'
                    position={[809.677, -414.321, 6353.77]}
                    rotation={[0, 0.806, 0]}
                  />
                  <group
                    name='EA04_Env_Plants_Grass_Dry_01b_PRE__3__3'
                    position={[689.341, -415.283, 5060.402]}
                    rotation={[-3.129, -0.785, -3.118]}
                    scale={0.94}
                  >
                    <group name='EA04_Env_Plants_Grass_Dry_01b_LOD0_12'>
                      <mesh
                        name='EA04_Env_Plants_Grass_Dry_01b_LOD0_12_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Plants_Grass_Dry_01b_LOD0_12_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Plants_Grass_Dry_01b_PRE__2__3'
                    position={[899.401, -406.393, 5499.652]}
                    rotation={[0.029, 0.805, -0.05]}
                  >
                    <group name='EA04_Env_Plants_Grass_Dry_01b_LOD0_13'>
                      <mesh
                        name='EA04_Env_Plants_Grass_Dry_01b_LOD0_13_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Plants_Grass_Dry_01b_LOD0_13_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Plants_Grass_Dry_01a_PRE__7__3'
                    position={[595.652, -416.388, 6712.553]}
                    rotation={[0.011, 0.028, -0.01]}
                    scale={0.853}
                  >
                    <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_42'>
                      <mesh
                        name='EA04_Env_Plants_Grass_Dry_01a_LOD0_42_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Plants_Grass_Dry_01a_LOD0_42_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Plants_Grass_01a_PRE__2__3'
                    position={[771.384, -397.952, 6091.141]}
                    rotation={[3.09, 0.492, -3.108]}
                    scale={1.048}
                  >
                    <group name='EA04_Env_Plants_Grass_01a_LOD0_15'>
                      <mesh
                        name='EA04_Env_Plants_Grass_01a_LOD0_15_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Plants_Grass_01a_LOD0_15_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Plants_Grass_Dry_01a_PRE__12__3'
                    position={[706.835, -414.52, 6386.258]}
                    rotation={[-3.132, -0.407, -3.137]}
                    scale={1.172}
                  >
                    <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_43'>
                      <mesh
                        name='EA04_Env_Plants_Grass_Dry_01a_LOD0_43_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Plants_Grass_Dry_01a_LOD0_43_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Plants_Grass_Dry_01a_PRE__13__3'
                    position={[727.262, -419.483, 6872.068]}
                    rotation={[0.023, 0.853, -0.015]}
                    scale={1.151}
                  >
                    <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_44'>
                      <mesh
                        name='EA04_Env_Plants_Grass_Dry_01a_LOD0_44_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Plants_Grass_Dry_01a_LOD0_44_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Plants_Grass_Dry_01a_PRE__8__3'
                    position={[680.776, -416.31, 6636.289]}
                    rotation={[0.016, 1.113, -0.01]}
                    scale={1.19}
                  >
                    <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_45'>
                      <mesh
                        name='EA04_Env_Plants_Grass_Dry_01a_LOD0_45_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Plants_Grass_Dry_01a_LOD0_45_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Plants_Grass_Dry_01a_PRE__9__3'
                    position={[727.482, -414.889, 6422.96]}
                    rotation={[0.01, 0.564, -0.005]}
                    scale={0.879}
                  >
                    <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_46'>
                      <mesh
                        name='EA04_Env_Plants_Grass_Dry_01a_LOD0_46_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Plants_Grass_Dry_01a_LOD0_46_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Plants_Grass_Dry_01a_PRE__6__3'
                    position={[709.349, -414.664, 6403.748]}
                    rotation={[0.005, -0.494, -0.005]}
                    scale={0.904}
                  >
                    <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_47'>
                      <mesh
                        name='EA04_Env_Plants_Grass_Dry_01a_LOD0_47_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Plants_Grass_Dry_01a_LOD0_47_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Plants_Grass_01a_PRE__3__3'
                    position={[1174.689, -427.215, 7226.079]}
                    rotation={[-3.128, 0.946, -3.138]}
                    scale={0.932}
                  >
                    <group name='EA04_Env_Plants_Grass_01a_LOD0_16'>
                      <mesh
                        name='EA04_Env_Plants_Grass_01a_LOD0_16_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Plants_Grass_01a_LOD0_16_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Plants_Grass_Dry_01a_PRE__2__3'
                    position={[738.731, -419.189, 6835.304]}
                    rotation={[-3.096, -1.284, -3.106]}
                    scale={1.179}
                  >
                    <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_48'>
                      <mesh
                        name='EA04_Env_Plants_Grass_Dry_01a_LOD0_48_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Plants_Grass_Dry_01a_LOD0_48_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Plants_Grass_Dry_01a_PRE__3__3'
                    position={[807.643, -415.817, 6498.872]}
                    rotation={[0.008, -0.021, -0.004]}
                    scale={0.818}
                  >
                    <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_49'>
                      <mesh
                        name='EA04_Env_Plants_Grass_Dry_01a_LOD0_49_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Plants_Grass_Dry_01a_LOD0_49_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Plants_Grass_Dry_01a_PRE__5__3'
                    position={[659.088, -416.44, 6659.994]}
                    rotation={[-3.14, 0.765, -3.128]}
                    scale={0.907}
                  >
                    <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_50'>
                      <mesh
                        name='EA04_Env_Plants_Grass_Dry_01a_LOD0_50_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Plants_Grass_Dry_01a_LOD0_50_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Plants_Grass_01a_PRE_3'
                    position={[1262.454, -417.502, 6242.427]}
                    rotation={[0, 0.806, -0.033]}
                  >
                    <group name='EA04_Env_Plants_Grass_01a_LOD0_17'>
                      <mesh
                        name='EA04_Env_Plants_Grass_01a_LOD0_17_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Plants_Grass_01a_LOD0_17_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Plants_Grass_Dry_01b_PRE_3'
                    position={[416.187, -417.579, 7092.774]}
                    rotation={[-0.049, 0.803, 0.146]}
                  >
                    <group name='EA04_Env_Plants_Grass_Dry_01b_LOD0_14'>
                      <mesh
                        name='EA04_Env_Plants_Grass_Dry_01b_LOD0_14_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Plants_Grass_Dry_01b_LOD0_14_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Plants_Grass_Dry_01a_PRE__11__3'
                    position={[816.174, -414.24, 6275.264]}
                    rotation={[-2.851, -1.534, -2.867]}
                    scale={0.818}
                  >
                    <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_51'>
                      <mesh
                        name='EA04_Env_Plants_Grass_Dry_01a_LOD0_51_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Plants_Grass_Dry_01a_LOD0_51_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Plants_Grass_Dry_01a_PRE__10__3'
                    position={[888.299, -413.942, 6212.504]}
                    rotation={[-3.115, -0.794, -3.127]}
                    scale={0.963}
                  >
                    <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_52'>
                      <mesh
                        name='EA04_Env_Plants_Grass_Dry_01a_LOD0_52_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Plants_Grass_Dry_01a_LOD0_52_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Plants_Grass_01a_PRE__1__3'
                    position={[956.694, -408.157, 5924.111]}
                    rotation={[0.042, 0.805, -0.037]}
                  >
                    <group name='EA04_Env_Plants_Grass_01a_LOD0_18'>
                      <mesh
                        name='EA04_Env_Plants_Grass_01a_LOD0_18_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Plants_Grass_01a_LOD0_18_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Plants_Grass_Dry_01a_PRE_3'
                    position={[1154.007, -417.338, 6380.91]}
                    rotation={[0.062, 1.457, -0.059]}
                  >
                    <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_53'>
                      <mesh
                        name='EA04_Env_Plants_Grass_Dry_01a_LOD0_53_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Plants_Grass_Dry_01a_LOD0_53_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Plants_Grass_Dry_01b_PRE__1__3'
                    position={[960.237, -420.04, 6828.846]}
                    rotation={[-3.124, -0.372, -3.139]}
                  >
                    <group name='EA04_Env_Plants_Grass_Dry_01b_LOD0_15'>
                      <mesh
                        name='EA04_Env_Plants_Grass_Dry_01b_LOD0_15_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Plants_Grass_Dry_01b_LOD0_15_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Plants_Grass_Dry_01a_PRE__4__3'
                    position={[766.573, -416.062, 6554.518]}
                    rotation={[-3.127, -1.003, -3.133]}
                    scale={1.104}
                  >
                    <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_54'>
                      <mesh
                        name='EA04_Env_Plants_Grass_Dry_01a_LOD0_54_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Plants_Grass_Dry_01a_LOD0_54_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Plants_Grass_01b_PRE__1__3'
                    position={[596.513, -405.94, 4726.552]}
                    rotation={[0.079, 0.803, -0.082]}
                  >
                    <group name='EA04_Env_Plants_Grass_01b_LOD0_9'>
                      <mesh
                        name='EA04_Env_Plants_Grass_01b_LOD0_9_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Plants_Grass_01b_LOD0_9_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Plants_Grass_Dry_01a_PRE__1__3'
                    position={[925.83, -419.879, 6823.672]}
                    rotation={[0.019, 0.806, -0.003]}
                  >
                    <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_55'>
                      <mesh
                        name='EA04_Env_Plants_Grass_Dry_01a_LOD0_55_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Plants_Grass_Dry_01a_LOD0_55_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Plants_Grass_01b_PRE_3'
                    position={[1181.635, -416.247, 6173.55]}
                    rotation={[0.027, 0.806, -0.014]}
                  >
                    <group name='EA04_Env_Plants_Grass_01b_LOD0_10'>
                      <mesh
                        name='EA04_Env_Plants_Grass_01b_LOD0_10_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Plants_Grass_01b_LOD0_10_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Plants_Grass_01b_PRE__2__3'
                    position={[228.142, -392.439, 5931.346]}
                    rotation={[3.065, -1.222, 3.053]}
                    scale={1.166}
                  >
                    <group name='EA04_Env_Plants_Grass_01b_LOD0_11'>
                      <mesh
                        name='EA04_Env_Plants_Grass_01b_LOD0_11_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Plants_Grass_01b_LOD0_11_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Plants_Grass_01a_PRE__4__3'
                    position={[1011.228, -418.437, 6726.223]}
                    rotation={[-3.139, 0.849, -3.135]}
                    scale={0.563}
                  >
                    <group name='EA04_Env_Plants_Grass_01a_LOD0_19'>
                      <mesh
                        name='EA04_Env_Plants_Grass_01a_LOD0_19_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Plants_Grass_01a_LOD0_19_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='Grass__4_'
                    position={[1194.677, -414.321, 4068.77]}
                    rotation={[0, 0.806, 0]}
                  >
                    <group
                      name='EA04_Env_Plants_Grass_Dry_01b_PRE__3__4'
                      position={[849.524, -0.962, -982.644]}
                      rotation={[-3.133, 0.021, -3.127]}
                      scale={0.94}
                    >
                      <group name='EA04_Env_Plants_Grass_Dry_01b_LOD0_16'>
                        <mesh
                          name='EA04_Env_Plants_Grass_Dry_01b_LOD0_16_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_Dry_01b_LOD0_16_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_Dry_01b_PRE__2__4'
                      position={[678.201, 7.928, -526.888]}
                      rotation={[0.02, 0, -0.029]}
                    >
                      <group name='EA04_Env_Plants_Grass_Dry_01b_LOD0_17'>
                        <mesh
                          name='EA04_Env_Plants_Grass_Dry_01b_LOD0_17_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_Dry_01b_LOD0_17_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_Dry_01a_PRE__7__4'
                      position={[-407.025, -2.067, 94.139]}
                      rotation={[0.016, -0.777, 0.001]}
                      scale={0.853}
                    >
                      <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_56'>
                        <mesh
                          name='EA04_Env_Plants_Grass_Dry_01a_LOD0_56_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_Dry_01a_LOD0_56_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_01a_PRE__2__4'
                      position={[162.904, 16.369, -209.53]}
                      rotation={[2.973, 1.294, -2.97]}
                      scale={1.048}
                    >
                      <group name='EA04_Env_Plants_Grass_01a_LOD0_20'>
                        <mesh
                          name='EA04_Env_Plants_Grass_01a_LOD0_20_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_01a_LOD0_20_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_Dry_01a_PRE__12__4'
                      position={[-94.667, -0.199, -51.675]}
                      rotation={[-3.132, 0.399, 3.139]}
                      scale={1.172}
                    >
                      <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_57'>
                        <mesh
                          name='EA04_Env_Plants_Grass_Dry_01a_LOD0_57_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_Dry_01a_LOD0_57_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_Dry_01a_PRE__13__4'
                      position={[-430.92, -5.162, 299.554]}
                      rotation={[0.015, 0.047, 0.001]}
                      scale={1.151}
                    >
                      <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_58'>
                        <mesh
                          name='EA04_Env_Plants_Grass_Dry_01a_LOD0_58_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_Dry_01a_LOD0_58_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_Dry_01a_PRE__8__4'
                      position={[-293.057, -1.989, 102.713]}
                      rotation={[0.008, 0.307, 0.003]}
                      scale={1.19}
                    >
                      <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_59'>
                        <mesh
                          name='EA04_Env_Plants_Grass_Dry_01a_LOD0_59_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_Dry_01a_LOD0_59_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_Dry_01a_PRE__9__4'
                      position={[-106.838, -0.568, -11.361]}
                      rotation={[0.009, -0.242, 0.003]}
                      scale={0.879}
                    >
                      <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_60'>
                        <mesh
                          name='EA04_Env_Plants_Grass_Dry_01a_LOD0_60_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_Dry_01a_LOD0_60_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_Dry_01a_PRE__6__4'
                      position={[-105.54, -0.343, -37.748]}
                      rotation={[0.017, -1.3, 0.009]}
                      scale={0.904}
                    >
                      <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_61'>
                        <mesh
                          name='EA04_Env_Plants_Grass_Dry_01a_LOD0_61_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_Dry_01a_LOD0_61_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_01a_PRE__3__4'
                      position={[-376.35, -12.894, 867.478]}
                      rotation={[-0.045, 1.389, 0.059]}
                      scale={0.932}
                    >
                      <group name='EA04_Env_Plants_Grass_01a_LOD0_21'>
                        <mesh
                          name='EA04_Env_Plants_Grass_01a_LOD0_21_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_01a_LOD0_21_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_Dry_01a_PRE__2__4'
                      position={[-396.46, -4.869, 282.362]}
                      rotation={[-3.127, -0.479, 3.14]}
                      scale={1.179}
                    >
                      <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_62'>
                        <mesh
                          name='EA04_Env_Plants_Grass_Dry_01a_LOD0_62_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_Dry_01a_LOD0_62_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_Dry_01a_PRE__3__4'
                      position={[-106.067, -1.496, 99.037]}
                      rotation={[0.011, -0.826, 0.004]}
                      scale={0.818}
                    >
                      <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_63'>
                        <mesh
                          name='EA04_Env_Plants_Grass_Dry_01a_LOD0_63_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_Dry_01a_LOD0_63_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_Dry_01a_PRE__5__4'
                      position={[-325.177, -2.119, 103.489]}
                      rotation={[-1.496, 1.57, 1.511]}
                      scale={0.907}
                    >
                      <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_64'>
                        <mesh
                          name='EA04_Env_Plants_Grass_Dry_01a_LOD0_64_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_Dry_01a_LOD0_64_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_01a_PRE_4'
                      position={[393.924, -3.181, 249.455]}
                      rotation={[0, 0, -0.033]}
                    >
                      <group name='EA04_Env_Plants_Grass_01a_LOD0_22'>
                        <mesh
                          name='EA04_Env_Plants_Grass_01a_LOD0_22_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_01a_LOD0_22_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_Dry_01b_PRE_4'
                      position={[-805.576, -3.258, 228.055]}
                      rotation={[-0.034, -0.002, 0.11]}
                    >
                      <group name='EA04_Env_Plants_Grass_Dry_01b_LOD0_18'>
                        <mesh
                          name='EA04_Env_Plants_Grass_Dry_01b_LOD0_18_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_Dry_01b_LOD0_18_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_Dry_01a_PRE__11__4'
                      position={[61.125, 0.081, -49.691]}
                      rotation={[-3.127, -0.73, 3.135]}
                      scale={0.818}
                    >
                      <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_65'>
                        <mesh
                          name='EA04_Env_Plants_Grass_Dry_01a_LOD0_65_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_Dry_01a_LOD0_65_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_Dry_01a_PRE__10__4'
                      position={[156.349, 0.379, -41.139]}
                      rotation={[-3.123, 0.012, 3.137]}
                      scale={0.963}
                    >
                      <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_66'>
                        <mesh
                          name='EA04_Env_Plants_Grass_Dry_01a_LOD0_66_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_Dry_01a_LOD0_66_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_01a_PRE__1__4'
                      position={[411.733, 6.164, -191.563]}
                      rotation={[0.029, 0, -0.007]}
                    >
                      <group name='EA04_Env_Plants_Grass_01a_LOD0_23'>
                        <mesh
                          name='EA04_Env_Plants_Grass_01a_LOD0_23_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_01a_LOD0_23_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_Dry_01a_PRE_4'
                      position={[218.924, -3.018, 267.155]}
                      rotation={[0.009, 0.652, -0.003]}
                    >
                      <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_67'>
                        <mesh
                          name='EA04_Env_Plants_Grass_Dry_01a_LOD0_67_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_Dry_01a_LOD0_67_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_Dry_01b_PRE__1__4'
                      position={[-238.376, -5.719, 437.655]}
                      rotation={[-3.123, 0.433, 3.13]}
                    >
                      <group name='EA04_Env_Plants_Grass_Dry_01b_LOD0_19'>
                        <mesh
                          name='EA04_Env_Plants_Grass_Dry_01b_LOD0_19_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_Dry_01b_LOD0_19_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_Dry_01a_PRE__4__4'
                      position={[-174.651, -1.741, 107.959]}
                      rotation={[-3.134, -0.197, 3.139]}
                      scale={1.104}
                    >
                      <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_68'>
                        <mesh
                          name='EA04_Env_Plants_Grass_Dry_01a_LOD0_68_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_Dry_01a_LOD0_68_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_01b_PRE__1__4'
                      position={[1026.025, 8.381, -1280.839]}
                      rotation={[0.055, -0.001, -0.025]}
                    >
                      <group name='EA04_Env_Plants_Grass_01b_LOD0_12'>
                        <mesh
                          name='EA04_Env_Plants_Grass_01b_LOD0_12_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_01b_LOD0_12_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_Dry_01a_PRE__1__4'
                      position={[-258.476, -5.558, 409.255]}
                      rotation={[0.013, 0, 0.011]}
                    >
                      <group name='EA04_Env_Plants_Grass_Dry_01a_LOD0_69'>
                        <mesh
                          name='EA04_Env_Plants_Grass_Dry_01a_LOD0_69_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_Dry_01a_LOD0_69_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_01b_PRE_4'
                      position={[387.624, -1.926, 143.456]}
                      rotation={[0.018, 0, 0.005]}
                    >
                      <group name='EA04_Env_Plants_Grass_01b_LOD0_13'>
                        <mesh
                          name='EA04_Env_Plants_Grass_01b_LOD0_13_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_01b_LOD0_13_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_01b_PRE__2__4'
                      position={[-98.116, 21.881, -712.038]}
                      rotation={[3.113, -0.417, 3.114]}
                      scale={1.166}
                    >
                      <group name='EA04_Env_Plants_Grass_01b_LOD0_14'>
                        <mesh
                          name='EA04_Env_Plants_Grass_01b_LOD0_14_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_01b_LOD0_14_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                    <group
                      name='EA04_Env_Plants_Grass_01a_PRE__4__4'
                      position={[-129.037, -4.116, 403.353]}
                      rotation={[-0.021, 1.487, 0.029]}
                      scale={0.563}
                    >
                      <group name='EA04_Env_Plants_Grass_01a_LOD0_24'>
                        <mesh
                          name='EA04_Env_Plants_Grass_01a_LOD0_24_Material_standard_0'
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .EA04_Env_Plants_Grass_01a_LOD0_24_Material_standard_0
                              .geometry
                          }
                          material={materials.Material_standard}
                        />
                      </group>
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Rocks_Gray_01c_PRE__2_'
                    position={[2570, -1143.7, 4830]}
                    rotation={[3.112, -0.6, -3.026]}
                    scale={3.399}
                  >
                    <group name='EA04_Env_Rocks_Gray_01c_LOD0_8'>
                      <mesh
                        name='EA04_Env_Rocks_Gray_01c_LOD0_8_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Rocks_Gray_01c_LOD0_8_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Rocks_Gray_01c_PRE__3_'
                    position={[-5990, -400, 3510]}
                    rotation={[1.259, -1.545, 1.392]}
                    scale={3.399}
                  >
                    <group name='EA04_Env_Rocks_Gray_01c_LOD0_9'>
                      <mesh
                        name='EA04_Env_Rocks_Gray_01c_LOD0_9_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Rocks_Gray_01c_LOD0_9_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Rocks_Gray_01c_PRE__4_'
                    position={[-6049.199, -400, 5150.276]}
                    rotation={[3.095, -1.021, -3.049]}
                    scale={3.399}
                  >
                    <group name='EA04_Env_Rocks_Gray_01c_LOD0_10'>
                      <mesh
                        name='EA04_Env_Rocks_Gray_01c_LOD0_10_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Rocks_Gray_01c_LOD0_10_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Rocks_Gray_01c_PRE__5_'
                    position={[-760, -1450, 13703]}
                    rotation={[2.66, -0.941, 2.715]}
                    scale={8.196}
                  >
                    <group
                      name='EA04_Env_Rocks_Gray_01c_LOD0_11'
                      position={[-75, -164, -81]}
                      rotation={[0.596, -0.2, -0.336]}
                    >
                      <mesh
                        name='EA04_Env_Rocks_Gray_01c_LOD0_11_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Rocks_Gray_01c_LOD0_11_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Rocks_Gray_01c_PRE__6_'
                    position={[3407.892, -1801, 14065.373]}
                    rotation={[0.026, 0.344, 0.124]}
                    scale={8.092}
                  >
                    <group name='EA04_Env_Rocks_Gray_01c_LOD0_12'>
                      <mesh
                        name='EA04_Env_Rocks_Gray_01c_LOD0_12_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Rocks_Gray_01c_LOD0_12_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Rocks_Gray_01c_PRE__7_'
                    position={[-12610, -1540, 14644]}
                    rotation={[0.024, -0.068, 0.134]}
                    scale={12.873}
                  >
                    <group name='EA04_Env_Rocks_Gray_01c_LOD0_13'>
                      <mesh
                        name='EA04_Env_Rocks_Gray_01c_LOD0_13_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Rocks_Gray_01c_LOD0_13_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Rocks_Gray_01c_PRE__8_'
                    position={[7450, -1540, 14644]}
                    rotation={[0.024, -0.068, 0.134]}
                    scale={12.873}
                  >
                    <group name='EA04_Env_Rocks_Gray_01c_LOD0_14'>
                      <mesh
                        name='EA04_Env_Rocks_Gray_01c_LOD0_14_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Rocks_Gray_01c_LOD0_14_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Rocks_Gray_01c_PRE__9_'
                    position={[-6941.9, 49.199, 13060.001]}
                    rotation={[-2.931, -1.062, -2.85]}
                    scale={[15.842, 10.459, 13.336]}
                  >
                    <group name='EA04_Env_Rocks_Gray_01c_LOD0_15'>
                      <mesh
                        name='EA04_Env_Rocks_Gray_01c_LOD0_15_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Rocks_Gray_01c_LOD0_15_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='EA04_Env_Rocks_Gray_01c_PRE__10_'
                    position={[-11450, 70, 1920]}
                    rotation={[-3.029, -0.434, -2.988]}
                    scale={[15.842, 10.459, 15.842]}
                  >
                    <group name='EA04_Env_Rocks_Gray_01c_LOD0_16'>
                      <mesh
                        name='EA04_Env_Rocks_Gray_01c_LOD0_16_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Env_Rocks_Gray_01c_LOD0_16_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                  <group
                    name='Mixed_Palm_tree_01__7_'
                    position={[588, -471, 3643.436]}
                    rotation={[0, -0.465, 0]}
                  >
                    <mesh
                      name='Mixed_Palm_tree_01__7__Material_standard_0'
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Mixed_Palm_tree_01__7__Material_standard_0
                          .geometry
                      }
                      material={materials.Material_standard}
                    />
                  </group>
                  <group
                    name='EA04_Wehicule_Raft_01a_PRE_1'
                    position={[773.398, -485.48, 3086.55]}
                    rotation={[0.046, -0.931, -0.12]}
                    scale={1.342}
                  >
                    <group name='EA04_Wehicule_Raft_01a_LOD0_1'>
                      <mesh
                        name='EA04_Wehicule_Raft_01a_LOD0_1_Material_standard_0'
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .EA04_Wehicule_Raft_01a_LOD0_1_Material_standard_0
                            .geometry
                        }
                        material={materials.Material_standard}
                      />
                    </group>
                  </group>
                </group>
                <group name='Flat_Ground_01__2__1' scale={[1, 0.545, 1]}>
                  <mesh
                    name='Flat_Ground_01__2__Material_standard_0'
                    castShadow
                    receiveShadow
                    geometry={
                      nodes.Flat_Ground_01__2__Material_standard_0.geometry
                    }
                    material={materials.Material_standard}
                  />
                </group>
                <group
                  name='group1'
                  position={[0, 1087.995, 13397.783]}
                  rotation={[0.004, 0, 0]}
                >
                  <group
                    name='Plane'
                    position={[0, 28.975, 9.884]}
                    rotation={[-0.237, 0, 0]}
                  >
                    <mesh
                      name='Plane_metal_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Plane_metal_0.geometry}
                      material={materials.metal}
                    />
                    <mesh
                      name='Plane_Paint_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Plane_Paint_0.geometry}
                      material={materials.Paint}
                    />
                    <mesh
                      name='Plane_interior_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Plane_interior_0.geometry}
                      material={materials.interior}
                    />
                    <mesh
                      name='Plane_White_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Plane_White_0.geometry}
                      material={materials.White}
                    />
                    <mesh
                      name='Plane_glass_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Plane_glass_0.geometry}
                      material={materials.glass}
                    />
                    <mesh
                      name='Plane_tire_0'
                      castShadow
                      receiveShadow
                      geometry={nodes.Plane_tire_0.geometry}
                      material={materials.tire}
                    />
                    <group
                      name='propeller'
                      position={[0, 89.673, 68.641]}
                      rotation={[0.05, 0.008, -2.459]}
                    >
                      <mesh
                        name='propeller_prop_0'
                        castShadow
                        receiveShadow
                        geometry={nodes.propeller_prop_0.geometry}
                        material={materials.prop}
                      />
                      <mesh
                        name='propeller_metal_0'
                        castShadow
                        receiveShadow
                        geometry={nodes.propeller_metal_0.geometry}
                        material={materials.metal}
                      />
                    </group>
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
