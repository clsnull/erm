import request from '@/utils/request'

export function roleListAll() {
    return request({
        url: '/role/listAll',
        method: 'get'
    })
}