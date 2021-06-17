const App = {
  data() {
    return {
      validationError: false,
      newMovieFormDisplayed: false,
      movies: [
        {
          id: 1,
          name: 'Movie 1',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
          modifying: false,
        },
        {
          id: 2,
          name: 'Movie 2',
          description:
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
          modifying: false,
        },
        {
          id: 3,
          name: 'Movie 3',
          description:
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
          modifying: false,
        },
      ],
    };
  },
  computed: {
    maxId() {
      return this.movies ? this.movies.length + 1 : 1;
    },
    movieCount() {
      return this.movies ? this.movies.length : 0;
    },
  },
  methods: {
    addMovie(name, description) {
      console.log('Name', name, 'Description', description);
      if (name === undefined || description === undefined) {
        this.validationError = true;
        return;
      }
      const newMovieId = this.movies ? this.movies.length++ : 0;
      console.log('New Movie Id', newMovieId);
      const newMovie = {
        id: newMovieId,
        name,
        description,
        modifying: false,
      };
      console.log('Movie', newMovie);
      this.movies.push(newMovie);
    },
    removeMovie(movieToRemove) {
      if (!movieToRemove) throw new Error('parameter movie is mandatory!');
      console.log('Delete the movie ...', movieToRemove);
      const index = this.movies.findIndex(
        (movie) => movie.id === movieToRemove.id,
      );
      console.log('Index is', index);
      delete this.movies[index];
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
      this.newMovieFormDisplayed = true;
    },
  },
};

Vue.createApp(App).mount('#app');
