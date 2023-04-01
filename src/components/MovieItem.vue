<script>



export default {
    name: "MovieItem",
    data () {
        return {

          
        }


    },

    props: {
        movie: Object,
    },
}


</script>


<template>

<div class="movie">

    <strong>{{ movie.title }}</strong>
    
    <small>({{ movie.original_title }})</small>
    
    Lingua: {{ movie.original_language }}

    <em>Voto: {{ movie.vote_average }}</em>

</div>

</template>


<style lang="scss" scoped>

.movie {
        display: flex;
        flex-flow: column;
        border:1px solid #aaa;
        width: 300px;
        border-radius: 4px;
        padding: 10px;


    }


</style>