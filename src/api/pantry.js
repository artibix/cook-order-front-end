import { request, authRequest } from '@/utils/request'

export function getPantries() {
    return authRequest('api/pantries')
}

export function putPantry(id, detail) {
    return authRequest('api/pantries', {
        method: 'post',
        data: {
            ingredient_id: id,
            detail: detail
        }
    })
}

export function destoryPantry(id) {
    return authRequest('api/pantries', {
        method: 'delete',
        data: {
            ingredient_id: id
        }
    })
}