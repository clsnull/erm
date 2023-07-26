import request from '@/utils/request'

export function getMenuList(data) {
    return request({
        url: '/menu/getMenuList',
        method: 'post',
        data
    })
}