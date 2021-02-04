<template>
  <section class="card">
      <img class="dog-image" :src="dog.img" alt="">
      <p class="dog-name">Name: {{dog.name}}</p>
      <p class="dog-breed">Breed: {{dog.breed}}</p>

    
    <section class="flex-container box-line">
        <p class="dog-age">Age: {{dog.age}}</p>
        <p class="dog-sex">Sex: {{dog.sex}}</p>
    </section>
    <section class="flex-container box-line price-container">
        <span class="dog-price price-font">Price: {{dog.price}}:-</span>
        
              <AddButton  @addToCart="addToCart" :dog="dog" />

    </section>
  </section>
</template>

<script>
import AddButton from "@/components/AddButton"
export default {
    name: "ProductCard",
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
         addToCart(e){
            this.$emit('addToCart', e)
            this.$nextTick(() => {
            let disabledBtn = document.querySelectorAll('.add-button:disabled')
            disabledBtn.forEach(btn => btn.parentNode.parentNode.style.opacity = 0.3)
             })          
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
    border-radius: .2rem;
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
.dog-price{
    align-self: center;
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