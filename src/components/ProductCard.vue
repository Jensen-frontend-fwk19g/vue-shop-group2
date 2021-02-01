<template>
  <section class="card">
      <img class="dog-image" :src="dog.img" alt="">
      <p class="dog-name">Name: {{dog.name}}</p>
      <p class="dog-breed">Breed: {{dog.breed}}</p>
      <p class="dog-age">Age: {{dog.age}}</p>
      <p class="dog-sex">Sex: {{dog.sex}}</p>
      <p class="dog-price">Price: {{dog.price}}:-</p>
      <button @click="dogEmit">Add to Cart</button>

  </section>
</template>

<script>


export default {
    name: "productCard",
    props: {
        dog: Object
    },
   


    methods: {
         dogEmit(){
             this.$emit('dogEmit', this.dog )
         }
    }
    


}
</script>

<style scoped>

.card {
    width: 260;
    height: 300;
    padding: .75rem;
    border: 1px dotted black;
}

.dog-image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
}
</style>