// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VideoPlayer from 'vue-video-player'
import axios from 'axios'
import VueCookies from 'vue-cookies'
import store from '../store'
// 引入echarts
import echarts from 'echarts'

Vue.prototype.$echarts = echarts
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(ElementUI)
Vue.use(VideoPlayer)
Vue.config.productionTip = false
Vue.use(VueCookies)
Vue.use(VideoPlayer)
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.prototype.$ip = 'www.zhihuiyanglao.work'
Vue.prototype.$port = '8099'

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})

// set default config
Vue.$cookies.config('3d')

axios.interceptors.request.use(
  config => {

    if (localStorage.getItem('token')) {
      // console.log('请求头加入token')
      config.headers.token = localStorage.getItem('token')
    }

    return config

  },

  error => {
    return Promise.reject(error)

  })

//异步请求后，判断token是否过期
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          localStorage.removeItem('token');
          this.$router.push('/');
      }
    }
  }
)

// 异步请求前判断请求的连接是否需要token
router.beforeEach((to, from, next) => {

  if (to.path === '/Index') {
    next()
  } else {

    let token = localStorage.getItem('token')
    // console.log('我是浏览器本地缓存的token: ' + token)

      if (token === 'null' || token === '') {
        console.log('token 不存在')
        next('/HelloWorld')
      } else {
        next()
      }

    }
  }
)
