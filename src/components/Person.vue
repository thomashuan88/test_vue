<template>
    <div class="person">
        <h2>sum: {{ sum }}</h2>
        <button @click="chgSum">plus one</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import {ref, watch} from 'vue'

    let sum = ref(0)

    function chgSum() {
        sum.value += 1
    }

    let i = 0

    const stopWatch = watch(sum, (newValue, oldValue) => {
        console.log(newValue, oldValue)
        i += 1
        if (newValue > 10) {
            sum.value = 0
        }
        if (i > 20) {
            stopWatch()
        }
        console.log(i)
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