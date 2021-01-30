<template>
  <aside id="cart">
    <div class="cart-icon">
      <span class="item-in-cart-cls">{{itemsInCart}} </span> 
    </div>
      <table id="customers" >
              <thead>
                <tr>
                  <th style="width:60%;">Pets-name</th>
                  <th>Price</th>
                  <th>Pet-counts</th>
                  <th></th>
                </tr>
              </thead>
              <tbody >
                <tr class="item-row">
                  <td> Molly </td>
                  <td> 1200 </td>
                  <td >
                    <small>
                      <span> 1 </span>
                    </small>
                  </td>
                  <td>
                    <small>
                      <button @click="removeItem(row)" class="deleteBtn">&#10007;</button>
                    </small>
                  </td>
                </tr>
                
              </tbody>
              
              <tfoot>
                <tr>
                  <td style="width:60%;"><hr><br><b>Sum</b></td>
                  <td><hr><br><b> totalCost </b> {{1200}}:-</td>
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
  },
    data(){
    return{
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
        }
      ],
    
    }
  },
  computed: {
    itemsInCart(){
        return this.cart.length;
    },
  },
  methods: {
    removeItem(){
    
    },
  }
}
</script>
<style scoped>
  #customers{
    margin-top:3rem;
  }
  .item-in-cart-cls{
    background-color: rgba(210, 254, 223, 0.593);
    border:1px solid rgba(0, 128, 0, 0.635);
    border-radius: 5px ;
    padding:3px;
  }
  .deleteBtn{
    background-color: rgba(238, 84, 84, 0.703);
    color: rgb(128, 2, 2);
    border:none;
    border-radius: 3px;
  }

</style>