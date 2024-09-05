import { createApp } from 'vue';
import App from "./App.vue";
// import router
import router from './router'

// create an app
const app = createApp(App)

// use router
app.use(router)

// mount app
app.mount("#app")