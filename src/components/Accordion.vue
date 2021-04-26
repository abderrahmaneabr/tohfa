<template>
  <dl class="relative divide-y divide-gray-200">
    <div class="pt-6 lg:pt-8">
      <dt class="text-lg">
        <!-- Expand/collapse question button -->
        <button
          class="text-left w-full flex justify-between items-start text-gray-400"
          @click.prevent="isOpen = !isOpen"
        >
          <span
            class="text-xl font-medium "
            :class="isOpen ? 'text-yellow-600' : 'text-gray-900'"
          >
            {{ title }}
          </span>
          <span class="mx-0 h-7 flex items-center">
            <svg
              class="h-6 w-6 transform"
              :class="isOpen ? '-rotate-180' : 'rotate-0'"
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
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </button>
      </dt>
      <dd
        v-show="isOpen"
        class="mt-2"
      >
        <slot />
      </dd>
    </div>
  </dl>
</template>

<script>
export default {
  props: [
    'title'
  ],
  data () {
    return {
      isOpen: false
    }
  }
}
</script>
