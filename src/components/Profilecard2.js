import React, { useState } from 'react';
import { Button } from 'antd';
import axios from 'axios';

// const Card = (props) => {
// const {name, email, id} = props  

const Profilecard = ({state, formerstate, loggedinuser}) => { //Your profile or another's profile

    //  let values = {user:loggedinuser.id, circle:state.id}
    let [correctbutton, setCorrectbutton] = useState(<span></span>)
    let [done, setDone] = useState(0)
    let values = {user:state.id, circle:loggedinuser.id}

    const changeProfilePicture = () =>{
        
    }
    
    const addToCircle = () => {
        setCorrectbutton(<Button onClick={removeFromCircle} type="danger">Release</Button>);
        setDone(1);
        console.log('Enter AddToCircle with data', values); 
        axios.post('https://testpython3.pythonanywhere.com/circle/', 
        values
        )
        .then(res => {
        // setLoading(false);
        console.log('Return of circle  delete', res);    
        setCorrectbutton(<Button onClick={removeFromCircle} type="danger">Release</Button>);
        setDone(1);
           
        })
        .catch(error => {
        // setLoading(false);
        console.log(' ', error);
        
        })
        
        
    }

    const checkIfCircle = () => {
        console.log('Enter ChecIfCircle with dat ', values); 
        axios.post('https://testpython3.pythonanywhere.com/ifcircle/', 
        values
        )
        .then(res => {
        // setLoading(false);
        console.log('Return of circle check if ', res); 
        if (res.data.result){
            setCorrectbutton(<Button onClick={removeFromCircle} type="danger">Release</Button>);
            setDone(2);
        }
        else{
            setCorrectbutton(<Button onClick={addToCircle} type="primary">Circle</Button>);
            setDone(3);
        }
           
        })
        .catch(error => {
        // setLoading(false);
        console.log(' ', error);
        
        })

        
        
    }

    const removeFromCircle = () => {
        setCorrectbutton(<Button onClick={addToCircle} type="primary">Circle</Button>);
        setDone(4);
        console.log('Enter RemoveFromCircle with data ', values); 
        axios.delete('https://testpython3.pythonanywhere.com/removecircle/', 
        {data:values}
        )
        .then(res => {
        // setLoading(false);

        console.log('Return of circle ', res); 
        setCorrectbutton(<Button onClick={addToCircle} type="primary">Circle</Button>);
        setDone(4);
           
        })
        .catch(error => {
        // setLoading(false);
        console.log(' ', error);
        
        })
        
        
    }

     if (loggedinuser.id===state.id){
        correctbutton = <span></span>        
    }
    else if (loggedinuser.id!==state.id && done===0) {

        checkIfCircle();
        

    }
    


    
    

    // let correctbutton = <span></span>   

    // if (formerprofilestate.id===state.id){
    //     correctbutton = <span></span>        
    // }
    // else {
    //     //check if formerprofile is already circling formerstate profile
    //     // find Circles where circle=formerprofilestate
    //     let val = checkIfCircle();

    //     if (formerprofilestate.id===state.id){

    //         correctbutton = <Button onClick={removeFromCircle} type="primary">Release</Button>

    //     }

    //     else {

    //         correctbutton = <Button onClick={addToCircle} type="primary">Circle</Button>
    //     }


    // }

    console.log('state', state);
    console.log('formerstate', formerstate);
    console.log('loggedinuserstate', loggedinuser);

    return (
            
                <div className="tc center">
                    <img src={state.tempprofileimgurl} onClick={changeProfilePicture}className="br-100 h4 w4 dib ba b--black-05 pa2" alt="cool" title={state.title} />
                    <p><a href="#0" title="Phosset is your Photo Asset">Change Phosset</a></p>
                    <h3 className="f6 mb2">{`${state.firstname} ${state.lastname}`}</h3>
                    {/* <h3 class="f6 fw4 gray mt0"><span> {correctbutton}</span></h3> */}
                    <h3 className="f6 fw4 gray mt0"><span> {state.id}</span></h3>
                    <span>{correctbutton}</span>
                </div>
             
    );
}

export default Profilecard;