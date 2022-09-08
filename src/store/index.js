import { createStore } from 'vuex'
import { fetchRates, fetchExchangeRate } from '@/services/exchangeReqs'

export default createStore({
  state: {
    rate: 0,
    exchangeRate: [],
  },

  getters: {
    rate: (state) => state.rate,
    rates: (state) => state.exchangeRate,
  },

  mutations: {
    setRates(state, payload) {
      state.exchangeRate = payload
    },

    setRate(state, payload) {
      state.rate = payload
    }
  },

  actions: {
    async getRates({commit}){
      const result = await fetchRates()

      commit('setRates', result)
    },

    async getExchangeRate({commit}, payload){
      const result = await fetchExchangeRate(payload.from, payload.to)
      console.log(result)

      commit('setRate', result)
    }
  },
})