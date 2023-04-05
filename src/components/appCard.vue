<script>

export default {

    name: "AppCard",

    data() {
        return {


        }
    }, 

    props: {
        searchItem: Object,
        itemType: String,


    },

    computed: {

        
        updatedLanguage() {

        // if(this.movie.original_language == "en"){
        
        //    return "gb";
        
        // } else if (this.searchItem.original_language == "ja") {
        
        //    return "jp";
        
        // } else {
        
        //    return this.updatedLanguage = this.movie.original_language;
        
        // }

    switch(this.searchItem.original_language) {
        case "en":
            return "gb";
        

        case "ja":
            return "jp";
        

        case "zh":
            return "cn";

        case "ko":
            return "kr";    
        
        
        default:
            return this.searchItem.original_language;

            }

    },

    posterPath() {

        return "https://image.tmdb.org/t/p/" + "w342" + this.searchItem.poster_path;

        },

       starRating() {

        return Math.ceil(this.searchItem.vote_average / 2);

       }, 

    },

}

</script>


<template>

<li class="card" :style="{backgroundImage: 'url(' + posterPath + ')'}">

    <div class="text-container">

        <strong v-if="itemType == 'movie'">{{ searchItem.title }}</strong>
        <strong v-else>{{ searchItem.name }}</strong>

        <small v-if="itemType == 'movie'">({{ searchItem.original_title }})</small>
        <small v-else>{{ searchItem.original_name }}</small>

        <span :class="'fi fi-' + updatedLanguage"></span> 

        <em>Voto: <i v-for="number in starRating" class="fa-solid fa-star"></i><i v-for="number in 5 - starRating" class="fa-regular fa-star"></i></em>

        <div id="contain-overview">
        <small class="overview" v-if="itemType == 'movie'">{{ searchItem.overview }}</small>
        <small class="overwiew" v-if="itemType == 'series'">{{ searchItem.overview }}</small>
        </div>   

    </div>

</li>


</template>



<style lang="scss" scoped>

.card {
    display: flex;
    flex-flow: column;
    border:1px solid #aaa;
    width: 300px;
    height: 450px;
    background-position: center;

    flex-shrink: 0;
    border-radius: 4px;
    
   
  



}

.text-container {
    
    display: flex;
    flex-flow: column;

    background-image: linear-gradient(rgba(0,0,0,1), rgba(0,0,0,0));
    padding: 10px;
    padding-bottom: 180px;
   
}





#contain-overview {
    height: 100px;
    overflow:auto;
}

</style>