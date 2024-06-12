
import { createPinia } from "pinia";
import type { App } from "vue";

export const load =(app:App)=>{
  app.use(createPinia());
}
