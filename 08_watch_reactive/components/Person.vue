<template>
    <div class="person">
        <h1>scene 3: monitor reactive object data type</h1>
        <h2>name: {{ person.name }}</h2>
        <h2>age: {{ person.age }}</h2>
        <button @click="chgName">change name</button>
        <button @click="chgAge">change age</button>
        <button @click="chgPerson">change person</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import {reactive, watch} from 'vue'

    let person = reactive({
        name: 'bob',
        age: 20
    })

    function chgName() {
        person.name += '~'
    }

    function chgAge() {
        person.age += 1
    }

    function chgPerson() {

        Object.assign(person, {
            name: 'jack',
            age: 30
        })
    }

    // watch for reactive default deep is true
    watch(person, (newVal, oldVal) => {
        console.log(newVal, oldVal)
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