import React, { Component } from "react"
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {connect} from 'react-redux'
import axios from 'axios'
import {createDemo1Action,createDemo2Action} from '../../redux/actions/test_action'
import './css/login.less'
import logo from '../../assets/imgs/logo512.png'
const { Item } = Form

 class Login extends Component {
    //自定义校验
    componentDidMount(){
        console.log(this.props);
    }
    pwdvalidator = (rule, value, callback) => {
        if (!value) {
           callback('提示密码输入')
        } else if (value.length > 12){
            callback('用户名必须小于12位')
        } else if(value.length <4) {
        callback('用户名必须大于4位')
        } else if(!(/^\w+$/).test(value)) {
        callback('用户名必须是字母、数字、下划线组成')
    
        }else{
            callback()
        }
    }
    render() {
    
    const onFinish = (event) => {
        event.preventDefault();
        //点击登录按钮的回调
        this.props.form.validateFields((err,values)=>{
            if(!err){
                axios.post('http://localhost:4000/login',values)
                    .then((result)=>{
                        console.log(result)
                    })
                    .catch((reason)=>{
                        console.log(reason);

                    })
            }else{
                message.error('输入错误，请检查')
            }
        })
        console.log('Received values of form: ');
    };
    return (
        <div className='login'>
            <header>
                <img src={logo} alt="logo" />
                <h1>胡豪达的Blog</h1>
            </header>
            <section>
                <h1>登录</h1>
                <Form
                
                   
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your Username!' },
                        { min: 4, message: '用户名必须大于4位' },
                        { max: 12, message: '用户名必须小于12位' },
                        { pattern: /^\w+$/, message: '用户名必须是字母、数字、下划线组成' },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Item>
                    <Item
                        name="password"
                        rules={
                            [
                                { validator: this.pwdvalidator },

                            ]
                        }
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Item>
                    <Item>
                        <Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Item>

                        <a className="login-form-forgot" href="www.baidu.com">
                            Forgot password
                        </a>
                    </Item>

                    <Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Login
                        </Button>

                    </Item>
                </Form>
            </section>
        </div>
    )
}
}
export default  connect(
    state =>({test:state.test}),
    {
        demo1:createDemo1Action,
        demo2:createDemo2Action,
    }
)(Login)
