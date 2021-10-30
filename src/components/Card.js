import React from 'react';


// const Card = (props) => {
// const {name, email, id} = props  

const Card = ({name, email, id}) => { //destructuring

    return (
        <div className ='tc bg-light-green dib pa3 ma3 grow bw5 shadow-5 br4'>
        <img src={`https://robohash.org/${id}`} alt ='RobotPhoto' width='150px' height='150px'/>
            <div>
                {/* <h3>{props.name}</h3> */}
                <h4 className ='fw4 f5 1h-copy'>{name}</h4>
                <p className ='fw1 f6 lh-copy'>{email}</p>
                <p className ='fw1 f6 lh-copy'>{`Has an id of ${id}`}</p>
            </div>
        </div>
    );
}

export default Card;
