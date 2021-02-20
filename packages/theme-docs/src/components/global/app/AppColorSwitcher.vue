<template>
  <span class="inline-flex">
    <button
      class="rounded-md hover:text-primary-500 focus:outline-none transition ease-in-out duration-150"
      aria-label="Color Mode"
      @click="$colorMode.value === 'dark' ? ($colorMode.preference = 'light') : ($colorMode.preference = 'dark')"
    >
      <client-only>
        <div
          class="bg-gray-200 transition-all dark:bg-gray-700 text-sm text-gray-800 dark:text-gray-300 leading-none border-2 border-gray-200 dark:border-gray-800 rounded-full inline-flex overflow-hidden focus:outline-none"
        >
          <button
            class="inline-flex items-center transition-all duration-300 ease-in focus:outline-none hover:text-primary-500 rounded-r-full px-4 py-2 focus:outline-none"
            :class="{ 'rounded-full bg-gray-400 dark:bg-gray-600': $colorMode.value === 'light' }"
          >
            <FontAwesomeIcon :icon="faLightbulb" class="text-xl focus:outline-none" />
          </button>
          <button
            class="inline-flex items-center transition-all duration-300 ease-in focus:outline-none hover:text-primary-500 rounded-l-full px-4 py-2 focus:outline-none"
            :class="{ 'rounded-full bg-gray-400 dark:bg-gray-600': $colorMode.value === 'dark' }"
          >
            <FontAwesomeIcon :icon="faMoon" class="text-xl focus:outline-none" />
          </button>
        </div>
      </client-only>
    </button>
  </span>
</template>

<script>
import { faLightbulb, faMoon } from '@fortawesome/free-regular-svg-icons'

export default {
  computed: {
    faLightbulb () {
      return faLightbulb
    },
    faMoon () {
      return faMoon
    }
  }
}
</script>>
