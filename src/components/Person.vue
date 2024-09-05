<template>
    <div class="person">
        <h2>sum  : {{ sum }}, bigSum: {{ bigSum }}</h2>
        <button @click="addSum">clickme</button>
        <hr>
        <img v-for="(dog, index) in dogList" :src="dog" :key="index"><br>
        <button @click="addDog">one more dog</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import useSum from '@/hooks/useSum'
    import useDog from '@/hooks/useDog'

    const {sum, addSum, bigSum} = useSum()
    const {dogList, addDog} = useDog()
</script>

<style scoped>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
    img {
        height: 200px;
        margin-right: 10px;
    }
</style>