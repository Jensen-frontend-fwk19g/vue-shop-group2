<template>
    <div>
        <h1>Total sum</h1>
        <p>{{ computedSum }}</p>
    </div>
</template>

<script>
export default {
    name: "TotalSum",
    
    data: () => ({
        cartOrders: [
                {
                    product: "A",
                    price: 100
                }, 
                {
                    product: "B",
                    price: 900
                },
        ]   
         }),

    computed: {
        computedSum() {
        let sum = 0
        this.cartOrders.forEach(order => {
            sum += order.price
        });
            return sum;
        }
    }

}
</script>

<style scoped>

</style>