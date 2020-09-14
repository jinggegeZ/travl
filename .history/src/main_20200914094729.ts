import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import * as icons from '@ant-design/icons-vue';
import 'ant-design-vue/dist/antd.css';

let icon:any = icons

const app = createApp(App);
for(let i in icon){
    app.component(i,icon[i])
}
app.use(store)
app.use(router)
app.mount('#app')
app.use(Antd);
