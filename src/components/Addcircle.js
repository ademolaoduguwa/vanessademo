import React from 'react';



export const Addcircle = (userid, circlestate) => {

    axios.post('https://testpython3.pythonanywhere.com/circle/', 
    {user:userid.id, circle:circlestate }
    )
    .then(res => {
    setLoading(false);
    console.log('Return of circle ', res);    
       
    })
    .catch(error => {
    setLoading(false);
    console.log(' ', error);
    
    }
}