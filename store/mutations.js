import user from './modules/user'

const mutations = {
  [user.SET_INFO](state, info) {
    state.userInfo = info
  }
}

export default mutations
