<template>
  <div v-click-away="'close'" class="inline-block relative text-left" @mouseenter="open = true" @mouseleave="open = false" @keydown.escape="open = false">
    <slot name="trigger" :toggle="toggle" :open="open" />

    <transition
      enter-class="opacity-0 transform scale-95"
      enter-active-class="transition duration-100 ease-out"
      enter-to-class="opacity-100 transform scale-100"
      leave-class="opacity-100 transform scale-100"
      leave-active-class="transition duration-75 ease-in"
      leave-to-class="opacity-0 transform scale-95"
    >
      <div v-show="open" class="absolute right-0 bottom-0 z-50 mt-2 w-auto rounded-md shadow-lg origin-top-right">
        <div class="bg-white rounded-md dark:bg-gray-800 shadow-xs">
          <slot />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

import ClickAway from '~/directives/click-away'

export default defineComponent({
  name: 'Dropdown',
  directives: {
    'click-away': ClickAway
  },
  data () {
    return {
      open: false
    }
  },
  methods: {
    toggle () {
      this.open = !this.open
    },
    close () {
      this.open = false
    }
  }
})
</script>
