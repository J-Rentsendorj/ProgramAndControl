import { useState } from 'react';

export default function MobileControls({ onForward, onBackward, onLeftward, onRightward, onJump }) {
    const [activeControl, setActiveControl] = useState(null);

    const handleTouchStart = (controlName, event) => {
        event.preventDefault();
        setActiveControl(controlName);

        if (controlName === 'forward') {
            onForward(true);
        } else if (controlName === 'backward') {
            onBackward(true);
        } else if (controlName === 'leftward') {
            onLeftward(true);
        } else if (controlName === 'rightward') {
            onRightward(true);
        } else if (controlName === 'jump') {
            onJump(true);
        }
    };

    const handleTouchEnd = (controlName, event) => {
        event.preventDefault();
        setActiveControl(null);

        if (controlName === 'forward') {
            onForward(false);
        } else if (controlName === 'backward') {
            onBackward(false);
        } else if (controlName === 'leftward') {
            onLeftward(false);
        } else if (controlName === 'rightward') {
            onRightward(false);
        } else if (controlName === 'jump') {
            onJump(false);
        }
    };

    return (
        <div className="mobile-controls">
            <div className="raw">
                <div
                    className={`key ${activeControl === 'forward' ? 'active' : ''}`}
                    onTouchStart={(event) => handleTouchStart('forward', event)}
                    onTouchEnd={(event) => handleTouchEnd('forward', event)}
                ></div>
            </div>
            <div className="raw">
                <div
                    className={`key ${activeControl === 'leftward' ? 'active' : ''}`}
                    onTouchStart={(event) => handleTouchStart('leftward', event)}
                    onTouchEnd={(event) => handleTouchEnd('leftward', event)}
                ></div>
                <div
                    className={`key ${activeControl === 'backward' ? 'active' : ''}`}
                    onTouchStart={(event) => handleTouchStart('backward', event)}
                    onTouchEnd={(event) => handleTouchEnd('backward', event)}
                ></div>
                <div
                    className={`key ${activeControl === 'rightward' ? 'active' : ''}`}
                    onTouchStart={(event) => handleTouchStart('rightward', event)}
                    onTouchEnd={(event) => handleTouchEnd('rightward', event)}
                ></div>
            </div>
            <div className="raw">
                <div
                    className={`key large ${activeControl === 'jump' ? 'active' : ''}`}
                    onTouchStart={(event) => handleTouchStart('jump', event)}
                    onTouchEnd={(event) => handleTouchEnd('jump', event)}
                ></div>
            </div>
        </div>
    );
}

// WORKING MOBILE CONTROLS 

// import React from "react";

// const MobileControls = ({ onForward, onBackward, onLeftward, onRightward, onJump }) => {
//     const handleTouchStart = (setter) => {
//         setter(true);
//     };

//     const handleTouchEnd = (setter) => {
//         setter(false);
//     };

//     return (
//         <div className="mobile-controls">
//             <div className="raw">
//                 <div
//                     className={`key`}
//                     onTouchStart={() => handleTouchStart(onForward)}
//                     onTouchEnd={() => handleTouchEnd(onForward)}
//                 ></div>
//             </div>
//             <div className="raw">
//                 <div
//                     className={`key`}
//                     onTouchStart={() => handleTouchStart(onLeftward)}
//                     onTouchEnd={() => handleTouchEnd(onLeftward)}
//                 ></div>
//                 <div
//                     className={`key`}
//                     onTouchStart={() => handleTouchStart(onBackward)}
//                     onTouchEnd={() => handleTouchEnd(onBackward)}
//                 ></div>
//                 <div
//                     className={`key`}
//                     onTouchStart={() => handleTouchStart(onRightward)}
//                     onTouchEnd={() => handleTouchEnd(onRightward)}
//                 ></div>
//             </div>
//             <div className="raw">
//                 <div
//                     className={`key`}
//                     onTouchStart={() => handleTouchStart(onJump)}
//                     onTouchEnd={() => handleTouchEnd(onJump)}
//                 ></div>
//             </div>
//         </div>
//     );
// };

// export default MobileControls;
