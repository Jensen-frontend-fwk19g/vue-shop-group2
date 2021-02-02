<template>
  <article id="cart">
    <h1 class="emptyCartText" v-if="isEmpty()">Shopping cart is empty</h1>
  <div v-if="!isEmpty()" class="shopping-cart-list">
  
    <ShoppingCartItem 
      @click="removeItem(index)"
      v-for="(dog, index) in shoppingCartList"
      :key="dog.chipNumber"
      :dog="dog"
    />
    <p class="total-cost">Total cost: {{totalCost}} kr</p>

  </div>
    </article>

</template>

<script>

import ShoppingCartItem from "@/components/ShoppingCartItem";
import TotalSum from "@/components/TotalSum";

export default {
  name: "Cart",
  components: {
    ShoppingCartItem,
    TotalSum
  },
  computed: {
    itemsInCart() {
      if (this.showItem) {
        return this.cartItems.length;
      } else {
        return 0;
      }
    },
    props: {
      cartItems: Array,
      dogs: Array
    },
    beforeMount() {
      this.shoppingCartList = this.cartItems;
      this.updateTotalCost();
    },
    data(){
      return{
        shoppingCartList: [],
        totalCost: 0
      }
    },
    methods: {
      isEmpty() {
        return this.shoppingCartList < 1;
      },
      removeItem(index){
        this.shoppingCartList.splice(index,1);
        this.updateTotalCost();
      },
      updateTotalCost() {
        let totalCost = 0;
        this.shoppingCartList.forEach(entry => {
          totalCost += entry.price;
        });
        this.totalCost = totalCost;
      }
    },
  }
</script>
<style scoped>
</style>