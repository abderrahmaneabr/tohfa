<template>
  <Layout>
    <product-page-fr
      v-if="$context.locale == 'fr-fr'"
      :product="$page.product"
      :list="$page.productsList"
    />
    <product-page-en
      v-else-if="$context.locale == 'en-gb'"
      :product="$page.product"
      :list="$page.productsList"
    />
    <product-page-ar
      v-else-if="$context.locale == 'ar-dz'"
      :product="$page.product"
      :list="$page.productsList"
    />
  </Layout>
</template>
<script>
import ProductPageFr from '~/components/fr_fr/ProductPage.vue'
import ProductPageEn from '~/components/en_gb/ProductPage.vue'
import ProductPageAr from '~/components/ar-dz/ProductPage.vue'

// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  metaInfo () {
    return {
      title: this.$page.product.title,
      meta: [
        { key: 'description', name: 'description', content: this.$page.product.shortDesc.fr },
        { name: 'author', content: 'Linkom' },
        {
          property: 'og:title',
          content: this.$page.product.title,
          vmid: 'og:title'
        },
        {
          property: 'og:description',
          content: this.$page.product.shortDesc.fr,
          vmid: 'og:description'
        }
      ]
    }
  },
  components: {
    ProductPageFr,
    ProductPageEn,
    ProductPageAr
  }
}
</script>
<style lang="scss">
.slider-nav-thumb {
  cursor: pointer;
  padding: 0 44px;
  @media (max-width: 600px) {
      padding: 0 34px;
    }
  .slick-slide {
    &.slick-current {
      img {
        border: 2px solid #fccd32;
      }
    }
  }
  .slick-prev,
  .slick-next {
    width: 40px;
    height: calc(100% - 6px);
    z-index: 10;
    background: #fccd32;
    margin-top: -3px;
    border-radius: 0.375rem;
    @media (max-width: 600px) {
      width: 30px;
      border-radius: 0.175rem;
    }
  }
  .slick-prev:before,
  .slick-next:before {
    font-size: 30px;
    @media (max-width: 600px) {
      font-size: 20px;
    }
    color: #ffffff;
  }
  .slick-prev {
    left: 0;
  }
  [dir='rtl'] .slick-prev {
    right: 0;
    left: auto;
  }
  .slick-next {
    right: 0;
  }
  [dir='rtl'] .slick-next {
    right: auto;
    left: 0;
  }
}
</style>
<static-query>
query {
  metadata {
    siteName,
    siteUrl,
  }
}
</static-query>
<page-query>
query ($id: ID!) {
  product: product (id: $id) {
    title,
    name {fr,en,ar},
    path,
    photos{
      mainPhoto,
      gallery
    },
    shortDesc{fr},
    features_fr {title,description},
    features_en {title,description},
    features_ar {title,description}
  }
  productsList: allProduct (sort: { by: "order", order: ASC }) {
    edges {
      node {
        name{fr,en,ar},
        path,
      }
    }
  }
}
</page-query>
