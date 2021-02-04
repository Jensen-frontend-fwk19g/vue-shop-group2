<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">Cart</router-link> |
    <router-link to="/facilities">Facility</router-link>

    <router-view :dogs="dogs" />
  </div>
</template>

<script>
import dogs from "@/assets/dogs.json";

export default {
  data() {
    return {
      dogs: dogs,
      cartItems: "",
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap");
#app {
  font-family: "Lato", sans-serif;
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
