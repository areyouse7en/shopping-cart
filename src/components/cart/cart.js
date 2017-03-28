import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters({
            products: 'cartProducts',
            checkoutStatus: 'checkoutStatus'
        }),
        total() {
            return this.products.reduce((total, p) => {
                return total + p.price * p.quantity
            }, 0)
        }
    },
    methods: {
        checkout(products) {
            this.$store.dispatch('checkout', products)
        }
    }
}
