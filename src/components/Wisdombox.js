import React from 'react';



const Wisdombox = ({dropWisdom}) => {
    return (
        <div  className=''>
            <textarea id="textareaok"
            className='pa2  tc georgia ba b--green bg-white' 
            placeholder="what do you know ?" 
            type='input' 
            style= {{width:400}}
            height ='90%'
            placeholder="What would you like to teach people today ?"
            ></textarea>
            <div></div>
            <div>
                <button onClick={dropWisdom}>Post Lesson</button>
            </div>
            {/* <p>{`${value} looks good `}</p> */}
        </div>
        
    )
}

export default Wisdombox;