import {reactive} from 'vue'
import axios from 'axios'

export default function() {
    // https://dog.ceo/api/breeds/image/random
    let dogList = reactive([
        'https://images.dog.ceo/breeds/basenji/n02110806_6352.jpg',
        'https://images.dog.ceo/breeds/poodle-standard/n02113799_4046.jpg',
        'https://images.dog.ceo/breeds/sheepdog-indian/Himalayan_Sheepdog.jpg'
    ])

    async function addDog() {
        // axios.get('https://dog.ceo/api/breeds/image/random').then((res) => {
        //     dogList.push(res.data.message)
        // })
        // let result = await axios.get('https://dog.ceo/api/breeds/image/random')
        // dogList.push(result.data.message)
        try {
            let result = await axios.get('https://dog.ceo/api/breeds/image/random')
            dogList.push(result.data.message)
        } catch (error) {
            alert(error)
        }
    }
    return { dogList, addDog }
}

