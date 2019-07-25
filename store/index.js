export const mutations = {
  SET_LANG (state, { todo }) {
    state.modules.app.locale = todo
  }
}
