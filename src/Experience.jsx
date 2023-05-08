import './style.css'
import { Physics, Debug } from '@react-three/rapier'
import useGame from './stores/useGame.jsx'
import Lights from './Lights.jsx'
import { Level } from './Level.jsx'
import Player from './Player.jsx'
import { Pacman } from './models/Pacman.jsx'
import { Suspense } from 'react'

export default function Experience() {
    const blocksCount = useGame((state) => state.blocksCount)
    const blocksSeed = useGame(state => state.blocksSeed)

    return (
        <>
            <color args={['black']} attach="background" />

            <Suspense fallback={null} >
                <Physics>
                    {/* <Debug /> */}
                    <Level count={blocksCount} seed={blocksSeed} />
                    <Player />
                </Physics>
                <Lights />
                <Pacman />
            </Suspense>
        </>
    )
}

