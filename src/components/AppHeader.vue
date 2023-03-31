<script>
import { store } from '../store.js';


export default {
    name: "AppHeader",
    data () {
        return {

            store,

        }


    },

}


</script>


<template>

    <div id="search">

        <input v-model="store.searchText" type="text" placeholder="Cerca un film per titolo">
        <button>Cerca</button>

    </div>

</template>


<style lang="scss" scoped>

#search {
    display: flex;
    gap: 10px;
    

    input {
        width: 200px;
        background-color: #242424;
        color: white;
       
    }

    button {
        background-color: #242424;
        color: white;

    }
}


</style>