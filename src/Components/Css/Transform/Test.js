import React from 'react'
import Bulb from '../images/bulb.png'
import './Test.css'

const Test = () => {
    return (
        <>
            <div>
                <div className="transform-t-skew">
                    <h1>Skew</h1> {/* Saaithal */}
                    <p>The transform CSS property applies a transformation to an element such as translate, rotate, scale, etc., in 2D or 3D space.</p>
                </div>
            </div>

            <div>
                <div className="transform-t-animation">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <p className="transform-t-2"></p>
                    </div>
                </div>
            </div>

            <div>
                <div className="transform-origin">
                    <div className="transform-t-3">
                        <h1>Transform Origin</h1>
                        <p className="transform-t-4"></p>
                    </div>
                </div>
            </div>

            <div>
                <div className="transform-origin-1">
                    <div className="transform-t-5">
                        <h1>Transform Origin</h1>
                        <img src={Bulb} alt="bulb" style={{ width: "500px", height: "500px" }} />
                    </div>
                </div>
            </div>
            <div>
                <div className="transform-origin-2" style={{marginTop:"500px"}}>
                    <h1>Transform Origin</h1>
                    <p className="transform-t-7"></p>
                </div>
            </div>
            <div>
                <div className="transform-origin-3" style={{marginTop:"50px"}}>
                    <h1>Transform Origin</h1>
                    <p className="transform-t-8"></p>
                </div>
            </div>
            <div>
                <div className="transform-origin-4" style={{marginTop:"50px"}}>
                    <h1>Transform Origin</h1>
                    <p className="transform-t-99"></p>
                </div>
            </div>

        </>
    )
}

export default Test