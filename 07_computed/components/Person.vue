<template>
    <div class="person">
        firstname: <input type="text" v-model="firstName"><br>
        lastname: <input type="text" v-model="lastName"><br>
        fullname: <span>{{fullName}}</span><br>
        <button @click="chgFullname">change fullname</button>
    </div>
</template>


<!-- <script lang="ts"> // vue2
  //  export default {
   //     computed: {
            
 //       }
  //  }
</script> -->

<script lang="ts" setup name="Person">
    import {ref, computed} from 'vue'

    let firstName = ref('hengchuan')
    let lastName = ref('huan')

    // like this computed is readonly
    // let fullName = computed(() => {
    //     console.log('computed') // just show once, if firstname or lastname not change
    //     return (firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value)
    // })

    let fullName = computed({
        get() {
            console.log('get')
            return (firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value)
        },
        set(value) {
            console.log('set')
            let arr = value.split('-')
            firstName.value = arr[0]
            lastName.value = arr[1]
        }
    })
    
    // [Vue warn] Write operation failed: computed value is readonly
    function chgFullname() {
        fullName.value = 'huan-hengchuan'
        console.log(fullName)
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