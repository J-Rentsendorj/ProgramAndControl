/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 scene.gltf -T --shadows
Author: SantMax1.0 (https://sketchfab.com/SantMax1.0)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/pac-man-ghost-pinky-4ca9e18ed5c84ef68cccbea7602c873c
Title: Pac-man Ghost Pinky
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Pinky() {
  const { nodes, materials } = useGLTF('pac-man_ghost_pinky/scene-transformed.glb')
  return (
    <group dispose={null} scale={0.02} position={[1, -0.6, 0]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0, 0, 20]}>
          <mesh castShadow receiveShadow geometry={nodes.Object_5.geometry} material={materials.VoxMaterial_13} />
          <mesh castShadow receiveShadow geometry={nodes.Object_6.geometry} material={materials.VoxMaterial_13} />
          <mesh castShadow receiveShadow geometry={nodes.Object_7.geometry} material={materials.VoxMaterial_13} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene-transformed.glb')
