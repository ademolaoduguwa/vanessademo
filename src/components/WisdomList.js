
import React from 'react';
import Wisdomcard from '../components/Wisdomcard';

const WisdomList = ({wisdom, userdetails})  => {

    // if (true){ //used to test error boundary code.
    //     throw new Error ('Noooooooo');
    // } 
    return (
        <div className='tc'> 
        {
        
        
                
        wisdom.map((val, i) => {
        return <Wisdomcard key={i} data ={val.info} name={userdetails[0].firstname} imgid={userdetails[0].imgurl} />
        

        })    
        
        }
        </div>
 
               
    )
}
export default WisdomList;