import {createStore} from "vuex";
import {fetchRates} from "@/services/exchangeReqs";

export default createStore({
  state: {
    exchangeRate: '',
    selLoad: false,
  },

  mutations: {
    getRates(state, payload){
      state.exchangeRate = payload.result
    }
  },

  actions:{
    async Rates({commit}){
      const result = await fetchRates()
      await commit('getRates', result)
    }
  },

  getters: {

  }
})