import './style.css';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import Experience from './Experience.jsx';
import { KeyboardControls } from '@react-three/drei';
import Interface from './Interface.jsx';
import VideoPlayer from './VideoPlayer';
import { Suspense, useEffect, useState } from 'react';
import LoadingPage from './loadingPage';


const root = ReactDOM.createRoot(document.querySelector('#root'));

function Index() {
    const [showVideoPlayer, setShowVideoPlayer] = useState(true);
    // const [isLoading, setIsLoading] = useState((process.env.NODE_ENV === 'development'));
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(prevProgress => {
                if (prevProgress === 100) {
                    setIsLoading(false);
                    clearInterval(timer);
                }
                return prevProgress + 10; // rate of progress
            });
        }, 1000); // frequency of progress updates

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            {isLoading ? (
                <LoadingPage progress={progress} />
            ) : (
                <>
                    <Suspense>
                        {showVideoPlayer && <VideoPlayer onVideoEnded={() => setShowVideoPlayer(false)} />}
                    </Suspense>
                    <KeyboardControls
                        map={[
                            { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
                            { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
                            { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
                            { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
                            { name: 'jump', keys: ['Space'] },
                        ]}
                    >
                        <Canvas
                            shadows
                            camera={{
                                fov: 50,
                                near: 0.1,
                                far: 200,
                                position: [2.5, 4, 6],
                            }}
                        >
                            <Experience />
                        </Canvas>
                        <Interface />
                    </KeyboardControls>
                </>
            )}
        </>
    );
}

root.render(<Index />);