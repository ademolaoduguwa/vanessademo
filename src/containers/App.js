import React, { Component } from 'react';
import CardList from '../components/CardList';
import './App.css';
import {robots} from '../Robots';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import ErrorBoundry from './ErrorBoundry';


class  App extends Component {

    constructor () {
    
    super ()

    this.state = {
      robots: [],
      searchfield: '',
      inputvalue: '',
      // filteredRobo: robots,
      
    }
    console.log('constructor');
  }

 
 componentDidMount () {
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json() )
   .then(data => {console.log(data); })//this.setState({robots:data});
   console.log('component-Did-Mount');
  
 }

 componentWillMount(){
   console.log('component-Will-Mount');
   this.setState({robots:robots});
 }

 onSearchChange = (event) => {

    //  this.setState({inputvalue:event.target.value}); //change/update the values in the state
     
     this.setState({searchfield:event.target.value});

    //  console.log(this.state.inputvalue);
    //  const filteredRobots = this.state.robots.filter((robot) =>{
    //    return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()); //filter the robot based on the value typed in the inputfield
    //  })
    //  this.setState({filteredRobo:filteredRobots});
         
 }

 render (){

  if (this.state.robots.length === 0){ return (<h1>Loading app...</h1>);}
  else{
    console.log('render');
  
    const filteredRobots = this.state.robots.filter((robot) => {
    return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()); //filter the robot based on the value typed in the inputfield
    });
  
    return (
     
        <div className ='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <Searchbox searchChange = {this.onSearchChange} /*value ={this.state.inputvalue}*//>
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots}/>
            </ErrorBoundry>  
          </Scroll>
        </div>
         
    );

  }
 
  
}

}
export default App;