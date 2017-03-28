import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import * as actions from './actions'
import * as getters from './getters'
import cart from './modules/cart'
import products from './modules/products'

const config = {
    actions,
    getters,
    modules: {
        cart,
        products
    }
}

export default new Vuex.Store(config)
