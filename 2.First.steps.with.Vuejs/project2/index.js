const App = {
  data() {
    return {
      movies: [
        {
          id: 1,
          name: 'Movie 1',
          description: 'Description of movie 1',
          modifying: false,
        },
        {
          id: 2,
          name: 'Movie 2',
          description: 'Description of movie 2',
          modifying: false,
        },
        {
          id: 3,
          name: 'Movie 3',
          description: 'Description of movie 3',
          modifying: false,
        },
      ],
    };
  },
  methods: {
    addMovie() {
      this.movies.push();
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
  },
};

Vue.createApp(App).mount('#app');
