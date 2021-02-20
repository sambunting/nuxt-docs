import consola from 'consola'
import defu from 'defu'

import { defaultConfig } from './default.config'

export default (userConfig) => {
  consola.info('Starting up @cenk1cenk2/nuxt-content-theme-docs')

  userConfig.docs = defu(userConfig.docs, {
    primaryColor: '#cd0043'
  })

  const config = defu.arrayFn(userConfig, defaultConfig(userConfig.docs))

  if (userConfig.env && userConfig.env.GITHUB_TOKEN) {
    // eslint-disable-next-line no-console
    console.warn('[security] Avoid passing `env.GITHUB_TOKEN` directly in `nuxt.config`. Use `.env` file instead!')
    userConfig.privateRuntimeConfig.GITHUB_TOKEN = userConfig.env.GITHUB_TOKEN
    delete userConfig.env.GITHUB_TOKEN
  }

  return config
}
