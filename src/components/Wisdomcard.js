import React from 'react';


// const Card = (props) => {
// const {name, email, id} = props  

const Wisdomcard = ({data}) => { //destructuring

    return (
        <div className ='tc near-black bg-light-gray dib pa3 ma3 bw5 shadow-5 br4 mw5'>
           <div>
                <p className ='fw1 f6 lh-copy mw5 '>{data}</p>
            </div>
            <div>
                <button className="pa1 ma1">{'subscribe'}</button>
            </div>
            <div>
                <button className="pa1 ma1">{'Great'}</button>
            </div>
        </div>
    );
}

export default Wisdomcard;