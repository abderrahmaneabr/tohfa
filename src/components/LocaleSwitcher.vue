<template>
  <select
    v-model="currentLocale"
    class="bg-gray-50 sm:bg-white py-0 border-none text-lg sm:text-sm text-gray-900 sm:text-gray-500 hover:text-gray-900 font-medium focus:border-gray-50 uppercase"
    @change="localeChanged"
  >
    <option
      v-for="locale in availableLocales"
      :key="locale"
      :value="locale"
    >
      {{ $t(locale).toUpperCase() }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'LocaleSwitcher',
  data: function () {
    return {
      currentLocale: this.$i18n.locale.toString(),
      availableLocales: this.$i18n.availableLocales
    }
  },
  methods: {
    localeChanged () {
      this.$router.push({
        path: this.$tp(this.$route.path, this.currentLocale, true)
      })
    }
  }
}
</script>
