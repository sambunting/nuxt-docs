<template>
  <span class="inline-flex">
    <button
      class="rounded-l-full transition duration-150 ease-in-out focus:outline-none"
      aria-label="Color Mode"
      @click="$colorMode.value === 'dark' ? ($colorMode.preference = 'light') : ($colorMode.preference = 'dark')"
    >
      <client-only>
        <div
          class="inline-flex overflow-hidden text-sm leading-none text-gray-800 rounded-full border-2 border-gray-300 transition-all dark:text-gray-300 dark:border-gray-700 hover:bg-gray-400 focus:outline-none dark-hover:bg-gray-600"
        >
          <span
            class="inline-flex items-center py-2 px-4 rounded-r-full transition-all duration-300 ease-in focus:outline-none"
            :class="{ 'rounded-full bg-gray-300 dark:bg-gray-600': $colorMode.value === 'light' }"
          >
            <FontAwesomeIcon :icon="faLightbulb" class="text-xl focus:outline-none" />
          </span>
          <span
            class="inline-flex items-center py-2 px-4 rounded-l-full transition-all duration-300 ease-in focus:outline-none"
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
