<template>
    <div class="person">
        <h2>when temprature reach 60 °C, and level 80cm, send alert</h2>
        <h2>current temprature: {{ temp }} °C</h2>
        <h2>current level: {{ level }} cm</h2>
        <button @click="chgTemp">change temprature + 10</button>
        <button @click="chgLevel">change level + 10</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import {ref, watch, watchEffect} from 'vue'

    let temp = ref(10)
    let level = ref(0)

    function chgTemp() {
        temp.value += 10
    }

    function chgLevel() {
        level.value += 10
    }

    // using watch to monitor
    // watch([temp, level], (val) => {
    //     let [newtemp, newheight] = val
    //     console.log(newtemp, newheight)

    //     if (newtemp >= 60 || newheight >= 80) {
    //         alert('danger level!')
    //     }
    // })

    watchEffect(() => {
        console.log(temp.value, level.value)
        if (temp.value >= 60 || level.value >= 80) {
            alert('danger level!')
        }
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