import { request } from '@/utils/request'

export function getIngredients() {
    return request('api/ingredients')
}