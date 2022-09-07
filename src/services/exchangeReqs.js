import axios from 'axios'
const API_KEY = process.env.VUE_APP_API_KEY

export const fetchRates = async () => {
  try {
    const resp = await axios.get(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`)
    return Object.entries(resp.data.conversion_rates) ?? false
  } catch (e) {
    alert(e.message)
  }
}

export let res = async (from, to) => {
  try {
    const answer = await axios.get(`https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${from}/${to}`)
    return answer.data.conversion_rate
  } catch (e) {
    alert(e.message)
  }
}

