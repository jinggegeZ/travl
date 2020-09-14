import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';

import 'ant-design-vue/dist/antd.css';

const app = createApp();
app.use(store)
app.use(router)
app.mount('#app')
app.use(Antd);
