<template>
    <div class="person">
        firstname: <input type="text" v-model="firtName"><br>
        lastname: <input type="text" v-model="lastName"><br>
        fullname: <span>{{firtName}}-{{lastName}}</span><br>
    </div>
</template>

<script lang="ts" setup name="Person">
    import {ref} from 'vue'

    let firtName = ref('hengchuan')
    let lastName = ref('huan')
</script>

<style scoped>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>