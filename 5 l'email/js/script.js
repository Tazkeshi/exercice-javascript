var emailsaisi;
var emailsaisicoupe;
var positionarobase;
var message = document.getElementById('message');

function verifierproposition(){

    emailsaisi = document.getElementById('email').Value;

    if(emailsaisi.includes('@') && emailsaisi.includes('.')){
        positionarobase = emailsaisi.indexof('@');
        emailsaisicoupe = emailsaisi.substring(positionarobase);
        if (emailsaisicoupe.includes('.')){
            message.innerHTML = '<span class="text-success">Adresse email valide !</span>';
        }else{
            message.innerHTML = '<span class="text-danger">Adresse email invalide !</span>';
        }
    }else{
        message.innerHTML = '<span class="text-danger">Adresse email invalide !</span>';
    }
}
document.getElementById('email').addEventListener('keydown', verifierproposition, false);