<template>
    <div>
        <h1>Total sum</h1>
        <p>{{ computedSum }}</p>
    </div>
</template>

<script>
export default {
    name: "TotalSum",
    
    props: {
    dogs: Array
    },

    computed: {
        computedSum() {
        let sum = 0
        this.dogs.forEach(order => {
            sum += order.price
        });
             return sum;
        }
    }

}
</script>

<style scoped>

</style>