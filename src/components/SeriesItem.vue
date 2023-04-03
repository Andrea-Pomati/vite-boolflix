<script>
import { store } from '../store.js';


export default {
    name: "SeriesItem",

    data () {
        return {
            store
        }
    },

    props: {
        seriesItem: Object,
    },

    computed: {

updatedLanguage() {


switch(this.seriesItem.original_language) {
    case "en":
        return "gb";
        

    case "ja":
        return "jp";
        

    case "zh":
        return "cn";

    case "ko":
        return "kr";    
        
        
    default:
        return this.seriesItem.original_language;

            }

        },
    },
}


</script>



<template>
<li class="series-item">
    {{ seriesItem.name }}
    <em>{{ seriesItem.original_name }}</em>
    <span :class="'fi fi-' + updatedLanguage"></span> 
    Voto: {{ seriesItem.vote_average }}
</li>

</template>


<style lang="scss" scoped>

.series-item {
    display: flex;
    flex-flow: column;
    flex-shrink: 0;
    border:1px solid #aaa;
    width: 300px;
    border-radius: 4px;
    padding: 10px;
}

</style>