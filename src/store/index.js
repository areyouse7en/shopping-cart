import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import products from './modules/products';

const config = {
    actions,
    getters,
    modules: {
        products
    }
}

export default new Vuex.Store(config)
