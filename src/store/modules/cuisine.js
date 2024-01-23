import wepy from '@wepy/core'
import { getCuisines, getCuisineRecipes } from '@/api/cuisine'
import { getRecipes } from '@/api/recipe'

const getDefaultState = () => {
  return {
    cuisineList: [],
    showRecipeList: [],
  }
}

const state = getDefaultState()

// 定义 getters
var getters = {
    cuisineList: state => state.cuisineList,
    showRecipeList: (state) => {
      // 这里假设有一个名为 activeCuisine 的状态来表示当前激活的 cuisine
      let activeCuisine = state.cuisineList.find(cuisine => cuisine.active);

      // 返回激活的 cuisine 对应的 recipes, 没有就返回空（ps：不然视图不会渲染）
      return activeCuisine ? activeCuisine.recipes : []
    },
}

// 定义 actions
const actions = {
  async initCuisine ({ dispatch, commit }, params = {}) {
    const cuisinesResouce = await getCuisines()
    const recipesResouce = await getRecipes()
    let cuisineList = []
    cuisineList.push({
      id: 0,
      name: '全部',
      active: true,
      recipes: recipesResouce.data
    })
    for (let cuisine of cuisinesResouce.data) {
      let cuisineRecipesResouce = await getCuisineRecipes(cuisine.id)
      cuisine.recipes = cuisineRecipesResouce.data || []
      cuisineList.push(cuisine)
    }
    commit('setCuisineList', cuisineList)
  },

  // async initRecipe ({ dispatch, commit, state }, params = {}) {
  //   commit('setShowRecipeList', )
  // }
}

// 定义 mutations
const mutations = {
  setCuisineList(state, cuisineList) {
    state.cuisineList = cuisineList
  },
  // setShowRecipeList(state, showRecipeList) {
  //   state.showRecipeList = showRecipeList
  // },
}

export default {
  state,
  getters,
  actions,
  mutations
}