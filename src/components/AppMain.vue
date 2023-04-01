<script>
import MovieItem from "./MovieItem.vue";
import { store } from '../store.js';

export default {
    name: "AppMain",
    data () {
        return {

            store,
        }


    },

    components: {

        MovieItem,

    },

}


</script>


<template>

<h1>Boolflix</h1>

<ul id="movies-list" v-if="store.movies.length > 0">

    <!-- <li v-for="movie in store.movies" class="movie">
        {{movie.title}}
    </li> -->

    <MovieItem v-for="movie in store.movies" :movie="movie" ></MovieItem>
</ul>

<div v-else>
    Ricerca un film


</div>

</template>


<style lang="scss" scoped>

#movies-list{
    display: flex;
    flex-flow: row wrap;
    justify-content: center ;
    gap: 10px;

    


}


</style>