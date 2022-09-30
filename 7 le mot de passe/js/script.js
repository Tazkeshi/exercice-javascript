var MdpSaisi;
var regexMaj = new RegExp("[A-Z]");
var regexmin = new RegExp("[a-z]");
var regexchiffre = new RegExp("[0-9]");
var regexspecial = new RegExp("[\\w]");
var compteurForce;
var message = document.getElementById('IDMessage');

function verifierProposition(){
    compteurForce = 0;
    MdpSaisi = document.getElementById('IDMdp').value;

    if(regexMaj.test(MdpSaisi)){
        compteurForce = compteurForce + 1;
    }
    if(regexmin.test(MdpSaisi)){
        compteurForce = compteurForce +1;
    }
    if(regexchiffre.test(MdpSaisi)){
        compteurForce = compteurForce +1;
    }
    if(regexspecial.test(MdpSaisi)){
        compteurForce = compteurForce +1;
    }
    if(MdpSaisi.length < 8){
        compteurForce = compteurForce -1;
    }
    switch (compteurForce) {
        case 4:
            message.innerHTML = '<span class="text-sucess">très sécurisé ! </span>';
        break;
        case 3:
            message.innerHTML = '<span class="text-sucess">sécurisé ! </span>';
        break;
        case 2:
            message.innerHTML = '<span class="text-warning">moyen ! </span>';
        break;
        case 1:
        message.innerHTML = '<span class="text-danger">Dangereux ! </span>';
        break;
        case 0:
            message.innerHTML = '<span class="text-danger">Dangereux ! </span>';
        break;
        default:
            message.innerHTML = '';
    }
}

document.getElementById('IDMdp').addEventListener('keyup', verifierProposition, false);