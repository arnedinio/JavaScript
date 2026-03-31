//Vraag 1
const boodschappenlijstje = document.querySelector("#boodschappenlijstje");
let nieuwItem = prompt("Nieuw item:");

while (nieuwItem.toLowerCase() !== "einde") {
    if (nieuwItem === "") {
        alert("Je mag geen leeg item ingeven");
    } else
    {
        let prijsNieuwItem = prompt("Prijs nieuw item:");
        let nieuw_Item = document.createElement("li");
        nieuw_Item.textContent = nieuw_Item + "€" + prijsNieuwItem;
        boodschappenlijstje.appendChild(nieuw_Item);
    }
    nieuwItem = prompt("Nieuw item:");
}
let items = boodschappenlijstje.children;
let som = 0;

for (let item of items) {
    som += parseFloat(item.textContent.slice(-4));
}

const somElement = document.querySelector("#totaal");
somElement.textContent = "Totaal: €" + som;