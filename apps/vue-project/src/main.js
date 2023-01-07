import { createApp } from 'vue'
import App from './App.vue'

import TestLib from '@histoire-bug/test-lib'

import './assets/main.css'

const app = createApp(App)

app.use(TestLib)
app.mount('#app')
