<template>
  <div
    class="fixed z-10 top-0 inset-x-0 p-0 transition transform origin-top-right md:hidden duration-200 ease-out opacity-0 scale-95 opacity-100 scale-100 duration-100 ease-in opacity-100 scale-100 opacity-0 scale-95"
  >
    <div class="h-screen ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
      <div class="pt-5 pb-6 px-5">
        <div class="flex items-center justify-between">
          <div>
            <g-image
              src="~/assets/images/logo-Tohfa-meubles.svg"
              class="h-20 w-auto"
            />
          </div>
          <div class="-mr-2">
            <button
              type="button"
              class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              @click="$emit('closeButton')"
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
              href="#"
              class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
            >
              <span class="text-xl font-medium text-gray-900">
                {{ $t('home') }}
              </span>
            </a>

            <a
              href="#"
              class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
            >
              <span class="text-xl font-medium text-gray-900">
                {{ $t('about') }}
              </span>
            </a>

            <a
              href="#"
              class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
            >
              <span class="text-xl font-medium text-gray-900">
                {{ $t('quality') }}
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
                      class="text-xl font-medium text-gray-500"
                    >
                      {{ productNavItem.title.en }}
                    </p>
                    <p
                      v-if="$context.locale == 'en-gb'"
                      class="text-xl font-medium text-gray-500"
                    >
                      {{ productNavItem.title.fr }}
                    </p>
                  </div>
                </g-link>
              </div>
            </div>
            <a
              href="#"
              class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
            >
              <span class="text-xl font-medium text-gray-900">
                {{ $t('recruitment') }}
              </span>
            </a>
            <a
              href="#"
              class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
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
</template>
<script>
import LocaleSwitcher from './LocaleSwitcher.vue'

export default {
  name: 'MobileMenu',
  components: {
    LocaleSwitcher
  },
  data: () => ({
    responsiveMenu: false
  })
}
</script>
<static-query>
query {
  productsNavList: allProduct(sort: { by: "order", order: ASC }) {
    edges {
      node {
        name {fr,en},
        path
      }
    }
  }
}
</static-query>
