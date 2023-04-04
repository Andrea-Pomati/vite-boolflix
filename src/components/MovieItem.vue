<script>



export default {
    name: "MovieItem",
    data () {
        return {
            updatedLanguage: "",
          
        }


    },

    props: {
        movie: Object,
    },

    mounted() {

     


    },

    computed: {

        updatedLanguage() {

        // if(this.movie.original_language == "en"){

        //    return "gb";

        // } else if (this.movie.original_language == "ja") {

        //    return "jp";

        // } else {

        //    return this.updatedLanguage = this.movie.original_language;

        // }

        switch(this.movie.original_language) {
            case "en":
                return "gb";
                

            case "ja":
                return "jp";
                

            case "zh":
                return "cn";

            case "ko":
                return "kr";    
                
                
            default:
                return this.movie.original_language;

        }

        },

        posterPath() {

            return "https://image.tmdb.org/t/p/" + "w342" + this.movie.poster_path;

        },

    },
}


</script>


<template>

<li class="movie">

    <strong>{{ movie.title }}</strong>
    
    <small>({{ movie.original_title }})</small>
    
    <span :class="'fi fi-' + updatedLanguage"></span> 

    <em>Voto: {{ movie.vote_average }}</em>

</li>

</template>


<style lang="scss" scoped>

.movie {
        display: flex;
        flex-flow: column;
        border:1px solid #aaa;
        width: 300px;
        flex-shrink: 0;
        border-radius: 4px;
        padding: 10px;


    }


</style>