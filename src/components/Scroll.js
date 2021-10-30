import React from 'react';

const Scroll = ( (props) => {  // A react functionaity component that wraps another react component and displays the child component that it wraps.

    return(
        //another way to apply css style and object contaning the css in a javascript tag.
        <div style ={{ overflowY:'scroll', border:'5px solid green', margin:'15px', padding:'20px', height:'400px'}}> 

            {props.children}

        </div>
        
    )

});
export default Scroll;