import { createApp } from "vue";
import App from "./App";
import "./styles";

createApp(App).mount("#app");

if (module.hot) {
  module.hot.accept();
}
