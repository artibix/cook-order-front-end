import Vuex from '@wepy/x';
import users from './modules/user'
import cuisines from './modules/cuisine'
import pantries from './modules/pantry'


export default new Vuex.Store({
  modules: {
    pantries,
    users,
    cuisines,
  }
})