import React from 'react'
import './Border.css'

const Border = () => {
  return (
    <>
    <h2 style={{textAlign:'center'}}>Border</h2>
    <div className='border' style={{display:'flex',alignItems:'center',justifyContent:"space-between"}}>
     <div className='border-1'>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>
     </div>
     <div className='border-2'>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>
     </div>
     <div className='border-3'>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>
     </div>
     </div>
     <h2 style={{textAlign:'center'}}>Border Bottom</h2>
     <div className='border-bottom'  style={{display:'flex',alignItems:'center',justifyContent:"space-between"}}>
    
     <div className='border-4'>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>
     </div>
     <div className='border-5'>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>
     </div>
     </div>
     <h2 style={{textAlign:'center'}}>Border Bottom color</h2>
     <div className='border-bottom-color' style={{display:'flex',alignItems:'center',justifyContent:"space-between"}}>
    
     <div className='border-6'>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>
     </div>
   
     </div>
    </>
  )
}

export default Border