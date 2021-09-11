<template>
  <div class="alert border-l-4 p-2 mb-2 mt-2">
    <div class="flex items-start">
      <div class="flex-shrink-0">
        <FontAwesomeIcon :icon="icons.faGithubSquare" class="alert-icon mt-px w-12 h-12" />
      </div>
      <div class="flex-grow ml-2 overflow-auto alert-content">
        <p>
          This is feature is related to the
          <a :href="store.githubUrls.repo + '/issues/' + issue">issue #{{ issue }}</a>.
        </p>
        <p>
          Thanks <a :href="githubIssue.user.html_url">{{ githubIssue.user.login }}</a> for bringing this up!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { defineComponent, useContext, useStatic, useStore } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    issue: {
      required: true,
      type: String
    }
  },
  setup (props) {
    const { $axios } = useContext()
    const store = useStore()

    const githubUrls = store.getters.githubUrls
    const settings = store.getters.settings

    const githubIssue = useStatic(
      async () => {
        const response = await $axios.get('https://api.github.com/repos/' + settings.github + '/issues/' + props.issue)

        return response.data
      },
      props.issue,
      props.issue
    )

    return {
      store: {
        githubUrls
      },
      icons: {
        faGithubSquare
      },
      githubIssue
    }
  }
})
</script>

<style lang="postcss">
.alert p {
  @apply m-0 !important;
}

.alert a {
  @apply text-gray-700 !important;
}
.dark .alert a {
  @apply text-gray-300 !important;
}

.alert strong {
  @apply text-current;
}

.alert-content pre code {
  background-color: inherit !important;
}
</style>
