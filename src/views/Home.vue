<template>
  <div class="home" @dogToEmit="dogToBuyArray">

    <CartCounter :dogsCounter="numberOfDogs" />
    <MainPage :dogs="dogs" msg="Welcome to Your Vue.js App"/>
   
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
  props: {
    dogs: Array,
    dog:Object,

    

  },

  methods:{
   
  }
  
}
</script>
