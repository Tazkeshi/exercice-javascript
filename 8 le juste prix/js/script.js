const nomObjet = ['une chaise gaming','un costume d\'halloween','un barbecue','une guitare','un sac à main'];
const imageObjet = ['chaise.png','costume-haloween.png','grill.png','guitare.png','sac-a-main.png'];
var prixpropose;
var prixMystere;
var nbreAleatoire;
var compteurTentative;
var image = document.getElementById('IDObjet');
var nomImage = document.getElementById('IDNomObjet');
var IDButton = document.getElementById('IDButton');
var message = document.getElementById('IDMessage')

var affichageTentative = document.getElementById('IDNbreTentative');

function genererunchiffre(valeurMax){
    return Math.floor(Math.random()* Math.floor(valeurMax));
}
prixMystere = genererunchiffre(100) + 1;
nbreAleatoire = genererunchiffre(5);

function afficherImage(valeur) {
    return '<img src="./img/' + valeur + '" class="img-fluid" width="30%" alt="Responsive image">';
}
image.innerHTML = afficherImage(imageObjet[nbreAleatoire]);
nomImage.innerHTML = nomObjet[nbreAleatoire];
compteurTentative = 10;
affichageTentative.innerHTML = "il vous reste" + compteurTentative + " tentatives...";

function verifierProposition(){
    prixpropose = document.getElementById('IDPrixPropose').value;
    if(compteurTentative == 0){
        affichageTentative.innerHTML = "il vous reste" + compteurTentative + "tentatives...";
        Message.innerHTML = "Désolé, vous avez perdu !<br> Le juste prix était de" + prixMystere + "euros";
        bouton.disabled = true;
    }else{
        if(prixpropose > prixMystere){
            message.innerHTML = "c'est moins !";
            compteurTentative--;
            affichageTentative.innerHTML = "il vous reste" + compteurTentative + "tentatives...";
        }
        if(prixpropose < prixMystere){
            message.innerHTML = "c'est plus !";
            compteurTentative--;
            affichageTentative.innerHTML = "il vous reste" + compteurTentative + "tentatives...";
        }
        if(prixpropose == prixMystere){
            message.innerHTML = "bravo vous avez gagné !";
            affichageTentative.innerHTML = "En" + compteurTentative + "tentatives...";
            IDButton.disabled = true;
        }
    }
}
IDButton.addEventListener('click', verifierProposition, false);