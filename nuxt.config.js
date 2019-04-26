import pkg from './package'
export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: "房源",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: '西安房产网，西安新房楼盘，西安优质新房，西安新房在售，西安房价，西安买房网' },
      { hid: 'description', name: 'description', content: '房源网为客户提供新房信息。包括西安新房最新动态、楼市政策、新闻、买优质新房就上房源网' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
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
  // 启动服务端口
  server: {
    port: 3001, // default: 3000
  },
  //中间件使用
  router: {
    middleware: "auth"
  },
  //css的配置
  css: [
    // swiper插件
    '~~/assets/css/swiper.min.css'
  ]
};
