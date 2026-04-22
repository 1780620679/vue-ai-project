import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
// 引入路由
import router from "./router";
// 引入element-plus图标
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
//引入pinia
import { createPinia } from "pinia";

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate); // 使用持久化插件
app.use(pinia);
app.use(ElementPlus);
app.use(router);

app.mount("#app");
// 注册element-plus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
