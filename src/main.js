import {createApp} from 'vue'
import App from './App.vue'
import './index.css'
import store from '@/store'
import rounter from "@/router/router";
import i18n from './i18n'

createApp(App)
  .use(i18n)
  .use(rounter)
  .use(store)
  .mount('#app')
