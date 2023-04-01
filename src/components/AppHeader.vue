<script>
import { store } from '../store.js';


export default {
    name: "AppHeader",
    data () {
        return {

            store,

        }


    },

    emits: ['searchMovieTitleEvent'],
}


</script>


<template>

    <div id="search">

        <input v-model="store.searchText" type="text" placeholder="Cerca un film per titolo" @keyup.enter="$emit('searchMovieTitleEvent')">
        <button @click="$emit('searchMovieTitleEvent')">Cerca</button>

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