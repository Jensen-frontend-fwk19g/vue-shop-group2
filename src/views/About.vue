<template>
  <div class="about">
    <header>
      <h1>Cart Page you can find all the dogs you are going to pay</h1>
    </header>
    <ShoppingCart :dogs="dogs" :cartItems="cartItems" />
  </div>
</template>
<script>
import ShoppingCart from "@/components/ShoppingCart.vue";

export default {
  name: "",
  components: {
    ShoppingCart,
  },
  props: {
    dogs: Array,
    cartItems: Array,
  },
};
</script>