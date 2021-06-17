console
Vue.createApp({
  data() {
    return {
      movies: moviesService.loadMovies(),
      movie: {}
    }
  },
  methods: {
    createMovie: function() {
      var newMovie = {
        title: '',
        description: '',
        note: 0,
        editing: true
      };
      this.movies.push(newMovie);
    },
    deleteMovie: function(indexMovie) {
      this.movies.splice(indexMovie, 1);
    },
    editMovie: function(movie) {
      movie.editing = true;
    },
    updateMovie: function(movie) {
      movie.editing = false;
    },
    storeMovie: function(movie) {
      movie.id = (+new Date()).toString(); // Récupérer le timestamp actuel et le convertir
      movie.editing = false;
    }
  }
}).mount('#v-app');
