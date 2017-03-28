export default {
    data() {
            return {
                products: [{
                    title: 'iphone6',
                    price: '5888'
                }, {
                    title: 'iphone7',
                    price: '6288'
                }]
            }
        },
        methods: {
            addToCart: function(p) {
                console.log(p);
            }
        }
}
