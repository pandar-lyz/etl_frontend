import router from "@/router";
import store from "@/store";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue';
import VueRouter from "vue-router";
import App from './App.vue';






Vue.config.productionTip = false;
Vue.use(IconsPlugin)
Vue.use(BootstrapVue);
Vue.use(ElementUI)
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')