<template>
    <div class="person">
        <h2>A {{ car.brand }} car, price is {{ car.price }}</h2>
        <button @click="chgPrice">change car price</button>
        <h2>Game List:</h2>
        <ul>
            <li v-for="game in games" :key="game.id">{{ game.id }} - {{ game.name }}</li>
        </ul>
        <button @click="chgFirstGame">change firstgame</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import {ref} from 'vue'

    let car = ref({
        brand: 'bmw',
        price: 100
    })

    let games = ref([
        {
            id: 'gg1',
            name: 'lol',
        },
        {
            id: 'gg2',
            name: 'lol2',
        }
    ])

    function chgPrice() {
        car.value.price += 10
    }

    function chgFirstGame() {
        games.value[0].name = 'dota2'
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