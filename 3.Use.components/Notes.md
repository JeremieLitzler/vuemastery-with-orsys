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
  - VueJs utilise un _1-way databinding_.
  - **L'enfant ne peut pas mettre à jour ce que le parent envoie** même s'il existe une façon de la faire.
  - C'est pour éviter des problèmes de performance.
  - Comment faire donc ?
    - `this.$emit('event`, '').
    - L'événement est envoyé par le parent direct.
- Il faut déclarer les templates dans le HTML en premier.

- Il y a les `Dumb` et les `Smart` composants. Il faut éviter d'avoir des composants avec trop de responsabilités.

  - Il faut maximiser les `Dumb` composants.
  - Les `Smart` composants contiennent un peu d'IHM et de logique. A terme toutefois, il serait mieux que le `state` gérer la Business Logic.

- Le nommage des composants doivent être nommé en _dash case_ (`mon-composant`) et penser aussi à prefixer des composants qui pourraient être nommés génériquement (ex : `User`).

- les `slot` sont utiles pour des modaux.

### `computed`

- Elles gèrent du cache. Les `computed` ont une meilleure performance.

  - Le _re-render_ est le plus coûteux.
  - Il y a 3 étapes de _réactivité_ :
    - DETECT
    - COMPARE : est nécessaire car le changement d'une valeur peut impacter les `computed` dont dépendent la valeur modifiée.
    - CHANGE

- Il faut utiliser des `computed` pour un usage depuis les vues HTML.

### `watch`

- Un watcher est préféré dans le cas où il n'y a pas d'impact sur la donnée dans la vue.
- Il y a sûrement un usage avec les routes.

### `mixin`

- Je ne comprends pas le cas d'usage.

### Components lifecycle

- Voir la doc.

### Commnunication entre enfant et parent

- Il est mieux de passer les propriétés une par une du parent à l'enfant.
- Fournir un objet donne trop de responsabilités à l'enfant.
- Fournir une liste de propriétés permet d'avoir une certaine réutilisabilité.
- On appelle ça des _Data Driven Components_.

## Questions

### Pourquoi doit-on utiliser un tableau plutôt qu'un objet dans `props` si le composant reçoit un objet
