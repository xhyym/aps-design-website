import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "aps-design-pro/style.css";
import "./styles/index.css";

const application = createApp(App);

application.use(router);
application.mount("#app");
