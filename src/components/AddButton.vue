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

    /* Get the database with all product objects 
       props: {
        },
    */

    methods: {
        addToCart() {
            this.btnText = "Added to cart"

        /* Get id from product object in database, assign it
            this.btnID = 
        */

        }
    }
}
</script>

<style scoped>

</style>