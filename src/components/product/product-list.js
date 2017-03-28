import { mapGetters, mapActions } from 'vuex'

export default {
    computed: mapGetters({
        // 对应products.js的getters
        products: 'allProducts'
    }),
    methods: mapActions([
        'addToCart'
    ]),
    created() {
        // 对应product.js的actions
        this.$store.dispatch('getAllProducts')
    }
}
