p# Premiers pas avec Vue.js

## Agenda

- Principes clés de Vue.js.
- Vue.js vs React vs Angular.
- Roadmap et prochaines versions.
- Créer et gérer un projet avec vue-cli.
- La base d'une application : l'instance Vue.
- Créer son premier composant Vue.js.
- Gérer les événements du DOM.
- Débugger avec vue-devtools.

## Notes

- `{{...}}` are called mustache tags that help to implement reactivity.
- Using `v-model` is a one way data binding.
- The keywords
  - `v-model`
  - `v-bind` with shorthand `:`
  - `v-on` with shorthand `@`
  - `v-if` vs `v-show`
    - `v-if`: it costs less CPU on some case (loading iframes of Google Maps)
    - `v-show`: it is useful when we want to avoid changing the DOM too often.
  - `v-for` looks like the `for..of` loop.
    - can't be used with `v-if` on the same node but it can be done with:

```html
<p v-for="meal in menu" :key="meal.id">
  <template v-if="false">{{ meal }}</template>
</p>
```

or

```html
<template v-if="false">
  <p v-for="meal in menu" :key="meal.id">{{ meal }}</p>
</template>
```

    - never use the default `index` in each object.
    - using `:key` allow to perform well in DOM manipulation

## Questions

### Quelle est la bonne pratique du refactoring des méthodes qui sont trop grandes
