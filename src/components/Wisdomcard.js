import React from 'react';


// const Card = (props) => {
// const {name, email, id} = props  

const Wisdomcard = ({data}) => { //destructuring

    return (
        <div className ='tc bg-light-green dib pa3 ma3 grow bw5 shadow-5 br4'>
           <div>
                <p className ='fw1 f6 lh-copy'>{data}</p>
                <p className ='fw1 f6 lh-copy'>good</p>
            </div>
            <div>
                <button className="pa1 ma1">{'subscribe'}</button>
            </div>
            <div>
                <button className="pa1 ma1">Learnt</button>
            </div>
        </div>
    );
}

export default Wisdomcard;