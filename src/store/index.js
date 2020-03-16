import Vue from 'vue'
import Vuex from 'vuex'
import * as auth from '@/utils/auth'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // token信息的对象
    user: auth.getUser()
  },
  mutations: {
    // 修改 token
    xiugaiUser (state, payload) {
      state.user = payload.user // 定义载荷中的user数据给state
      // 更新vuex 也应该将最新的数据存入本地缓存
      auth.setUser(payload.user) // 和vuex数据同步
    },
    // 删除 token
    delUser (state) {
      state.user = {} // 将vuex中的token设置为空对象
      // 本地缓存也需要更新
      auth.delUser() // 删除本地缓存中的token
    }
  },
  actions: {
  },
  modules: {
  }
})
