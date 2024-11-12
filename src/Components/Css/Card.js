import React, { useState } from 'react';
import './Card.css';

const Card = () => {
    const [isFlip, setFlip] = useState(false);

    const handleFlip = () => {
        setFlip(!isFlip);
    };

    return (
       <>
       <h1>Backface Visibilty</h1>
       <div style={{display:'flex',flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
       
       <div className="flip-container" onClick={handleFlip}>
            <div className={`card ${isFlip ? 'flipped' : ''}`}>
            
                <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtBAVAWC2X3r4WiKRkJ06MU2RzjpxRmpT5Eg&s" 
                    alt="front" 
                    className="front"
                />
                <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE2-sf6TH_Jh1dy82ICLij8OulqYlFNdnH7fLCspXDwH74iVsVMrnMbHEf8oS8HO699Yg&usqp=CAU" 
                    alt="back" 
                    className="back"
                />
            </div>
        </div>
        </div>
        <h1>Border</h1>
        <div className='table'>
            <table  >
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Alax</td>
                <td>32</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Joy</td>
                <td>33</td>
              </tr>
            </table>

        </div>
         
       </>
    );
};

export default Card;
