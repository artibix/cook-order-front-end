import { request } from '@/utils/request'

export function getIngredients() {
    return request('api/ingredients')
}

export function putIngredient() {
    return request('api/ingredients', {
        method: 'post'
    })
}