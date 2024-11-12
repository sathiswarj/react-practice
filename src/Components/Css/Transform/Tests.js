import React from 'react'
import './Tests.css'
const Tests = () => {
    return (
        <div class="scene">
            <div class="cube">
                <div class="cube__face cube__face--front">front</div>
                <div class="cube__face cube__face--back">back</div>
                <div class="cube__face cube__face--right">right</div>
                <div class="cube__face cube__face--left">left</div>
                <div class="cube__face cube__face--top">top</div>
                <div class="cube__face cube__face--bottom">bottom</div>
            </div>
        </div>
    )
}

export default Tests