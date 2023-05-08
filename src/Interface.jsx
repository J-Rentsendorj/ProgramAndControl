import { useKeyboardControls } from '@react-three/drei'
import MobileControls from './MobileControls'

export default function Interface() {

    // DESKTOP CONTROLS
    const forward = useKeyboardControls((state) => state.forward)
    const backward = useKeyboardControls((state) => state.backward)
    const leftward = useKeyboardControls((state) => state.leftward)
    const rightward = useKeyboardControls((state) => state.rightward)
    const jump = useKeyboardControls((state) => state.jump)

    // MOBILE CONTROLS
    const handleForward = (value) => {
        forward.onChange(value);
    };

    const handleBackward = (value) => {
        backward.onChange(value);
    };

    const handleLeftward = (value) => {
        leftward.onChange(value);
    };

    const handleRightward = (value) => {
        rightward.onChange(value);
    };

    const handleJump = (value) => {
        jump.onChange(value);
    };

    return <div className="interface">

        {/* Controls */}
        <div className="controls">
            <div className="raw">
                <div className={`key ${forward ? 'active' : ''}`}></div>
            </div>
            <div className="raw">
                <div className={`key ${leftward ? 'active' : ''}`}></div>
                <div className={`key ${backward ? 'active' : ''}`}></div>
                <div className={`key ${rightward ? 'active' : ''}`}></div>
            </div>
            <div className="raw">
                <div className={`key large ${jump ? 'active' : ''}`}></div>
            </div>
        </div>
        <MobileControls
            onForward={handleForward}
            onBackward={handleBackward}
            onLeftward={handleLeftward}
            onRightward={handleRightward}
            onJump={handleJump}
        />
    </div>
}

// WORKING MOBILE CONTROLS //

// import React, { useState, useEffect } from 'react';
// import { useKeyboardControls } from '@react-three/drei'
// import MobileControls from './MobileControls';
// import Player from './Player';

// export default function Interface() {
//     const [forward, setForward] = useState(false);
//     const [backward, setBackward] = useState(false);
//     const [leftward, setLeftward] = useState(false);
//     const [rightward, setRightward] = useState(false);
//     const [jump, setJump] = useState(false);

//     const {
//         forward: keyboardForward,
//         backward: keyboardBackward,
//         leftward: keyboardLeftward,
//         rightward: keyboardRightward,
//         jump: keyboardJump,
//     } = useKeyboardControls();

//     useEffect(() => {
//         setForward(keyboardForward);
//         setBackward(keyboardBackward);
//         setLeftward(keyboardLeftward);
//         setRightward(keyboardRightward);
//         setJump(keyboardJump);
//     }, [keyboardForward, keyboardBackward, keyboardLeftward, keyboardRightward, keyboardJump]);

//     return (
//         <div className="interface">
//             {/* Controls */}
//             <div className="controls">
//                 <div className="raw">
//                     <div className={`key ${forward ? 'active' : ''}`}></div>
//                 </div>
//                 <div className="raw">
//                     <div className={`key ${leftward ? 'active' : ''}`}></div>
//                     <div className={`key ${backward ? 'active' : ''}`}></div>
//                     <div className={`key ${rightward ? 'active' : ''}`}></div>
//                 </div>
//                 <div className="raw">
//                     <div className={`key large ${jump ? 'active' : ''}`}></div>
//                 </div>
//             </div>
//             {/* Mobile Controls */}
//             <Player
//                 forward={forward}
//                 backward={backward}
//                 leftward={leftward}
//                 rightward={rightward}
//                 jumpPressed={jump}
//             />
//         </div>
//     )
// }




