import { createApp } from 'vue'

import App from './App.vue'

import { useAllPlugins } from './plugins'

//  公共样式
import './styles/index.scss'

const app = createApp(App)
// 注册所有插件 自动导入
useAllPlugins(app)

app.mount('#app')
