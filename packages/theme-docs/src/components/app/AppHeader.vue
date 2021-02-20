<template>
  <nav class="fixed top-0 z-40 w-full dark:border-gray-600 transition-colors transition-shadow" :class="{ 'shadow border-b bg-gray-100 dark:bg-gray-800': scrolled }">
    <div class="lg:container mx-auto flex-1 px-4 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="lg:w-1/5 flex items-center pr-4" @click.stop="noop">
          <NuxtLink :to="localePath('/')" class="flex-shrink-0 flex-1 font-bold text-3xl" :aria-label="`${settings.title} Logo`">
            <span v-if="!logo">{{ settings.title }}</span>

            <img v-if="logo" :src="logo.light" class="h-8 max-w-full light-img" :alt="settings.title" />
            <img v-if="logo" :src="logo.dark" class="h-8 max-w-full dark-img" :alt="settings.title" />
          </NuxtLink>
        </div>

        <div v-if="settings.layout !== 'single'" class="flex-1 flex justify-start w-4/6">
          <AppSearchAlgolia v-if="settings.algolia" :options="settings.algolia" :settings="settings" />
          <AppSearch v-else class="hidden lg:block" />
        </div>

        <div
          class="lg:w-1/5 flex items-center pl-4 lg:pl-8"
          :class="{ 'justify-between': lastRelease && settings.layout !== 'single', 'justify-end': !lastRelease || settings.layout === 'single' }"
        >
          <NuxtLink
            v-if="lastRelease"
            :to="localePath('/releases')"
            class="font-semibold leading-none text-gray-700 dark:text-gray-300 hover:text-primary-500 dark-hover:text-primary-500 text-lg mr-4"
            exact-active-class="text-primary-500"
          >{{ lastRelease.name }}</NuxtLink>

          <div class="flex items-center lg:inline hidden">
            <AppIcons />
          </div>
        </div>
      </div>
    </div>

    <!-- Menu button on smaller screens -->
    <div class="lg:hidden fixed z-50 bottom-4 right-4">
      <button v-if="settings.layout !== 'single'" class="rounded-full w-16 h-16 focus:outline-none bg-gray-600 text-white" aria-label="Menu" @click.stop="menu = !menu">
        <FontAwesomeIcon v-if="menu" :icon="fa.faTimes" class="text-3xl inline-block self-center hover:text-primary-500 pt-1" />
        <FontAwesomeIcon v-else :icon="fa.faBars" class="text-3xl inline-block self-center hover:text-primary-500 pt-1" />
      </button>
    </div>

    <!-- Go to top button -->
    <div v-if="scrolled" class="fixed z-50 bottom-4 left-4 lg:right-4">
      <button v-if="settings.layout !== 'single'" class="rounded-full w-16 h-16 focus:outline-none bg-gray-600 text-white" aria-label="Go to top." @click="scrollToTop()">
        <FontAwesomeIcon :icon="fa.faChevronUp" class="text-3xl inline-block self-center hover:text-primary-500" />
      </button>
    </div>
  </nav>
</template>

<script>
import { faChevronUp, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      scrolled: 0
    }
  },
  computed: {
    ...mapGetters([ 'settings', 'githubUrls', 'lastRelease' ]),
    menu: {
      get () {
        return this.$store.state.menu.open
      },
      set (val) {
        this.$store.commit('menu/toggle', val)
      }
    },
    logo () {
      if (!this.settings.logo) {
        return
      }

      if (typeof this.settings.logo === 'object') {
        return this.settings.logo
      }

      return {
        light: this.settings.logo,
        dark: this.settings.logo
      }
    },
    fa () {
      return {
        faChevronUp,
        faBars,
        faTimes
      }
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll()
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      this.scrolled = window.scrollY > 0
    },
    scrollToTop () {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    },
    noop () {}
  }
}
</script>
