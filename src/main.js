import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import store from '@/store'
import rounter from "@/router/router";

createApp(App)
  .use(rounter)
  .use(store)
  .mount('#app')
