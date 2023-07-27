import { Button, Checkbox, Form, Input } from 'antd';
import {
    adminLogin
} from '@/api/admin'
import { useSelector, useDispatch } from 'react-redux';
import { login } from '@/store/user/userSlice'

const Login = () => {
    const loginParam = useSelector(state => state.user.loginParam)
    const dispatch = useDispatch()

    const onFinish = async (values) => {
        console.log('Success:', values);
        const params = {
            username: values.username,
            password: values.password
        }
        let res = await adminLogin(params)
        console.log(res)
        dispatch(login(res.data))
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="w-screen h-screen bg-sky-200 relative">
            <div className="bg-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] p-4 rounded-md shadow-md">
                <h1 className="text-center my-10 text-4xl">Stadium 管理系统</h1>
                <Form
                    name="basic"
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
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