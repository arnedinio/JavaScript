//Oefening 4
const somElement = document.getElementById("som");
const gemElement = document.getElementById("gemiddelde");
const maxElement = document.getElementById("grootste");
let som = 0;
let max = null;
for (let i = 0; i < 5; i++)
{
   let getal = parseInt(prompt("Getal:"));
   som += getal;
   if (getal > max || getal === null)
   {
       max = getal;
   }
}

somElement.textContent = som.toString();
gemElement.textContent = (som / 5).toString();
maxElement.textContent = max.toString();