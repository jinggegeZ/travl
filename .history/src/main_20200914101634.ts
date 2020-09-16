import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import * as icons from '@ant-design/icons-vue';
import 'ant-design-vue/dist/antd.css';
import '../public/hover/hover.css'

const app = createApp(App);
let icon:any = icons
for(let i in icon){
    app.component(i,icon[i])
}
app.use(store)
app.use(router)
app.mount('#app')
app.use(Antd);
