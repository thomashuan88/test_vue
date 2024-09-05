<template>
    <div class="person">
        <h2>sum : {{ sum }}</h2>
        <button @click="addSum">chickme</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import {ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from 'vue'

    let sum = ref(0)

    function addSum() {
        sum.value += 1
    }

    console.log('created')

    onBeforeMount(() => {
        console.log('onBeforeMount')
    })

    onMounted(() => {
        console.log('onMounted')
    })

    onBeforeUpdate(() => {
        console.log('onBeforeUpdate')
    })

    onUpdated(() => {
        console.log('onUpdated')
    })

    onBeforeUnmount(() => {
        console.log('onBeforeUnmount')
    })

    onUnmounted(() => {
        console.log('onUnmounted')
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