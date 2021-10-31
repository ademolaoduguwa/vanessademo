
import React from 'react';

const Scrollhor = ( (props) => {  // A react functionaity component that wraps another react component and displays the child component that it wraps.

    return(
        //another way to apply css style and object contaning the css in a javascript tag.
        <div style ={{ overflowX:'scroll', overflowY:'fixed', border:'1px solid green', margin:'15px', padding:'20px', width:'90%', height:'100px'}}> 

            {props.children}

        </div>
        
    )

});
export default Scrollhor;