import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const base = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

const app = createApp(App)
  .use(store)
  .use(router)
  .use(VueAxios, axios)

app.provide('$axios', base)
app.mount('#app')
