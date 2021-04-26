<template>
  <Layout>
    <div class="relative bg-yellow-900">
      <div class="absolute inset-0">
        <g-image
          class="hidden sm:block w-full h-full object-cover"
          :src="`${$page.contact.image}?nf_resize=smartcrop&w=1400&h=600`"
          :alt="$page.contact.name.fr"
        />
        <g-image
          class="block sm:hidden w-full h-full object-cover"
          :src="`${$page.contact.image}?nf_resize=smartcrop&w=700&h=500`"
          :alt="$page.contact.name.fr"
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
            {{ $page.contact.name.fr }}
          </span>
          <span v-if="$context.locale == 'en-gb'">
            {{ $page.contact.name.en }}
          </span>
          <span v-if="$context.locale == 'ar-dz'">
            {{ $page.contact.name.ar }}
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
                      :to="$tp('/contact/')"
                      aria-current="page"
                      class="mx-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                    >
                      <span v-if="$context.locale == 'fr-fr'">
                        {{ $page.contact.name.fr }}
                      </span>
                      <span v-if="$context.locale == 'en-gb'">
                        {{ $page.contact.name.en }}
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
    <div class="bg-gray-100">
      <div class="max-w-7xl mx-auto py-4 px-4 sm:py-12 sm:px-6 lg:px-8">
        <div class="relative bg-white shadow rounded-lg overflow-hidden">
          <h2 class="sr-only">
            <span v-if="$context.locale == 'fr-fr'">
              {{ $page.contact.name.fr }}
            </span>
            <span v-if="$context.locale == 'en-gb'">
              {{ $page.contact.name.en }}
            </span>
          </h2>

          <div class="grid grid-cols-1 lg:grid-cols-3">
            <!-- Contact information -->
            <div class="relative overflow-hidden py-10 px-6 bg-yellow-400 sm:px-10 xl:p-12">
              <div
                class="absolute inset-0 pointer-events-none sm:hidden"
                aria-hidden="true"
              >
                <svg
                  class="absolute inset-0 w-full h-full"
                  width="343"
                  height="388"
                  viewBox="0 0 343 388"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                    fill="url(#linear1)"
                    fill-opacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear1"
                      x1="254.553"
                      y1="107.554"
                      x2="961.66"
                      y2="814.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#fff" />
                      <stop
                        offset="1"
                        stop-color="#fff"
                        stop-opacity="0"
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                aria-hidden="true"
              >
                <svg
                  class="absolute inset-0 w-full h-full"
                  width="359"
                  height="339"
                  viewBox="0 0 359 339"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                    fill="url(#linear2)"
                    fill-opacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear2"
                      x1="192.553"
                      y1="28.553"
                      x2="899.66"
                      y2="735.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#fff" />
                      <stop
                        offset="1"
                        stop-color="#fff"
                        stop-opacity="0"
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                aria-hidden="true"
              >
                <svg
                  class="absolute inset-0 w-full h-full"
                  width="160"
                  height="678"
                  viewBox="0 0 160 678"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                    fill="url(#linear3)"
                    fill-opacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear3"
                      x1="192.553"
                      y1="325.553"
                      x2="899.66"
                      y2="1032.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#fff" />
                      <stop
                        offset="1"
                        stop-color="#fff"
                        stop-opacity="0"
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 class="text-lg font-medium text-gray-900">
                {{ $t('contactinfo') }}
              </h3>
              <p class="mt-6 text-base text-gray-900 max-w-3xl">
                <span v-if="$context.locale == 'fr-fr'">
                  {{ $page.contact.description.fr }}
                </span>
                <span v-if="$context.locale == 'en-gb'">
                  {{ $page.contact.description.en }}
                </span>
                <span v-if="$context.locale == 'ar-dz'">
                  {{ $page.contact.description.ar }}
                </span>
              </p>
              <dl class="mt-8 space-y-6">
                <dt><span class="sr-only">{{ $t('address') }}</span></dt>
                <dd class="flex text-base text-gray-900">
                  <!-- Heroicon name: outline/mail -->
                  <svg
                    class="flex-shrink-0 w-6 h-6 text-gray-900"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />  <circle
                    cx="12"
                    cy="10"
                    r="3"
                  /></svg>
                  <span
                    class="mx-3"
                  >{{ $page.contact.address }}
                  </span>
                </dd>
                <dt><span class="sr-only">{{ $t('phone') }}</span></dt>
                <dd class="flex text-base text-gray-900">
                  <!-- Heroicon name: outline/phone -->
                  <svg
                    class="flex-shrink-0 w-6 h-6 text-gray-900"
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span
                    class="mx-3"
                    dir="ltr"
                  >{{ $page.contact.phones }} </span>
                </dd>
                <dt v-if="$page.contact.fax">
                  <span class="sr-only">{{ $t('fax') }}</span>
                </dt>
                <dd
                  v-if="$page.contact.fax"
                  class="flex text-base text-gray-900"
                >
                  <!-- Heroicon name: outline/fax -->
                  <svg
                    class="flex-shrink-0 w-6 h-6 text-gray-900"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >  <polyline points="6 9 6 2 18 2 18 9" />  <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />  <rect
                    x="6"
                    y="14"
                    width="12"
                    height="8"
                  /></svg>
                  <span
                    class="mx-3"
                    dir="ltr"
                  >{{ $page.contact.fax }} </span>
                </dd>
                <dt><span class="sr-only">{{ $t('email') }}</span></dt>
                <dd class="flex text-base text-gray-900">
                  <!-- Heroicon name: outline/mail -->
                  <svg
                    class="flex-shrink-0 w-6 h-6 text-gray-900"
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span
                    class="mx-3"
                    dir="ltr"
                  >{{ $page.contact.emails }}
                  </span>
                </dd>
              </dl>
              <div class="mt-8 flex -mx-3">
                <g-link
                  v-if="$page.contact.social.facebook"
                  :to="$page.contact.social.facebook"
                  class="text-gray-900 hover:text-gray-800 mx-3"
                >
                  <span class="sr-only">Facebook</span>
                  <svg
                    class="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </g-link>
                <g-link
                  v-if="$page.contact.social.linkedin"
                  :to="$page.contact.social.linkedin"
                  class="text-gray-900 hover:text-gray-800 mx-3"
                >
                  <span class="sr-only">LinkedIn </span>
                  <svg
                    class="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect
                    x="2"
                    y="9"
                    width="4"
                    height="12"
                  />  <circle
                    cx="4"
                    cy="4"
                    r="2"
                  /></svg>
                </g-link>
                <g-link
                  v-if="$page.contact.social.instagram"
                  :to="$page.contact.social.instagram"
                  class="text-gray-900 hover:text-gray-800"
                >
                  <span class="sr-only">Instagram</span>
                  <svg
                    class="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </g-link>
              </div>
            </div>

            <!-- Contact form -->
            <div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
              <h3
                v-if="!sent"
                class="text-lg font-medium text-gray-900"
              >
                {{ $t('sendmsg') }}
              </h3>
              <div
                v-if="sent"
                class="relative"
              >
                <div class="flex items-end justify-center pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                  <div
                    class="inline-block align-bottom bg-gray-50 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-md transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6"
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
                class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                @submit.prevent="submit"
              >
                <div>
                  <label
                    for="lastname"
                    class="block text-sm font-medium text-gray-900 required"
                    required
                  >{{ $t('lname') }}</label>
                  <div class="mt-1">
                    <input
                      id="lastname"
                      v-model="form.lastname"
                      type="text"
                      class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      required
                    >
                  </div>
                </div>
                <div>
                  <label
                    for="firstname"
                    class="block text-sm font-medium text-gray-900 required"
                  >{{ $t('fname') }}</label>
                  <div class="mt-1">
                    <input
                      id="firstname"
                      v-model="form.firstname"
                      type="text"
                      class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    >
                  </div>
                </div>

                <div>
                  <label
                    for="email"
                    class="block text-sm font-medium text-gray-900 required"
                  >{{ $t('email') }}</label>
                  <div class="mt-1">
                    <input
                      id="email"
                      v-model="form.email"
                      type="email"
                      class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      required
                    >
                  </div>
                </div>
                <div>
                  <div class="flex justify-between">
                    <label
                      for="phone"
                      class="block text-sm font-medium text-gray-900 required"
                    >{{ $t('phone') }}</label>
                  </div>
                  <div class="mt-1">
                    <input
                      id="phone"
                      v-model="form.phone"
                      type="text"
                      class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      required
                    >
                  </div>
                </div>
                <div>
                  <label
                    for="subject"
                    class="block text-sm font-medium text-gray-900"
                  >{{ $t('company') }}</label>
                  <div class="mt-1">
                    <input
                      id="company"
                      v-model="form.company"
                      type="text"
                      class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    >
                  </div>
                </div>
                <div>
                  <label
                    for="wilaya"
                    class="block text-sm font-medium text-gray-900"
                  >{{ $t('city') }}</label>
                  <div class="mt-1">
                    <input
                      id="wilaya"
                      v-model="form.wilaya"
                      type="text"
                      class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    >
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label
                    for="subject"
                    class="block text-sm font-medium text-gray-900"
                  >{{ $t('subject') }}</label>
                  <div class="mt-1">
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    >
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <div class="flex justify-between">
                    <label
                      for="message"
                      class="block text-sm font-medium text-gray-900"
                    >{{ $t('message') }}</label>
                  </div>
                  <div class="mt-1">
                    <textarea
                      id="message"
                      v-model="form.message"
                      rows="4"
                      class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div class="sm:col-span-2 sm:flex sm:justify-end">
                  <button
                    type="submit"
                    class="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-gray-700 bg-yellow-400 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:w-auto"
                  >
                    {{ $t('sendnow') }}
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
      title: this.$page.contact.title,
      meta: [
        { key: 'description', name: 'description', content: this.$static.siteDescription },
        { name: 'author', content: 'Linkom' },
        {
          property: 'og:title',
          content: this.$page.contact.title,
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
    formId: '88958475-0933-4a41-9c69-3407a7615589'
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
      wilaya: '',
      company: '',
      subject: '',
      message: ''
    }
  }),
  mounted () {
    const utk = jsCookie.get('hubspotutk')

    if (utk) this.hutk = utk
  },

  methods: {
    async submit () {
      this.sending = true

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
                name: 'state',
                value: this.form.wilaya
              },
              {
                name: 'company',
                value: this.form.company
              },
              {
                name: 'subject',
                value: this.form.subject
              },
              {
                name: 'message',
                value: this.form.message
              }
            ],
            context: {
              pageUri: 'https://Tohfa-meubles.dz',
              pageName: 'Page contact',
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
  contact: singlePage (path: "/content/contact") {
   title,
   name{fr,en,ar},
   image,
   description{fr,en,ar},
   phones,
   emails,
   fax,
   address,
   social{facebook,instagram,linkedin}
  }
}
</page-query>
