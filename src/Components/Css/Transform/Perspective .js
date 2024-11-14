import React from 'react'
import './Perspective.css'

const Perspective  = () => {
  return (
     <>
        <div className='wrap'>
            <div className='origin b1'>
                <div className='box'>box 1</div>
            </div>
            <div className='origin b2'>
            <div className='box'>box 2</div>
            </div>
            <div className='origin b3'>
            <div className='box'>box 3</div>
            </div>
        </div>
     </>
  )
}

export default Perspective 