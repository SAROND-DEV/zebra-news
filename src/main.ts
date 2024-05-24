import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import moment from 'moment/dist/moment'
import ru from 'moment/dist/locale/ru'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

moment.updateLocale('ru', ru)
