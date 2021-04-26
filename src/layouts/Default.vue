<template>
  <div
    class="overflow-hidden"
    :class="$context.locale == 'ar-dz' ? 'rtl' : 'ltr'"
    :dir="$context.locale == 'ar-dz' ? 'rtl' : 'ltr'"
  >
    <the-navbar />
    <slot />
    <the-footer />
  </div>
</template>

<script>
import TheNavbar from '~/components/TheNavbar.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
  name: 'DefaultLayout',

  metaInfo: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  components: {
    TheNavbar,
    TheFooter
  },

  data: () => ({
    flyoutMenu: false
  })
}
</script>

<static-query>
query {
  metadata {
    siteName,
    siteUrl
  }
}
</static-query>
