# Mastering Vue - A training by Orsys

The training is made of hands-on projects showcased on [this website](https://vuemastery-with-orsys.netlify.app/).

## History of ECMAScript

- ViteJs is remplacing Webpack in VueJs
- You can build native applications by developping with VueNative, a concurrent of ReactNative.

## [Ecosystem of modern developer](1.Ecosystem.of.modern.developer/Notes.md)

- Manipulation de tableau

```js
//supprimé un élément d'un tableau
delete arr[index];
//ajouté un élément à un tableau à index donné
arr.splice(1, 0, 'value'); //ajouté value at the index 1 in the array
```

- Closure: the principles is important to remember.
  - A function called within one is scope to the instance of the first function

```js
var dog = function (barked) {
  return function (times) {
    console.log(`barked ${times} times!`);
  };
};
```

- Promise:

  - A promise is not lazy.
  - Not returning something inside a `then` return a promise by default.
  - Use `async` and `await` when you have more too many `then(...)`.

- **Check out [the JS comparaison table](https://dorey.github.io/JavaScript-Equality-Table/)**

- `this` points to the called, not the declaring.

```js
const obj1 = {
  a: 1,
  getA() {
    return this.a;
  },
};

const obj2 = {
  getA() {
    return obj1.a;
  },
};

console.log(obj2.getA()); // undefined
```

## [Vuejs First steps with Vuejs](2.First.steps.with.Vuejs/Notes.md)

## [Use components](3.Use.components/Notes.md)

## [Enrich templates](4.Enrich.templates/Notes.md)

## [Handle navigation](5.Handle.navigation/Notes.md)

## [Management of state with Vuex](6.Management.of.state.with.Vuex/Notes.md)

## [Connecting the application](7.Connecting.the.application/Notes.md)

## [Best practices and beyond](8.Best.practices.and.beyond/Notes.md)
