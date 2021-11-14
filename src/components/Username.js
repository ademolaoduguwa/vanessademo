
import React from 'react';


// const Card = (props) => {
// const {name, email, id} = props  

const Username = ({name}) => { //destructuring

    return (
        <div className =''>
            <div>
                <h5 className =''>{name[0].firstname.toLowerCase() + ', youre welcome to vanessa' }</h5>
          </div>
        </div>
    );
}

export default Username;