import React, {useState } from 'react';
// import {BrowserRouter as Router, Route, Routes, useNavigate} from 'react-router-dom';
import {useNavigate, Link} from 'react-router-dom';
import { Layout} from 'antd';
// import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';
import axios from 'axios';
import { LockOutlined, UserOutlined } from "@ant-design/icons"; 
import { Image } from 'antd';

// import {useHistory} from 'react-router';

const { 
    // Header, 
    Content, 
    Footer} = Layout;

// const Signup = () => {
//     <h1>S</h1>
// }
// const Playspace = () => {
//     <h1>S</h1>
// }

const Signup2 = () => {
    
    let navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleSubmit = (values, message) => {

            console.log('Received values of form: ', values);
            console.log('Received message of form: ', message);

            setLoading(true);
            axios.post('https://testpython3.pythonanywhere.com/signin/', 
            values
            )
            .then(res => {
            setLoading(false);
            // message.success('User Added Successfully!');
            console.log('SSTATTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT: ', res);
            navigate('/Playspace', {state: res.data});
            })
            .catch(error => {
            setLoading(false);
            // message.error(error);
            })
    }

    // const onFinishFailed = (error) => {
    //     console.log('Failed:', error);
    // };

    const onClickRegister = (error) => {
        navigate('/Register');
    };
    
  return (
//     <Layout>
//     {/* <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
//     <div className="logo" />
//     <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
//         <Menu.Item key="1">nav 1</Menu.Item>
//         <Menu.Item key="2">nav 2</Menu.Item>
//         <Menu.Item key="3">nav 3</Menu.Item>
//     </Menu>
//     </Header> */}
//     <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
//     {/* <Breadcrumb style={{ margin: '16px 0' }}>
//         <Breadcrumb.Item>Home</Breadcrumb.Item>
//         <Breadcrumb.Item>List</Breadcrumb.Item>
//         <Breadcrumb.Item>App</Breadcrumb.Item>
//     </Breadcrumb> */}
//     <div className=" " style={{ padding: 24, minHeight: 380 }}>
//         <Row gutter={[48, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
//             <Col xs={12} sm={12} md={12} lg={12} xl={12}>
//                 <Col gutter={[16, 48]}>
//                     {/* <Image
//                         width={200}
//                         height={200}
//                         src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
//                     /> */}
//                 </Col>
//                 <Col gutter={[16, 48]}>
//                     <h2>Vanessa is an atmosphere to be happy</h2>
//                 </Col>
         
//             </Col>
//             <Col xs={12} sm={12} md={12} lg={12} xl={12}>
//             <Form
//                     {...formItemLayout}
//                     form={form}
//                     name="register"
//                     onFinish={handleSubmit}
//                     initialValues={{
//                         residence: ['zhejiang', 'hangzhou', 'xihu'],
//                         prefix: '86',
//                     }}
//                     scrollToFirstError
//                     >
//                     <Form.Item
//                         name="email"
//                         label="E-mail"
//                         rules={[
//                         {
//                             type: 'email',
//                             message: 'The input is not valid E-mail!',
//                         },
//                         {
//                             required: true,
//                             message: 'Please input your E-mail!',
//                         },
//                         ]}
//                     >
//                         <Input />
//                     </Form.Item>

//                     <Form.Item
//                         name="password"
//                         label="Password"
//                         rules={[
//                         {
//                             required: true,
//                             message: 'Please input your password!',
//                         },
//                         ]}
//                         hasFeedback
//                     >
//                         <Input.Password />
//                     </Form.Item>

//                     <Form.Item
//                         name="confirm"
//                         label="Confirm Password"
//                         dependencies={['password']}
//                         hasFeedback
//                         rules={[
//                         {
//                             required: true,
//                             message: 'Please confirm your password!',
//                         },
//                         ({ getFieldValue }) => ({
//                             validator(_, value) {
//                             if (!value || getFieldValue('password') === value) {
//                                 return Promise.resolve();
//                             }

//                             return Promise.reject(new Error('The two passwords that you entered do not match!'));
//                             },
//                         }),
//                         ]}
//                     >
//                         <Input.Password />
//                     </Form.Item>
//                     <Form.Item
//                         name="username"
//                         label="Username"
//                         // tooltip="What do you want others to call you?"
//                         rules={[
//                         {
//                             required: true,
//                             message: 'Please enter a Username!',
//                             whitespace: true,
//                         },
//                         ]}
//                     >
//                         <Input />
//                     </Form.Item>

//                     <Form.Item
//                         name="firstname"
//                         label="Firstname"
//                         // tooltip="What do you want others to call you?"
//                         rules={[
//                         {
//                             required: true,
//                             message: 'Please input your Firstname!',
//                             whitespace: true,
//                         },
//                         ]}
//                     >
//                         <Input />
//                     </Form.Item>
//                     <Form.Item
//                         name="lasttname"
//                         label="Lastname"
//                         // tooltip="What do you want others to call you?"
//                         rules={[
//                         {
//                             required: true,
//                             message: 'Please input your Lastname!',
//                             whitespace: true,
//                         },
//                         ]}
//                     >
//                         <Input />
//                     </Form.Item>

//                     <Form.Item
//                         name="country"
//                         label="Country"
//                         rules={[
//                         {
//                             // type: 'array',
//                             required: true,
//                             message: 'Country!',
//                         },
//                         ]}
//                     >
//                         <Input />
//                     </Form.Item>

//                     <Form.Item
//                         name="mobilenumber"
//                         label="Phone Number"
//                         rules={[
//                         {
//                             required: true,
//                             message: 'Please input your phone number!',
//                         },
//                         ]}
//                     >
//                         <Input
//                         // addonBefore={prefixSelector}
//                         style={{
//                             width: '100%',
//                         }}
//                         />
//                     </Form.Item>
//                     {/* <Form.Item 
//                         name="date" 
//                         label="Birthday" 
//                         {...config}>
//                         <DatePicker />
//                     </Form.Item> */}

//                     <Form.Item
//                         name="gender"
//                         label="Gender"
//                         rules={[
//                         {
//                             required: true,
//                             message: 'Please select gender!',
//                         },
//                         ]}
//                     >
//                         <Select placeholder="select your gender">
//                         <Option value="male">Male</Option>
//                         <Option value="female">Female</Option>
//                         <Option value="other">Other</Option>
//                         </Select>
//                     </Form.Item>
//                     <Form.Item {...tailFormItemLayout}>
//                         <Button type="primary" loading={loading} htmlType="submit">
//                         SignUp
//                         </Button>
//                         {/* <a href="#" loading={loading} onClick = {onClickSiginin}> or SignIn !</a>  */}
//                         <Link
//                                 loading={loading}

//                                 onClick = {onClickSiginin}

//                                 to={{
//                                 pathname: "/signup2",
//                                 search: "",
//                                 hash: "",
//                                 state: [{ name: "Ademola", age:"20", dob:89 }]
//                                 }}
//                             > or SignIn !</Link>
//                     </Form.Item>
//                 </Form>      

//             </Col>
//         </Row>
//     </div>
//     </Content>
//     <Footer style={{ textAlign: 'center' }}></Footer>
// </Layout>

<Layout>
{/* <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
<div className="logo" />
<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
    <Menu.Item key="1">nav 1</Menu.Item>
    <Menu.Item key="2">nav 2</Menu.Item>
    <Menu.Item key="3">nav 3</Menu.Item>
</Menu>
</Header> */}
<Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
{/* <Breadcrumb style={{ margin: '16px 0' }}>
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item>List</Breadcrumb.Item>
    <Breadcrumb.Item>App</Breadcrumb.Item>
</Breadcrumb> */}
<div className=" " style={{ padding: 24, marginBottom: 50, minHeight: 700 }}>
    <Row >
    <Col justify ="center" xs={24} sm={24} md={18} lg={18} xl={18}>
    <Row >
        <Col  >
            
                <Image
                    width={100}
                    height={100}
                    src="./vanessalogobo1.png"
                />
        </Col>
    </Row>
    <Row> 
         <Col xs={24} sm={24} md={13} lg={13} xl={13}  style={{ padding: '0px', marginBottom: 50, marginTop: 30 }}>
         <h2>Vanessa is an atmopshere for you to be 'high' ;)</h2>
                                <h5>...your friends and lots of people are already getting 'high' on vanessa. </h5>
               
        </Col> 
    </Row>   
     
    <Row>
        <Col xs={24} sm={24} md={20} lg={20} xl={20}>
        <h6>Come in sweetheart.</h6>
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={handleSubmit}
                        >
                        <Form.Item
                            name="username"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                            ]}
                        >
                            <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                            />
                        </Form.Item>
                        {/* <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <a className="login-form-forgot" href="#0">
                            Forgot password
                            </a>
                        </Form.Item> */}

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                            Get high on Vanessa
                            </Button>
                           {/* <a href="0#" loading={loading} onClick = {onClickRegister}> or Register Now !</a>  */}
                           <Link
                                loading={loading}

                                onClick = {onClickRegister}

                                to={{
                                pathname: "/register",
                                search: "",
                                hash: "",
                                state: [{ name: "Ademola", age:"20", dob:89 }]
                                }}
                            > or Join us Sweetheart !</Link>
                        </Form.Item>
                    </Form>

                            
                   
    </Col>
    </Row>
    </Col>
    </Row>
</div>

</Content>
<Footer style={{ textAlign: 'center' }}></Footer>
</Layout>

   
  );
}
export default RegistrationForm;

