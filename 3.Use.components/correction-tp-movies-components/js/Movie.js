// Movie.js
APP.component('movie', {
    template: '#template-movie',
    props: {
        id: {
            type: String,
        },
        editing: {
            type: Boolean,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            movieCopy: {}
        }
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
            this.$emit('updateMovie', {...this.movieCopy});
        },
    },
    created() {
        // Au démarrage du composant, on crée une copie du film
        this.movieCopy = {
            id: this.id || String(+(new Date())), // Si aucun id, on génère id avec timestamp
            editing: this.editing,
            title: this.title,
            description: this.description,
            isNew: false
        };
    }
});