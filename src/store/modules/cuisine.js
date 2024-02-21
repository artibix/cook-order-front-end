import { getCuisines } from '@/api/cuisine'
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
    // TODO: 尽量不要修改数据结构
    // cuisineList.push({
    //   id: 0,
    //   name: '全部',
    //   active: true,
    //   recipes: recipesResouce.data
    // })
    for (let cuisine of cuisinesResouce.data) {
      const recipes = recipesResouce.data.filter(item => item.cuisine_id === cuisine.id);
      // count 记录选择的菜谱
      recipes.forEach(recipe => {
        recipe.count = 0;
      });
      cuisine.recipes = recipes || []
      cuisineList.push(cuisine)
    }
    // 给第一个菜系添加 avtive=true，让他高亮
    if (cuisineList.length != 0) {
      cuisineList[0].active = true
    }
    commit('setCuisineList', cuisineList)
  },
}

// 定义 mutations
const mutations = {
  setCuisineList(state, cuisineList) {
    state.cuisineList = cuisineList
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}