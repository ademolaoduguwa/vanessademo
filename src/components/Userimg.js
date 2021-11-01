import React from 'react';


// Userer image component 

const Userimg = ({imgsrc}) => { //destructuring

    return (
        <div className =''>
        <img src='https://avatars.githubusercontent.com/u/93008659?v=4' alt ='' width='150px' height='150px'/> 
        {/* src={imgsrc.imgurl} */}
        </div> 
    );
}

export default Userimg;

