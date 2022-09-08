<template>
  <h1 class="text-center mt-14 mb-7 text-xl font-bold">Simple Currency Converter</h1>
  <div class="w-screen h-1/3 flex justify-center items-center">
    <div class="bg-white border-blue-500 w-96 h-96 border-t-8">

      <p class="text-center mt-10 text-slate-500 tracking-tighter">Exchange Rate</p>
      <div v-if="isLoading" class="mt-5 m-auto block animate-pulse w-40 h-7 bg-blue-400 rounded"></div>
      <div v-else class="max-w-fit m-auto block">
        <h1 class="text-center text-4xl mt-2">{{ result }}</h1>
      </div>

      <div class="box-content w-3/4 m-auto block ">

        <amountInput v-model="inputAmount"/>

        <div class="flex justify-between mt-8">
          <mySelect :value="from" @change="from = $event.target.value" :exchangeRate="exchangeRate" :selLoad="selLoad"
                    class="border-2 w-20"></mySelect>

          <button @click="swapValues" class="mb-1 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3.5"
                 stroke="currentColor" class="w-20 h-10 pt-3">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"/>
            </svg>
          </button>

<!--          <mySelect :value="to" @change="to = $event.target.value" :exchangeRate="exchangeRate" :selLoad="selLoad"-->
<!--                    class="border-2 w-20"></mySelect>-->
          <my-select></my-select>

        </div>

        <button @click="convResult" class="bg-blue-500 w-full mt-8 h-10 text-white">
          <svg v-show="isLoading" class="inline mb-1 mr-0 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101"
               fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"/>
            <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"/>
          </svg>
          Convert
        </button>

      </div>
    </div>
  </div>

</template>

<script>
import {mapActions} from 'vuex'
import { mapState } from 'vuex'
import mySelect from '@/components/mySelect.vue'
import amountInput from '@/components/amountInput.vue'
import {fetchRates} from '@/services/exchangeReqs.js'
import {res} from "@/services/exchangeReqs.js"

export default {
  name: 'App',

  components: {mySelect, amountInput},

  computed:{
    ...mapActions(['Rates'])
  },

  data() {
    return {
      // exchangeRate: '',
      amount: 0,
      result: 0,
      from: '',
      to: '',
      inputAmount: '',
      isLoading: false,
      // selLoad: false,
    }
  },

  async mounted() {
    await this.Rates()
    // this.selLoad = true
    //
    // fetchRates().then((rates) => {
    //   this.exchangeRate = rates
    //   this.selLoad = false
    // })
  },

  methods: {
    async convResult() {
      this.isLoading = true

      if (this.inputAmount !== "") {
        res(this.from, this.to).then((result) => {
          this.result = result * this.inputAmount
          this.isLoading = false
        })
      } else {
        res(this.from, this.to).then((result) => {
          this.result = result
          this.isLoading = false
        })
      }
    },

    swapValues() {
      [this.from, this.to] = [this.to, this.from]
    }
  }
}
</script>

<style>

</style>
