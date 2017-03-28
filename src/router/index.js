import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 页面
import Index from '../pages/index/index.vue'

const config = {
    routes: [{
        path: '/',
        name: 'Index',
        components: {
            default: Index
        }
    }]
}

export default new VueRouter(config)
