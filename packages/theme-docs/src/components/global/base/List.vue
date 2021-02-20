<template>
  <div>
    <div v-for="(item, i) in items" :key="i" class="mt-3 flex">
      <span :class="`list-${type}`" class="mt-px mr-3 flex-shrink-0">
        <FontAwesomeIcon :icon="iconName" class="h-6 w-6" />
      </span>
      {{ item }}
    </div>
  </div>
</template>

<script>
import { faInfoCircle, faCheckCircle, faExclamationCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

export default {
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
          primary: 'IconBadgeCheck',
          success: faCheckCircle,
          info: faInfoCircle,
          warning: faExclamationCircle,
          danger: faTimesCircle
        }[this.type]
      )
    }
  }
}
</script>

<style>
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
