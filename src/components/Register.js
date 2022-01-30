import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate, Link} from 'react-router-dom';
import { Layout} from 'antd';
import {
  Form,
  Input,
//   InputNumber,
//   Cascader,
  Select,
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
const { Option } = Select;
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
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

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
    console.log('Received message of form: ', message);

         
    // const newvalues = {
    //     ...values,
    //     'date-picker': values['date-picker'].format('DD-MM-YYYY')
    // }

    setLoading(true);
    axios.post('https://testpython3.pythonanywhere.com/register/', 
    values
    )
    .then(res => {
    setLoading(false);
    console.log('Looks successful heres data: ', values);    
    
    navigate('/Signup2');
    })
    .catch(error => {
    setLoading(false);
    console.log('Entering error ', error);
    
    })
}

const onClickSiginin = () =>{
    navigate('/Signup2');
}

 
//   const [autoCompleteResult, setAutoCompleteResult] = useState([]);

//   const onWebsiteChange = (value) => {
//     if (!value) {
//       setAutoCompleteResult([]);
//     } else {
//       setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
//     }
//   };

//   const websiteOptions = autoCompleteResult.map((website) => ({
//     label: website,
//     value: website,
//   }));
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
                    <Form.Item
                        name="email"
                        label="E-mail"
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
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="Confirm Password"
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
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        name="username"
                        label="Username"
                        // tooltip="What do you want others to call you?"
                        rules={[
                        {
                            required: true,
                            message: 'Please enter a Username!',
                            whitespace: true,
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="firstname"
                        label="Firstname"
                        // tooltip="What do you want others to call you?"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your Firstname!',
                            whitespace: true,
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="lasttname"
                        label="Lastname"
                        // tooltip="What do you want others to call you?"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your Lastname!',
                            whitespace: true,
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="country"
                        label="Country"
                        rules={[
                        {
                            // type: 'array',
                            required: true,
                            message: 'Country!',
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="mobilenumber"
                        label="Phone Number"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your phone number!',
                        },
                        ]}
                    >
                        <Input
                        // addonBefore={prefixSelector}
                        style={{
                            width: '100%',
                        }}
                        />
                    </Form.Item>
                    {/* <Form.Item 
                        name="date" 
                        label="Birthday" 
                        {...config}>
                        <DatePicker />
                    </Form.Item> */}

                    <Form.Item
                        name="gender"
                        label="Gender"
                        rules={[
                        {
                            required: true,
                            message: 'Please select gender!',
                        },
                        ]}
                    >
                        <Select placeholder="select your gender">
                        <Option value="male">Male</Option>
                        <Option value="female">Female</Option>
                        <Option value="other">Other</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" loading={loading} htmlType="submit">
                        SignUp
                        </Button>
                        {/* <a href="#" loading={loading} onClick = {onClickSiginin}> or SignIn !</a>  */}
                        <Link
                                loading={loading}

                                onClick = {onClickSiginin}

                                to={{
                                pathname: "/signup2",
                                search: "",
                                hash: "",
                                state: [{ name: "Ademola", age:"20", dob:89 }]
                                }}
                            > or SignIn !</Link>
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
export default RegistrationForm;

