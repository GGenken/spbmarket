// app imports
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// bootstrap imports
// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap"
import BootstrapVue3 from "bootstrap-vue-3"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue-3/dist/bootstrap-vue-3.css"

// axios & store imports
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

const base = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

const app = createApp(App)
app.use(BootstrapVue3)
app.use(router)
app.use(store)
app.use(VueAxios, axios)
app.provide('$axios', base)


// app
//   .use(store)
//   .use(router)
//   .use(VueAxios, axios)
// app.provide('$axios', base)

app.mount('#app')
