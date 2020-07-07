import Vue from 'vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import './registerServiceWorker'

new Vue({
    vuetify,
}).$mount('#app')