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
    data() {
        return {
            name: 'bob',
            age: 20,
            tel: '123333333',
        }
    },
    methods: {
        showContact() {
            alert(this.tel)
        },
        chgName() {
            this.name = 'jack'
        },
        chgAge() {
            this.age += 1
        }
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