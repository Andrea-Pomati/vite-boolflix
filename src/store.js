import { reactive } from "vue";

export const store = reactive({

    baseApi: "https://api.themoviedb.org/3",

    path: "",

    apiKey: "?api_key=522711dce33e23adb0557b82df7050c0",

    queryParameters: "",

    movies: [],

    series: [],

    searchText: "",
    


});