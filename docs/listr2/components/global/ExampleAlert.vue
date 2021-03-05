<template>
  <alert type="info">
    <i>Please refer to <a :href="example.link">{{ example.name }}</a> for more detailed and further examples.</i>
  </alert>
</template>

<script>
export default {
  props: {
    example: {
      type: Object,
      default: () => ({
        name: 'examples section',
        link: '',
        inRepo: false
      })
    }
  }
}
</script>
