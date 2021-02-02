<template>
  <section class="CartItem">
    <img class="dog-image" :src="dog.img" alt="">
    <p class="dog-name">Name: {{dog.name}}</p>
    <p class="dog-breed">Breed: {{dog.breed}}</p>
    <p class="dog-age">Age: {{dog.age}}</p>
    <p class="dog-sex">Sex: {{dog.sex}}</p>
    <p class="dog-price">Price: {{dog.price}}:-</p>

    <small class="item-qnty">
      <button @click="increaseQnt()"  class="arrow-up-btn"> + </button> 
      <span id="item-counts"> {{defaultQuantity}}  </span>
      <button @click="decreaseQnt()"  class="arrow-down-btn"> - </button> 
    </small>

      <small>
        <button @click="removeItem()" class="deleteBtn">&#10007;</button>
      </small>

  </section>
</template>

<script>
  export default {
    name: "CartItem",
    props: {
      dog: Object,
    },
    data(){
      return{
        defaultQuantity:1,
      }
    },
    methods:{
      increaseQnt() {
        this.defaultQuantity++;
      },
      decreaseQnt() {
        this.defaultQuantity--;
        if (this.defaultQuantity === 0) {
          this.defaultQuantity = 1;
        }
      },
      removeItem(){
        
      },
    }
  }
</script>

<style scoped>
  .CartItem {
    width: 260px;
    height: 360px;
    padding: .55rem;
    border: 1px solid black;
  }
  .dog-image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
  .deleteBtn{
    background-color: rgba(254, 2, 2, 0.703);
    color: rgb(239, 233, 233);
    border:none;
    border-radius: 3px;
    cursor:pointer;
  }
  .item-qnty{
    border:1px solid black;
    width:auto;
  }
  #item-counts{
    margin:5px;
  }
  .arrow-up-btn{
    background-color: rgba(84, 238, 107, 0.703);
    color: rgb(15, 34, 19);
    border:none;
    border-radius: 2px;
    cursor:pointer;
  }
  .arrow-down-btn{
    background-color: rgba(238, 84, 84, 0.703);
    color: rgb(34, 15, 15);
    border:none;
    border-radius: 2px;
    cursor:pointer;
  }
</style>