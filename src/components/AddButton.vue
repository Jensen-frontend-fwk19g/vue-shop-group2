<template>

    <button
    id="add-button" 
    @click="addToCart()">{{ btnText }}
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
</style>