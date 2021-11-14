import React from 'react';


// const Card = (props) => {
// const {name, email, id} = props  

const Profilecard = ({name, email, imgid}) => { //destructuring

    return (
            <article class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                <div class="tc">
                    <img src={imgid} class="br-100 h4 w4 dib ba b--black-05 pa2" alt="cool" title="Photo of a kitty staring at you"/>
                    <h1 class="f3 mb2">{name}.</h1>
                    <h2 class="f5 fw4 gray mt0">{email}</h2>
                </div>
             </article>
    );
}

export default Profilecard;