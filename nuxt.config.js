const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.8/css/all.css'},
      {rel: 'script', href: 'https://cdnjs.cloudflare.com/ajax/libs/split.js/1.3.5/split.min.js'},
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/main.css'
          // CSS file in the project
          // '@/assets/css/main.css',
          // SCSS file in the project
          // '@/assets/css/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/navbar.js',
    '~/plugins/dangerAlert.js',
    '~/plugins/successAlert.js',
    '~/plugins/warningAlert.js',
    '~/plugins/vee.js',
    '~/plugins/fa.js',
    '~/plugins/tab.js',

    '~/plugins/axios'

  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt'
  ],
  /*
  ** Axios module configuration
  */
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'auth/login', method: 'post', propertyName: 'access_token' },
          logout: false,
          user: { url: 'auth/me', method: 'get', propertyName: false }
        },
        // tokenRequired: true,
        // tokenType: 'bearer',
      }
    },
    // redirect: {
    //   login: '/login',
    //   logout: '/',
    //   callback: '/login',
    //   home: '/new-days'
    // }    
  },

  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: 'http://calendar-app.arimac.digital/'
  },


  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  },
  router: {
    middleware: ['auth']
  }
}
