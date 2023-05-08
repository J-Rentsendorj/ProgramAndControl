import React, { useEffect, useRef, useState } from 'react';
import VolumeControl from './VolumeControls';

export default function VideoPlayer({ onVideoEnded }) {

    const videoRef = useRef();
    const audioRef = useRef();
    const [showVideo, setShowVideo] = useState(true);
    const [showPlayButton, setShowPlayButton] = useState(true);
    const [showTextContainer, setShowTextContainer] = useState(true);

    // SET VOLUME 
    useEffect(() => {
        videoRef.current.volume = 0.3;
        audioRef.current.volume = 0.3;
    }, []);

    const handlePlayVideo = () => {
        videoRef.current.play();
        setShowPlayButton(false);
    };

    const handleVideoEnd = () => {
        setShowVideo(false);
        audioRef.current.play();
        setShowTextContainer(false);
    };

    const handleCloseVideo = () => {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
        handleVideoEnd();
        setShowTextContainer(false);
    };

    return (
        <>
            {showTextContainer ? (
                <div className='text-container'>
                    <h1>Jin&nbsp;&nbsp;&nbsp;Rentsendorj</h1>
                    <h2>Program&nbsp;&nbsp;&nbsp;And&nbsp;&nbsp;&nbsp;Control</h2>
                    <h3>Music:&nbsp;&nbsp;&nbsp;Hardwell&nbsp;&nbsp;&nbsp;Pacman</h3>
                </div>
            ) : null}

            {showVideo ? (
                <div className="video-container">
                    <video
                        ref={videoRef}
                        src="assets/pacman_intro.mp4"
                        type="video/mp4"
                        onEnded={handleVideoEnd}
                        playsInline
                        controls={false}
                    ></video>
                    {showPlayButton ? (
                        <button onClick={handlePlayVideo} className="play-video">
                            Play
                        </button>
                    ) : null}
                    <button onClick={handleCloseVideo} className="close-video">
                        Skip
                    </button>
                </div>
            ) : null}

            <audio ref={audioRef} src="assets/pacman_cut.mp3" type="audio/mpeg" loop></audio>

            <VolumeControl audioRef={audioRef} videoRef={videoRef} />
        </>
    );
}


