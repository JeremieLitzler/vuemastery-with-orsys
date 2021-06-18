<template>
  <div>
    <table class="table table-striped">
      <tr>
        <th>#</th>
        <th>Nom</th>
        <th>Description</th>
        <th>Actions</th>
      </tr>
      <tr></tr>

      <movie-item
        v-for="(movie, indexMovie) in movies"
        :key="movie.id"
        :id="movie.id"
        :editing="movie.editing"
        :title="movie.title"
        :description="movie.description"
        @deleteMovie="deleteMovie(indexMovie)"
        @editMovie="editMovie(movie)"
        @stopEditMovie="stopEdit(movie, indexMovie)"
        @updateMovie="updateMovie($event, indexMovie)"
      ></movie-item>
    </table>

    <p class="lead">
      <span>{{ movieCount }}</span>
      <br />
      <button @click="createMovie()" class="btn btn-primary">
        Ajouter un nouveau film
      </button>
    </p>
  </div>
</template>

<script>
import MovieItem from './MovieItem.vue';
import moviesService from '../services/moviesService';

export default {
  components: { MovieItem },

  data() {
    return {
      movies: moviesService.loadMovies(),
      movie: {},
    };
  },
  computed: {
    movieCount() {
      const count = this.movies.length;

      return count > 0
        ? `Il y a ${count} film${count > 1 ? 's' : ''}`
        : 'Aucun film pour le moment';
    },
  },
  methods: {
    createMovie: function () {
      var newMovie = {
        title: '',
        description: '',
        note: 0,
        editing: true,
        isNew: true,
      };
      this.movies.push(newMovie);
    },
    deleteMovie: function (indexMovie) {
      this.movies.splice(indexMovie, 1);
    },
    editMovie: function (movie) {
      movie.editing = true;
    },
    stopEdit: function (movie, index) {
      if (movie.isNew) {
        this.deleteMovie(index);
      } else {
        movie.editing = false;
      }
    },
    updateMovie: function (newMovie, index) {
      newMovie.editing = false;

      this.movies[index] = newMovie;

      // INUTILE DEPUIS VUE 3 !!
      // La ligne ci-dessous ne fonctionne pas en VueJS ! (Cf chapitre 9.Comprendre le binding)
      //this.movies[index] = newMovie;
      // On préférera cette écriture pour enclencher le réaffichage
      //Vue.set(this.movies, index, newMovie);
    },
  },
};
</script>

<style scoped></style>
