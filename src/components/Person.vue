<template>
    <div class="person">
        <h2>name : {{ person.name }}</h2>
        <h2>age : {{ person.age }}</h2>
        <button @click="chgName">change name</button>
        <button @click="chgAge">change age</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import {reactive, toRefs} from 'vue'

    // data
    let person = reactive({
        name: 'bob',
        age: 20
    })

    let {name, age} = toRefs(person)  // converto to more then one ref

    // methods
    function chgName() {
        person.name += '~'
    }

    function chgAge() {
        person.age += 1
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