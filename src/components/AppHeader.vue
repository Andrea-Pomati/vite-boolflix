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
    <!-- flex navbar -->
    <nav>
        <h1>Boolflix</h1>  
        <div id="search">

            <input v-model="store.searchText" type="text" placeholder="Cerca un film per titolo" @keyup.enter="$emit('searchMovieTitleEvent')">
            <button @click="$emit('searchMovieTitleEvent')">Cerca</button>

        </div>
    </nav>
    <!-- /flex navbar -->
</template>


<style lang="scss" scoped>

nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    height: 50px;
    background-color: #000000;
    

    h1 {
        color: red;
        
    }

}

#search {
    display: flex;
    gap: 10px;
    

    input {
        width: 200px;
        background-color: #242424;
        color: rgb(255, 137, 137);
        border-color: red;
       
    }

    button {
        background-color: #242424;
        color: rgb(249, 0, 0);

    }
}


</style>