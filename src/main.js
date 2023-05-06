import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from "./router"
import './assets/less/index.less'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
import axios from "axios";
import './utils/request'

// axios.defaults.baseURL = 'http://10.0.12.2:64202'
// 测试
axios.defaults.baseURL = 'https://mapping.fairy.host:1443/douban'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
// api.config.globalProperties.$api = api

app.use(ElementPlus)
app.use(router)
app.mount('#app')
