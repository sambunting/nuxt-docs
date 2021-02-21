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
          <span class="rounded-lg bg-gray-200 dark:bg-gray-800 p-1">
            <FontAwesomeIcon :icon="fa.faTerminal" class="text-primary-500 text-lg pt-1" />
          </span>
          <span class="text-xl ml-1/2">kilic.dev</span>
        </a>
      </div>
    </div>
    <div class="block" style="padding-block: 40px"></div>
  </footer>
</template>

<script>
import { faTerminal } from '@fortawesome/free-solid-svg-icons'

export default {
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    },
    fa () {
      return { faTerminal }
    }
  }
}
</script>
