<template>
  <div v-if="toc.length" class="w-full lg:w-1/4 block relative">
    <div class="lg:sticky lg:top-16 overflow-y-auto h-full lg:h-auto lg:max-h-(screen-16)">
      <nav
        class="py-4 lg:py-8"
        :class="{
          'lg:pl-8 lg:pr-2': settings.layout !== 'single',
          'lg:px-8': settings.layout === 'single'
        }"
      >
        <div class="flex justify-between self-center group" @click.stop="tocToggle = !tocToggle">
          <span class="mb-3 lg:mb-2 text-gray-600 dark:text-gray-400 uppercase tracking-wider font-bold">
            <p class="group-hover:text-primary-500 block-inline lg:hidden">{{ $t('toc.title') }}</p>
            <p class="hidden lg:inline">{{ $t('toc.title') }}</p>
          </span>
          <span class="lg:hidden text-xl mr-2" aria-label="Toggle table of contents for this page.">
            <FontAwesomeIcon v-if="tocToggle" class="text-gray-700 dark:text-gray-300 group-hover:text-primary-500" :icon="faChevronCircleUp" />
            <FontAwesomeIcon v-else class="text-gray-700 dark:text-gray-300 group-hover:text-primary-500" :icon="faChevronCircleDown" />
          </span>
        </div>
        <div
          class="lg:block"
          :class="{
            block: tocToggle,
            hidden: !tocToggle
          }"
        >
          <scrollactive highlight-first-item active-class="text-primary-500" :offset="0" tag="ul">
            <li
              v-for="link of toc"
              :key="link.id"
              class="text-gray-700 dark:text-gray-300"
              :class="{
                'border-t border-dashed dark:border-gray-800 first:border-t-0': link.depth === 2
              }"
            >
              <a
                :href="`#${link.id}`"
                class="block scrollactive-item transition-padding ease-in-out duration-300 hover:pl-1"
                :class="{
                  'py-2': link.depth === 2,
                  'ml-2 pb-2': link.depth === 3,
                  'ml-3 pb-2': link.depth === 4,
                  'ml-4 pb-2': link.depth === 5,
                  'ml-5 pb-2': link.depth === 6
                }"
              >{{ link.text }}</a>
            </li>
          </scrollactive>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import { faChevronCircleUp, faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'
import { mapGetters } from 'vuex'

export default {
  props: {
    toc: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      tocToggle: false
    }
  },
  computed: {
    ...mapGetters([ 'settings' ]),
    faChevronCircleUp () {
      return faChevronCircleUp
    },
    faChevronCircleDown () {
      return faChevronCircleDown
    }
  }
}
</script>
