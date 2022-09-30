var totalsaisie;
var Monnaiesaisie;
var arendre;
var nbre10euro;
var nbre5euro;
var nbre1euro;

var message10 = document.getElementById('message10');
var message5 = document.getElementById('message5');
var message1 = document.getElementById('message1');

message10.innerHTML = "0";
message5.innerHTML = "0";
message1.innerHTML = "0";

function calculerMonnaie(){
    totalsaisie = document.getElementById('IDTotal').value;
    Monnaiesaisie = document.getElementById('IDMonnaie').value;

    arendre = Monnaiesaisie - totalsaisie;
    nbre10euro = 0;
    while(arendre >= 10){
        nbre10euro = nbre10euro +1;
        arendre = arendre - 10;
    }
    nbre5euro = 0;
    while(arendre >= 5){
        nbre5euro = nbre5euro +1;
        arendre = arendre -5;
    }
    message10.innerHTML = nbre10euro;
    message5.innerHTML = nbre5euro;
    message1.innerHTML = arendre;
}
document.getElementById('button').addEventListener('click', calculerMonnaie, false);