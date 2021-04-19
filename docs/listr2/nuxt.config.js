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
      head: {
        title: 'Listr2',
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          {
            hid: 'description',
            name: 'description',
            content: 'Documentation for npm package listr2.'
          }
        ],
        link: [
          {
            rel: 'icon',
            type: 'image/x-icon',
            href: '/favicon.ico'
          }
        ]
      }
    },

    configuration
  )
)
