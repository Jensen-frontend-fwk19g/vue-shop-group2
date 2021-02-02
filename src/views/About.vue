<template>
  <div class="about">
    <header>
      <h1>Cart Page you can find all the dogs you are going to pay</h1>
    </header>
    <ShoppingCart :dogs="dogs" :cartItems="getCartItems()" />
    <!--      <Cart/>-->
  <TotalSum :dogs="dogs" />
  </div>
</template>
<script>
// import Cart from '@/components/Cart.vue';
import ShoppingCart from "@/components/ShoppingCart.vue";
import TotalSum from "@/components/TotalSum.vue";

export default {
  name: "",
  components: {
    // Cart,
    ShoppingCart,
    TotalSum
  },
  props: {
    dogs: Array,
  },
  methods: {
    getCartItems() {
      return [
        {
          name: "DOGE",
          sex: "unknown",
          breed: "Shiba Inu",
          img:
            "https://static.wikia.nocookie.net/dogelore/images/9/97/Doge.jpg",
          present: false,
          age: 4,
          chipNumber: "IEH1337",
          price: 1337,
          owner: {
            name: "Elon",
            lastName: "Musk",
            phoneNumber: "112",
          },
        },
      ];
    },
  },
};
</script>