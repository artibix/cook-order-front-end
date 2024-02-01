import { request } from '@/utils/request'

export function getCuisines() {
    return request('api/cuisines')
}

export function putCuisine(cuisineName) {
    return request('api/cuisines', {
        method: 'POST',
        data: {
            cuisine_name: cuisineName
        }
    })
}

export function getCuisineRecipes(cuisineId) {
    return request(`/api/cuisines/${cuisineId}/recipes`, {
        method: 'GET',
    });
}