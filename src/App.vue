<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import {store} from "./store.js";
import axios from "axios";

export default {
  data () {
    return {

      store,


    };
  },

  components: {
    AppMain,
    AppHeader,
  },

  created() {

    // axios.get("https://api.themoviedb.org/3/search/movie?api_key=522711dce33e23adb0557b82df7050c0&query=fast and furious").then((response) => {
    //   console.log(response.data.results);

    //   this.store.movies = response.data.results;
    // });
  },

  methods: {

    searchMovieTitle() {

      this.store.path = "/search/movie";

      this.store.queryParameters = "&query=" + encodeURIComponent(this.store.searchText);

      console.log(this.store.baseApi + this.store.path + this.store.apiKey + this.store.queryParameters);

      axios.get(this.store.baseApi + this.store.path + this.store.apiKey + this.store.queryParameters).then((response) =>{
      console.log(response.data.results);

      this.store.movies = response.data.results;
      });
    },

  },
}

</script>

<template>

<AppHeader @searchMovieTitleEvent="searchMovieTitle()"></AppHeader>

<AppMain></AppMain>


</template>

<style lang="scss" scoped>

</style>
