import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate, Link} from 'react-router-dom';
import { Layout} from 'antd';
import { Image } from 'antd';
import {
  Form,
  Input,
//   InputNumber,
//   Cascader,
//   Select,
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
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
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





const RegistrationForm = () => {
  const [form] = Form.useForm();

  let navigate = useNavigate();
    const [loading, setLoading] = useState(false);

  const handleSubmit = (values, message) => {

     

    console.log('Received values of form: ', values);
    console.log('Received message of form: ',values['mobilenumber']);

         
    // const newvalues = {
    //     ...values,
    //     'date-picker': values['date-picker'].format('DD-MM-YYYY')
    // }

    setLoading(true);
    axios.post('https://testpython3.pythonanywhere.com/register/', 
    {

        'email':'.',
        'password':values['mobilenumber'],
        'confirm':values['mobilenumber'],
        'username':values['mobilenumber'],
        'firstname':values['mobilenumber'],
        'lastname':values['mobilenumber'],
        'country':values['mobilenumber'],
        'mobilenumber':values['mobilenumber'],
        'gender':'.'
        

        

    }
    )
    .then(res => {
    setLoading(false);
    console.log('Looks successful heres data: ', res);    
    
    navigate('/playspace', {state: [res.data, res.data, res.data]});
    })
    .catch(error => {
    setLoading(false);
    console.log('Entering error ', error);
    
    })
}

const onClickSiginin = () =>{
    navigate('/signup2quick');
}

 
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
<Content className="site-layout" style={{ padding: '0 50px', marginTop: 20 }}>
{/* <Breadcrumb style={{ margin: '16px 0' }}>
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item>List</Breadcrumb.Item>
    <Breadcrumb.Item>App</Breadcrumb.Item>
</Breadcrumb> */}
<div className=" "  style={{ padding: 24, marginBottom:20, minHeight: 500 }}>
    <Row  justify="center" >
    <Col  xs={24} sm={24} md={16} lg={16} xl={16} >
    <Row justify="center">
        <Col>
    <Row  >
        <Col  >
            
                <Image
                    width={100}
                    height={100}
                    src="https://www.linkpicture.com/q/vanessalogo2.png"
                />
        </Col>
    </Row>
    <Row > 
         <Col  xs={24} sm={24} md={14} lg={14} xl={14}  style={{ padding: '0px', marginBottom: 20, marginTop: 60 }}>
                <h2>Vanessa is an atmopshere for you to be 'high' ;)</h2>
                <span>...it's an invite only place where your friends are already coming to get 'high' on fun, money, knowledge... ! </span>
               
        </Col> 
        <Col  xs={24} sm={24} md={13} lg={13} xl={13}  style={{ padding: '0px', marginBottom: 1, marginTop: 1 }}>
        <h5>Join, to find out more, yourself! <Link
                                

                                onClick = {onClickSiginin}

                                to={{
                                pathname: "/signup2quick",
                                search: "",
                                hash: "",
                                state: [{ name: "Ademola", age:"20", dob:89 }]
                                }}
                            > or, sweetheart, come in if you've joined !</Link></h5>
        </Col> 
    </Row>   
     
    <Row>
        <Col xs={24} sm={24} md={20} lg={20} xl={20}>
        
        <Form
                    {...formItemLayout}
                    form={form}
                    name="register"
                    onFinish={handleSubmit}
                    initialValues={{
                        residence: ['zhejiang', 'hangzhou', 'xihu'],
                        prefix: '86',
                    }}
                    scrollToFirstError
                    >
                    {/* <Form.Item 
                        name="email"
                        // label="E-mail"
                        rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                        ]}
                    >
                        <Input placeholder="Your e-mail"/>
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        ]}
                        hasFeedback
                    >
                        <Input.Password placeholder="Password"/>
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        // label="Confirm Password"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }

                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            },
                        }),
                        ]}
                    >
                        <Input.Password placeholder="Confirm Password" />
                    </Form.Item>
                    <Form.Item
                        name="username"
                        // label="Username"
                        // tooltip="What do you want others to call you?"
                        rules={[
                        {
                            required: true,
                            message: 'Please enter a Username!',
                            whitespace: true,
                        },
                        ]}
                    >
                        <Input placeholder="Choose a Nickname!"/>
                    </Form.Item>

                    <Form.Item
                        name="firstname"
                        // label="Firstname"
                        // tooltip="What do you want others to call you?"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your Firstname!',
                            whitespace: true,
                        },
                        ]}
                    >
                        <Input placeholder="Firstname, what do people call you ?"/>
                    </Form.Item>
                    <Form.Item
                        name="lastname"
                        // label="Lastname"
                        // tooltip="What do you want others to call you?"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your Lastname!',
                            whitespace: true,
                        },
                        ]}
                    >
                        <Input placeholder="And your Surname is ?"/>
                    </Form.Item>

                    <Form.Item
                        name="country"
                        // label="Country"
                        rules={[
                        {
                            // type: 'array',
                            required: true,
                            message: 'Country!',
                        },
                        ]}
                    >
                        <Input placeholder="What Country are you from?"/>
                    </Form.Item> */}

                    <Form.Item
                        name="mobilenumber"
                        // label="Phone Number"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your mobile number!',
                        },
                        ]}
                    >
                        <Input
                        // addonBefore={prefixSelector}
                        style={{
                            width: '100%',
                        }}
                        placeholder="Join with mobile number"
                        />
                    </Form.Item>
                    {/* <Form.Item 
                        name="date" 
                        label="Birthday" 
                        {...config}>
                        <DatePicker />
                    </Form.Item> */}
{/* 
                    <Form.Item
                        name="gender"
                        // label="Gender"
                        rules={[
                        {
                            required: true,
                            message: 'Please select gender!',
                        },
                        ]}
                    >
                        <Select placeholder="Select your gender">
                        <Option value="male">Male</Option>
                        <Option value="female">Female</Option>
                        <Option value="other">Other</Option>
                        </Select>
                    </Form.Item> */}
                    <Form.Item >
                        <Button type="primary" loading={loading} htmlType="submit">
                        Join your friends on Vanessa
                        </Button>
                        {/* <a href="#" loading={loading} onClick = {onClickSiginin}> or SignIn !</a>  */}
                        <Link
                                

                                onClick = {onClickSiginin}

                                to={{
                                pathname: "/signup2quick",
                                search: "",
                                hash: "",
                                state: [{ name: "Ademola", age:"20", dob:89 }]
                                }}
                            >   or,  come in baby if you've already joined !</Link>
                    </Form.Item>
                </Form>   

            
    </Col>
    </Row>
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

