var Heure;
var Minute;
var Seconde;
var ValeurModifie;
var bouton = document.getElementById('bouton');
var message = document.getElementById('message');

function afficherHeure(){
    Heure = parseInt(document.getElementById('IDValeurHeure').value);
    Minute = parseInt(document.getElementById('IDValeurMinutes').value);
    Seconde = parseInt(document.getElementById('IDValeurSecondes').value);

    Seconde = Seconde + 1;
    if(Seconde == 60){
        Seconde = "00";
        Minute = Minute + 1;
    }
    if(Minute == 60){
        Minute = "00";
        Heure = Heure + 1;
    }
    if(Heure == 24){
        Heure = "00";
    }
    ValeurModifie = Heure + 'h ' + Minute + 'min ' + Seconde + 'sec';
    message.innerHTML = ValeurModifie;
}
bouton.addEventListener('click', afficherHeure, false);