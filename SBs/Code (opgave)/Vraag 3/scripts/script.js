//Vraag 3
const thermometerFill = document.getElementById("thermometerFill");
let temperatuur = prompt("Geef een temperatuur: ");

while(temperatuur === "" || isNaN(temperatuur) || parseFloat(temperatuur) > 40 || parseFloat(temperatuur) < -10){
    temperatuur = prompt("Ongeldige invoer! Geef een temperatuur: ");
}
const percentage = (parseFloat(temperatuur) + 10) * 2;

thermometerFill.style.height = percentage + "%";

if (percentage > 75) {thermometerFill.style.backgroundColor = "red";}
else if (percentage > 35) {thermometerFill.style.backgroundColor = "orange";}
else {thermometerFill.style.backgroundColor = "blue";}
