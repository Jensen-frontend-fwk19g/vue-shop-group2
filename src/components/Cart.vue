<template>
  <aside id="cart">
    <div class="cart-icon">
      <span class="item-in-cart-cls">{{itemsInCart}} </span> 
    </div>
      <table id="customers" >
        <thead>
                <tr>
                  <th style="width:20%;">Pets-name</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th style="width:15%;">Qnty</th>
                  <th></th>
                </tr>
        </thead>
        <tbody >
                <tr class="item-row" v-if="showItem===true" :id="cart[0].chipNumber">
                  <td> {{cart[0].name }} </td>
                  <td> <small class="desc-item">Dog name is Molly, breed is briard...etc</small></td>
                  <td class="item-price"> {{cart[0].price }} </td>
                  <td >
                    <small class="item-qnty">
                      <button @click="increaseQnt()"  class="arrow-up-btn"> + </button> 
                      <span id="item-counts"> {{defaultQuantity}} </span>
                      <button @click="decreaseQnt()"  class="arrow-down-btn"> - </button> 
                    </small>
                  </td>
                  <td>
                    <small>
                      <button @click="removeItem()" class="deleteBtn">&#10007;</button>
                    </small>
                  </td>
                </tr>
                <tr v-else></tr>
                
        </tbody>
        <tfoot>
                <tr>
                  <td style="width:30%;"><br><b>Sum</b></td>
                  <td></td>
                  <td v-if="showItem===true" class="item-total-cost"> <br> <b> {{totalCost}}:- </b></td> <td v-else class="item-total-cost">0</td>
                  <td></td>
                  <td></td>
                </tr>
        </tfoot>
      </table>
  </aside>
</template>

<script>
export default {
  name: 'Cart',
  props: {
    //dogg:Object,
  },
    data(){
    return{
      defaultQuantity:1,
      showItem:true,
      cart: [ 
        {
            "name":"Molly",
            "sex":"female",
            "breed":"briard",
            "img":"https://images.dog.ceo/breeds/briard/n02105251_6840.jpg",
            "present":false,
            "age":4,
            "chipNumber":"IEH455006",
              "owner":{
                "name":"Wilmer",
                "lastName":"Svensson",
                "phoneNumber":"0769239356"
                },
                
            quantity:1,
            price:399,
        },
        {
            "name":"Molly",
            "sex":"female",
            "breed":"briard",
            "img":"https://images.dog.ceo/breeds/briard/n02105251_6840.jpg",
            "present":false,
            "age":4,
            "chipNumber":"IEH455006",
              "owner":{
                "name":"Wilmer",
                "lastName":"Svensson",
                "phoneNumber":"0769239356"
                },
                
            quantity:1,
            price:399,
        }
      ],
    
    }
  },
  computed: {
    itemsInCart(){
      if(this.showItem){
        return this.cart.length;
      }else{
        return 0;
      }
        
    },
      totalCost(){
      return (this.cart[0].price * this.defaultQuantity);
    }
  },
  methods: {
    increaseQnt(){
      this.defaultQuantity++;
    },
    decreaseQnt(){
      this.defaultQuantity--;
        if (this.defaultQuantity === 0) {
          this.defaultQuantity =1;
        }
    },
    removeItem(){
      this.showItem =false;
      
    },
  }
}
</script>
<style scoped>
#cart{
  display: flex;
}
  #customers{
    margin-top:3rem;
  }
  .item-in-cart-cls{
    background-color: rgba(210, 254, 223, 0.593);
    border:1px solid rgba(0, 128, 0, 0.635);
    border-radius: 5px ;
    padding:3px;
    text-align: center;
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
  tfoot{
    background-color: rgb(172, 234, 224);
  }
  thead{
    background-color: rgba(138, 179, 172, 0.765);
  }
</style>