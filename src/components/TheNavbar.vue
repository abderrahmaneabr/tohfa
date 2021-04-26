<template>
  <div class="relative bg-white z-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center py-5">
        <div class="flex justify-start">
          <g-link
            :to="$tp('/')"
            class="navbar-brand flex items-center justify-center top-0"
          >
            <span class="sr-only">Tohfa-meubles</span>
            <g-image
              src="~/assets/images/linkom-website-logo.svg"
              class="h-8 md:h-10 w-auto"
            />
            <div class="logo-shape-white" />
          </g-link>
        </div>
        <div class="-mr-2 -my-2 lg:hidden">
          <button
            type="button"
            class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            aria-expanded="false"
            @click="responsiveMenu = !responsiveMenu"
          >
            <span class="sr-only">Open menu</span>
            <!-- Heroicon name: outline/menu -->
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <nav class="hidden lg:flex justify-center">
          <g-link
            :to="$tp('/')"
            class="text-sm uppercase font-medium text-gray-700 hover:text-gray-900 px-8"
          >
            {{ $t('home') }}
          </g-link>

          <g-link
            :to="$tp('/about/')"
            class="text-sm uppercase font-medium text-gray-700 hover:text-gray-900 px-8"
          >
            {{ $t('about') }}
          </g-link>

          <g-link
            :to="$tp('/services/')"
            class="text-sm uppercase font-medium text-gray-700 hover:text-gray-900 px-8"
          >
            {{ $t('services') }}
          </g-link>

          <div class="relative leading-none">
            <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
            <button
              v-click-outside="onClickOutside"
              type="button"
              class="text-gray-700 group bg-white rounded-sm inline-flex items-center text-sm uppercase font-medium hover:text-gray-900 focus:outline-none px-8 -mt-2"
              aria-expanded="false"
              @click="flyoutMenu = ! flyoutMenu"
            >
              <span>{{ $t('products') }}</span>
            </button>

            <div
              v-if="flyoutMenu"
              class="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 transition ease-out duration-200 opacity-0 translate-y-1 opacity-100 translate-y-0 transition ease-in duration-150 opacity-100 translate-y-0 opacity-0 translate-y-1"
            >
              <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-6 sm:p-8">
                  <g-link
                    v-for="{ node: productNavItem } in $static.productsNavList.edges"
                    :key="productNavItem.path"
                    :to="$tp(productNavItem.path)"
                    class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                  >
                    <div>
                      <p
                        v-if="$context.locale == 'fr-fr'"
                        class="text-sm uppercase font-medium text-gray-700"
                      >
                        {{ productNavItem.name.fr }}
                      </p>
                      <p
                        v-if="$context.locale == 'en-gb'"
                        class="text-sm uppercase font-medium text-gray-700"
                      >
                        {{ productNavItem.name.en }}
                      </p>
                      <p
                        v-if="$context.locale == 'ar-dz'"
                        class="text-sm uppercase font-medium text-gray-700"
                      >
                        {{ productNavItem.name.ar }}
                      </p>
                    </div>
                  </g-link>
                </div>
              </div>
            </div>
          </div>

          <g-link
            :to="$tp('/contact/')"
            class="text-sm uppercase font-medium text-gray-700 hover:text-gray-900 px-8"
          >
            {{ $t('contact') }}
          </g-link>
        </nav>
        <div class="relative text-left px-3 hidden sm:block">
          <locale-switcher />
        </div>
      </div>
    </div>
    <div
      v-if="responsiveMenu"
      class="fixed z-10 top-0 inset-x-0 p-0 transition transform origin-top-right md:hidden duration-200 ease-out opacity-0 scale-95 opacity-100 scale-100 duration-100 ease-in opacity-100 scale-100 opacity-0 scale-95"
    >
      <div class="h-screen ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
        <div class="pt-5 pb-6 px-5">
          <div class="flex items-center justify-between">
            <div>
              <g-image
                src="~/assets/images/linkom-website-logo.svg"
                class="h-10 w-auto"
              />
            </div>
            <div class="-mr-2">
              <button
                type="button"
                class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                @click="responsiveMenu = false"
              >
                <span class="sr-only">Close menu</span>
                <!-- Heroicon name: outline/x -->
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="mt-12">
            <nav class="grid gap-y-4">
              <a
                :href="$t('/')"
                class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                @click="responsiveMenu = false"
              >
                <span class="text-xl font-medium text-gray-900">
                  {{ $t('home') }}
                </span>
              </a>

              <a
                :href="$tp('/about/')"
                class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                @click="responsiveMenu = false"
              >
                <span class="text-xl font-medium text-gray-900">
                  {{ $t('about') }}
                </span>
              </a>

              <a
                :href="$tp('/services/')"
                class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                @click="responsiveMenu = false"
              >
                <span class="text-xl font-medium text-gray-900">
                  {{ $t('services') }}
                </span>
              </a>
              <div class="relative">
                <a
                  href="#"
                  class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  <span class="text-xl font-medium text-gray-900">
                    {{ $t('products') }}
                  </span>
                </a>
                <div class="relative grid gap-4 bg-white px-5 py-6 sm:gap-6 sm:p-8">
                  <a
                    v-for="{ node: productNavItem } in $static.productsNavList.edges"
                    :key="productNavItem.path"
                    :href="$tp(productNavItem.path)"
                    class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    @click="responsiveMenu = false"
                  >
                    <div>
                      <p
                        v-if="$context.locale == 'fr-fr'"
                        class="text-xl font-medium text-gray-500"
                      >
                        {{ productNavItem.name.fr }}
                      </p>
                      <p
                        v-if="$context.locale == 'en-gb'"
                        class="text-xl font-medium text-gray-500"
                      >
                        {{ productNavItem.name.en }}
                      </p>
                      <p
                        v-if="$context.locale == 'ar-dz'"
                        class="text-xl font-medium text-gray-500"
                      >
                        {{ productNavItem.name.ar }}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <a
                :href="$tp('/contact')"
                class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                @click="responsiveMenu = false"
              >
                <span class="text-xl font-medium text-gray-900">
                  {{ $t('contact') }}
                </span>
              </a>
            </nav>
            <div class="bg-gray-50 relative inline-block text-left border rounded-md mt-10 px-3 py-2">
              <locale-switcher />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside'
import LocaleSwitcher from './LocaleSwitcher.vue'

export default {
  name: 'TheNavbar',

  directives: {
    clickOutside: vClickOutside.directive
  },

  components: {
    LocaleSwitcher
  },

  data: () => ({
    flyoutMenu: false,
    responsiveMenu: false,
    langSelect: false,
    slug: '',
    output: ''
  }),

  methods: {
    onClickOutside (event) {
      this.flyoutMenu = false
    },
    onClickLangOutside (event) {
      this.langSelect = false
    }
  }
}
</script>
<static-query>
query {
  productsNavList: allProduct(sort: { by: "order", order: ASC }) {
    edges {
      node {
        name {fr,en,ar},
        path
      }
    }
  }
}
</static-query>
