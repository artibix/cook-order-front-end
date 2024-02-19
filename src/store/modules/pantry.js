import { getPantries } from '@/api/pantry'
import { getIngredients } from '@/api/ingredient'

const getDefaultState = () => {
  return {
    pantryList: [],
    ingredientList: [],
  }
}

const state = getDefaultState()

// 定义 getters
var getters = {
    ingredientList: state => state.ingredientList,
    pantryList: state => state.pantryList,
}

// 定义 actions
const actions = {
  async getPantries ({ dispatch, commit }, params = {}) {
    const pantryListResource = await getPantries()

    commit('setPantryList', pantryListResource.data)
  },
  async getIngredients ({ dispatch, commit }, params = {}) {
    const ingredientListResource = await getIngredients()

    commit('setIngredientList', ingredientListResource.data)
  }
}

// 定义 mutations
const mutations = {
  setPantryList(state, pantryList) {
    for(let pantry of pantryList) {
      pantry.updated_at = (new Date(pantry.updated_at)).toLocaleString()
      pantry.created_at = (new Date(pantry.created_at)).toLocaleString()
    }
    state.pantryList = pantryList
  },
  setIngredientList(state, ingredientList) {
    state.ingredientList = ingredientList
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}