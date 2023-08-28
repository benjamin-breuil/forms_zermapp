
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Forms from "@/components/Forms.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import ListOfForms from "@/components/ListOfForms.vue";

const app = createApp(App)

app.use(router)

app.mount('#app')

