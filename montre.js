function afficherHeure() {
    const elementHeure = document.getElementById('heure');
    const maintenant = new Date();
    const heures = maintenant.getHours().toString().padStart(2, '0'); // Format HH
    const minutes = maintenant.getMinutes().toString().padStart(2, '0'); // Format MM

    const heureActuelle = `${heures}:${minutes}`;
    elementHeure.textContent = heureActuelle;
}

// Mettez à jour l'heure toutes les secondes (1000 millisecondes)
setInterval(afficherHeure, 1000);

// Appelez la fonction une fois au chargement de la page pour afficher l'heure initiale
afficherHeure();

function afficherDate() {
    const elementDate = document.getElementById('date');
    const joursSemaine = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    const mois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];

    const maintenant = new Date();
    const jourSemaine = joursSemaine[maintenant.getDay()];
    const jour = maintenant.getDate();
    const moisActuel = mois[maintenant.getMonth()];

    const dateActuelle = `${jourSemaine} ${jour} ${moisActuel}`;
    elementDate.textContent = dateActuelle;
}

// Appelez la fonction une fois au chargement de la page pour afficher la date initiale
afficherDate();
