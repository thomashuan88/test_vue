<template>
    <div class="person">
        <h2>name : {{ person.name }}</h2>
        <h2>age : {{ person.age }}</h2>
        <button @click="chgName">change name</button>
        <button @click="chgAge">change age</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import {ref} from 'vue'

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
</script>

<style scoped>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>