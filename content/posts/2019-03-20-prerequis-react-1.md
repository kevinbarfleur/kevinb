---
template: post
title: 'Var, Let et Const'
slug: /posts/prerequis-react-1
draft: false
date: 2019-03-20T15:32:19.830Z
description: |-
  Première partie des pré-requis / rappels pour mieux aborder React.
  Notions abordées  : var, let, const.
category: 'PRÉ-REQUIS REACT',
tags:
  - Javascript
  - ES6
---

## Pré-requis React 1.

![javascript-image-var-let-const](/media/javascript-tutoriel-const-let-var.png 'Tutoriel Javascript : var, let et const')

Salut à tous 👋

**Quoi ?**

**Aujourd'hui** on va aborder la notions la plus basique de l'ES6, à propos de la déclaration de variables et de constantes. On va parler des mots-clés `var`, `let` et `const`.

**Pourquoi ?**

Même si `var` est toujours très utilisé, l'apparition de `let` et `const` permet d'avoir un bien meilleur controle de la portée de nos variables et constantes.

**Comment ?**

On va voir comment se comporte `var`, et pourquoi de plus en plus de personne ne l'utilisent plus.
Comment se comporte `let`.
Et comment se comporte `const`.

---

### Var →

`var` permet de définir une variable globale ou locale à une fonction.

Prenons une fonctions :

```javascript
var size = 1

function getSize() {
  var size = 2
  console.log(size)
}

console.log(size) // valeur affichée: 1
getSize() // valeur affichée: 2
```

ici, la premiere variable `size` déclaré est globale, et la deuxieme est locale à la fonction `getSize()`, l'une n'interfère pas sur l'autre.

Mais dans un bloc `if` par exemple, la variable sera mis-à-jour. Et dans bien des cas, ce n'est pas notre objectif :

```javascript
var size = 1

if (size === 1) {
  var size = 2

  console.log(size)
  // valeur affichée: 2
}

console.log(size)
// valeur affichée: 2
```

---

### Let →

les déclaration `let` et `const` permetent d'eviter se genre de problèmes.

Les variables déclaré avec let et const on pour portée le bloc courant.

c'est-à-dire quelle n'existent que dans ce bloc.

`let` permet de déclarer une variable dont la portée est celle du bloc courant :

```javascript
let size = 1

if (variable === 1) {
  let size = 2

  console.log(size)
  // valeur affichée: 2
}

console.log(size)
// valeur affichée: 1
```

ici on vois bien que les deux variables `size` sont isolées et on chacune leurs valeurs.

`let` peut être très pratique dans les boucles par exemple :

avec `var` :

```javascript
for (var value = 1; value < 10; value++) {
  //console.log(value)
}

console.log(value)
```

`value` est accessible ailleurs dans le programme, c'est pas cool.

avec `let` :

```javascript
for (let value = 1; value < 10; value++) {
  console.log(value)
}

console.log(value) // ReferenceError: value is not defined
```

`value` n'existe que dans cette boucle, on peut donc, si l'envie nous prend la déclarer ailleurs, pour une autre boucle par exemple.

---

### Const →

`const` permet de déclarer une constante, contrairement aux variables déclarées avec `var` et `let`, une constante, comme sont nom l'indique ne pourra pas être modifiée.

De plus, c'est plutot une bonne chose d'avoir un mot-clé spécifique aux constantes, pour les reconnaitre d'un coup d'oeil.

```javascript
const value = 1
value = 2
// Error: "value" is read-only
```

De plus, la constante déclaré doit toujours être assignée :

```javascript
const value
// Error
```

```javascript
const value = 10
// Au top !
```

Attention ! tout comme `let, La portée de`const est aussi celle du bloc courant :

```javascript
const value = 1

if (value === 1) {
  const value = 2

  console.log(value)
  // valeur affichée: 2
}

console.log(value)
// valeur affichée: 1
```
