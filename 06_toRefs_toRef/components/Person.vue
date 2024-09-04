<template>
    <div class="person">
        <h2>name : {{ name }}</h2>
        <h2>age : {{ age }}, nl : {{ nl }}</h2>
        <button @click="chgName">change name</button>
        <button @click="chgAge">change age</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import {reactive, toRefs, toRef} from 'vue'

    // data
    let person = reactive({
        name: 'bob',
        age: 20
    })

    let {name, age} = toRefs(person)  // converto to more then one ref

    let nl = toRef(person,'age')  // just extract age from person, nl => ObjectRefImpl {value: 20}

    // methods
    function chgName() {
        name.value += '~'
    }

    function chgAge() {
        age.value += 1
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