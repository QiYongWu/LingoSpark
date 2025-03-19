import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import {install} from '@icon-park/vue-next/es/all';

const app = createApp(App);

// Install
install(app); // use default prefix 'icon', eg: icon is People, name is icon-people.
install(app, 'i'); // use custom prefix 'i', eg: icon is People, name is i-people.

const pinia = createPinia();
app.use(router);
app.use(ElementPlus);
app.use(pinia);
app.mount('#app');

