import React, {Component} from 'react';



class ErrorBoundry extends Component{  //helps us handle error that occurs within our component so that we can report/correct well

    constructor(props){

        super(props)

        this.state ={
            hasError: false,
        }

    }

    componentDidCatch(){ //runs if error is catched in a component
        this.setState({hasError: true});
    }


    render(){

        if (this.state.hasError){
            return <h1>Oooops has Error !!</h1>
        }

        else {

            return(
          
               <div>{this.props.children}</div> 
           
         )

        }

        
    }

}

export default ErrorBoundry;