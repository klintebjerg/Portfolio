export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],

  app: {
    head: {
      link: [
        { rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded'
        },
        { rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap'
        }
      ]
    }
  }
})