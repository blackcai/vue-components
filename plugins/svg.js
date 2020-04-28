import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon/install'

Vue.use(SvgIcon)
// register globally
const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('~/assets/svg', false, /\.svg$/)
requireAll(req)
