<script>
import MovieItem from "./MovieItem.vue";

import SeriesItem from "./SeriesItem.vue";

import {store} from '../store.js';

import AppCard from "./appCard.vue";

export default {
    name: "AppMain",
    data () {
        return {

            store,
        }


    },

    components: {

        MovieItem,
        SeriesItem,
        AppCard,

    },

}


</script>


<template>



<div id="movies-list" v-if="store.movies.length > 0">

    <h2>Film</h2>

    <ul>

    <!-- <li v-for="movie in store.movies" class="movie">
    {{movie.title}}
    </li> -->
    <!-- <MovieItem v-for="movie in store.movies" :movie="movie" ></MovieItem> -->
    
    <AppCard v-for="movie in store.movies" :search-item="movie" :item-type="'movie'"></AppCard>

    </ul>
</div>




<div v-else>
    Ricerca un film


</div>

<hr>

<div id="series-list">

    <h2>Serie TV</h2>

    <ul>

        <!-- <SeriesItem v-for="seriesItem in store.series" :series-item="seriesItem"></SeriesItem> -->

        <AppCard v-for="seriesItem in store.series" :search-item="seriesItem" :item-type="'series'"></AppCard>

    </ul>

</div>





</template>


<style lang="scss" scoped>

@mixin elementsList() {
    display: flex;
    flex-flow: row;
    justify-content: flex-start ;
    gap: 10px;

    width: auto;
    
    overflow-x: auto;
    // padding: 0 50px; //centrare carosello
}

#movies-list {

    h2 {
        padding: 20px 0;
        color: red;
    }

    margin-bottom: 2em;
    padding: 0 50px; //centrare carosello
    ul {
     @include elementsList();
    }
   
}


#series-list {

    h2 {
        padding: 20px 0;
        color: red;
    }

    margin-top: 2em;
    padding: 0 50px; //centrare carosello
    ul {
        @include elementsList();

    }

}
</style>