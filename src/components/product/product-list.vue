<template lang="pug">
.product-list
	ul
		li(v-for="p in products")
			div {{p.title}} - {{p.price}}
			button(:disabled="!p.inventory" @click="addToCart(p)") 加入购物车
</template>

<script src="./product-list.js"></script>

