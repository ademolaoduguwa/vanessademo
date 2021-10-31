import React from 'react';



const Wisdombox = ({dropWisdom}) => {
    return (
        <div  className=''>
            <textarea id="textareaok"
            className='pa2 georgia ba b--green bg-lightest-blue' 
            placeholder="what do you know ?" 
            type='input' 
            style= {{width:400}}
            height ='20%'
            placeholder="What would you like to teach people today ?"
            ></textarea>
            <div>
                <button onClick={dropWisdom}>Post Lesson</button>
            </div>
            {/* <p>{`${value} looks good `}</p> */}
        </div>
        
    )
}

export default Wisdombox;