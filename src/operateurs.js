// Operateurs
//La précedence des opérateurs est déterminée par la table des précédences
//donc d'abors la priorité du nombre de la catégorie et ensuite l'associativité si il y a une égalité
//entre la catégorie des opérateurs

let a = ((2 + 2) * 6) / 2;
let b = 1;
b += 2;
b += 5;
console.log(b);
console.log(a);

let c = 1,
  d = 8;
console.log(true + "");
console.log(true === "true");
console.log(1 === "1");
console.log(3 < 2 < 1);
console.log(!!true);
console.log(true || false);
console.log(true && false);

if (c && d) {
  console.log("c'est défini");
}

if (c || d) {
  console.log("let's go");
}
