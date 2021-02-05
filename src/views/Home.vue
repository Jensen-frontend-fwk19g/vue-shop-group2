<template>
  <div class="home">


    <CartCounter :cartItems="cartItems" />
    <MainPage  @addToCart="listen" :dogs="dogs" msg="Welcome to Your Vue.js App"/>

   
  </div>
</template>

<script>
// @ is an alias to /src
import MainPage from "@/components/MainPage"
import CartCounter from "@/components/CartCounter"


export default {
  name: 'Home',
  components: {
    MainPage,
    CartCounter
  },
  data() {
    return {
      dogArray:[]
    }
  },
  props: {
    cartItems: Array,
    dogs: Array,
    dog: Object,
  },
  
  methods:{
      listen(e){
        this.$emit('addToCart', e)
      }
  }
  
}
</script>
