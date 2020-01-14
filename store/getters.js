const getters = {
  locales: state => state.app.locales,
  locale: state => state.app.locale,
  isRequest: state => state.app.isRequest,
  loading: state => state.app.loading
}
export default getters
