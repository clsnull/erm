/* eslint-disable react/prop-types */
import { adminList } from '@/api/admin'
import { Table, Image, Button, Switch, Form, Modal, Input } from "antd"
import { useEffect, useState } from "react"
const { Column } = Table

function User() {
    let [dataSource, setDataSource] = useState([])
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
                <Button type='primary'>添加用户</Button>
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

            <UserForm visible={true}></UserForm>
        </div>
    )
}

function UserForm(props) {
    console.log(props)
    return (
        <Modal open={props.visible} title='添加用户'>
            <Form>
                <Form.Item label="头像">
                    <Input />
                </Form.Item>
                <Form.Item label="账号">
                    <Input />
                </Form.Item>
                <Form.Item label="姓名">
                    <Input />
                </Form.Item>
                <Form.Item label="邮箱">
                    <Input />
                </Form.Item>
                <Form.Item label="密码">
                    <Input />
                </Form.Item>
                <Form.Item label="备注">
                    <Input />
                </Form.Item>
                <Form.Item label="是否启用">
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default User