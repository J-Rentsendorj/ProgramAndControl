import React, { useState } from 'react';
import './style.css';
import volume_on from './assets/volume_on.jpeg'
import volume_off from './assets/volume_off.jpeg'

export default function VolumeControl({ audioRef, videoRef }) {

    const [isMuted, setIsMuted] = useState(false);
    // const [volume, setVolume] = useState(0.3);

    // VOLUME ICON
    const toggleMute = () => {
        setIsMuted(!isMuted);
        if (isMuted) {
            audioRef.current.volume = 0.3;
            videoRef.current.volume = 0.3;
        } else {
            audioRef.current.volume = 0;
            videoRef.current.volume = 0;  
        }
    };

    return (
        <div className="volume-control">
            <img
                className="volume-icon"
                src={isMuted ? volume_off : volume_on}
                alt={isMuted ? 'Volume off' : 'Volume on'}
                onClick={toggleMute}
                style={{ cursor: 'pointer' }}
            />
        </div>
    );
}
