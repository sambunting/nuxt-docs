<template>
  <div class="code-block" :class="[active && 'active']">
    <slot />
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style lang="postcss" scoped>
.code-block {
  display: none;
}
.code-block.active {
  display: block;
}
</style>
