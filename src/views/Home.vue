<template>
  <div class="home" @dogToEmit="dogToBuyArray">

    <CartCounter :dogsCounter="numberOfDogs" />
    <MainPage :dogs="dogs" msg="Welcome to Your Vue.js App" @dogToEmit="dogToBuyArray"/>
   
  </div>
</template>

<script>
// @ is an alias to /src
import MainPage from "@/components/MainPage"
import CartCounter from "@/components/CartCounter"


export default {
  name: 'Home',
  data() {
    return {
      dogsToBuy:[]
    }
  },
  
  components: {
 
    MainPage,
    CartCounter
  },
  props: {
    dogs: Array,
    dog:Object,

    

  },

  methods:{
    dogToBuyArray(e){
      console.log('dog in home', e.dogData)
      this.dogsToBuy.push(e.dogData)
    }

   
  }
  
}
</script>
