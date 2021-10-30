import React from 'react';
import Card from './Card';



const CardList = ({robots})  => {

    // if (true){ //used to test error boundary code.
    //     throw new Error ('Noooooooo');
    // } 
    return (
        <div className='tc'>
        {

        robots.map((user, i) => {
        return <Card key={i} name ={user.name} email ={user.email} username ={user.username} id ={user.id}/>

        })    
        
        }
        </div>
 
               
    )
}
export default CardList;