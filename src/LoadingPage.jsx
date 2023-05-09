import React from 'react';

const LoadingPage = ({ progress }) => {
    return (
        <div className="loading-page">
            <img src="/pacman.gif" alt="Loading..." />
            <div className='volume-warning'>
                <h3>Volume&nbsp;&nbsp;&nbsp;Warning&nbsp;&nbsp;&nbsp;!</h3>
            </div>
            <div className="progress" style={{ width: `${progress}%` }}>
                {progress}%
            </div>
        </div>
    );
};

export default LoadingPage;
