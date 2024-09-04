<template>
    <div class="person">
        <h2>name: {{ person.name }}</h2>
        <h2>age: {{ person.age }}</h2>
        <h2>car: {{ person.car.c1 }}, {{ person.car.c2 }}</h2>
        <button @click="chgName">change name</button>
        <button @click="chgAge">change age</button>
        <button @click="chgC1">change first car</button>
        <button @click="chgC2">change second car</button>
        <button @click="chgCar">change car</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import {reactive, watch} from 'vue'

    let person = reactive({
        name: 'bob',
        age: 20,
        car: {
            c1:'bmw',
            c2:'benz'
        }
    })

    function chgName() {
        person.name += '~'
    }

    function chgAge() {
        person.age += 1
    }

    function chgC1() {
        person.car.c1 = 'audi'
    }

    function chgC2() {
        person.car.c2 = 'toyota'
    }

    function chgCar() {
        person.car = {
            c1:'toyota',
            c2:'nissan'
        }
    }

    // watch for reactive which particular property is basic data type
    // watch(()=>person.name, (newVal, oldVal) => {
    //     console.log(newVal, oldVal)
    // })

    // watch for whole car , no monitor
    // watch(person.car, (newVal, oldVal) => {
    //     console.log(newVal, oldVal)
    // })

    // watch for more then one property
    watch([()=>person.name, ()=>person.car.c1], (newVal, oldVal) => {
        console.log(newVal, oldVal)
    }, {
        deep: true
    })
</script>

<style scoped>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>