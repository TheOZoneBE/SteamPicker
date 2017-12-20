import Vue from 'vue'
import Games from '../templates/GameList.vue'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css' // This line here

Vue.use(VueMaterial)

new Vue({
    el: '#app',
    render: (h) => h(Games)
})