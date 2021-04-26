// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import '../src/assets/style.scss'
import DefaultLayout from '~/layouts/Default.vue'
import Vue from 'vue'
import marked from 'marked'

export default function (Vue, { router, head, isClient }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;700;900&display=swap'
  })
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
// Lets use the code below inside a components
// Vue.marked()
// this.$marked()
Vue.use({
  install () {
    Vue.marked = marked
    Vue.prototype.$marked = marked
  }
})
