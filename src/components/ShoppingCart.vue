<template>
  <article id="cart">
    <h1 class="emptyCartText" v-if="isEmpty()">Shopping cart is empty</h1>
  <div v-if="!isEmpty()" class="shopping-cart-list">
    <ShoppingCartItem 
      v-for="dog in cartItems"
      :key="dog.chipNumber"
      :dog="dog"
    /> 
    <TotalSum :dogs="dogs"/>
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
  props: {
    cartItems: Array,
    dogs: Array,
  },
  data() {
    return {};
  },
  computed: {
    itemsInCart() {
      if (this.showItem) {
        return this.cartItems.length;
      } else {
        return 0;
      }
    },
  },
  methods: {
    // getDog(id) {
    //
    // },
    isEmpty() {
      return this.cartItems < 1;
    },
    increaseQnt() {
      this.defaultQuantity++;
    },
    decreaseQnt() {
      this.defaultQuantity--;
      if (this.defaultQuantity === 0) {
        this.defaultQuantity = 1;
      }
    },
    removeItem() {
      this.showItem = false;
    },
  },
};
</script>
<style scoped>
#cart {
  display: flex;
}
#customers {
  margin-top: 3rem;
}
.item-in-cart-cls {
  background-color: rgba(210, 254, 223, 0.593);
  border: 1px solid rgba(0, 128, 0, 0.635);
  border-radius: 5px;
  padding: 3px;
  text-align: center;
}
.deleteBtn {
  background-color: rgba(254, 2, 2, 0.703);
  color: rgb(239, 233, 233);
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
.item-qnty {
  border: 1px solid black;
  width: auto;
}
#item-counts {
  margin: 5px;
}
.arrow-up-btn {
  background-color: rgba(84, 238, 107, 0.703);
  color: rgb(15, 34, 19);
  border: none;
  border-radius: 2px;
  cursor: pointer;
}
.arrow-down-btn {
  background-color: rgba(238, 84, 84, 0.703);
  color: rgb(34, 15, 15);
  border: none;
  border-radius: 2px;
  cursor: pointer;
}
tfoot {
  background-color: rgb(172, 234, 224);
}
thead {
  background-color: rgba(138, 179, 172, 0.765);
}
</style>