import React from 'react';

const LoadingPage = ({ progress }) => {
    return (
        <div className="loading-page">
            <img src="assets/pacman.gif" alt="Loading..." />
            <div className='volume-warning'>
                <h3>Volume Warning !</h3>
            </div>
            <div className="progress" style={{ width: `${progress}%` }}>
                {progress}%
            </div>
        </div>
    );
};

export default LoadingPage;
