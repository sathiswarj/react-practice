import React, { useState } from 'react';
import './Tests.css';

const Tests = () => {
    const [isPaused, setIsPaused] = useState(true);

    // Toggle animation play state between paused and running
    const toggleRotation = () => {
        setIsPaused(prevState => !prevState);
    };

    return (
        <div className="scene">
            <div className={`cube show-front ${isPaused ? 'paused' : ''}`}>  
                <div className="cube__face cube__face--front">front</div>
                <div className="cube__face cube__face--back">back</div>
                <div className="cube__face cube__face--right">right</div>
                <div className="cube__face cube__face--left">left</div>
                <div className="cube__face cube__face--top">top</div>
                <div className="cube__face cube__face--bottom">bottom</div>
            </div>
            <button onClick={toggleRotation} className="pause-btn">
                {isPaused ? 'Resume Rotation' : 'Pause Rotation'}
            </button>
        </div>
    );
}

export default Tests;
