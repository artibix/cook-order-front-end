import { request } from '@/utils/request'

export function getRecipes() {
    return request('api/recipes')
}