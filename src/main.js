import Vue from 'vue';
import App from './App.vue';
import router from './router';

import LoadingComponent from './components/LoadingComponent.vue';

Vue.config.productionTip = false;

// import component Global
Vue.component('LoadingComponent', LoadingComponent);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
