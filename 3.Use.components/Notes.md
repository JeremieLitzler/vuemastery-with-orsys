# Répartir son code dans des composants

## Agenda

- L'imbrication de composants et les props.
- Passer du contenu à un composant : les slots/children.
- Déclencher des événements custom.
- Le cycle de vie des composants.

## Notes

- Les composants sont liés entre eux telle une autoroute
- Il est impossible de modifier dans une méthode d'un composant la valeur d'une donnée de `props`.
  - Une donnée de `props` est immutable.
  - VueJs utilise un _1-way_ databinding.
  - **L'enfant ne peut pas mettre à jour ce que le parent envoie** même s'il existe une façon de la faire.
  - C'est pour éviter des problèmes de performance.
  - Comment faire donc ?
    - `this.$emit('event`, '').
    - L'événement est envoyé par le parent direct.
- Il faut déclarer les templates dans le HTML en premier.

- les `slot` sont utiles pour des modaux.

### `computed`

- Elles gèrent du cache. Les `computed` ont une meilleure performance
- Il faut utiliser des `computed` pour un usage depuis les vues HTML.

### `watch`

- Un watcher est préféré dans le cas où il n'y a pas d'impact sur la donnée dans la vue.
- Il y a sûrement un usage avec les routes.

### `mixin`

- Je ne comprends pas le cas d'usage.

### Components lifecycle

- Voir la doc.

## Questions

### Pourquoi doit-on utiliser un tableau plutôt qu'un objet dans `props` si le composant reçoit un objet
