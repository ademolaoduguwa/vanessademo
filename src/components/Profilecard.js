import React from 'react';


// const Card = (props) => {
// const {name, email, id} = props  

const Profilecard = ({state}) => { //destructuring
    

    return (
            <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                <div className="tc">
                    <img className="" src={state.tempprofileimgurl} class="br-100 h4 w4 dib ba b--black-05 pa2" alt="cool" title={state.title}/>
                    <p><a href="#0" title="Phosset is your Photo Asset">Change Phosset</a></p>
                    <h2 className="f5 mb2">{`${state.firstname}`}</h2>
                    <h2 className="f5 fw4 gray mt0">{state.username}</h2>
                </div>
             </article>
    );
}

export default Profilecard;