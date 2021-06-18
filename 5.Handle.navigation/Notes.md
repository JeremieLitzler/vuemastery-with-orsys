# Gérer la navigation

## Agenda

- Développer un système de routing maison.
- Principes de Vue router.
- Configurer des routes.
- Sécuriser une application : les Navigation Guards.
- Transitions entre écrans.

### Les `Guard`

Voir correction du tp sur le router.

### Lazy loading

```js
const Login = () => import('../components/Login.vue'); // LAZY LOADING WITH AN ARROW FUNCTION !
import Home from "../pages/Home.vue";

export default [
  {
    path: "/login",
    name: "login",
    component: Login,
    beforeEnter(to, from, next) {
      // On va vérifier qu'il n'est pas déjà connecté avant d'accéder à cette page
      // Si déjà connecté, on redirige simplement vers la page home

      const valueToken = localStorage.getItem(
        'X-TOKEN'
      );

      if (valueToken) {
        next({ name: "home" });
      } else {
        next();
      }
    },
  },
```
