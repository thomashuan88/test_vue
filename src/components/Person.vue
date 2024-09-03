<template>
    <div class="person">
        <h2>name: {{ name }}</h2>
        <h2>age: {{ age }}</h2>
        <button @click="chgName">change name</button>
        <button @click="chgAge">change age</button>
        <button @click="showContact">show contact</button>
    </div>
</template>

<script lang="ts" setup name="Person123">
    let name = 'bob'
    let age = 20
    let tel = '123333333'

    function chgName() {
        console.log('chgName')
        name = 'jack' // like this , page not re-render
    }

    function chgAge() {
        console.log('chgAge')
        age += 1
    }

    function showContact() {
        console.log('showContact')
        alert(tel)
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