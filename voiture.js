const voiture = new Object();
voiture.marque = "Toyota";
voiture.modele = "Corolla";
voiture.annee = 2020;

console.log("Bienvenue dans le monde des objets en JavaScript!\n");


const prix = (prix, tva) => prix*tva + prix;
const prixVoiture = prix(2000000, 0.2).toLocaleString('fr-FR');

// Accès aux propriétés
console.log(`Vous avez achete une ${voiture.marque} ${voiture.modele} de l'annee ${voiture.annee}. Elle vous a coute ${prixVoiture} FCFA.\n`);