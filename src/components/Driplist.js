
import React from 'react';
import Dripcard from './Dripcard';
import {
  // Form,
  // Input,
//   InputNumber,
//   Cascader,
  // Select,
  Row,
  Col,
//   Checkbox,
  // Button,
  // Upload,
//   DatePicker,
//   AutoComplete,
} from 'antd';
// import { keys } from 'lodash';

const Driplist = ({dripcarddataarray, userinfo, loggedinuser})  => {

    // console.log ("dripcarddata",dripcarddataarray);

    // if (true){ //used to test error boundary code.
    //     throw new Error ('Noooooooo');
    // } 
    dripcarddataarray=[...dripcarddataarray].reverse();

    if (dripcarddataarray===[]){

        return(<div></div>);

    }
    
    else{
    return (
        
        
        
        
        dripcarddataarray.map((val) => {
        return <Row key={(val.id).toString()} justify="center" align="middle" style={{ padding: 10}} gutter={[32, 48]}>
                  <Col >
                  <Dripcard keydata={val.id} carddata ={val} useinfo= {userinfo} mainuser={loggedinuser}/>
                  </Col>
                </Row>
        

        })    
        
        
        
 
               
    )
    }
}
export default Driplist;