console;
const App = Vue.createApp({
  data() {
    return {
      movies: moviesService.loadMovies(),
      movie: {},
    };
  },
  methods: {
    createMovie: function () {
      var newMovie = {
        title: '',
        description: '',
        note: 0,
        editing: true,
      };
      this.movies.push(newMovie);
    },
  },
});

App.component('movie-item', {
  props: ['id', 'title', 'description'],
  template: '#template-movie-item',
  methods: {
    editMovie: function (movie) {
      movie.editing = true;
    },
    updateMovie: function (movie) {
      movie.editing = false;
    },
    storeMovie: function (movie) {
      movie.id = (+new Date()).toString(); // Récupérer le timestamp actuel et le convertir
      movie.editing = false;
    },
    deleteMovie: function (indexMovie) {
      console.log('Emit event!');
      this.$emit('delete', indexMovie);
    },
  },
});

App.component('movie-list', {
  props: ['movies'],
  template: '#template-movie-list',
  methods: {
    editMovie: function (movie) {
      movie.editing = true;
    },
    updateMovie: function (movie) {
      movie.editing = false;
    },
    storeMovie: function (movie) {
      movie.id = (+new Date()).toString(); // Récupérer le timestamp actuel et le convertir
      movie.editing = false;
    },
    deleteMovie: function (indexMovie) {
      console.log('Parent caught event!');
      this.movies.splice(indexMovie, 1);
    },
  },
});
App.mount('#v-app');
