import { createApp } from 'vue'

import App from './App.vue'

import { useAllPlugins } from './plugins'

const app = createApp(App)
// 注册所有插件 自动导入
useAllPlugins(app)

app.mount('#app')
