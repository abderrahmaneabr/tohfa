<template>
  <Layout>
    <div class="relative bg-yellow-900">
      <div class="absolute inset-0">
        <g-image
          class="hidden sm:block w-full h-full object-cover"
          :src="`${$page.about.image}?nf_resize=smartcrop&w=1400&h=600`"
          :alt="$page.about.name.fr"
        />
        <g-image
          class="block sm:hidden w-full h-full object-cover"
          :src="`${$page.about.image}?nf_resize=smartcrop&w=700&h=500`"
          :alt="$page.about.name.fr"
        />
        <div
          class="absolute inset-0 bg-yellow-900"
          style="mix-blend-mode: multiply;"
          aria-hidden="true"
        />
      </div>
      <div class="relative max-w-7xl mx-auto pt-28 pb-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          <span v-if="$context.locale == 'fr-fr'">
            {{ $page.about.name.fr }}
          </span>
          <span v-if="$context.locale == 'en-gb'">
            {{ $page.about.name.en }}
          </span>
          <span v-if="$context.locale == 'ar-dz'">
            {{ $page.about.name.ar }}
          </span>
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
              <ol class="flex items-center">
                <li>
                  <div>
                    <g-link
                      to="/"
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
                      class="mx-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                    >
                      Tohfa meuble
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
                      :to="$tp('/about/')"
                      aria-current="page"
                      class="mx-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                    >
                      <span v-if="$context.locale == 'fr-fr'">
                        {{ $page.about.name.fr }}
                      </span>
                      <span v-if="$context.locale == 'en-gb'">
                        {{ $page.about.name.en }}
                      </span>
                      <span v-if="$context.locale == 'ar-dz'">
                        {{ $page.about.name.ar }}
                      </span>
                    </g-link>
                  </div>
                </li>
              </ol>
            </div>
          </nav>
        </div>
      </div>
    </div>
    <div class="relative py-4 lg:py-10 bg-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="bg-white shadow rounded-lg w-full py-10 sm:py-16">
          <div class="relative px-4 sm:px-6 lg:px-8">
            <div
              v-if="$context.locale == 'fr-fr'"
              class="prose prose-yellow prose-lg text-gray-700 mx-auto"
              v-html="$marked($page.about.description.fr)"
            />
            <div
              v-if="$context.locale == 'en-gb'"
              class="prose prose-yellow prose-lg text-gray-700 mx-auto"
              v-html="$marked($page.about.description.en)"
            />
            <div
              v-if="$context.locale == 'ar-dz'"
              class="prose prose-yellow prose-lg text-gray-700 mx-auto"
              v-html="$marked($page.about.description.ar)"
            />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
<script>
export default {
  metaInfo () {
    return {
      title: this.$page.about.title,
      meta: [
        { key: 'description', name: 'description', content: this.$static.siteDescription },
        { name: 'author', content: 'Linkom' },
        {
          property: 'og:title',
          content: this.$page.about.title,
          vmid: 'og:title'
        },
        {
          property: 'og:description',
          content: this.$static.siteDescription,
          vmid: 'og:description'
        }
      ]
    }
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
<page-query>
query {
  about: singlePage (path: "/content/about") {
   title,
   name{fr,en,ar},
   image,
   description{fr,en,ar}
  }
}
</page-query>
