import { request } from '@/utils/request'

export function getCuisines() {
    return request('api/cuisines')
}

export function putCuisine(cuisine_name) {
    return request('api/cuisines', {
        method: 'POST',
        data: {
            cuisine_name: cuisine_name
        }
    })
}

export function getCuisineRecipes(cuisineId) {
    return request(`/api/cuisines/${cuisineId}/recipes`, {
        method: 'GET',
    });
}