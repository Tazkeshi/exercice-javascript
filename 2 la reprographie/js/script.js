var nbrePhotocopie =0;
var prixTotal =0;
var bouton = document.getElementById('bouton');
var message = document.getElementById('message');

function effectuerclacul(){

    nbrePhotocopie = document.getElementById('IDValeurSaisie').value;

    if(nbrePhotocopie <= 10){
        prixTotal = nbrePhotocopie * 0.1;
    }else if (nbrePhotocopie <= 30){
        prixTotal = 10 * 0.1 + (nbrePhotocopie - 10) * 0.09;
    }else{
        prixTotal = 10 * 0.1 + 20 *0.09 + (nbrePhotocopie - 30) * 0.08;
    }
    message.innerHTML = "le prix total est de : " + prixTotal +"euros";
}
bouton.addEventListener('click', effectuerclacul, false);