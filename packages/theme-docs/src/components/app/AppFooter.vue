<template>
  <footer class="h-16 relative w-full border-t dark:border-gray-800 bg-white dark:bg-gray-900 z-20">
    <div class="h-full w-full lg:container mx-auto px-4 lg:px-8 flex items-center justify-between">
      <div class="flex items-end">
        <a href="https://nuxtjs.org" target="_blank" rel="noopener">
          <BuiltWithNuxtLight class="h-4 light-img" />
          <BuiltWithNuxtDark class="h-4 dark-img" />
        </a>
      </div>
      <div class="flex items-center space-x-4">
        <a
          href="https://kilic.dev"
          rel="noopener noreferrer"
          title="kilic.dev"
          name="kilic.dev"
          class="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark-hover:text-primary-500 ml-4"
        >
          <span class="text-xl">kilic.dev</span>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  }
}
</script>
