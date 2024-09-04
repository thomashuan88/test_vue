<template>
    <div class="person">
        <h1>china</h1>
        <h2 ref="title2">hongkong</h2>
        <h3>taiwan</h3>
        <button @click="showme">showme</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import {ref, defineExpose} from 'vue'

    let a = ref(0)
    let b = ref(1)
    let c = ref(2)

    // use for tag tag the html element
    let title2 = ref(null)

    function showme() {
        console.log(title2.value.textContent)
    }

    defineExpose({
        a,b,c
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