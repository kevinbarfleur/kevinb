---
template: post
title: Pré-requis React 1
slug: /posts/prerequis-react-1
draft: false
date: 2019-03-20T15:32:19.830Z
description: 'var, let, const, arrow functions et template strings'
category: RAPPELS
tags:
  - JAVASCRIPT
---
# Pré-requis React 1

### Aujourd'hui →

1. var, let et const
2. Arrow fonctions
3. Les template strings

---

## Var, Let et Const →

`var` permet de définir une variable globale ou locale à une fonction (sans distinction des blocs utilisés dans la fonction) :

```javascript
var variable = 1

if (variable === 1) {
  var variable = 2

  console.log(variable)
  // valeur affichée: 2
}

console.log(variable)
// valeur affichée: 2
```

`let` permet de déclarer une variable dont la portée est celle du bloc courant :

```javascript
let variable = 1

if (variable === 1) {
  let variable = 2

  console.log(variable)
  // valeur affichée: 2
}

console.log(variable)
// valeur affichée: 1
```

`const` permet de créer une constante :

```javascript
const constante = 1
constante = 2
// Error: "constante" is read-only
```

la constante déclaré doit toujours être assignée :

```javascript
const value
    // Error

    const value = 10
    // Au top !
```

Attention ! La portée de `const` est aussi celle du bloc courant :

```javascript
const constante = 1

if (constante === 1) {
  const constante = 2

  console.log(constante)
  // valeur affichée: 2
}

console.log(constante)
// valeur affichée: 1
```

---

## Fonctions fléchées ou Arrow functions →

La manière la plus connue de déclarer une fonction :

```javascript
function printHello() {
  console.log('Hello')
}

printHello()
```

Fonction fléchées :

```javascript
const printBye = () => {
  console.log('bye')
}

printBye()
```

Ou :

```javascript
const printBye = () => console.log('bye')
printBye()
```

Autre exemple :

```javascript
function generateID(firstname, name, age) {
  const id = Date.now() + firstname + name + age
  return id
}

console.log(generateID('John', 'Smith', 23))
// Affiche : 1553161821239JohnSmith23

// Fonction fléchée
const generateSameID = (firstname, name, age) =>
  Date.now() + firstname + name + age

console.log(generateOtherID('John', 'Smith', 23))
// Affiche : 1553161821239JohnSmith23
```

---

## Les template strings →

Le principe est de faciliter le rendu dynamique des chaîne de caractères.

Avant :

```javascript
var name = 'Sandra'
var sayHello = 'Hello ' + name // => Hello Sandra
```

Maintenant :

```javascript
const name = `Sandra`
const sayHello = `Hello ${name}` // => Hello Sandra
```

Les template string permettend aussi de générer des bouts d'HTML :

```javascript
const html = `
    	<div>
    		<p>Hello !</p>
    	<div>
    `

document.querySelector('.myDiv').innerHTML = html
```

On peut même rendre le tout dynamique grace aux fonctions :

```javascript
const generateUserInfo = (name, id, intro) => `
    	<div>
    		<h3>${name}</h3>
    		<p>
    			<i>${id}</i>
    		</p>
    		<p>${intro}</p>
    	</div>
    `

document.querySelector('.myDiv').innerHTML = generateUserInfo(
  'Mark Issou',
  42,
  'blablablablalbla'
)
```
