<script>
import { store } from '../store.js';

export default {
    name: "AppMain",
    data () {
        return {

            store,
        }


    },

}


</script>


<template>

<h1>Boolflix</h1>

<ul id="movies-list">

    <li v-for="movie in store.movies" class="movie">
        {{movie.title}}

    </li>

</ul>

</template>


<style lang="scss" scoped>



</style>