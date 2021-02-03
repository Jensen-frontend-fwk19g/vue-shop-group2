<template>
  <div class="home">


    <CartCounter  :dogArray="dogArray" />
    <MainPage  @addToCart="addToCart" :dogs="dogs" msg="Welcome to Your Vue.js App"/>

   
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
    dogs: Array,
    dog:Object,
  },
  

  methods:{
  addToCart(selectedDog) {
  this.dogArray.push(selectedDog);
    }
  }
  
}
</script>
