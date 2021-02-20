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
      }
    },
    configuration
  )
)
