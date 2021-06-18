const MOCK_MOVIES = [
  {
    id: '1542',
    title: "J'veux du soleil",
    description: `"J'ai changé les plaquettes de frein et le liquide de refroidissement. 350 € chez Norauto..." C'est parti pour un road-movie dans la France d'aujourd'hui! Avec leur humour et leur caméra, Gilles Perret et François Ruffin traversent le pays: à chaque rond-point en jaune, c'est comme un paquet-surprise qu'on ouvrirait.`,
    editing: false,
  },
  {
    id: '2658',
    title: 'Avengers: Infinity War',
    description:
      'Les Avengers et leurs alliés devront être prêts à tout sacrifier pour neutraliser le redoutable Thanos avant que son attaque éclair ne conduise à la destruction complète de l’univers. ',
    editing: false,
  },
  {
    id: '1536',
    title: 'Dragons 3 : Le monde caché',
    description:
      'Harold est maintenant le chef de Berk au côté d’Astrid et Krokmou, en tant que dragon, est devenu le leader de son espèce. Ils réalisent enfin leurs rêves de vivre en paix entre vikings et dragons. Mais lorsque l’apparition soudaine d’une Furie Eclair coïncide avec la plus grande menace que le village n’ait jamais connue, Harold et Krokmou sont forcés de quitter leur village pour un voyage dans un monde caché...',
    editing: false,
  },
];

export default {
  loadMovies() {
    return MOCK_MOVIES;
  },
};
