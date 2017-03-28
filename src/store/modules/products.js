import shop from '../../apis/shop';

// 初始化状态
const state = {
    all: []
}

// getters
const getters = {
    allProducts: state => state.all
}
