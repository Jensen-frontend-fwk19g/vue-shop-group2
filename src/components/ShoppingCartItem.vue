<template>
  <section class="shoppingCartItem">
    <img class="dog-image" :src="dog.img" alt="" />
    <p class="dog-name">Name: {{ dog.name }}</p>
    <p class="dog-breed">Breed: {{ dog.breed }}</p>
    <p class="dog-age">Age: {{ dog.age }}</p>
    <p class="dog-sex">Sex: {{ dog.sex }}</p>
    <p class="dog-price">Price: {{ dog.price }}:-</p>
  </section>
</template>

<script>
export default {
  name: "shoppingCartItem",
  props: {
    dog: Object,
  },
};
</script>

<style scoped>
.shoppingCartItem {
  width: 260px;
  height: 360px;
  padding: 0.55rem;
  border: 1px solid black;
}

.dog-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
</style>