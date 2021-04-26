<template>
  <Layout>
    <div class="relative bg-yellow-900">
      <div class="absolute inset-0">
        <g-image
          class="hidden sm:block w-full h-full object-cover"
          :src="`${$page.recruitment.image}?nf_resize=smartcrop&w=1400&h=600`"
          :alt="$page.recruitment.name.fr"
        />
        <g-image
          class="block sm:hidden w-full h-full object-cover"
          :src="`${$page.recruitment.image}?nf_resize=smartcrop&w=700&h=500`"
          :alt="$page.recruitment.name.fr"
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
            {{ $page.recruitment.name.fr }}
          </span>
          <span v-if="$context.locale == 'en-gb'">
            {{ $page.recruitment.name.en }}
          </span>
          <span v-if="$context.locale == 'ar-dz'">
            {{ $page.recruitment.name.ar }}
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
                      :to="$tp('/recruitment/')"
                      aria-current="page"
                      class="mx-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                    >
                      <span v-if="$context.locale == 'fr-fr'">
                        {{ $page.recruitment.name.fr }}
                      </span>
                      <span v-if="$context.locale == 'en-gb'">
                        {{ $page.recruitment.name.en }}
                      </span>
                      <span v-if="$context.locale == 'ar-dz'">
                        {{ $page.recruitment.name.ar }}
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
              v-html="$marked($page.recruitment.description.fr)"
            />
            <div
              v-if="$context.locale == 'en-gb'"
              class="prose prose-yellow prose-lg text-gray-700 mx-auto"
              v-html="$marked($page.recruitment.description.en)"
            />
            <div
              v-if="$context.locale == 'ar-dz'"
              class="prose prose-yellow prose-lg text-gray-700 mx-auto"
              v-html="$marked($page.recruitment.description.ar)"
            />
            <div class="prose prose-yellow prose-lg text-gray-700 mx-auto mt-12">
              <div
                v-if="sent"
                class="relative"
              >
                <div class="flex items-end justify-center pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                  <div
                    class="inline-block align-bottom bg-gray-50 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-md transform transition-all sm:my-8 sm:align-middle sm:max-w-md sm:w-full sm:p-6"
                  >
                    <div>
                      <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                        <!-- Heroicon name: outline/check -->
                        <svg
                          class="h-6 w-6 text-green-600"
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
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <div class="mt-3 text-center sm:mt-5">
                        <h3
                          id="modal-headline"
                          class="text-lg leading-6 font-medium text-gray-900"
                        >
                          {{ $t('thankyouheading') }}
                        </h3>
                        <div class="mt-2">
                          <p class="text-sm text-gray-500">
                            {{ $t('thankyoutext') }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <form
                v-else
                class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                enctype="multipart/form-data"
                @submit.prevent="submit"
              >
                <div>
                  <label
                    for="lastname"
                    class="block text-sm font-medium text-gray-700 required"
                  >{{ $t('lname') }}</label>
                  <div class="mt-1">
                    <input
                      id="lastname"
                      v-model="form.lastname"
                      type="text"
                      class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      required
                    >
                  </div>
                </div>
                <div>
                  <label
                    for="firstname"
                    class="block text-sm font-medium text-gray-700 required"
                  >{{ $t('fname') }}</label>
                  <div class="mt-1">
                    <input
                      id="firstname"
                      v-model="form.firstname"
                      type="text"
                      class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      required
                    >
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label
                    for="job"
                    class="block text-sm font-medium text-gray-700 required"
                  >{{ $t('job') }}</label>
                  <div class="mt-1">
                    <input
                      id="job"
                      v-model="form.job"
                      type="text"
                      class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      required
                    >
                  </div>
                </div>
                <div>
                  <label
                    for="email"
                    class="block text-sm font-medium text-gray-700 required"
                  >{{ $t('email') }}</label>
                  <div class="mt-1">
                    <input
                      id="email"
                      v-model="form.email"
                      type="email"
                      class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      required
                    >
                  </div>
                </div>
                <div>
                  <label
                    for="phone"
                    class="block text-sm font-medium text-gray-700 required"
                  >{{ $t('phone') }}</label>
                  <div class="mt-1">
                    <input
                      id="phone"
                      v-model="form.phone"
                      type="text"
                      class="py-3 px-4 block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      required
                    >
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <div v-if="!file">
                    <label
                      for="cv"
                      class="block text-sm font-medium text-gray-700 required"
                    >
                      CV
                    </label>
                    <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div class="space-y-1 text-center">
                        <svg
                          class="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <div class="flex justify-center text-sm text-gray-600">
                          <label
                            for="cv"
                            class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <span>{{ $t('uploadfile') }}</span>
                            <input
                              id="cv"
                              ref="cv"
                              type="file"
                              class="sr-only"
                              required
                              accept="application/pdf"
                              @change="handleFileUpload()"
                            >
                          </label>
                        </div>
                        <p class="text-xs text-gray-500">
                          PDF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                  <div v-else>
                    <label
                      for="cv"
                      class="block text-sm font-medium text-gray-700 required"
                    >
                      CV
                    </label>
                    <div
                      class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 h-36"
                    >
                      <div class="flex-shrink-0">
                        <svg
                          class="h-10 w-10 text-yellow-600"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >  <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                        />  <path d="M14 3v4a1 1 0 0 0 1 1h4" />  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />  <path d="M9 15l2 2l4 -4" /></svg>
                      </div>
                      <div class="flex-1 min-w-0">
                        <span
                          class="focus:outline-none"
                        >
                          <span
                            class="absolute inset-0"
                            aria-hidden="true"
                          />
                          <p class="text-sm font-medium text-gray-900">
                            {{ file.name }}
                          </p>
                        </span>
                      </div>
                      <button
                        class="cursor-pointer z-10"
                        @click="emptyFileField()"
                      >
                        <svg
                          class="h-6 w-6 text-red-500 "
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >  <line
                          x1="18"
                          y1="6"
                          x2="6"
                          y2="18"
                        />  <line
                          x1="6"
                          y1="6"
                          x2="18"
                          y2="18"
                        /></svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="sm:col-span-2 pt-2">
                  <button
                    type="submit"
                    class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-gray-700 bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                    :class="sending ? 'disabled:opacity-50' : ''"
                  >
                    <svg
                      v-if="sending"
                      class="animate-spin h-5 w-5 text-red-500 mx-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >  <line
                      x1="12"
                      y1="2"
                      x2="12"
                      y2="6"
                    />  <line
                      x1="12"
                      y1="18"
                      x2="12"
                      y2="22"
                    />  <line
                      x1="4.93"
                      y1="4.93"
                      x2="7.76"
                      y2="7.76"
                    />  <line
                      x1="16.24"
                      y1="16.24"
                      x2="19.07"
                      y2="19.07"
                    />  <line
                      x1="2"
                      y1="12"
                      x2="6"
                      y2="12"
                    />  <line
                      x1="18"
                      y1="12"
                      x2="22"
                      y2="12"
                    />  <line
                      x1="4.93"
                      y1="19.07"
                      x2="7.76"
                      y2="16.24"
                    />  <line
                      x1="16.24"
                      y1="7.76"
                      x2="19.07"
                      y2="4.93"
                    /></svg>
                    {{ $t('sendjob') }}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
<script>
import axios from 'axios'
import jsCookie from 'js-cookie'

export default {
  metaInfo () {
    return {
      title: this.$page.recruitment.title,
      meta: [
        { key: 'description', name: 'description', content: this.$static.siteDescription },
        { name: 'author', content: 'Linkom' },
        {
          property: 'og:title',
          content: this.$page.recruitment.title,
          vmid: 'og:title'
        },
        {
          property: 'og:description',
          content: this.$static.siteDescription,
          vmid: 'og:description'
        }
      ]
    }
  },
  hs: {
    portalId: 19529553,
    formId: 'c8a76b8e-f635-4500-ba70-a9eadbd90177'
  },
  data: _ => ({
    sending: false,
    sent: false,
    hutk: null,
    form: {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      job: ''
    },
    file: '',
    isError: false,
    errorText: null,
    attachement: {},
    docRefId: null
  }),
  mounted () {
    const utk = jsCookie.get('hubspotutk')

    if (utk) this.hutk = utk
  },

  methods: {
    handleFileUpload () {
      this.file = this.$refs.cv.files[0]
    },
    emptyFileField () {
      this.file = ''
      this.$refs.cv = ''
    },
    onAddFiles (files) {
      this.sending = true
      // Push all the axios request promise into a single array
      const formData = new FormData()
      formData.append('file', this.file)
      formData.append('upload_preset', 'wjslrcff')
      formData.append('api_key', '122652675671769')
      formData.append('folder', 'CVs')
      formData.append('timestamp', (Date.now() / 1000) | 0)

      // Make an AJAX upload request using Axios
      return axios.post('https://api.cloudinary.com/v1_1/dj8eemht7/upload', formData, {
        headers: { 'X-Requested-With': 'XMLHttpRequest' }
      }).then(response => {
        const data = response.data
        let format = ''
        if (data.format !== undefined) {
          format = data.format
        } else {
          format = data.resource_type
        }
        this.attachement = Object.assign(this.attachement, {
          public_id: data.public_id,
          format: format,
          size: data.bytes,
          original_filename: data.original_filename,
          type: data.resource_type,
          url: data.secure_url
        })
      })
    },
    async submit () {
      await this.onAddFiles(this.$refs.cv)
      console.log(this.attachement)
      try {
        await axios.post(
          'https://api.hsforms.com/submissions/v3/integration/submit/' +
            `${this.$options.hs.portalId}/${this.$options.hs.formId}`, {
            fields: [
              {
                name: 'firstname',
                value: this.form.firstname
              },
              {
                name: 'lastname',
                value: this.form.lastname
              },
              {
                name: 'phone',
                value: this.form.phone
              },
              {
                name: 'email',
                value: this.form.email
              },
              {
                name: 'jobtitle',
                value: this.form.job
              },
              {
                name: 'cv_file',
                value: this.attachement.url
              }
            ],
            context: {
              pageUri: 'https://Tohfa-meubles.dz',
              pageName: 'Page recrutement',
              hutk: this.hutk
            }
          }
        )
        this.sent = true
      } catch (e) {} finally {
        this.sending = false
      }
    }
  }

}
</script>
<style>
  .required:after {
    content: " *";
    color: red;
  }
</style>
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
  recruitment: singlePage (path: "/content/recruitment") {
   title,
   name{fr,en,ar},
   image,
   description{fr,en,ar}
  }
}
</page-query>
