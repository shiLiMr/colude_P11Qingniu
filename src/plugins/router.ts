
import router from "@/router";
import type { App } from "vue";

 const load=(app:App)=>{
  // 路由加载
  app.use(router);
}

export default load;
