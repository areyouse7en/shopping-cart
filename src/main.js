import Vue from 'vue'

// 路由
import router from './router'

// Vuex
import store from './store'

// 渲染应用
import App from './App.vue'
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
