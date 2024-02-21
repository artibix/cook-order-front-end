import { getOrders } from '@/api/order'

const getDefaultState = () => {
  return {
    orderList: [],
  }
}

const state = getDefaultState()

// 定义 getters
var getters = {
    orderList: state => state.orderList,
}

// 定义 actions
const actions = {
  async getOrders ({ dispatch, commit }, params = {}) {
    const orderListResource = await getOrders()

    commit('setOrderList', orderListResource.data)
  },
}

// 定义 mutations
const mutations = {
  setOrderList(state, orderList) {
    for(let order of orderList) {
      order.updated_at = (new Date(order.updated_at)).toLocaleString()
      order.created_at = (new Date(order.created_at)).toLocaleString()
    }
    state.orderList = orderList
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}