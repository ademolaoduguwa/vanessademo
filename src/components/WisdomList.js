
import React from 'react';
import Wisdomcard from '../components/Wisdomcard';

const WisdomList = ({wisdom})  => {

    // if (true){ //used to test error boundary code.
    //     throw new Error ('Noooooooo');
    // } 
    return (
        <div className='tc'> 
        {
        
                        
        wisdom.map((val, i) => {
        return <Wisdomcard key={i} data ={val.info} />
        

        })    
        
        }
        </div>
 
               
    )
}
export default WisdomList;