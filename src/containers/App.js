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
import Signin from '../components/Signin';
import Signup from '../components/Signup';
import Signinnav from '../components/Signinnav';
import Profilecard from '../components/Profilecard';
import Wisdomboxmedia from '../components/Wisdomboxmedia';

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
      pages:'signin',
      navdata:[" ",'SignIn','SignUp','Sign Out','About'],
      imageUrl: null,
      imageAlt: null,

      
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

  onSignUp = (event) => {
    this.setState({pages:'signup'});
       

  }

  onSignIn = (event) => {
    this.setState({pages:'home'});
       

  }

  onSignOut = (event) => {
    this.setState({pages:'about'});
    
  }
  
    onWisdomInput = (event) => { //on button click
    console.log('event happened');
    let textvalue = document.getElementById('textareaok');
    // console.log('textvalue is' + textvalue);
    if(textvalue.value !==''){
    console.log(textvalue.value);
    this.setState({wisdomField:textvalue.value}); //capture input in box
    this.setState({rolls:[...this.state.rolls, {info:textvalue.value, imgurl:this.state.Userdetails[0].imgurl, firstname:this.state.Userdetails[0].firstname}].reverse()}); //add to the rolls
    this.setState({rolld:[...this.state.rolls, rollss].reverse()}); //add to the rollss
    console.log('our value ' + this.state.wisdomField);
    console.log('rolld ' + this.state.rolld);
    console.log('rollss ' + this.state.rolls);
    document.getElementById('textareaok').value='';

    }
    
        
  }

  // handleImageUpload = () => {
  //   const { files } = document.querySelector('input[type="file"]')
  //   console.log('Image file', files[0])
  // }

  handleImageUpload = () => {
    const { files } = document.querySelector('input[type="file"]')
    const formData = new FormData();
    formData.append('file', files[0]);
  // replace this with your upload preset name
    formData.append('upload_preset', 'drp9dgez');
    const options = {
    method: 'POST',
    body: formData,
    };

  // replace cloudname with your Cloudinary cloud_name
    return fetch('https://api.Cloudinary.com/v1_1/vanessaproduct/raw/upload', options) //raw allows you toupload all media type
    .then(res => res.json())
    .then(res => console.log(res))
    .then(res => {
      this.setState({
        imageUrl: res.secure_url,
        imageAlt: `An image of ${res.original_filename}`
      })
    .catch(err => console.log(err));
    console.log("url", this.state.imageUrl)
    console.log("alturl", this.state.imageAlt)
    })

    

    //addto box
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

    let usermessage ='';
    let navmessage ='';

        if (this.state.pages === 'signin') {
          navmessage=(
            <div>
                <Signinnav actions={[this.onSignUp, this.onSignIn, this.onSignOut]} data={this.state.navdata} page={this.state.pages}/> 
            </div>
          )
            usermessage = (
              <div>
                <Userimg imgsrc = {this.state.Userdetails}/><br/>
                <h1>Welcome to Vanessa</h1>
                <Signin actions ={[this.onSignUp, this.onSignIn]}/>
              </div>     

            )
        }

        else if (this.state.pages === 'signup'){
          navmessage=(
            <div>
                <Signinnav actions={[this.onSignUp, this.onSignIn, this.onSignOut]} data={this.state.navdata} page={this.state.pages}/> 
            </div>
          )
          usermessage = (
            <div>
              <Userimg imgsrc = {this.state.Userdetails}/><br/>
              <h1>Welcome to Vanessa</h1>
                <Signup actions ={[this.onSignUp, this.onSignIn]}/>
              </div>

          )
        }

        else if (this.state.pages === 'home'){
            navmessage=(
              <div>
                  
                  <Signinnav actions={[this.onSignUp, this.onSignIn, this.onSignOut]} data={this.state.navdata} page={this.state.pages}/> 
              </div>
              
            )
          usermessage = (
            <div>
           <Profilecard name={this.state.Userdetails[0].firstname} imgid={this.state.Userdetails[0].imgurl} email={this.state.Userdetails[0].username} />
          <Username name={this.state.Userdetails}/>
          <Wisdombox dropWisdom ={this.onWisdomInput} />
          <Wisdomboxmedia handleTheImageUpload ={this.handleImageUpload} />
          {/* <Scrollhor>
          <WisdomList wisdom={this.state.rolld}/>
          </Scrollhor> */}
          <Scroll>
            {/* <ErrorBoundry> */}
              <WisdomList wisdom={this.state.rolls} userdetails={this.state.Userdetails}/>
            {/* </ErrorBoundry>   */}
          </Scroll>
            </div>

          )
        }

        else if (this.state.pages === 'about'){
          usermessage = (
            <div>
              {window.location.href = "https://onvanessa.com"}
            </div>
          )
        }
  
    return (
      //  console.log("first one look " + this.state.rolld),
      //  console.log("second one look " + this.state.rolls),

            // console.log("first one look ok " + val1),
      // console.log("second one look ok" + val2),

        
     
       <div className ='tc'>
         {/* {console.log("first one " + this.state.rolld),
         console.log("second one " + this.state.rolls)} */}
          {navmessage}
         {usermessage}
                  
        </div>

          
         
    );

  }
 
  
}

}
export default App;
