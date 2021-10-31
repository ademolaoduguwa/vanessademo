import React from 'react';


// Userer image component 

const Userimg = ({imgsrc}) => { //destructuring

    return (
        <div className =''>
        <img src={imgsrc.imgurl} alt ='RobotPhoto' width='150px' height='150px'/>
        </div>
    );
}

export default Userimg;