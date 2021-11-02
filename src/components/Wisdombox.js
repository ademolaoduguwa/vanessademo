import React from 'react';



const Wisdombox = ({dropWisdom}) => {
    return (
        <div  className=''>
            <textarea id="textareaok"
            className='pa2  tc georgia ba b--black bg-white' 
            type='input' 
            style= {{width:400}}
            height ='90%'
            placeholder="Share anything you'd like people to know about ?"
            ></textarea>
            <div></div>
            <div>
                <button onClick={dropWisdom}>Tell the world</button>
            </div>
            {/* <p>{`${value} looks good `}</p> */}
        </div>
        
    )
}

export default Wisdombox;