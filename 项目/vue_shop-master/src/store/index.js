import Vue from 'vue'
import Vuex from 'vuex'
import User from './user'
import Car from './car'
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
      User,
      Car,
    }
 })
