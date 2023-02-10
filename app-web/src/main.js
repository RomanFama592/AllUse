import { createApp } from 'vue'
import router from './routes'
import App from './app.vue'
import './scss/variables.scss'
import './scss/reset.scss'
import './scss/utility_classes.scss'




createApp(App).use(router).mount('#app')
