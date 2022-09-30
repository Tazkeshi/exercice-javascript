var Age;
var Permis;
var Fidelite;
var accident;

var message = document.getElementById('IDMessage');
var button = document.getElementById('IDButton');
var compteurPrime;

function afficherResultat(){
    var accident = document.getElementById('IDAccident').value;
    if(accident >= 3){
        message.innerHTML = '<div class="alert alert-dark" roles="alert">refusé</div>'
    }
    else{
        compteurPrime = 0;
        var Age = document.getElementById('IDAge').value;
        var Permis = document.getElementById('IDPermis').value;
        var Fidelite = document.getElementById('IDFidelite').value;
        if(Age > 25){
            compteurPrime = compteurPrime + 1;
        }
        if(Permis > 2){
            compteurPrime = compteurPrime +1;
        }
        if(Fidelite > 1){
            compteurPrime = compteurPrime +1;
        }
        compteurPrime = compteurPrime - accident;
        console.log(compteurPrime);

        switch(compteurPrime){
            case 3: message.innerHTML = '<div class="alert alert-primary" roles="alert">Bleu</div>'; break;
            case 2: message.innerHTML = '<div class="alert alert-success" roles="alert">Vert</div>'; break;
            case 1: message.innerHTML = '<div class="alert alert-warning" roles="alert">Orange</div>'; break;
            case 0: message.innerHTML = '<div class="alert alert-danger" roles="alert">Rouge</div>'; break;
            case -1: message.innerHTML = '<div class="alert alert-dark" roles="alert">Refuse</div>'; break;
            default:
        }
    }
}
        button.addEventListener("click", afficherResultat, false);