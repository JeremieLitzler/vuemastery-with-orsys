const App = {
  data() {
    return {
      validationError: false,
      newMovieFormDisplayed: false,
      movies: [],
    };
  },
  computed: {
    movieCount() {
      return this.movies ? this.movies.length : 0;
    },
  },
  methods: {
    addMovie(name, description) {
      console.log('Name', name, 'Description', description);
      this.validationError = !this.validationError;
      if (name === undefined || description === undefined) {
        this.validationError = true;
        return;
      }
      const newMovieId = (+new Date()).toString();
      console.log('New Movie Id', newMovieId);
      const newMovie = {
        id: newMovieId,
        name,
        description,
        modifying: false,
      };
      console.log('Movie', newMovie);
      this.movies.push(newMovie);
      this.showNewMovieForm();
    },
    removeMovie(movieToRemove) {
      if (!movieToRemove) throw new Error('parameter movie is mandatory!');
      console.log('Delete the movie ...', movieToRemove);
      const index = this.movies.findIndex(
        (movie) => movie.id === movieToRemove.id,
      );
      // console.log('Index is', index);
      this.movies.splice(index, 1);
    },
    modifyMovie(movieModified) {
      if (!movieModified) throw new Error('parameter movie is mandatory!');
      movieModified.modifying = !movieModified.modifying;
      console.log('Modify the movie ...', movieModified);
      if (!movieModified.modifying) {
        // save
        let matchingMovie = this.movies.find(
          (movie) => movie.id === movieModified.id,
        );
        matchingMovie = movieModified;
        console.log('Modify the movie ...', matchingMovie);
      }
    },
    showNewMovieForm() {
      this.newMovieFormDisplayed = !this.newMovieFormDisplayed;
    },
  },
};

Vue.createApp(App).mount('#app');
