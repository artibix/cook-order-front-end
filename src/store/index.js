import Vuex from '@wepy/x';
import users from './modules/user'
import cuisines from './modules/cuisine'

export default new Vuex.Store({
  modules: {
    users,
    cuisines,
  }
})