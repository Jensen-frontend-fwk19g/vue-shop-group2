<template>

    <button
    id="add-button" 
    @click="addToCart()">
    {{ btnText }}
    </button>

</template>

<script>
export default {
    name: "AddButton",
    data: () => ({
        btnText: "Add to cart",
        btnID: ""
    }),
    props: {
        dog: Object
    },
    methods: {
        addToCart() {
            this.btnText = "Added to cart"
            this.btnID =  this.dog.chipNumber
        }
    }
}
</script>

<style scoped>
#add-button {
    width: 49%;
    background: chartreuse;
    font-size: 16px;
    border-radius: .2rem;
    transition: all 0.3s ease-out;
}

#add-button:hover {
    background: coral;
    font-size: 18px;
}

</style>