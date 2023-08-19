/* eslint-disable react/prop-types */
import { adminDelete, adminList, adminUpdate } from '@/api/admin'
import { Table, Image, Button, Switch, Modal, message } from "antd"
import { useEffect, useState } from "react"
import UserForm from './userForm'
import UserRole from './userRole'
const { Column } = Table

function User() {
    let [dataSource, setDataSource] = useState([])
    let [roleVisible, setRoleVisible] = useState(false)
    let [formVisible, setFormVisible] = useState(false)
    let [userId, setUserId] = useState(0)
    useEffect(() => {
        getAdminList()
    }, [])
    const getAdminList = async () => {
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
    const tableChange = (e) => {
        console.log('change', e)
    }
    const editHandle = (id) => {
        setUserId(id)
        setFormVisible(true)
    }
    const deleteHandle = (id) => {
        Modal.confirm({
            title: '温馨提示',
            content: '你确定删除该用户?',
            async onOk() {
                let res = await adminDelete(id)
                if (res.code == 200) {
                    message.success('删除成功')
                    //更新数据
                    getAdminList()
                } else {
                    message.error('删除失败')
                }
            }
        });
    }
    const statusChange = async (id, status) => {
        const params = {
            status: status == 1 ? 0 : 1
        }
        let res = await adminUpdate(id, params)
        console.log(res)
        //更新数据
        getAdminList()
    }
    const roleHandle = (id) => {
        setUserId(id)
        setRoleVisible(true)
    }
    return (
        <div>
            <div className='mb-2'>
                <Button type='primary' onClick={() => {
                    setFormVisible(true)
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
                    return time || 'N/A'
                }} />
                <Column align='center' title="是否启用" dataIndex="status" key="status" render={(status, item) => {
                    return <Switch checked={status == 1} onChange={() => statusChange(item.id, status)}></Switch>
                }} />
                <Column align='center' title="操作" dataIndex="action" key="action" render={(_, item) => {
                    return (
                        <div>
                            <Button type='link' className='mr-2' onClick={() => roleHandle(item.id)}>分配角色</Button>
                            <Button type='link' className='mr-2' onClick={() => editHandle(item.id)}>编辑</Button>
                            <Button type='link' className='mr-2' onClick={() => deleteHandle(item.id)}>删除</Button>
                        </div>
                    )
                }} />
            </Table>

            <UserForm visible={formVisible} id={userId} onOk={(e) => {
                console.log('userForm ok ', e)
                setFormVisible(false)
                getAdminList()
            }} onCancel={() => {
                setFormVisible(false)
            }}></UserForm>

            <UserRole visible={roleVisible} id={userId} onOk={(e) => {
                console.log('UserRole ok ', e)
                setRoleVisible(false)
            }} onCancel={() => {
                setRoleVisible(false)
            }}></UserRole>
        </div>
    )
}

export default User