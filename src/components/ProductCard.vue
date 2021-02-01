<template>
  <section class="card">
      <img class="dog-image" :src="dog.img" alt="">
      <p class="dog-name">Name: {{dog.name}}</p>
      <p class="dog-breed">Breed: {{dog.breed}}</p>

      <p class="dog-age">Age: {{dog.age}}</p>
      <p class="dog-sex">Sex: {{dog.sex}}</p>
      <p class="dog-price">Price: {{dog.price}}:-</p>
      <AddButton  @click="dogEmit" :dog="dogData" />



        <section class="flex-container box-line">
        <p class="dog-age">Age: {{dog.age}}</p>
        <p class="dog-sex">Sex: {{dog.sex}}</p>
        </section>
        
        <section class="flex-container box-line price-container">
        <span class="dog-price price-font">Price: {{dog.price}}:-</span>
        
        <div class="buy-button">
            <div>
                <span class="buy-button-span">Add to Card</span>
            </div>
        </div>
        </section>




  </section>
</template>

<script>
import AddButton from "@/components/AddButton"

export default {
    name: "productCard",
    props: {
        dog: Object
    },

    data () {
        return {
            dogData: this.dog
        }
    },

   components: {
       AddButton
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

.dog-price {
    margin: 0 15px;
}

.buy-button {
    width: 49%;
}

.buy-button > div {
    height: 100%;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    background: chartreuse;
    transition: all 0.3s ease-out;

}

.buy-button > div:hover {
    background: coral;
    font-size: 18px;


}



.price-font {
    font-size: 23px;
    font-weight: 400;
    color: #333;
}

.price-container {
    height: 4rem;
    padding: 15px 0;
}

.flex-container {
    display: flex;
    justify-content: space-evenly;
}

.box-line {
    border-bottom: 1px solid #c0c0c0;
}

.price-font, .dog-age, .dog-sex, .buy-button-span {
    font-family: 'Oswald', sans-serif;

}
</style>