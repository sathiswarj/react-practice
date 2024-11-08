import React from 'react'
import './BorderTop.css'
const BorderTop = () => {
    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                <div className='test-1'>
                    <h1>Border Top</h1>
                    <p> Title</p>
                </div>
                <div className='test-2'>
                    <h1>Border Top Color</h1>
                    <p> Title</p>
                </div>
                <div className='test-3'>
                    <h1>Border Top Left Radius</h1>
                    <p> Title</p>
                </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>

                <div className='test-4'>
                    <h1>Border Top Right Radius</h1>
                    <p> Title</p>
                </div>
                <div className='test-5'>
                    <h1>Border Top Width</h1>
                    <p> Title</p>
                </div>
                <div className='test-6'>
                    <h1>Border Width</h1>
                    <p> Title</p>
                </div>
            </div>
        </>
    )
}

export default BorderTop