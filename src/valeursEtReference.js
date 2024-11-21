//copie par valeur
let a = 1;
let b = a;
console.log({ a, b });
b += 3;
console.log({ a, b });
//Étape 1 : a et b sont deux variables distinctes contenant des valeurs primitives (ici un nombre).
//Étape 2 : Quand on fait let b = a;, JavaScript copie la valeur de a dans b. Ils sont indépendants.
//Étape 3 : Quand on fait b += 3;, seule la valeur de b est modifiée. a reste inchangée.
//Résultat attendu :
//Avant b += 3 : { a: 1, b: 1 }
//Après b += 3 : { a: 1, b: 4 }

// par référence
let c = { d: 1 };
let e = c;
e.d = 2;
console.log(c);
console.log(e);

//Étape 1 : c est un objet, et les objets en JavaScript sont manipulés par référence.
//Étape 2 : Quand on fait let e = c;, e ne reçoit pas une copie des données de c mais une référence vers le même objet en mémoire.
//Étape 3 : Quand on modifie e.d = 2;, cela modifie directement l’objet partagé. Ainsi, c et e reflètent tous les deux le changement.
//Résultat attendu :
//console.log(c) et console.log(e) afficheront tous les deux { d: 2 }.

//Résumé
//Les valeurs primitives (nombres, chaînes, booléens, etc.) sont copiées par valeur, ce qui rend les variables indépendantes.
//Les objets (tableaux, objets, fonctions) sont copiés par référence, ce qui signifie que deux variables peuvent pointer vers le même objet en mémoire.
