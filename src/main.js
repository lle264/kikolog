import Vue from 'vue'
import App from './App.vue'

import VSanitize from "v-sanitize";

var settings=VSanitize.defaults;
settings.allowedTags.push("img")
settings.allowedAttributes['*']=['class']
Vue.use(VSanitize,settings);


import Vue2TouchEvents from 'vue2-touch-events'

Vue.use(Vue2TouchEvents)


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


Vue.config.productionTip = false

document.title="Hasakiko's Logbook";
new Vue({
  render: h => h(App),
}).$mount('#app')
