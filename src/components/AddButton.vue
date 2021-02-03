<template>

    <button type="submit" :disabled="btnClicked"
    class="add-button" 
    @click="addToCart()">
    {{ btnText }}
    </button>

</template>

<script>
export default {
    name: "AddButton",
    data: () => ({
        btnText: "Add to cart",
        btnClicked: false,
    }),
    props: {
        dog: Object
    },
    methods: {
        addToCart() {
            this.btnText = "Added to cart"
            this.btnClicked = true
            this.$emit('addToCart', this.dog)             
        },
    },   
}
</script>

<style scoped>
.add-button {
    width: 49%;
    background: chartreuse;
    font-size: 16px;
    border-radius: .2rem;
    transition: all 0.3s ease-out;
}

.add-button:hover {
    background: coral;
    font-size: 18px;
}

</style>