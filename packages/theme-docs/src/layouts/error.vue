<template>
  <div class="flex flex-wrap-reverse">
    <div class="py-4 w-full lg:pt-8 lg:pb-4 lg:w-3/4 lg:border-r lg:border-l dark:border-gray-800">
      <article class="lg:px-8">
        <h1 class="mb-4 text-4xl font-semibold font-black leading-none text-center text-red-500">{{ error.message }}</h1>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true
    }
  },
  head () {
    return {
      title: this.error.message
    }
  }
}
</script>
