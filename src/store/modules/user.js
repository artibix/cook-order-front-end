import wepy from '@wepy/core'
import * as auth from '@/utils/auth'
import isEmpty from 'lodash/isEmpty'
import { getCurrentUser } from '@/api/user'
import { login, logout, refresh, register } from '@/api/auth'


const getDefaultState = () => {
  return {
    user: auth.getUser(),
    accessToken: auth.getToken(),
    accessTokenExpiredAt: auth.getTokenExpiredAt()
  }
}

const state = getDefaultState()

// 定义 getters
var getters = {
  isLoggedIn: state => !isEmpty(state.accessToken),
  user: state => state.user,
  accessToken: state => state.accessToken,
  accessTokenExpiredAt: state => state.accessTokenExpiredAt
}

// 定义 actions
const actions = {
  async login ({ dispatch, commit }, params = {}) {
    const loginData = await wepy.wx.login()
    params.code = loginData.code

    const authResponse = await login(params)

    commit('setToken', authResponse.data)
    auth.setToken(authResponse.data)

    dispatch('getUser')
  },

  async getUser ({ dispatch, commit }) {
    const userResponse = await getCurrentUser()

    commit('setUser', userResponse.data)
    auth.setUser(userResponse.data)
  },

  async refresh ({ dispatch, commit, state }, params = {}) {
    const refreshResponse = await refresh(state.accessToken)

    commit('setToken', refreshResponse.data)
    auth.setToken(refreshResponse.data)

    dispatch('getUser')
  },

  async logout ({ commit, state }) {
    // 如果 token 过期，则直接清空 storage
    if (state.accessToken && new Date().getTime() < state.accessTokenExpiredAt) {
      await logout(state.accessToken)
    }
    // 清空 storage
    auth.logout()
    commit('resetState')
  },

  async register ({ dispatch }, params = {}) {
    const loginData = await wepy.wx.login()
    params.code = loginData.code

    await register(params)

    await dispatch('login')
  },
}

// 定义 mutations
const mutations = {
  setUser(state, user) {
    state.user = user
  },
  setToken(state, tokenPayload) {
    state.accessToken = tokenPayload.access_token
    state.accessTokenExpiredAt = new Date().getTime() + tokenPayload.expires_in * 1000
  },
  resetState: (state) => {
    Object.assign(state, getDefaultState())
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}