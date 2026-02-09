const nieuwItem = prompt("Wat wil je toevoegen?")

let li = document.createElement("li");
li.textContent = nieuwItem;

let lijst = document.getElementById("lijst");
lijst.appendChild(li);