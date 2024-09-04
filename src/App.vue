<template>
    <Person ref="ren" />
    <button @click="clickme">clickme</button>
</template>

<script lang="ts" setup name="App">
    import {ref} from 'vue'
    import Person from './components/Person.vue'

    let ren = ref()

    function clickme() {
        console.log(ren.value)
    }
    
</script>

