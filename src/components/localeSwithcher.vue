<template>
  <ul>
    <span>Lang:</span>
    <li v-for="locale in locales" :key="locale" @click="switchLocale(locale)"
        class="ml-1.5 cursor-pointer hover:text-lime-400">
      {{ locale }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'localeSwitcher',
  data() {
    return {
      locales: process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(',')
    }
  },
  methods: {
    switchLocale(locale) {
      if (this.$i18n.locale !== locale) {
        this.$i18n.locale = locale
      }
    }
  }
}
</script>