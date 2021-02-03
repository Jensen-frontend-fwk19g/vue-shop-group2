<template>
  <section class="CartItem item-row" :id="dog.chipNumber">

    <img class="dog-image" :src="dog.img" alt="">
    <p class="dog-name"> {{dog.name}}</p>
    <p class="dog-breed"> {{dog.breed}}</p>	
    <p class="dog-age">Age: {{dog.age}}</p>	
    <p class="dog-sex">Sex: {{dog.sex}}</p>	   
    <p class="dog-price">Price: {{dog.price}}:-</p>
    <div class="desc-item">"Dog name is {{dog.name}}, breed is {{dog.breed}}...etc"</div>
      <small>
        <button class="deleteBtn">&#10007;</button>
      </small>
      
  </section>
</template>

<script>
  export default {
    name: "CartItem",
    props: {
      dog: Object,
    },
    methods:{
      removeItem(){
        console.log('this.dog: ',this.dog);
      },
    }
  }
</script>

<style scoped>
.item-row{
  display:flex;
}
p{
  flex:1;
}
  .deleteBtn{
    background-color: rgba(254, 2, 2, 0.703);
    color: rgb(239, 233, 233);
    border:none;
    border-radius: 3px;
    cursor:pointer;
  }
  .desc-item{
    width:50%;
    text-align: center;
  }
  img{
    width:80px;
    margin:0.4rem
  }
</style>