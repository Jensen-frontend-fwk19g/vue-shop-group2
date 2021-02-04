<template>
  <section id="main-page">
    <header>
      <h1 class="title">Dogs Center</h1>
    </header>
    <article class="container">
      <ProductCard
        @addToCart="listen"
        v-for="dog in dogs"
        :key="dog.chipNumber"
        :dog="dog"
      />
    </article>
  </section>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";

export default {
  name: "MainPage",
  data() {
    return {
      dogData: {},
    };
  },
  components: {
    ProductCard,
  },
  props: {
    dogs: Array,
  },
  methods: {
    listen(e) {
      this.$emit("addToCart", e);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 0.2rem;
}
.card-item {
  border: 1px dotted green;
  width: 200px;
  height: 200px;
}

.hidden {
  display: none;
}
@media  (min-width:600px) and (max-width: 900px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media   (max-width:599px)  {
  .container {
    grid-template-columns:  1fr;
  }
}



</style>
