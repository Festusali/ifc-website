import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { MotionPlugin } from '@vueuse/motion'
import '@/assets/main.css'
import { createHead } from '@unhead/vue/client'

const app = createApp(App)
const head = createHead()

app.use(head)
app.use(MotionPlugin)
app.use(createPinia())
app.use(router)

app.mount('#ifc')
