import Vue from "vue";

// libs
import Buefy from "buefy";
Vue.use(Buefy);

import App from "./App.vue";

import router from "./router";
import store from "./store";

import "./registerServiceWorker";
import { regsiterComponents } from "@utils/setup";

const requireLayout = require.context(
  "./layouts",
  false,
  /[A-Z]\w+\.(vue|js)$/
);

regsiterComponents(requireLayout, "-layout");

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
