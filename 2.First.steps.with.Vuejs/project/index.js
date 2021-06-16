const App = {
  data() {
    return {
      societe: 'Macademia',
      nbClient: 0,
    };
  },
  methods: {
    addClient() {
      this.nbClient += 1;
    },
    removeClient() {
      if (this.nbClient === 0) return;

      this.nbClient -= 1;
    },
  },
};

Vue.createApp(App).mount('#app');
