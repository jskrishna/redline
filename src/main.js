import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/main.css";
import "./assets/css/dataTable.css";
import "./assets/css/datatable.responsive.css";
import "./assets/css/responsive.css"

import "./assets/js/jquery";
import "./assets/js/jquery.dataTable";
import "./assets/js/dataTable.responsive";
import VueFormWizard from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
Vue.use(VueFormWizard);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
