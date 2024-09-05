<template>
    <Person :list="personList"/>
</template>

<script lang="ts" setup name="App">
    import {reactive} from 'vue'
    import type { Persons } from '@/types';
    import Person from './components/Person.vue'

    // reactive<Persons> => generic type
    let personList = reactive<Persons>([
        {
            id: 'a001',
            name: 'bob',
            age: 20
        },
        {
            id: 'a002',
            name: 'alice',
            age: 21
        },
        {
            id: 'a003',
            name: 'tom',
            age: 22
            // x: 0    // optional property
        }
    ])
</script>

