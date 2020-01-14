const app = {
  state: () => ({
    locales: ['en', 'zh'],
    locale: 'zh',
    loading: 0, // 被动触发的loading数量
    isRequest: 0, // 正在等待访问的接口数量
  }),
  mutations: {
    CHANGE_LOADING: (state, status) => {
      // 处理 loading 事件
      if (status) {
        state.loading++
      } else {
        if (state.loading !== 0) {
          state.loading--
        }
        if (state.loading < 0) {
          state.loading = 0
        }
      }
    },
    CHANGE_REQUEST: (state, status) => {
      status ? ++state.isRequest : --state.isRequest
      if (state.isRequest < 0) {
        state.isRequest = 0
      }
    }
  },
  actions: {
    ChangeLoading({ commit }, status) {
      console.log(status)
      commit('CHANGE_LOADING', status)
    },
    ChangeRequest({ commit }, status) {
      commit('CHANGE_REQUEST', status)
    }
  }
}

export default app
