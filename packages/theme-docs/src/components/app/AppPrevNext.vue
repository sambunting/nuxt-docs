<template>
  <div
    v-if="prev || next"
    class="grid grid-cols-2 gap-2 lg:px-8 pt-4 border-t dark:border-gray-800"
    :class="{
      'lg:border-t-0': settings.layout === 'single'
    }"
  >
    <NuxtLink v-if="prev" :to="localePath(prev.to)" class="text-primary-500 font-bold hover:underline flex items-center justify-start">
      <FontAwesomeIcon :icon="faLongArrowAltLeft" class="w-4 h-4 mr-2 flex-shrink-0" />
      <span class="truncate">{{ prev.title }}</span>
    </NuxtLink>
    <span v-else>&nbsp;</span>

    <NuxtLink v-if="next" :to="localePath(next.to)" class="text-primary-500 font-bold hover:underline flex items-center justify-end">
      <span class="truncate">{{ next.title }}</span>
      <FontAwesomeIcon :icon="faLongArrowAltRight" class="w-4 h-4 ml-2 flex-shrink-0" />
    </NuxtLink>
    <span v-else>&nbsp;</span>
  </div>
</template>

<script>
import { faLongArrowAltLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { mapGetters } from 'vuex'

export default {
  props: {
    prev: {
      type: Object,
      default: () => null
    },
    next: {
      type: Object,
      default: () => null
    }
  },
  computed: {
    ...mapGetters([ 'settings' ]),
    faLongArrowAltLeft () {
      return faLongArrowAltLeft
    },
    faLongArrowAltRight () {
      return faLongArrowAltRight
    }
  }
}
</script>
