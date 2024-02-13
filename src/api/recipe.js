import { request, uploadFile } from '@/utils/request'

export function getRecipes() {
    return request('api/recipes')
}

export function getRecipeIngredients(recipe_id) {
    return request(`api/recipes/${recipe_id}/ingredients`)
}

export function putRecipeImage(filePath, name, formData) {
    return uploadFile('api/recipe/uploadImage', {
        filePath: filePath,
        name: name,
        formData: formData
    })
}

export function putRecipe(cuisineId, name, imageUrl='', cookMethod, ingredients) {
    return request('api/recipes', {
        method: 'post',
        data: {
            cuisine_id: cuisineId,
            name: name,
            image_url: imageUrl,
            cook_method: cookMethod,
            ingredients: ingredients
        }
    })
}