const veldContainer = document.querySelector("#veld-container");
const toevoegenKnop = document.querySelector("#toevoegenSpeler");

let spelerTeller = 1;

toevoegenKnop.addEventListener("click", () => {

    const speler = document.createElement("div");
    speler.classList.add("speler");
    speler.textContent = "S"+spelerTeller;
    speler.style.backgroundColor = "red";
    spelerTeller++;

    // Startpositie in het midden
    speler.style.left = (veldContainer.clientWidth / 2 - 20) + "px";
    speler.style.top = (veldContainer.clientHeight / 2 - 20) + "px";

    veldContainer.appendChild(speler);

    // Voeg drag & drop toe
    speler.addEventListener("mousedown", function(event){
        event.preventDefault();
        speler.style.cursor = "grabbing";
        // AANVULLEN

        
    });
});