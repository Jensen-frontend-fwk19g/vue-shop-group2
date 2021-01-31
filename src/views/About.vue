<template>
  <div class="about">
    <header> 
      <h1>Cart Page you can find all the dogs you are going to pay</h1>
    </header>
   
      <MainCart/>
      <Cart/>
  </div>
</template>
<script>
import Cart from '@/components/Cart.vue';
import MainCart from '@/components/MainCart.vue';
export default {
  name:'',
  components:{
    Cart,
    MainCart
  }
}
</script>