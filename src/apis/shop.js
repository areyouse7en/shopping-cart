/**
 * Mocking client-server processing
 */

const _products = [
    { "id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2 },
    { "id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10 },
    { "id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5 }
]

export default {
    // 获取产品列表
    getProducts(cb) {
            // 模拟ajax
            setTimeout(() => cb(_products), 1000)
        },
        // 结算产品
        buyProducts(products, cb, errorCb) {
            setTimeout(() => {
                Math.random() > 0.5 ? cb() : errorCb()
            }, 1000)
        }
}
