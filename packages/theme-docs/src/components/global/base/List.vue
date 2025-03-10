<template>
  <div>
    <div v-for="(item, i) in items" :key="i" class="flex mt-3">
      <span :class="`list-${type}`" class="flex-shrink-0 mt-px mr-3">
        <FontAwesomeIcon v-if="type !== 'primary'" :icon="iconName" class="w-6 h-6" />
        <IconBadgeCheck v-if="type === 'primary'" class="w-6 h-6" />
      </span>
      {{ item }}
    </div>
  </div>
</template>

<script>
import { faInfoCircle, faCheckCircle, faExclamationCircle, faTimesCircle, faCheckDouble } from '@fortawesome/free-solid-svg-icons'
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    items: {
      type: Array,
      default: () => []
    },
    icon: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'primary',
      validator (value) {
        return [ 'primary', 'info', 'success', 'warning', 'danger' ].includes(value)
      }
    }
  },
  computed: {
    iconName () {
      return (
        this.icon ||
        {
          primary: faCheckDouble,
          success: faCheckCircle,
          info: faInfoCircle,
          warning: faExclamationCircle,
          danger: faTimesCircle
        }[this.type]
      )
    }
  }
})
</script>

<style lang="postcss">
/* Primary */
.list-primary {
  @apply text-primary-500;
}

/* Info */
.list-info {
  @apply text-blue-500;
}

/* Success */
.list-success {
  @apply text-green-500;
}

/* Warning */
.list-warning {
  @apply text-orange-500;
}

/* Danger */
.list-danger {
  @apply text-red-500;
}
</style>
