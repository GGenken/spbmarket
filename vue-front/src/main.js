// app init
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

// axios & store init
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

const base = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

app.use(store)
app.use(VueAxios, axios)
app.provide('$axios', base)

// bootstrap init
// import "bootstrap/dist/css/bootstrap.min.css"


// app
//   .use(store)
//   .use(router)
//   .use(VueAxios, axios)
// app.provide('$axios', base)

app.mount('#app')
