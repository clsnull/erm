/* eslint-disable react/prop-types */
import { adminList } from '@/api/admin'
import { Table, Image, Button, Switch, Form, Modal, Input } from "antd"
import { useEffect, useState } from "react"
const { Column } = Table

function User() {
    let [dataSource, setDataSource] = useState([])
    let [visible, setVisible] = useState(false)
    async function getAdminList() {
        const params = {
            pageNum: 1,
            pageSize: 10,
            keyword: ''
        }
        let res = await adminList(params)
        const data = res.data.list.map(item => {
            return {
                ...item,
                key: item.id
            }
        })
        setDataSource(data)
    }
    function tableChange(e) {
        console.log('change', e)
    }
    useEffect(() => {
        getAdminList()
    }, [])
    return (
        <div>
            <div className='mb-2'>
                <Button type='primary' onClick={() => {
                    setVisible(true)
                }}>添加用户</Button>
            </div>
            <Table dataSource={dataSource} onChange={tableChange}>
                <Column align='center' title="序号" dataIndex="id" key="id" />
                <Column align='center' title="头像" dataIndex="icon" key="icon" render={(img) => {
                    return <Image src={img} width={60} />
                }} />
                <Column align='center' title="账号" dataIndex="username" key="username" />
                <Column align='center' title="姓名" dataIndex="nickName" key="nickName" />
                <Column align='center' title="邮箱" dataIndex="email" key="email" />
                <Column align='center' title="添加时间" dataIndex="createTime" key="createTime" render={(time) => {
                    return time
                }} />
                <Column align='center' title="最后登录" dataIndex="loginTime" key="loginTime" render={(time) => {
                    return time
                }} />
                <Column align='center' title="是否启用" dataIndex="status" key="status" render={(status) => {
                    return <Switch checked={status == 1}></Switch>
                }} />
                <Column align='center' title="操作" dataIndex="action" key="action" render={() => {
                    return (
                        <div>
                            <Button type='link' className='mr-2'>分配角色</Button>
                            <Button type='link' className='mr-2'>编辑</Button>
                            <Button type='link' className='mr-2'>删除</Button>
                        </div>
                    )
                }} />
            </Table>

            <UserForm visible={visible} onOk={(e) => {
                console.log(e)
            }} onCancel={() => {
                setVisible(false)
            }}></UserForm>
        </div>
    )
}

function UserForm(props) {
    const [form] = Form.useForm()
    const onOk = () => {
        form.submit()
    }
    const onCancel = () => {
        props.onCancel()
    }
    const onFinish = (e) => {
        console.log('onFinish', e)
    }
    return (
        <Modal open={props.visible} title='添加用户' onOk={onOk} onCancel={onCancel}>
            <Form className='mt-10' form={form} onFinish={onFinish} initialValues={{ status: true }} labelAlign='right' labelCol={{ span: 4 }}>
                <Form.Item label="头像" name="avatar" required rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="账号" name="username" required rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="姓名" name="nickName" required rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="邮箱" name="email" required rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="密码" name="password" required rules={[{ required: true }]}>
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

export default User