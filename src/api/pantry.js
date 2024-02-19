import { request, authRequest } from '@/utils/request'

export function getPantries() {
    return authRequest('api/pantries')
}

export function putPantry(ingredient_id, detail) {
    return authRequest('api/pantries', {
        method: 'post',
        data: {
            ingredient_id: ingredient_id,
            detail: detail
        }
    })
}

export function updatePantry(ingredient_id, detail) {
    return authRequest('api/pantries', {
        method: 'PUT',
        data: {
            ingredient_id: ingredient_id,
            detail: detail
        }
    })
}

export function destoryPantry(ingredient_id) {
    return authRequest('api/pantries', {
        method: 'delete',
        data: {
            ingredient_id: ingredient_id
        }
    })
}