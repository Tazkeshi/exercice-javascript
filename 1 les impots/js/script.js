var AgeSaisi;
var GenreSaisi;
var bouton = document.getElementById('bouton');
var message = document.getElementById('message');

function verifierimposition(){
    //recupérer la valeur de l'age et du genre avec la fonction .value.
    AgeSaisi = document.getElementById('IDAgeSaisi').value;
    GenreSaisi = document.getElementById('IDGenreSaisi').value;
    //notre condition: si age>=18 et homme alors, ou si femme et age>= 20 et si femme...
    if(GenreSaisi == "H" && AgeSaisi >= 18){
        message.innerHTML = '<div class="alert alert-danger" roles="alert">Vous êtes imposable!</div>';
    }else if((GenreSaisi == "F" && AgeSaisi >= 20) && (GenreSaisi == "F" && AgeSaisi <= 35)){
            message.innerHTML = '<div class="alert alert-danger" roles="alert">Vous êtes imposable!</div>';
    }else{
            message.innerHTML = '<div class="alert alert-danger" roles="alert">Vous êtes non imposable';
    }
}
    //Ajout d'un écouteur d'évenement sur le bouton qui au click appelera la fonction verifierimposition();
    bouton.addEventListener('click',verifierimposition,false)