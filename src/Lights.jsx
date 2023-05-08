import { useRef, useState, useEffect } from 'react'
// import { useHelper } from '@react-three/drei'
// import { useControls } from 'leva'
// import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper'

export default function Lights() {

    // SPOT LIGHT
    const spotLight1 = useRef()

    // RECT AREA LIGHT 
    const rectAreaLightRef = useRef()
    // useHelper(rectAreaLightRef, RectAreaLightHelper, 'red')

    // const { intensity, width, height, position } = useControls("Area Light", {
    //     intensity: { value: 2, min: 0, max: 20 },
    //     width: { value: 5, min: 1, max: 10 },
    //     height: { value: 40, min: 0, max: 100 },
    //     position: [0, 3, -23],
    //     hidden: true,
    // }, { hide: true });

    const [color, setColor] = useState('#ffffff')
    useEffect(() => {
        const interval = setInterval(() => {
            setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`)
        }, 500) // Change color every second
        return () => clearInterval(interval)
    }, [])

    const areaLightRef = useRef()

    return <>

        <ambientLight intensity={0.02} />
    
        <rectAreaLight
            ref={rectAreaLightRef}
            // args={[color, intensity, width, height]}
            intensity={2}
            width={5}
            height={40}
            position={[0, 3, -23]}
            color={color}
            rotation-x={-Math.PI / 2}
        />

        <rectAreaLight
            ref={areaLightRef}
            position={[0, 3, -48]}
            intensity={1}
            width={70}
            height={70}
            rotation-y={-Math.PI / 40}
            color={ 0xffffff }
        />

        <spotLight
            position={[5, 5, 1]}
            ref={spotLight1}
            color={[1, 0.25, 0.7]}
            intensity={1}
            angle={0.2}
            penumbra={0.5}
            castShadow
            shadow-bias={-0.0001}
        />
    </>
}