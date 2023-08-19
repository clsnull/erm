/* eslint-disable react/prop-types */
import SingleUpload from '@/components/SingleUpload'
import { Switch, Form, Modal, Input } from "antd"
import { getAdminById, adminRegister, adminUpdate } from '@/api/admin'
import { useEffect } from "react"

function UserForm(props) {
    const [form] = Form.useForm()
    const onOk = () => {
        form.submit()
    }
    const onCancel = () => {
        form.resetFields() //清空表单
        props.onCancel()
    }
    const addUser = async (params) => {
        let res = await adminRegister(params)
        console.log('add', res, params)
        form.resetFields()
        props.onOk()
    }
    const updateUser = async (id, params) => {
        let res = await adminUpdate(id, params)
        console.log('update', res, params)
        form.resetFields()
        props.onOk()
    }
    const onFinish = (e) => {
        console.log('onFinish', e)
        const params = {
            ...e,
        }
        if (props.id) {
            updateUser(props.id, params)
        } else {
            addUser(params)
        }
    }
    useEffect(() => {
        getAdminInfo()
    }, [props.id])

    const getAdminInfo = async () => {
        if (!props.id || !props.visible) return;
        let res = await getAdminById(props.id)
        form.setFieldsValue({
            ...res.data,
            password: ''
        });
    }
    return (
        <Modal open={props.visible} title={props.id ? '修改用户' : '添加用户'} onOk={onOk} onCancel={onCancel}>
            <Form className='mt-10' form={form} onFinish={onFinish} initialValues={{ status: true }} labelAlign='right' labelCol={{ span: 4 }}>
                <Form.Item label="头像" name="icon" required rules={[{ required: true }]}>
                    <SingleUpload />
                </Form.Item>
                <Form.Item label="账号" name="username" required rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="密码" name="password" required={!props.id} rules={[{ required: !props.id }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="姓名" name="nickName" required rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="邮箱" name="email" required rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="备注" name="note">
                    <Input />
                </Form.Item>
                <Form.Item label="是否启用" name="status" valuePropName='checked'>
                    <Switch />
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default UserForm