import React, { Component } from 'react';
import './App.css';
// import {robots} from '../Robots';
import Scroll from '../components/Scroll';
// import ErrorBoundry from './ErrorBoundry';
import Wisdombox from '../components/Wisdombox';
import Username from '../components/Username';
import Userimg from '../components/Userimg';
import WisdomList from '../components/WisdomList';
import userDetail from '../components/userDetail';
import roll from '../roll';
import rollss from '../rollss';
// import Scrollhor from '../components/Scrollhor';



class  App extends Component {

    constructor () {
    
    super ()

    this.state = {
      inputvalue: '',
      rolls:roll,
      rolld:rollss,
      Userdetails:userDetail,
      wisdomField:'hello to you',
      searchfield:'',
      theFriends:[],
      request:[],

      
    }
    console.log('constructor');
    
  }

 
 componentDidMount () { //fetch both user and rolls here from pydb using urls ; then update themon component will update
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json() )
   .then(data => {console.log(data); })//this.setState({robots:data});
   console.log('component-Did-Mount');
  
 }

//  componentWillMount(){
//   //  console.log('component-Will-Mount');
//   //  this.setState({robots:robots});
//  }

 onSearchChange = (event) => {
    this.setState({searchfield:event.target.value});
       

  }
  
  
  onWisdomInput = (event) => { //on button click
    console.log('event happened');
    let textvalue = document.getElementById('textareaok');
    // console.log('textvalue is' + textvalue);
    if(textvalue.value !==''){
    console.log(textvalue.value);
    this.setState({wisdomField:textvalue.value}); //capture input in box
    this.setState({rolls:[...this.state.rolls, {info:textvalue.value}]}); //add to the rolls
    this.setState({rolld:[...this.state.rolls, rollss]}); //add to the rollss
    console.log('our value ' + this.state.wisdomField);
    console.log('rolld ' + this.state.rolld);
    console.log('rollss ' + this.state.rolls);
    document.getElementById('textareaok').value='';

    }
    
        
  }

  // componentWillUpdate(){
  //   const val1 = this.state.rolld
  //   const val2 = this.state.rolls
  // }

 render (){

  
  if (0){ return (<h1>Loading app...</h1>);}
  else{
    // console.log('rendering');
  
    // const filteredRobots = this.state.robots.filter((robot) => {
    // return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()); //filter the robot based on the value typed in the inputfield
    // });
  
    return (

       console.log("first one look " + this.state.rolld),
       console.log("second one look " + this.state.rolls),

      // console.log("first one look ok " + val1),
      // console.log("second one look ok" + val2),
     
       <div className ='tc'>
         {/* {console.log("first one " + this.state.rolld),
         console.log("second one " + this.state.rolls)} */}
          <Userimg imgsrc = {this.state.Userdetails}/><br/>
          <Username name={this.state.Userdetails}/>
          <Wisdombox dropWisdom ={this.onWisdomInput} />
          {/* <Scrollhor>
          <WisdomList wisdom={this.state.rolld}/>
          </Scrollhor> */}
          <Scroll>
            {/* <ErrorBoundry> */}
              <WisdomList wisdom={this.state.rolls}/>
            {/* </ErrorBoundry>   */}
          </Scroll>
        </div>
         
    );

  }
 
  
}

}
export default App;
