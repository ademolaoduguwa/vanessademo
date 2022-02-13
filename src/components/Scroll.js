
import React from 'react';

const Scroll = ( (props) => {  // A react functionaity component that wraps another react component and displays the child component that it wraps.

    return(
        //another way to apply css style and object contaning the css in a javascript tag.
        <div style ={{ overflowY:'scroll', border:'0px solid black', margin:'5px', padding:'5px', height:'750px', width:'auto'}}> 

            {props.children}

        </div>
        
    )

});
export default Scroll;