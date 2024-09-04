<template>
    <div class="person">
        <h2>A {{ car.brand }} car, price is {{ car.price }}</h2>
        <button @click="chgPrice">change car price</button>
        <button @click="chgCar">change car</button>
        <hr>
        <h2>sum: {{ sum }}</h2>
        <button @click="addSum">click me + 1</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import {ref, reactive} from 'vue'

    let car = ref({
        brand: 'bmw',
        price: 100
    })

    let sum = ref(0)

    function chgPrice() {
        car.value.price += 10
    }

    function chgCar() {
        // car = {brand:'benz', price:10} ** no change
        // car = reactive({brand:'benz', price:10})  ** no change
        // Object.assign(car, {brand: 'benz', price: 10}) for reactive
        car.value = {brand: 'benz', price: 10}
    }

    function addSum() {
        sum.value += 1
    }

</script>

<style scoped>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>