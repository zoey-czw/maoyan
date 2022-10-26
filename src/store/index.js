import Vue from 'vue'
import Vuex from 'vuex'
import hot from './modules/hot'
import cinema from './modules/cinema'
import soon from './modules/soon'
import classic from './modules/classic'
import video from './modules/video'
import movieDetail from './modules/movieDetail'
import cinemaDetail from './modules/cinemaDetail'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    hot,
    cinema,
    soon,
    classic,
    video,
    movieDetail,
    cinemaDetail 
  }
})
