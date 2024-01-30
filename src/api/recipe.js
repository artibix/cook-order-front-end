import { request, uploadFile } from '@/utils/request'

export function getRecipes() {
    return request('api/recipes')
}

export function putRecipeImage(filePath, name, formData) {
    return uploadFile('api/recipe/uploadImage', {
        filePath: filePath,
        name: name,
        formData: formData
    })
}