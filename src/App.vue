<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">Cart</router-link> |
    <router-link to="/facilities">Facility</router-link>

    <router-view @addToCart="addToCart" :dogs="dogs" />
  </div>
</template>

<script>
import dogs from "@/assets/dogs.json";

export default {
  data() {
    return {
      dogs: dogs,
      cartItems: []
    };
  },

    
  methods:{
  addToCart(selectedDog) {
  this.cartItems.push(selectedDog);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
