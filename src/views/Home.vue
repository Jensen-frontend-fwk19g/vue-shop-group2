<template>
  <div class="home">


    <CartCounter  :dogArray="dogArray" />
    <MainPage  @dogEmit="pushToDogArray" :dogs="dogs" msg="Welcome to Your Vue.js App"/>

   
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

   pushToDogArray(dog) {
    this.dogArray.push(dog);
    }

  }
  
}
</script>
