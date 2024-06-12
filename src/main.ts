import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { useAllPlugins } from './plugins'

const app = createApp(App)

useAllPlugins(app)

app.use(createPinia())
app.use(router)

app.mount('#app')
