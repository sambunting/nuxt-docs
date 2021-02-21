import theme from '@cenk1cenk2/nuxt-content-theme-docs'
import defu from 'defu'

import { configuration } from '../../nuxt.config'

export default theme(
  defu(
    {
      pwa: {
        manifest: {
          name: '@cenk1cenk2/listr2'
        }
      },
      ackee: {
        server: 'https://ackee.kilic.dev',
        domainId: '7b3c9779-442c-40c6-9931-ea71977c52a8',
        detailed: true
      }
    },

    configuration
  )
)
