//Oefening 3

const ondergrens = parseInt(prompt("ondergrens"));
const bovengrens = parseInt(prompt("bovengrens"));
const resultaat = document.getElementById("resultaat");

if(ondergrens > bovengrens)
{
    alert("Ondergrens groter dan bovengrens!");
}
else
{
    const willekeurigGetal = Math.floor(Math.random() * (bovengrens - ondergrens + 1)) + ondergrens;
    resultaat.textContent = willekeurigGetal;
}
