<template>
    <div class="person">
        <h1>scene 2: monitor object data type</h1>
        <h2>name: {{ person.name }}</h2>
        <h2>age: {{ person.age }}</h2>
        <button @click="chgName">change name</button>
        <button @click="chgAge">change age</button>
        <button @click="chgPerson">change person</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import {ref, watch} from 'vue'

    let person = ref({
        name: 'bob',
        age: 20
    })

    function chgName() {
        person.value.name += '~'
    }

    function chgAge() {
        person.value.age += 1
    }

    function chgPerson() {
        person.value = {
            name: 'jack',
            age: 30
        }
    }

    // like this cannot monitor nested object (name, age) , need to manually open deep watch
    // watch(person, (newValue, oldValue) => {
    //     console.log(newValue, oldValue)
    // })

    watch(person, (newValue, oldValue) => {
        console.log(newValue, oldValue)
    }, {
        deep: true
        // immediate: true // default // start from page start
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