import { getPantries } from '@/api/pantry'

const getDefaultState = () => {
  return {
    pantryList: [],
  }
}

const state = getDefaultState()

// 定义 getters
var getters = {
    pantryList: state => state.pantryList,
}

// 定义 actions
const actions = {
  async getPantries ({ dispatch, commit }, params = {}) {
    const pantryListResource = await getPantries()

    commit('setPantryList', pantryListResource.data)
  },
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
}

export default {
  state,
  getters,
  actions,
  mutations
}