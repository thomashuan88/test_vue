<template>
    <div class="person">
        <h2>name: {{ name }}</h2>
        <h2>age: {{ age }}</h2>
        <button @click="chgName">change name</button>
        <button @click="chgAge">change age</button>
        <button @click="showContact">show contact</button>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Person',
    setup() {
        let name = 'bob'
        let age = 20
        let tel = '123333333'

        //methods
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

        return {name, age, chgName, chgAge, showContact}
    }
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