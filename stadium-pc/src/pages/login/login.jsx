import { Button, Checkbox, Form, Input } from 'antd';
import {
    adminLogin,
    adminInfo
} from '@/api/admin'
import { useSelector, useDispatch } from 'react-redux';
import { login, rememberMe, setUserInfo } from '@/store/user/userSlice'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const loginParam = useSelector(state => state.user.loginParam)
    console.log('2323',useSelector(state => state.user))
    const dispatch = useDispatch()
    const getUserInfo = async () => {
        let res = await adminInfo()
        dispatch(setUserInfo(res.data))
    }
    const onFinish = async (values) => {
        console.log('Success:', values);
        const params = {
            username: values.username,
            password: values.password
        }

        let res = await adminLogin(params)

        const token = res.data.token

        //获取用户信息
        getUserInfo()
        //登录
        dispatch(login(token))
        if (values.remember) {
            dispatch(rememberMe(params))
        }
        //前往首页
        navigate('/')
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="relative w-screen h-screen bg-sky-200">
            <div className="bg-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] p-4 rounded-md shadow-md">
                <h1 className="my-10 text-4xl text-center">Stadium 管理系统</h1>
                <Form
                    name="basic"
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true, username: loginParam.username, password: loginParam.password }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="用户名"
                        name="username"
                        rules={[{ required: true, message: '请输入用户名！' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[{ required: true, message: '请输入密码！' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 5, span: 16 }}>
                        <Checkbox>记住密码</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 5, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            登 录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default Login;