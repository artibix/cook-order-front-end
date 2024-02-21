import { request, authRequest } from '@/utils/request'

export function getOrders() {
    return authRequest('api/orders')
}

export function putOrder(ingredient_id, detail) {
    return authRequest('api/orders', {
        method: 'post',
        data: {
            ingredient_id: ingredient_id,
            detail: detail
        }
    })
}

export function destoryPantry(order_id) {
    return authRequest('api/orders', {
        method: 'delete',
        data: {
            order_id: order_id
        }
    })
}