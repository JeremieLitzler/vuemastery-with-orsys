# Gestion des données avec Vuex

## Agenda

- Vuex : concepts de base.
- Installation et mise en oeuvre.
- Étendre Vuex avec les plugins.
- Librairies alternatives.

## Notes

- Les _Smart_ components parlent au store.
- Les données modifiées dans un component _Dumb_ sont:

  - remontés dans le component _Smart_
  - le component _Smart_ envoyent l'action de modification
  - le state est mise à jour
  - le component _Smart_ est notifiée puis le component _Dumb_ pour finir.

- Les actions :
  - appellent le backend.
  - sont asynchrones et préparent le terrain pour les mutations
  - appellent les mutations
  - ne modifient pas le state
- Les mutations :

  - restent très simple (pas de logique métier).
  - ne doivent pas être asynchrones.

- `mapState` vs `mapGetters` : voir [cette discussion](https://forum.vuejs.org/t/vuex-mapgetters-vs-mapstate/18447).

## Questions

### Quand utiliser VueX

Selon l'experience, on s'en rend compte quand il faut refactorer.

Quand des données, lues par des services, sont utilisées par beaucoup de pages, un state peut devenir utile.
