<template>
  <div>
    <!-- slider -->
    <Slider :slider-thumbs="$static.home.slider" />
    <!-- About -->
    <div class="bg-white overflow-hidden">
      <div class="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div class="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div class="relative lg:row-start-1 lg:col-start-2">
            <div class="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div class="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    class="rounded-lg object-cover object-center w-full"
                    :src="`${$static.home.intro.cover}?nf_resize=smartcrop&w=576&h=360`"
                    :alt="$static.home.intro.title.fr"
                  >
                </div>
              </figure>
            </div>
          </div>
          <div class="mt-8 lg:mt-0">
            <div class="text-base max-w-prose mx-auto lg:max-w-none">
              <h2 class="text-sm text-gray-500 font-semibold tracking-wide uppercase">
                Tohfa meuble
              </h2>
              <h3
                class="mt-2 mb-8 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl sm:leading-tight sm:pr-10"
              >
                {{ $static.home.intro.title.fr }}
              </h3>
            </div>
            <div
              class="mt-5 prose prose-yellow lg:text-lg text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1 sm:pr-20"
            >
              <p>
                {{ $static.home.intro.description.fr }}
              </p>
            </div>
            <div class="mt-10 flex text-base max-w-prose mx-auto lg:max-w-none">
              <div>
                <g-link
                  :to="$tp('/about/')"
                  class="inline-flex items-center pl-5 pr-1 py-1 border border-transparent text-xs uppercase font-medium rounded-full shadow-sm text-gray-900 bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                >
                  En savoir plus
                  <svg
                    class="h-7 w-7 p-1 bg-white text-gray-900 rounded-full ml-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </g-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Products -->
    <div class="relative pt-8">
      <VueSlickCarousel
        v-if="$static.productsList.edges"
        class="products-list no-mobile"
        v-bind="settings"
      >
        <div
          v-for="{ node: productItem } in $static.productsList.edges"
          :key="productItem.id"
          class="flex flex-col overflow-hidden"
        >
          <ProductCard :product-item="productItem" />
        </div>
      </VueSlickCarousel>
      <VueSlickCarousel
        v-if="$static.productsList.edges"
        class="products-list mobile"
        v-bind="settingsMobile"
      >
        <div
          v-for="{ node: productItem } in $static.productsList.edges"
          :key="productItem.id"
          class="flex flex-col overflow-hidden"
        >
          <ProductCard :product-item="productItem" />
        </div>
      </VueSlickCarousel>
    </div>
    <!-- From our client -->
    <div class="bg-gray-50">
      <div class="relative max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <client-only>
          <light-gallery
            :images="$static.home.gallery"
            :index="index"
            :disable-scroll="true"
            @close="index = null"
          />
        </client-only>
        <div class="lg:grid lg:grid-cols-4 lg:gap-1 lg:items-center">
          <div class="col">
            <svg
              class="h-8 w-8 text-gray-600"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >  <path
              stroke="none"
              d="M0 0h24v24H0z"
            />  <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />  <path d="M4 16v2a2 2 0 0 0 2 2h2" />  <path d="M16 4h2a2 2 0 0 1 2 2v2" />  <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />  <circle
              cx="12"
              cy="12"
              r="3"
            /></svg>
            <h3
              class="mt-2 mb-8 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl sm:leading-tight sm:pr-10"
            >
              From our <br> client
            </h3>
            <a
              class="block text-sm text-gray-600 mt-8 mb-16 m lg:mt-32 lg:mb-0 underline"
              href=""
            >
              Visite our instagram
            </a>
          </div>
          <div class="col-span-3">
            <div class="grid lg:grid-cols-3 gap-1 items-center">
              <div class="col-span-2">
                <img
                  :src="`${$static.home.gallery[0]}?nf_resize=smartcrop&w=700&h=500`"
                  alt
                  class="cursor-pointer"
                  @click="index = 0"
                >
              </div>
              <div class="col-span-2 lg:col-span-1 grid grid-cols-2 lg:grid-cols-1 gap-1">
                <img

                  :src="`${$static.home.gallery[1]}?nf_resize=smartcrop&w=700&h=500`"
                  alt
                  class="cursor-pointer"
                  @click="index = 1"
                >
                <img
                  :src="`${$static.home.gallery[2]}?nf_resize=smartcrop&w=700&h=500`"
                  alt
                  class="cursor-pointer"
                  @click="index = 2"
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Services-->
    <div class="lg:relative">
      <div class="mx-auto max-w-7xl w-full pt-12 pb-16 lg:py-28 xl:py-32">
        <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-32">
          <h3 class="mt-2 mb-8 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl pr-20">
            {{ $static.home.qualitySection.title.fr }}
          </h3>
          <p class="mt-5 prose prose-yellow lg:text-lg text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
            {{ $static.home.qualitySection.description.fr }}
          </p>
          <div class="mt-10 flex text-base max-w-prose mx-auto lg:max-w-none">
            <div>
              <g-link
                :to="$tp('/services/')"
                class="inline-flex items-center pl-5 pr-1 py-1 border border-transparent text-xs uppercase font-medium rounded-full shadow-sm text-gray-900 bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              >
                En savoir plus
                <svg
                  class="h-7 w-7 p-1 bg-white text-gray-900 rounded-full ml-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </g-link>
            </div>
          </div>
        </div>
      </div>
      <div class="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
        <img
          class="absolute inset-0 w-full h-full object-cover"
          :src="`${$static.home.qualitySection.cover}?nf_resize=smartcrop&w=900&h=600`"
          :alt="$static.home.qualitySection.title.fr"
        >
      </div>
    </div>
    <!-- Les valeurs et les qualités -->
    <div class="bg-gray-50 border-b border-gray-200 overflow-hidden">
      <div class="relative max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
        <dl
          class="grid grid-cols-2 lg:grid-cols-4 lg:col-span-2"
        >
          <div class="flex flex-col items-start justify-end px-6 lg:px-10 py-20 border-b lg:border-b-0 border-r border-gray-200 hover:bg-yellow-400">
            <svg
              class="h-12 w-12 text-gray-700"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >  <path
              stroke="none"
              d="M0 0h24v24H0z"
            />  <path d="M3 7v11m0 -4h18m0 4v-8a2 2 0 0 0 -2 -2h-8v6" />  <circle
              cx="7"
              cy="10"
              r="1"
            /></svg>
            <div class="mt-4 sm:w-40">
              <dt class="text-2xl sm:text-3xl text-left leading-6 font-bold text-gray-900">
                {{ $static.home.values.valueone.fr }}
              </dt>
            </div>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="h-8 w-8 p-2 border border-gray-200 text-gray-900 rounded-full mt-20"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>

          <div class="flex flex-col items-start justify-end px-6 lg:px-10 py-20 border-b lg:border-b-0 lg:border-r lg:border-gray-200 hover:bg-yellow-400">
            <svg
              class="h-12 w-12 text-gray-700"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >  <path
                 stroke="none"
                 d="M0 0h24v24H0z"
               />
              <path d="M9 12l2 2l4 -4" />  <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
            </svg>
            <div class="mt-4 sm:w-40">
              <dt class="text-2xl sm:text-3xl text-left leading-6 font-bold text-gray-900">
                {{ $static.home.values.valuetwo.fr }}
              </dt>
            </div>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="h-8 w-8 p-2 border border-gray-200 text-gray-900 rounded-full mt-20"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>

          <div class="flex flex-col items-start justify-end px-6 lg:px-10 py-20 border-r border-gray-200 hover:bg-yellow-400">
            <svg
              class="h-12 w-12 text-gray-700"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >  <path
                 stroke="none"
                 d="M0 0h24v24H0z"
               />  <circle
                 cx="12"
                 cy="12"
                 r="9"
               />  <line
                 x1="9"
                 y1="10"
                 x2="9.01"
                 y2="10"
               />  <line
                 x1="15"
                 y1="10"
                 x2="15.01"
                 y2="10"
               />
              <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
            </svg>
            <div class="mt-4 sm:w-40">
              <dt class="text-2xl sm:text-3xl text-left leading-6 font-bold text-gray-900">
                {{ $static.home.values.valuethree.fr }}
              </dt>
            </div>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="h-8 w-8 p-2 border border-gray-200 text-gray-900 rounded-full mt-20"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>

          <div class="flex flex-col items-start justify-end px-6 lg:px-10 py-20 hover:bg-yellow-400">
            <svg
              class="h-12 w-12 text-gray-700"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                stroke="none"
                d="M0 0h24v24H0z"
              />  <line
                x1="9"
                y1="15"
                x2="15"
                y2="9"
              />  <circle
                cx="9.5"
                cy="9.5"
                r=".5"
                fill="currentColor"
              />  <circle
                cx="14.5"
                cy="14.5"
                r=".5"
                fill="currentColor"
              />  <path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7a2.2 2.2 0 0 0 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1a2.2 2.2 0 0 0 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55 v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55 v-1" />
            </svg>
            <div class="mt-4 sm:w-40">
              <dt class="text-2xl sm:text-3xl text-left leading-6 font-bold text-gray-900">
                {{ $static.home.values.valuefour.fr }}
              </dt>
            </div>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="h-8 w-8 p-2 border border-gray-200 text-gray-900 rounded-full mt-20"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </dl>
      </div>
    </div>
    <!-- -->
    <div class="bg-yellow-400">
      <div class="max-w-2xl mx-auto text-center py-20 px-4 sm:py-28 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          <span v-text="$static.home.cta.title.fr" />
        </h2>
        <p
          class="mt-4 text-lg leading-6 text-gray-700"
          v-text="$static.home.cta.text.fr"
        />
        <g-link
          :to="$tp('/contact/')"
          class="mt-10 inline-flex items-center pl-5 pr-1 py-1 border border-transparent text-sm uppercase font-medium rounded-full shadow-sm text-gray-900 bg-white hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
        >
          En savoir plus
          <svg
            class="h-7 w-7 p-1 border text-gray-900 rounded-full ml-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </g-link>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from '~/components/Slider.vue'
import ProductCard from '~/components/fr_fr/ProductCard.vue'

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'HomePageFr',
  metaInfo () {
    return {
      title: this.$static.home.intro.title.fr,
      meta: [{
        key: 'description',
        name: 'description',
        content: this.$static.home.intro.description.fr
      },
      {
        name: 'author',
        content: 'Linkom'
      },
      {
        property: 'og:title',
        content: this.$static.home.intro.title.fr,
        vmid: 'og:title'
      },
      {
        property: 'og:description',
        content: this.$static.home.intro.description.fr,
        vmid: 'og:description'
      }
      ]
    }
  },
  components: {
    Slider,
    VueSlickCarousel,
    ProductCard,
    LightGallery: () =>
      import('vue-light-gallery')
        .then(m => m.LightGallery)
        .catch()
  },
  data: () => ({
    index: null,
    showModal: false,
    settings: {
      centerMode: false,
      focusOnSelect: true,
      infinite: true,
      slidesToShow: 4,
      speed: 500
    },
    settingsMobile: {
      centerMode: true,
      centerPadding: '35px',
      focusOnSelect: true,
      infinite: true,
      slidesToShow: 1,
      speed: 500,
      arrows: false,
      dots: false
    }
  })
}
</script>
<style lang="scss">
  .products-list {
    &.no-mobile {
      display: block !important;

      @media (max-width: 767px) {
        display: none !important;
      }
    }

    &.mobile {
      display: none !important;
      @media (max-width: 767px) {
        display: block !important;
        .slick-list {
          padding: 0 25px 0 0 !important;
        }
      }
    }
  }
</style>
<static-query>
  query {
  home: singlePage (path: "/content/home") {
  slider,
  intro{
  title{fr},
  description{fr},
  cover,
  video
  },
  productsHeading{
  title{fr},
  description{fr},
  },
  qualitySection{
  title{fr},
  description{fr},
  cover
  },
  values{
  valueone{fr},
  valuetwo{fr},
  valuethree{fr},
  valuefour{fr}
  },
  cta{
    title{fr},
    text{fr}
  }
  gallery
  }
  productsList: allProduct(sort: { by: "order", order: ASC }) {
  edges {
  node {
  name {fr},
  photos{mainPhoto},
  shortDesc{fr},
  path
  }
  }
  }
  }
</static-query>
