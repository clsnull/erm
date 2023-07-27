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