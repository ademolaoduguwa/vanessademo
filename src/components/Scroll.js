
import React from 'react';

const Scroll = ( (props) => {  // A react functionaity component that wraps another react component and displays the child component that it wraps.

    return(
        //another way to apply css style and object contaning the css in a javascript tag.
        <div style ={{ overflowY:'scroll', border:'0px solid black', margin:'2px', padding:'1px', height:'750px', width:'350px'}}> 

            {props.children}

        </div>
        
    )

});
export default Scroll;