<template>
    <div class="person">
        <ul>
            <li v-for="item in list" :key="item.id">{{ item.name }} -- {{ item.age }} -- {{ item.id }}</li>
        </ul>
    </div>
</template>

<script lang="ts" setup name="Person">
    import type { Persons } from '@/types';
    import { withDefaults } from 'vue';

    // defineExpose & defindProps no need import
    // defineExpose({a,b,c}) // export a,b,c

    // just receive list
    // defineProps(['list'])
    
    // accept list and control the types
    // defineProps<{list: Persons}>()

    // accept list + control the types + list? (optional) + have default value
    withDefaults(defineProps<{list?: Persons}>(), {
        list: ()=>[{id: 'a001', name: 'bob', age: 20}]
    })



    // receive list and keep the props
    // let x = defineProps(['list'])
    // console.log(x.list)
</script>

<style scoped>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>