<template lang="pug">
.cart
	h2 cart
	p(v-show="!products.length") 请添加产品
	ul
		li(v-for="p in products") {{p.title}} - {{p.price}} * {{p.quantity}}
	p 总计：{{total}}
	p(v-show="checkoutStatus") 结算{{checkoutStatus}}。
</template>

<script src="./cart.js"></script>