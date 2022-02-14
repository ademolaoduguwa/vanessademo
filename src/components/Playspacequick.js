import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  // useNavigate, Link, 
  useLocation } from 'react-router-dom';
import { Layout} from 'antd';
// import Signup2 from '../components/Signup2';
// import Register from '../components/Register';
// import { Spin } from 'antd';
// import Wisdomboxmedia from '../components/Wisdomboxmedia';
// import { LeftCircleOutlined, UploadOutlined } from '@ant-design/icons';
import Driplist from './Driplist';
import Scroll from './Scroll';
import Profilecard2 from './Profilecard2';

import { 
 
//   InputNumber,
//   Cascader,
  // Select,
  Row,
  Col,
//   Checkbox,
  Button,
  
//   DatePicker,
//   AutoComplete,
} from 'antd';

const { 
    // Header, 
    Content, 
    Footer} = Layout;
// const { Option } = Select;
// const residences = [
//   {
//     value: 'zhejiang',
//     label: 'Zhejiang',
//     children: [
//       {
//         value: 'hangzhou',
//         label: 'Hangzhou',
//         children: [
//           {
//             value: 'xihu',
//             label: 'West Lake',
//           },
//         ],
//       },
//     ],
//   },
//   {
//     value: 'jiangsu',
//     label: 'Jiangsu',
//     children: [
//       {
//         value: 'nanjing',
//         label: 'Nanjing',
//         children: [
//           {
//             value: 'zhonghuamen',
//             label: 'Zhong Hua Men',
//           },
//         ],
//       },
//     ],
//   },
// ];
// const formItemLayout = {
//   labelCol: {
//     xs: {
//       span: 24,
//     },
//     sm: {
//       span: 8,
//     },
//   },
//   wrapperCol: {
//     xs: {
//       span: 24,
//     },
//     sm: {
//       span: 16,
//     },
//   },
// };
// const tailFormItemLayout = {
//   wrapperCol: {
//     xs: {
//       span: 24,
//       offset: 0,
//     },
//     sm: {
//       span: 16,
//       offset: 8,
//     },
//   },
// };

// const config = {
//     rules: [
//       {
//         type: 'string',
//         required: true,
//         message: 'Please select Birthday!',
//       },
//     ],
//   };


let FEED_DATA = [];

//localstorage in browser a storage that doesnt get deleted

const Playspace = (props) => {

    const [loading, setLoading] = useState(false);
    const [drips, setDrips] = useState(FEED_DATA);
    const {state} = useLocation(); 
    // const {formerprofilestate} = useLocation();
    // const [secondstate, setSecondState] = useState([]); //hold the state of the profile you clicked on or browse


    //pull dat from local storage and load in the feed

    console.log ('first starting');


  useEffect(() => {

      console.log("Entering Useeffect")
      fetch('https://testpython3.pythonanywhere.com/fetchpost/')
     .then(response => response.json() )
     .then(data => {
         // newdata = [...data]
         console.log ('before setdrips');
         // setLoading (true); 
         // console.log('setloading1', newdata); 
         // console.log('firstrrrrrdripsdata', data); 
         // const addDrip = (newdata) => setDrips(drips => [...drips, newdata])
         // addDrip(newdata);
         setDrips([...data]); //rerender DOM with the new data thats been set here in drips, use it in return after, is redenerd, drips is no longwer available, ie destroyed
         FEED_DATA = data;
         const DRIP_DATA = drips;
         
         console.log ('after setdrips');
         console.log ('after set', DRIP_DATA  );
         console.log("data", data); 
         console.log("drips", drips);        
         console.log("FEED DATA", FEED_DATA);      
         console.log("Leaving Useeffect")  
  })
  // eslint-disable-next-line
 }, ['']);

          
    const { 
                // id,
                // firstname,
                // lastname,
                // username,
                // email,
                // password,
                // confirm,
                // tempprofileimgurl,
                // dob,
                // date,
                // mobilenumber,
                country,
                // gender,
                // modified_datetime,
                // created_datetime, 
            } = state[0];

    

       
    
 
    
             
    console.log ('teststing', state[0].id);

    // const location = useLocation();

    // const {state} = useNavigate();
   
    

    //Handle Post
    const handleImageUpload = () => {
        
        const { files } = document.querySelector('input[type="file"]')
        const formData = new FormData();
        formData.append('file', files[0]);
      // replace this with your upload preset name
        formData.append('upload_preset', 'drp9dgez');
        let filetype = files[0].type;
        const options = {
        method: 'POST',
        body: formData,
        };
        
        console.log('formDataloudinary', formData)
      // replace cloudname with your Cloudinary cloud_name
        setLoading(true);
        fetch('https://api.Cloudinary.com/v1_1/vanessaproduct/raw/upload', options) //raw allows you toupload all media type
        .then(res => res.json())
        .then(data => {
          
        //  setDrips([drips, ...data.secure_url]);
            // setDrips(drips => [...drips, ...data.secure_url]);
           console.log('data.secure_url',data.secure_url);
                        
            //persist data intolocalstorage.
            // persistdrips = [...drips];

            console.log("drippppss", drips);
            console.log("dataddddd", data.secure_url);
            document.querySelector('input[type="file"]').value="";

            

          //save data into post DB
          // const formData = new FormData();
          let sendPostData ={
            id:state[2].id,
            user:state[2],
            title:"Not too long ago coming here",
            posturl:data.secure_url,
            posttyp:filetype,
            country:country

          }
          
        // // from name
        //   formData.append('id', id);
        //   formData.append('user', {state});
        //   formData.append('title', "wNot too long to et here");
        //   formData.append('posturl', data.secure_url);
        //   formData.append('country', country);
        //   const options = {
        //   method: 'POST',
        //   body: formData,
        //   };
          
          console.log(sendPostData);
        // Postdata
          setLoading(true);
          axios.post('https://testpython3.pythonanywhere.com/post/',  //converts to json automatically
          sendPostData
            )
            .then(res => {
            setLoading(false);
            // message.success('User Added Successfully!');
            console.log("receivedresultfrompostreturn....", res.data);

            setDrips([...drips,res.data])
            })
            .catch(error => {
            setLoading(false);
            // message.error(error);
            })


          // fetch('https://testpython3.pythonanywhere.com/post/') //
          // .then(res => res.json())
          // .then(data => {
            
          // setLoading(false);
                       
                            
          // console.log("datafrompostreturn....", data);
          // setDrips(drips => [...drips, data]);
              
            //save data into post DB
  
                      
          // .catch(err => console.log(err));
         
          // })  
            //ending

            
              
          
            
          
        // .catch(err => console.log(err));
       
        })
    
        
    
        //addto box
      }
     
      let dropsection

      if (state[0].id===state[2].id) {
        dropsection =
        <span>
        <Row justify="center" align="middle" style={{ margin: 5}}>
                <small id="name-desc" className="f6 black-60 db mb2"> Drip is your moment's most leezy content.</small>
        </Row>
          
        <Row justify="center" align="middle" >
                  
        <input className="f7 grow no-underline br-pill ba ph3 pv2 mb2 dib black" width="10%" id="name" type= "file" aria-describedby="name-desc"/>
        </Row>
        <Row justify="center" align="middle" style={{ margin: 10}}>
        <Button type="primary" loading={loading} onClick={handleImageUpload} >Drop your Drip</Button>
        
        </Row>
        
        
        </span>
        
        }
        else{
          dropsection = <span><Row justify="center" align="middle" style={{ margin: 10}}>
            {`Enjoy ${state[0].firstname}'s drips`}
            </Row>
            </span>
        }

 

console.log('FEED_DATA onload', FEED_DATA);
console.log('drips onload', drips);
console.log('state onload', state[0] );

  return (

    
    <Layout>
   
    {/* <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
    <div className="logo" />
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
    </Menu>
    </Header> */}
    <Content className="site-layout" style={{ padding: '0 10px', marginTop: 10 }}>
    {/* <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
    </Breadcrumb> */}
    <div className=" " style={{ padding: 10, minHeight: 380 }}>
        <Row gutter={[20, { xs: 8, sm: 24, md: 24, lg: 32 }]}>
           <Profilecard2 state = {state} /> 
           { /*formerstate={state[1]} loggedinuser={state[2]}*/ }
        </Row>
        <Row justify="center" align="middle" gutter={[16, 48]}>
            <Col className="gutter-row" xs={0} sm={0} md={6} lg={6} xl={6} ><h1 className="f3 mb2">.</h1></Col>
            <Col className="gutter-row" xs={11} sm={11} md={6} lg={6} xl={6} >
                <div><h2 className="f6 mb2 tc">Social Good</h2></div>
                <div className="tc">10 SG</div>
            </Col>
            <Col className="gutter-row" xs={13} sm={13} md={6} lg={6} xl={6} >
                {/* <div><h2 className="f6 mb2 tc">Earning Power </h2></div>
                <div className="tc"><span font="bold">$(USD)</span>10,000</div> */}
                <div><h2 className="f6 mb2 tc">Influence </h2></div>
                <div className="tc"><span font="bold">10,000</span> L</div>
            </Col>
            <Col className="gutter-row" xs={0} sm={0} md={6} lg={6} xl={6} ><h1 className="f3 mb2">.</h1></Col>
       </Row>
       <Row justify="center" align="middle" gutter={[16, 16]}>
        <div className="tc"  ><span font="bold">     </span>. </div>
           
        </Row>
       
         {  dropsection        }
        
       <Row justify="center" align="middle" gutter={[20, { xs: 8, sm: 24, md: 24, lg: 32 }]} >
          <Col xs ={24} sm= {12} md={8} lg={8} >
          <Scroll>
                <Driplist dripcarddataarray={drips} userinfo={state[0]} loggedinuser={state[2]}/> 
          </Scroll>
        </Col>
        </Row>
        
       
    </div>        
    
    </Content>
    <Footer style={{ textAlign: 'center' }}></Footer>
</Layout>

   
  );
}
export default Playspace;

