
import React from 'react';


// const Card = (props) => {
// const {name, email, id} = props  

const Username = ({name}) => { //destructuring

    return (
        <div className =''>
            <div>
                <h1 className =''>{ 'welcome to ' + name[0].firstname.toUpperCase() }</h1>
          </div>
        </div>
    );
}

export default Username;