import request from '@/utils/request'

export function adminLogin(data) {
    return request({
        url: '/admin/login',
        method: 'post',
        data
    })
}

export function adminInfo() {
    return request({
        url: '/admin/info',
        method: 'get'
    })
}

export function adminList() {
    return request({
        url: '/admin/list',
        method: 'get'
    })
}
export function adminRegister(data) {
    return request({
        url: '/admin/register',
        method: 'post',
        data
    })
}
export function adminDelete(id) {
    return request({
        url: `/admin/delete/${id}`,
        method: 'post'
    })
}

export function getAdminById(id) {
    return request({
        url: `/admin/${id}`,
        method: 'get'
    })
}

export function adminUpdate(id, data) {
    return request({
        url: `/admin/update/${id}`,
        method: 'post',
        data
    })
}