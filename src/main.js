

import { createApp, markRaw } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

import './axios'
import { router } from './router'

import * as bootstrap from 'bootstrap'
const pinia = createPinia();

pinia.use(({ store }) => {
    store.router = markRaw(router);
})
const app = createApp(App)

app.use(pinia);
app.use(router);

app.mount('#app');
