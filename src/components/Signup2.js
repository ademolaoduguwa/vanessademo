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
// import { Image } from 'antd';
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
            navigate('/Playspace');
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
        
            /* <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/reports">Reports</Link>
                </li>
                <li>
                    <Link to="/fide/:fideId">Fides</Link>
                </li>
                <li>
                    <Link
                        to={{
                        pathname: "/sweetlink",
                        search: "?sort=name",
                        hash: "#the-hash",
                        state: [{ name: "Ademola", age:"20", dob:89 }]
                        }}
                    >SweetLink</Link>
                </li> 
            </ul>*/

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
                <div className=" " style={{ padding: 24, minHeight: 380 }}>
                    <Row gutter={[48, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Col gutter={[16, 48]}>
                                {/* <Image
                                    width={200}
                                    height={200}
                                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                /> */}
                            </Col>
                            <Col gutter={[16, 48]}>
                                <h2>Vanessa is a fun atmosphere for you to learn and earn from anyone</h2>
                            </Col>
                     
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
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
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <a className="login-form-forgot" href="#0">
                            Forgot password
                            </a>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
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
                            > or Register Now !</Link>
                        </Form.Item>
                    </Form>

                            
                        </Col>
                    </Row>
                </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}></Footer>
            </Layout>
    
    );

}
export default Signup2;

