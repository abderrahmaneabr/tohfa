module.exports = {
  en: [
    {
      path: '/en/',
      component: './src/pages/index.vue'
    },
    {
      path: '/products/*',
      component: './src/templates/product.vue'
    }
  ],
  fr: [
    {
      path: '/',
      component: './src/pages/index.vue'
    },
    {
      path: '/products/:id(\\d+)',
      component: './src/templates/product.vue'
    }
  ]
}
