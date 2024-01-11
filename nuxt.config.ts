// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss', 'nuxt-icon'
  ],

  css: [
    "~/assets/css/input.css",
  ],

  app: {
    head: {
      title: 'Elvis Appiah Portfolio',
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Montserrat:ital,wght@0,400;0,600;0,700;1,500;1,700&family=Roboto+Slab:wght@100;200;300;500;600;700;800;900&display=swap',
        },

      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Software Engineer Portfolio'
        }
      ],
    }
  },
})
