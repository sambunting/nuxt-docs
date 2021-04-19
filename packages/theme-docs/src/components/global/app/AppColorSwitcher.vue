<template>
  <span class="inline-flex">
    <button
      class="rounded-l-full focus:outline-none transition ease-in-out duration-150"
      aria-label="Color Mode"
      @click="$colorMode.value === 'dark' ? ($colorMode.preference = 'light') : ($colorMode.preference = 'dark')"
    >
      <client-only>
        <div
          class="transition-all text-sm text-gray-800 dark:text-gray-300 leading-none border-2 border-gray-300 dark:border-gray-700 hover:bg-gray-400 dark-hover:bg-gray-600 rounded-full inline-flex overflow-hidden focus:outline-none"
        >
          <span
            class="inline-flex items-center transition-all duration-300 ease-in focus:outline-none rounded-r-full px-4 py-2 focus:outline-none"
            :class="{ 'rounded-full bg-gray-300 dark:bg-gray-600': $colorMode.value === 'light' }"
          >
            <FontAwesomeIcon :icon="faLightbulb" class="text-xl focus:outline-none" />
          </span>
          <span
            class="inline-flex items-center transition-all duration-300 ease-in focus:outline-none rounded-l-full px-4 py-2 focus:outline-none"
            :class="{ 'rounded-full bg-gray-300 dark:bg-gray-600': $colorMode.value === 'dark' }"
          >
            <FontAwesomeIcon :icon="faMoon" class="text-xl focus:outline-none" />
          </span>
        </div>
      </client-only>
    </button>
  </span>
</template>

<script>
import { faLightbulb, faMoon } from '@fortawesome/free-regular-svg-icons'
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  computed: {
    faLightbulb () {
      return faLightbulb
    },
    faMoon () {
      return faMoon
    }
  }
})
</script>
>
