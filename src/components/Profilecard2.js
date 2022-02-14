import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import axios from 'axios';
import { Image } from 'antd';
// import {
//     // useNavigate, Link, 
//     useLocation } from 'react-router-dom';

// const Card = (props) => {
// const {name, email, id} = props  

const Profilecard = (props) => { //Your profile or another's profile

    // let [correctbutton, setCorrectbutton] = useState(<span></span>)
    // let [done, setDone] = useState(0);
    // let [values, setValues]= useState({}); 
    // let [user, setUser] =useState(0);
    // let [circle, setCircle] =useState(0);
    // const {state} = useLocation(); 
    let correctbutton;
    let done ;

    const checkIfCircle = () =>{
        done =1;
    };


    if (props.state[0].id) {
            
   
       console.log("getting from PROPS") ;
       console.log("getting from PROPSDATA currentuserstate", props.state[0].id) ;
       console.log("getting from PROPSDATA formeruserstate", props.state[1].id) ;
       console.log("getting from PROPSDATA logginedinuserstate", props.state[2].id) ;
       correctbutton =<span><Button type="primary">Circle</Button></span>
    //    state=[...props.state];


    
    if (props.state[2].id===props.state[0].id){
        correctbutton = <span></span>    
        console.log('Entering here and done is ',done);    
    }
    else if (props.state[2].id!==props.state[0].id && done===0) {

        console.log("getting from PROPSDATA currentuserstate", props.state[0].id) ;
       console.log("getting from PROPSDATA formeruserstate", props.state[1].id) ;
       console.log("getting from PROPSDATA logginedinuserstate", props.state[2].id) ;
        // checkIfCircle();
        
                    
      
    }
        
    }
    else{
        
        console.log("getting from NAVIGATION") ;
        correctbutton =<span><Button type="primary">Circle</Button></span>
    
    }
    

    

    return (
            
                <div className="tc center">
                    <Image
                    
                    // width={100}
                    // height={100}
                    src={props.state[0].tempprofileimgurl}
                        className="br-100 h4 w4 dib ba b--black-05 pa2" alt="cool" title={props.state[0].title}/>
                    {/* <img   /> */}
                    <p><a href="#0" title="Phosset is your Photo Asset">Change Phosset</a></p>
                    <h3 className="f6 mb2">{`${props.state[0].firstname} ${props.state[0].lastname}`}</h3>
                    {/* <h3 class="f6 fw4 gray mt0"><span> {correctbutton}</span></h3> */}
                    {/* <h3 className="f6 fw4 gray mt0"><span> {props.state[0].id}</span></h3> */}
                    <span>{correctbutton}</span>
                </div>
             
    );
}

export default Profilecard;