<template>
  <tr>
    <td>
      {{ id }}
    </td>
    <td>
      <input v-if="editing" v-model="movieCopy.title" class="form-control" />
      <span v-else> {{ title }} </span>
    </td>

    <td class="col-md-6">
      <input
        v-if="editing"
        v-model="movieCopy.description"
        class="form-control"
      />
      <span v-else>{{ description }}</span>
    </td>
    <td>
      <!-- MODE NON EDITION -->
      <div class="btn-group" v-if="!editing">
        <button @click="editMovie()" class="btn btn-default">Editer</button>
        <button @click="deleteMovie()" class="btn btn-danger">Supprimer</button>
      </div>

      <!-- MODE EDITION -->
      <div class="btn-group" v-else>
        <button v-if="id" class="btn btn-primary" @click="updateMovie()">
          Mettre à jour
        </button>
        <button v-else class="btn btn-success" @click="storeMovie()">
          Ajouter ce film
        </button>
        <button @click="stopEditMovie()" class="btn btn-default">Cancel</button>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
    },
    editing: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      movieCopy: {},
    };
  },
  methods: {
    deleteMovie() {
      this.$emit('deleteMovie');
    },
    editMovie() {
      this.$emit('editMovie');
    },
    stopEditMovie() {
      this.$emit('stopEditMovie');
    },
    storeMovie() {
      this.$emit('updateMovie', this.movieCopy);
    },
    updateMovie() {
      // Nous envoyons un clone pour éviter de modifier la même référence à la prochaine édition
      this.$emit('updateMovie', { ...this.movieCopy });
    },
  },
  created() {
    // Au démarrage du composant, on crée une copie du film
    this.movieCopy = {
      id: this.id || String(+new Date()), // Si aucun id, on génère id avec timestamp
      editing: this.editing,
      title: this.title,
      description: this.description,
      isNew: false,
    };
  },
};
</script>

<style scoped></style>
