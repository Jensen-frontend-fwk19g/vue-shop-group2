<template>
  <article id="cart">
    <h1 class="emptyCartText" v-if="isEmpty()">Shopping cart is empty</h1>
  </article>
  <div v-if="!isEmpty()" class="shopping-cart-list">
    <div class="shopping-cart">
      <ShoppingCartItem
        v-for="dog in shoppingCartList"
        :key="dog.chipNumber"
        :dog="dog"
        @removeDog="removeItem(dog)"
      />
    </div>
    <p class="total-cost">Total cost: {{ totalCost }} kr</p>
  </div>
</template>

<script>
import ShoppingCartItem from "@/components/ShoppingCartItem";

export default {
  name: "Cart",
  components: {
    ShoppingCartItem,
  },
  props: {
    cartItems: Array,
    dogs: Array,
  },
  beforeMount() {
    this.shoppingCartList = this.cartItems;
    this.updateTotalCost();
  },
  data() {
    return {
      shoppingCartList: [],
      totalCost: 0,
    };
  },
  methods: {
    isEmpty() {
      return this.shoppingCartList < 1;
    },
    removeItem(dog) {
      this.shoppingCartList = this.shoppingCartList.filter(
        (entry) => entry !== dog
      );
      this.updateTotalCost();
    },
    updateTotalCost() {
      let totalCost = 0;
      this.shoppingCartList.forEach((entry) => {
        totalCost += entry.price;
      });
      this.totalCost = totalCost;
    },
  },
};
</script>
<style scoped>
.shopping-cart {
  width: 80%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0.2rem;
  margin: auto;
  justify-items: center;
}
#cart {
  width: 80%;
  height: 100%;
}

.total-cost {
  font-size: 2rem;
  font-weight: 900;
}
.price {
  color: red;
}
@media (min-width: 600px) and (max-width: 1200px) {
  .shopping-cart-list {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 599px) {
  .shopping-cart-list {
    grid-template-columns: 1fr;
  }
}
</style>

