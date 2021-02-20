<template>
  <a
    v-if="settings.github"
    :href="githubUrls.repo"
    target="_blank"
    rel="noopener noreferrer"
    title="Github"
    name="Github"
    class="inline-flex text-gray-700 dark:text-gray-300 text-4xl"
  >
    <FontAwesomeIcon :icon="faGithub" class="hover:text-primary-500" />
  </a>
</template>

<script>
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([ 'settings', 'githubUrls' ]),
    faGithub () {
      return faGithub
    }
  }
}
</script>
