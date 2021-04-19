export const configuration = {
  host: '0.0.0.0',
  content: {
    markdown: { tocDepth: 4 }
  },
  i18n: {
    locales: () => [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.js',
        name: 'English'
      }
    ],
    defaultLocale: 'en'
  },
  colorMode: {
    classSuffix: ''
  },
  server: {
    host: '0.0.0.0'
  },
  tailwind: {
    jit: true
  }
}
