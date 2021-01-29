<template>
  <aside id="cart">
    <div class="cart-icon" ><span class="item-in-cart-cls">{{itemsInCart}} </span> </div>
      <section class="cart-items" v-for="(item, index) in cart" :key="index" :id="item.id">
        <p>{{item.name}}</p>
        <p>{{item.price}}</p>
        <button @click="removeItem(item)" :id="item.id" class="deleteBtn">&#10007;
        </button>
      </section>
  </aside>
</template>

<script>
export default {
  name: 'Cart',
  props: {
  },
    data(){
    return{
      cart: [ {
          id: '1',
          src:"https://picsum.photos/1024/480/?image=15",
          name: 'Toy -1EC',
          description: 'Lorem Ipsum is not simply random text.',
          price: 399,
          quantity:1
        },
        {
          id: '2',
          src:"https://picsum.photos/1024/480/?image=60",
          name: 'PC-Toy -CC2719',
          description: 'There are many variations of passages of Lorem Ipsum available',
          price: 1995,
          quantity:3
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
  
    removeItem(item){
      let index= this.cart.indexOf(item);
      this.cart.splice(index, 1);
    },
  }
}
</script>