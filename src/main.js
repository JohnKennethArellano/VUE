import "@/assets/main.css";
import "./assets/style.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {fas} from '@fortawesome/free-solid-svg-icons'
import { library } from "@fortawesome/fontawesome-svg-core";
import { plugin, defaultConfig } from "@formkit/vue";
library.add(fas)
const app = createApp(App);

app.use(router);
app.use(plugin, defaultConfig());
app.component('icon' , FontAwesomeIcon)

app.mount("#app");
