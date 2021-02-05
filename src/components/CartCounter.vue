<template>
  <section id="counter-cart">

    <figure class="counter-container">
      <div class="counter" v-if='cartItems'>{{numberOfDogs}}</div>
      <div class="counter" v-else> 0 </div>
      <img class="bag" src="@/assets/bag.png" alt="Cart">
    </figure>

  </section>
</template>

<script>
export default {
  props: {
    cartItems: Array
  },
  
  computed:{
      numberOfDogs(){
        return this.cartItems.length
    }
  }

}
</script>

<style scoped>
  #counter-cart{
    position: relative;
    background-color: black;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    border-radius: 999rem;
  }
  .counter{
    position: absolute;
    height: 25px;
    width: 25px;
    background: red;
    border-radius: 999rem;
    top: -5px;
    left: 35px;
    color: aliceblue;
    text-align: center;
    font-weight: 600;
  }
</style>>

