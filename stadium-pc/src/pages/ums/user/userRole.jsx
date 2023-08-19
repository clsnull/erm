/* eslint-disable react/prop-types */
import { adminRole, adminRoleUpdate } from "@/api/admin"
import { roleListAll } from "@/api/role"
import { Modal, Select, message } from "antd"
import { useEffect, useState } from "react"

function UserRole(props) {
    const [options, setOptions] = useState([])
    const [value, setValue] = useState([])
    console.log('userRole', props)
    const onOk = async () => {
        const params = {
            adminId: props.id,
            roleIds: value
        }
        let res = await adminRoleUpdate(params)
        if (res.code == 200) {
            message.success('分配角色成功')
            props.onOk()
        }
    }

    const onCancel = () => {
        props.onCancel()
    }

    const onChange = (value) => {
        setValue(value)
        console.log(value)
    }
    const getRoleList = async () => {
        let res = await roleListAll()
        const options = res.data.map(item => {
            return {
                label: item.name,
                value: item.id
            }
        })
        setOptions(options)
    }
    const getUserRoleList = async () => {
        let res = await adminRole(props.id)
        const value = res.data.map(item => item.id)
        console.log('defaultValue', value)
        setValue(value)
    }
    useEffect(() => {
        getRoleList()
    }, [])
    useEffect(() => {
        if (!props.id) return;
        getUserRoleList()
    }, [props.id])
    return (
        <>
            <Modal open={props.visible} title="分配角色" onOk={onOk} onCancel={onCancel}>
                <div className="w-full mt-10 mb-32">
                    <Select key={'ac'} className="w-full" options={options} onChange={onChange} value={value} mode="multiple"></Select>
                </div>
            </Modal>
        </>
    )
}

export default UserRole