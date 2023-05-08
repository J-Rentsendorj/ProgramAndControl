import * as THREE from 'three'
import { CuboidCollider, RigidBody } from '@react-three/rapier'
import { useMemo, useState, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Blinky } from './models/Blinky'
import { MeshReflectorMaterial } from '@react-three/drei'
import { Inky } from './models/Inky'
import { Clyde } from './models/Clyde'
import { Pinky } from './models/Pinky'

THREE.ColorManagement.legacyMode = false

const geometry = new THREE.PlaneGeometry(1, 20)

const floor1Material = new THREE.MeshStandardMaterial({ color: '#A6ACAF', metalness: 0.5, roughness: 0 })

export function BlockStart({ position = [0, 0, 0] }) {
    return <group position={position}>
        <mesh geometry={geometry} rotation-x={-Math.PI * 0.5} position={[0, - 0.1, 0]} material={floor1Material} scale={[4, 0.2, 4]} receiveShadow />
    </group>
}

export function BlockEnd({ position = [0, 0, 0] }) {
    return <group position={position}>
        <mesh geometry={geometry} rotation-x={-Math.PI * 0.5} material={floor1Material} position={[0, -0.1, 0]} scale={[4, 0.2, 4]} receiveShadow />
    </group>
}

export function BlockSpinner({ position = [0, 0, 0] }) 
{
    const obstacle = useRef()
    const [speed] = useState(() => (Math.random() + 0.5) * (Math.random() < 0.5 ? - 1 : 1))

    useFrame((state) => {
        const time = state.clock.getElapsedTime()

        const rotation = new THREE.Quaternion()
        rotation.setFromEuler(new THREE.Euler(0, time * speed, 0))
        obstacle.current.setNextKinematicRotation(rotation)
    })

    return <group position={position}>
        <mesh geometry={geometry} rotation-x={-Math.PI * 0.5} material={floor1Material} position={[0, - 0.1, 0]} scale={[4, 0.2, 4]} receiveShadow />
        <RigidBody ref={obstacle} colliders="hull" type="kinematicPosition" position={[0, 0.3, 0]} restitution={0.2} friction={0}>
            <Pinky />
        </RigidBody>
    </group>
}

export function BlockLimboLeft({ position = [0, 0, 0] }) 
{
    const obstacle = useRef()
    const [timeOffset] = useState(() => Math.random() * Math.PI * 2)

    useFrame((state) => {
        const time = state.clock.getElapsedTime()

        const y = Math.sin(time + timeOffset) + 1.15
        obstacle.current.setNextKinematicTranslation({ x: position[0], y: position[1] + y, z: position[2] })
    })

    return <group position={position}>
        <mesh geometry={geometry} rotation-x={-Math.PI * 0.5} material={floor1Material} position={[0, - 0.1, 0]} scale={[4, 0.2, 4]} receiveShadow />
        <RigidBody ref={obstacle} type="kinematicPosition" position={[0, 0.3, 0]} restitution={0.2} friction={0}>
            <Inky />
        </RigidBody>
    </group>
}

export function BlockLimboRight({ position = [0, 0, 0] }) 
{
    const obstacle = useRef()
    const [timeOffset] = useState(() => Math.random() * Math.PI * 2)

    useFrame((state) => {
        const time = state.clock.getElapsedTime()

        const y = Math.sin(time + timeOffset) + 1.15
        obstacle.current.setNextKinematicTranslation({ x: position[0], y: position[1] + y, z: position[2] })
    })

    return <group position={position}>
        <mesh geometry={geometry} rotation-x={-Math.PI * 0.5} material={floor1Material} position={[0, - 0.1, 0]} scale={[4, 0.2, 4]} receiveShadow />
        <RigidBody ref={obstacle} type="kinematicPosition" position={[0, 0.3, 0]} restitution={0.2} friction={0}>
            <Clyde />
        </RigidBody>
    </group>
}

export function BlockAxe({ position = [0, 0, 0] }) 
{
    const obstacle = useRef()
    const [timeOffset] = useState(() => Math.random() * Math.PI * 2)

    useFrame((state) => {
        const time = state.clock.getElapsedTime()

        const x = Math.sin(time + timeOffset) * 1.25
        obstacle.current.setNextKinematicTranslation({ x: position[0] + x, y: position[1] + 0.75, z: position[2] })
    })

    return <group position={position}>
        <mesh geometry={geometry} material={floor1Material} rotation-x={-Math.PI * 0.5} position={[0, -0.1, 0]} scale={[4, 0.2, 4]} receiveShadow />
        <RigidBody ref={obstacle} colliders="hull" type="kinematicPosition" position={[0, 0.3, 0]} restitution={0.2} friction={0}>
            <Blinky />
        </RigidBody>
    </group>
}

function Bounds({ length = 1 }) {
    return <>
        <RigidBody type="fixed" restitution={0.2} friction={0}>
            <mesh geometry={geometry} rotation-x={-Math.PI * 0.5} position={[0, -0.1, - (length * 2) + 2]} scale={[ 4, 2.5,  4 * length]}>
                <MeshReflectorMaterial 
                normalScale={[0.15, 0.15]} 
                dithering={true} 
                color={[0.015, 0.015, 0.015]}
                roughness={0.7} 
                blur={[1000, 400]} 
                mixBlur={30} 
                mixStrength={80} 
                mixContrast={1} 
                resolution={1024}
                mirror={0} 
                depthScale={0.01} 
                minDepthThreshold={0.9} 
                maxDepthThreshold={1} 
                depthToBlurRatioBias={0.25}
                debug={0} 
                reflectorOffset={0.2}
                /> 
            </mesh>
            <CuboidCollider
                type="fixed"
                args={[2, 0.1, 2 * length]}
                position={[0, -0.1, - (length * 2) + 2]}
                restitution={0.2}
                friction={1}
            />
        </RigidBody>
    </>
}

export function Level({
    count = 5,
    types = [BlockSpinner, BlockAxe, BlockLimboLeft, BlockLimboRight],
    seed = 0
}) {
    const blocks = useMemo(() => {
        const blocks = []

        for (let i = 0; i < count; i++) {
            const type = types[Math.floor(Math.random() * types.length)]
            blocks.push(type)
        }

        return blocks
    }, [count, types, seed])

    return <>
        <BlockStart position={[0, 0, 0]} />

        {blocks.map((Block, index) => <Block key={index} position={[0, 0, - (index + 1) * 4]} />)}

        <BlockEnd position={[0, 0, - (count + 1) * 4]} />

        <Bounds length={count + 2} />
    </>
}