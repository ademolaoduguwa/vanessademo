import React from 'react';


// const Card = (props) => {
// const {name, email, id} = props  

const Wisdomcard = ({data, name, imgid}) => { //destructuring

    return (
        <div className ='tc dib  ma3 bw5 br4'>
             <article class="mw5 center bg-white br3 pa3 shadow-5 pa4-ns mv3 ba b--black-10">
                <div class="tc">
                    <img src={imgid} class="br-100 h4 w4 dib ba b--black-05 pa2" alt="cool" title="Photo of a kitty staring at you"/>       
                    <h1 class="f4">{name}</h1>
                    <hr class="mw3 bb bw1 b--black-10"/>
                    <p class="fw4 f5 1h-copy">{data}</p>
                </div>
                
            </article>
        </div>
        
    );
}
export default Wisdomcard;