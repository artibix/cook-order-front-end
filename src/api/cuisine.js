import { request } from '@/utils/request'

export function getCuisines() {
    return request('api/cuisines')
}

export function getCuisineRecipes(cuisineId) {
    return request(`/api/cuisines/${cuisineId}/recipes`, {
        method: 'GET',
    });
}