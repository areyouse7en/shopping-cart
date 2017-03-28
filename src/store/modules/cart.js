import shop from '../../apis/shop'
import * as types from '../mutation-types'

// 购物车状态
const state = {
    added: [],
    checkoutStatus: null
}

// getters
const getters = {
    checkoutStatus: state => state.checkoutStatus
}

// actins
const actions = {
    checkout({ commit, state }, products) {
        // ES6展开运算符
        const savedCartItems = [...state.added]
        commit(types.CHECKOUT_REQUEST)
        shop.buyProducts(
            products,
            () => commit(types.CHECKOUT_SUCCESS),
            () => commit(types.CHECKOUT_FAILURE, { savedCartItems })
        )
    }
}

// mutations
const mutations = {
    [types.ADD_TO_CART](state, { id }) {
        // 有疑问
        state.checkoutStatus = null
        const record = state.added.find(p => p.id === id)
        if (!record) {
            state.added.push({
                id,
                quantity: 1
            })
        } else {
            record.quantity++
        }
    },
    [types.CHECKOUT_REQUEST](state) {
        // 清空购物车
        state.added = []
        state.checkoutStatus = null
    },
    [types.CHECKOUT_SUCCESS](state) {
        state.checkoutStatus = '成功'
    },
    [types.CHECKOUT_FAILURE](state, { savedCartItems }) {
        // 不清空购物车
        state.added = savedCartItems
        state.checkoutStatus = '失败'
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
