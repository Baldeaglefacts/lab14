import { createApp } from 'vue'
import App from './App.vue'

import StateAPIService from '@/services/stateService' // imports my api

import router from '@/router'

import 'leaflet/dist/leaflet.css' // added css so maps don't look weird

let app = createApp(App)

app.config.globalProperties.$stateService = StateAPIService

app.use(router)

app.mount('#app')