<template>
  <Layout>
    <home-page-fr v-if="$context.locale == 'fr-fr'" />
    <home-page-en v-else-if="$context.locale == 'en-gb'" />
    <home-page-ar v-else-if="$context.locale == 'ar-dz'" />
  </Layout>
</template>
<script>
import HomePageFr from '~/components/fr_fr/HomePage.vue'
import HomePageEn from '~/components/en_gb/HomePage.vue'
import HomePageAr from '~/components/ar-dz/HomePage.vue'

export default {
  components: {
    HomePageFr,
    HomePageEn,
    HomePageAr
  }
}
</script>
<static-query>
query {
  metadata {
    siteName,
    siteUrl,
    siteDescription
  }
}
</static-query>
