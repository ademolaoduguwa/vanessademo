import React from 'react';
import Prolife from '../components/Profile.png';


// Userer image component 

const Userimg = ({imgsrc}) => { //destructuring

    return (
        <div className =''>
        <img src='../components/Profile.png' alt ='' width='150px' height='150px'/> 
        {/* src={imgsrc.imgurl} */}
        </div> 
    );
}

export default Userimg;

