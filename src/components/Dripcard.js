import { Card, Button } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';



const { Meta } = Card;



const Dripcard = ({keydata, carddata, useinfo, mainuser}) => {

// console.log('keydata is ', keydata);

let navigate = useNavigate();

let [loud, setLoud]   = useState(0);
let [glow, setGlow]   = useState(0);
let [shop, setShop]   = useState(0);
let [juice, setJuice] = useState(0);

const upCountLoud = () =>{
    loud++;
    setLoud(loud);
}

const upCountGlow = () =>{
  glow++;
    setGlow(glow); 
}

const upCountShop = () =>{
  shop++;
    setShop(shop);
}

const upCountJuice = () =>{
  juice++;
    setJuice(juice);
}

const loadProfile = () =>{
  console.log('previous navigate states is ', useinfo);
  
  console.log('new navigate states is ', carddata.user);
  navigate('/Playspace', {state: [carddata.user, useinfo, mainuser]}); //bundle carddripsuserdata for newprofile, with Profileuserdata of old profile, and logininuser
  
}

let contenttype = <img
alt={" "}
src={carddata.posturl}
/>

return (
  <Card
  style={{ width: 300 }}
  cover={
    contenttype
  }
  actions={[

    <div onClick={upCountLoud}>{loud}<p><b>Loud</b></p></div>,
    <div onClick={upCountGlow}>{glow}<p><b>Glow</b></p></div>,
    <div onClick={upCountShop}>{shop}<p><b>Shop</b></p></div>,
    <div onClick={upCountJuice}>{juice}<p><b>Juice</b></p></div>,
    
  ]}
>
  <Meta
    avatar={<span onClick={loadProfile} ><span><Avatar src={carddata.user.tempprofileimgurl}/></span></span>}
    title={<span><span color ="blue" cursor= "pointer" onClick={loadProfile}>{carddata.user.firstname}</span> <span> <Button type="primary">Circle</Button></span></span>}
    description={<span color ="blue" onClick={loadProfile} ><span>{keydata}</span></span>}
    // avatar={<Link   onClick={loadProfile} to={{ pathname: " ", search: "", hash: "", state: [{ name: "Ademola"}]}}><span><Avatar src={carddata.user.tempprofileimgurl}/></span></Link>}
    // title={<span><Link   onClick={loadProfile} to={{ pathname: " ", search: "", hash: "", state: [{ name: "Ademola"}]}}><span>{carddata.user.firstname}</span></Link><span> <Button type="primary">Circle</Button></span></span>}
    // description={<Link   onClick={loadProfile} to={{ pathname: " ", search: "", hash: "", state: [{ name: "Ademola"}]}}><span>{keydata}</span></Link>}
    
  />       
</Card>



);

} 
export default Dripcard;
  