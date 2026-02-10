//Oefening 5
const resultaatUl = document.getElementById("resultaat");
let naam = "";
let itemsResultaat = resultaatUl.children;
let count = 0;
while ( naam !== "Einde")
{
    naam = prompt("Naam:");
    let score = parseInt(prompt("Score:"));
    if (naam !== "Einde")
    {
        resultaatUl.appendChild(document.createElement("li"));
        itemsResultaat.item(count).textContent = ("Naam:" + naam + "; Score: " + score);
    }
    count += 1;
}
