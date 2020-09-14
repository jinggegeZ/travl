import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';

import 'ant-design-vue/dist/antd.css';

const App = createApp();
App.use(store)
App.use(router)
App.mount('#app')
App.use(Antd);
