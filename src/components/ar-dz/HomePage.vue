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
                  <g-image
                    class="rounded-lg object-cover object-center w-full"
                    :src="$static.home.intro.cover"
                    :alt="$static.home.intro.title.ar"
                  />
                </div>
              </figure>
              <div class="absolute inset-0 w-full h-full flex items-center justify-center">
                <div
                  v-if="$static.home.intro.video"
                  class=" w-full h-full hidden sm:flex items-center justify-center cursor-pointer"
                  @click="showModal = true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="100"
                    height="100"
                    stroke="#ffffff"
                    stroke-width="1.25"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                    />
                    <polygon points="10 8 16 12 10 16 10 8" />
                  </svg>
                </div>
                <a
                  v-if="$static.home.intro.video"
                  class=" w-full h-full flex sm:hidden items-center justify-center cursor-pointer"
                  :href="'https://www.youtube.com/watch?v=' + $static.home.intro.video"
                  target="_blank"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="100"
                    height="100"
                    stroke="#ffffff"
                    stroke-width="1.25"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                    />
                    <polygon points="10 8 16 12 10 16 10 8" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="mt-8 lg:mt-0">
            <div class="text-base max-w-prose mx-auto lg:max-w-none">
              <h2 class="text-sm text-gray-500 font-semibold tracking-wide uppercase">
                Tohfa meuble
              </h2>
              <h3 class="mt-2 mb-8 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:pl-10">
                {{ $static.home.intro.title.ar }}
              </h3>
            </div>
            <div class="mt-5 prose prose-yellow lg:text-lg lg-text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              <p>
                {{ $static.home.intro.description.ar }}
              </p>
            </div>
            <div class="mt-10 flex text-base max-w-prose mx-auto lg:max-w-none">
              <div class="rounded-md shadow">
                <g-link
                  :to="$tp('/about/')"
                  class="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-yellow-400 hover:bg-yellow-500"
                >
                  اقرأ المزيد
                </g-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Products -->
    <div class="bg-gray-50 relative pt-12 pb-16 lg:pt-20 lg:pb-24">
      <div class="relative max-w-7xl mx-auto mb-16">
        <div class="text-center">
          <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            {{ $static.home.productsHeading.title.ar }}
          </h2>
          <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            {{ $static.home.productsHeading.description.ar }}
          </p>
        </div>
      </div>
      <VueSlickCarousel
        v-if="$static.productsList.edges"
        class="products-list no-mobile"
        v-bind="settings"
      >
        <div
          v-for="{ node: productItem } in $static.productsList.edges"
          :key="productItem.id"
          class="flex flex-col rounded-lg shadow overflow-hidden"
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
          class="flex flex-col rounded-lg shadow overflow-hidden"
        >
          <ProductCard :product-item="productItem" />
        </div>
      </VueSlickCarousel>
    </div>
    <!-- Qualite -->
    <div class="relative bg-white">
      <div class="h-72 absolute bottom-0 xl:inset-0 xl:h-full w-full">
        <div class="h-full w-full xl:grid xl:grid-cols-2">
          <div class="h-full xl:relative xl:col-start-2">
            <g-image
              class="hidden sm:block h-full w-full object-cover opacity-95 xl:absolute xl:inset-0"
              :src="`${$static.home.qualitySection.cover}?nf_resize=smartcrop&w=900&h=600`"
              alt="$static.home.qualitySection.title.ar"
            />
            <g-image
              class="block sm:hidden h-full w-full object-cover opacity-95 xl:absolute xl:inset-0"
              :src="`${$static.home.qualitySection.cover}?nf_resize=smartcrop&w=700&h=500`"
              alt="$static.home.qualitySection.title.ar"
            />
            <div
              aria-hidden="true"
              class="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white xl:inset-y-0 xl:right-0 xl:h-full xl:w-full xl:bg-gradient-to-l"
            />
          </div>
        </div>
      </div>
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
        <div class="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24 lg:pr-8">
          <h2 class="text-sm font-semibold tracking-wide uppercase">
            <span class="text-yellow-500">Tohfa meuble</span>
          </h2>
          <p class="mt-3 text-3xl font-extrabold text-gray-900">
            {{ $static.home.qualitySection.title.ar }}
          </p>
          <p class="mt-5 text-lg text-gray-700">
            {{ $static.home.qualitySection.description.ar }}
          </p>
          <div class="flex rounded-md shadow w-28 mt-8">
            <g-link
              :to="$tp('/quality/')"
              class="w-full px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-yellow-400 hover:bg-yellow-500"
            >
              اقرأ المزيد
            </g-link>
          </div>
        </div>
      </div>
    </div>
    <!-- Les valeurs et les qualités -->
    <div class="bg-gray-50 overflow-hidden">
      <div class="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div class="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div class="lg:col-span-1 flex items-center justify-center lg:justify-start">
            <h2 class="text-center lg:text-right text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              قيمنا و صفاتنا
            </h2>
          </div>
          <dl class="space-y-10 sm:space-y-0 grid grid-cols-2 lg:grid-cols-4 sm:gap-x-10 sm:gap-y-10 lg:mt-0 lg:col-span-2">
            <div class="flex flex-col items-center justify-end">
              <g-image
                class="h-20 w-auto"
                src="~/assets/images/env.svg"
              />
              <div class="mt-5">
                <dt class="text-xl text-center leading-6 font-medium text-gray-900">
                  {{ $static.home.values.valueone.ar }}
                </dt>
              </div>
            </div>

            <div class="flex flex-col items-center justify-end">
              <g-image
                class="h-28 w-auto"
                src="~/assets/images/idea.svg"
              />
              <div class="mt-5">
                <dt class="text-xl text-center leading-6 font-medium text-gray-900">
                  {{ $static.home.values.valuetwo.ar }}
                </dt>
              </div>
            </div>

            <div class="flex flex-col items-center justify-end">
              <g-image
                class="h-20 w-auto"
                src="~/assets/images/respo.svg"
              />
              <div class="mt-5">
                <dt class="text-xl text-center leading-6 font-medium text-gray-900">
                  {{ $static.home.values.valuethree.ar }}
                </dt>
              </div>
            </div>

            <div class="flex flex-col items-center justify-end">
              <g-image
                class="h-20 w-auto"
                src="~/assets/images/solid.svg"
              />
              <div class="mt-5">
                <dt class="text-xl text-center leading-6 font-medium text-gray-900">
                  {{ $static.home.values.valuefour.ar }}
                </dt>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </div>
    <!-- modal -->
    <div
      v-if="$static.home.intro.video && showModal"
      class="fixed z-50 inset-0 overflow-y-auto"
    >
      <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:flex sm:p-0">
        <div
          class="fixed inset-0 transition-opacity ease-out duration-300"
          aria-hidden="true"
          @click="showModal = false"
        >
          <div class="absolute inset-0 bg-gray-500 opacity-75" />
        </div>

        <div
          class="inline-block align-bottom bg-white rounded-lg p-2 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <iframe
            width="100%"
            height="370"
            :src="'https://www.youtube.com/embed/' + $static.home.intro.video "
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="w-full"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from '~/components/Slider.vue'
import ProductCard from '~/components/ar-dz/ProductCard.vue'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'HomePageFr',
  components: {
    Slider,
    VueSlickCarousel,
    ProductCard
  },

  data: () => ({
    index: null,
    showModal: false,
    settings: {
      centerMode: true,
      centerPadding: '100px',
      focusOnSelect: true,
      infinite: true,
      slidesToShow: 3,
      speed: 500
    },
    settingsMobile: {
      centerMode: true,
      centerPadding: '50px',
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
    }
  }
}
</style>
<static-query>
query {
  home: singlePage (path: "/content/home") {
    slider,
    intro{
      title{ar},
      description{ar},
      cover,
      video
    },
    productsHeading{
      title{ar},
      description{ar},
    },
    qualitySection{
      title{ar},
      description{ar},
      cover
    },
    values{
      valueone{ar},
      valuetwo{ar},
      valuethree{ar},
      valuefour{ar}
    }
  }
  productsList: allProduct(sort: { by: "order", order: ASC }) {
    edges {
      node {
        name {ar},
        photos{mainPhoto},
        shortDesc{ar},
        path,
        id
      }
    }
  }
}
</static-query>
