<template>
  <section id="counter-cart">
    <figure>
      <div class="counter">{{dogArray.length}}</div>
      <img class="bag" src="@/assets/bag.png" alt="Cart">
    </figure>
      <button @click="incremet()" class="add"></button>
      <button @click="decrement()" class="dec"></button>
  </section>
</template>

<script>
export default {
  data() {
    return {
       counter :0,
       
    }
  },

  props: {
    dogArray: Array
  },
  
  methods: {
    incremet(){
      this.counter++
      },
    decrement(){
      this.counter--
      }
},

  
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

