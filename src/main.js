import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from "./router"
import './assets/less/index.less'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
import axios from "axios";
import './utils/request'

// 测试
// axios.defaults.baseURL = 'http://127.0.0.1:64202'
// Docker 部署
axios.defaults.baseURL = 'https://mapping.fairy.host:4433/douban/api'
// 原生 Nginx 部署
// axios.defaults.baseURL = 'http://127.0.0.1:64200/'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
// api.config.globalProperties.$api = api

app.use(ElementPlus)
app.use(router)
app.mount('#app')
