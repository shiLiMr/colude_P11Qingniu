
import { createPinia } from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import type { App } from "vue";
const load = (app: App) => {
  const pinia = createPinia()
  pinia.use(piniaPluginPersistedstate)
  // 注册pinia
  app.use(pinia)
}
export default load;
