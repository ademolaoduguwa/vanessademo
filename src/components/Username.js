
import React from 'react';


// const Card = (props) => {
// const {name, email, id} = props  

const Username = ({name}) => { //destructuring

    return (
        <div className =''>
            <div>
                <h1 className =''>{name[0].firstname + " " + name[0].lastname}</h1>
          </div>
        </div>
    );
}

export default Username;