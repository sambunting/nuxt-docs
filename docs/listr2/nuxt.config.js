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
        domainId: 'bb020572-babc-4932-aaf7-787e2dc9d66f',
        detailed: true
      }
    },

    configuration
  )
)
