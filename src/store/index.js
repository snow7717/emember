// 我们组装模块并导出 store 的地方
import Vue from 'vue'
import Vuex from 'vuex'
import VueXAlong from 'vuex-along'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user
  },
	plugins: [VueXAlong]
})