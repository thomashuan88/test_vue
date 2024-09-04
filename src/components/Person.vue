<template>
    <div class="person">
        ???
    </div>
</template>

<script lang="ts" setup name="Person">
    import type { PersonInter, Persons } from '@/types';

    let person: PersonInter = {
        id: 'asdfasdf1234213',
        name: 'bob',
        age: 60
    }

    let personList: Persons = [
        {
            id: 'asdfasdf1234213',
            name: 'bob',
            age: 60
        },
        {
            id: 'asdfasdf1234214',
            name: 'thomas',
            age: 50
        }
    ]


</script>

<style scoped>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>