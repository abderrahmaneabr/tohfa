<template>
  <div>
    <div class="relative bg-yellow-900">
      <div class="absolute inset-0">
        <g-image
          class="hidden sm:block w-full h-full object-cover"
          :src="`${product.photos.mainPhoto}?nf_resize=smartcrop&w=1400&h=600`"
          :alt="product.name.en"
        />
        <g-image
          class="block sm:hidden w-full h-full object-cover"
          :src="`${product.photos.mainPhoto}?nf_resize=smartcrop&w=700&h=500`"
          :alt="product.name.en"
        />
        <div
          class="absolute inset-0 bg-yellow-900"
          style="mix-blend-mode: multiply;"
          aria-hidden="true"
        />
      </div>
      <div class="relative max-w-7xl mx-auto pt-28 pb-24 px-4 sm:pt-36 sm:pb-32 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {{ product.name.en }}
        </h1>
      </div>
    </div>
    <div class="bg-white border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="py-3">
          <nav
            class="flex"
            aria-label="Breadcrumb"
          >
            <div class="flex sm:hidden">
              <g-link
                :to="$tp('/')"
                class="group inline-flex space-x-3 text-sm font-medium text-gray-500 hover:text-gray-700"
              >
                <!-- Heroicon name: solid/arrow-narrow-left -->
                <svg
                  class="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>{{ $t('return') }}</span>
              </g-link>
            </div>
            <div class="hidden sm:block">
              <ol class="flex items-center space-x-4">
                <li>
                  <div>
                    <g-link
                      :to="$tp('/')"
                      class="text-gray-400 hover:text-gray-500"
                    >
                      <!-- Heroicon name: solid/home -->
                      <svg
                        class="flex-shrink-0 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                      </svg>
                      <span class="sr-only">Acueil</span>
                    </g-link>
                  </div>
                </li>
                <li>
                  <div class="flex items-center">
                    <svg
                      class="flex-shrink-0 h-5 w-5 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                    </svg>
                    <span
                      class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                    >
                      {{ $t('products') }}
                    </span>
                  </div>
                </li>
                <li>
                  <div class="flex items-center">
                    <svg
                      class="flex-shrink-0 h-5 w-5 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                    </svg>
                    <g-link
                      :to="$tp(product.path)"
                      aria-current="page"
                      class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                    >
                      {{ product.name.en }}
                    </g-link>
                  </div>
                </li>
              </ol>
            </div>
          </nav>
        </div>
      </div>
    </div>
    <div class="bg-gray-100 py-4 lg:py-10">
      <div class="max-w-3xl mx-auto grid grid-cols-1 gap-6 px-3 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-4">
        <nav
          aria-label="Sidebar"
          class="hidden lg:block"
        >
          <div class="bg-white space-y-1 p-3 sm:p-6 rounded-lg shadow">
            <!-- Current: "bg-gray-100 text-gray-900", Default: "text-gray-600 hover:bg-gray-50 hover:text-gray-900" -->
            <g-link
              v-for="{ node: productNav } in list.edges"
              :key="productNav.path"
              class="text-gray-900 flex items-center px-3 py-2 text-lg font-bold rounded-md"
              aria-current="product"
              :to="$tp(productNav.path)"
              :class="productNav.path == product.path ? 'bg-gray-100' : ''"
            >
              <span class="truncate">
                {{ productNav.name.en }}
              </span>
            </g-link>
          </div>
        </nav>

        <div class="col-start-1 lg:col-start-2 lg:col-span-3">
          <!-- images caroussel-->
          <section
            class="bg-white rounded-lg p-3 sm:p-6"
            aria-labelledby="product-images-slide"
          >
            <div class="bg-white">
              <vue-slick-carousel
                ref="slider-big"
                v-bind="{
                  fade: true,
                  arrows: false
                }"
                class="mb-1"
                @beforeChange="syncSliders"
              >
                <div class="rounded-lg overflow-hidden">
                  <div class="hidden sm:block">
                    <g-image
                      class="object-cover w-full"
                      :src="`${product.photos.mainPhoto}?nf_resize=smartcrop&w=1000&h=670`"
                      :alt="product.name.en"
                    />
                  </div>
                  <div class="block sm:hidden">
                    <g-image
                      class="object-cover w-full"
                      :src="`${product.photos.mainPhoto}?nf_resize=smartcrop&w=500&h=330`"
                      :alt="product.name.en"
                    />
                  </div>
                </div>
                <div
                  v-for="(gal, index) in product.photos.gallery"
                  :key="index"
                  class="rounded-lg overflow-hidden"
                >
                  <div class="hidden sm:block">
                    <g-image
                      class="object-cover w-full"
                      :src="`${gal}?nf_resize=smartcrop&w=1000&h=670`"
                      :alt="product.name.en + index"
                    />
                  </div>
                  <div class="block sm:hidden">
                    <g-image
                      class="object-cover w-full"
                      :src="`${gal}?nf_resize=smartcrop&w=500&h=300`"
                      :alt="product.name.en + index"
                    />
                  </div>
                </div>
              </vue-slick-carousel>
              <vue-slick-carousel
                ref="slider-thumb"
                class="slider-nav-thumb"
                v-bind="slideThumbOptions"
                :focus-on-select="true"
                @beforeChange="syncSliders"
              >
                <div class="px-1">
                  <g-image
                    class="object-cover w-full rounded-md"
                    :src="`${product.photos.mainPhoto}?nf_resize=smartcrop&w=200&h=130`"
                    :alt="product.name.en"
                  />
                </div>
                <div
                  v-for="(gal, index) in product.photos.gallery"
                  :key="index"
                  class="px-1"
                >
                  <g-image
                    class="object-cover w-full"
                    :src="`${gal}?nf_resize=smartcrop&w=200&h=130`"
                    :alt="product.name.en + index"
                  />
                </div>
              </vue-slick-carousel>
            </div>
          </section>
          <!-- informations accordions -->
          <section
            aria-labelledby="product-informations-tabs"
            class="bg-white rounded-lg pb-6 px-4 sm:px-6 mt-6"
          >
            <div class="bg-white divide-y-2 divide-gray-100 space-y-4 sm:space-y-6">
              <accordion
                v-for="(feature, index) in product.features_en"
                :key="index"
                :title="feature.title"
              >
                <span
                  class="leading-relaxed text-base text-gray-700"
                  v-text="feature.description"
                />
              </accordion>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import Accordion from '~/components/Accordion.vue'
export default {
  name: 'ProductPageFr',
  components: {
    VueSlickCarousel,
    Accordion
  },
  props: {
    product: {
      type: Object,
      required: true
    },
    list: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    slideThumbOptions: {
      slidesToShow: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2
          }
        }]
    }
  }),
  methods: {
    syncSliders (currentPosition, nextPosition) {
      this.$refs['slider-big'].goTo(nextPosition)
      this.$refs['slider-thumb'].goTo(nextPosition)
    }
  }
}
</script>
