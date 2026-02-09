const kleur = prompt("Geef een kleur")
const fontsize = prompt("Geef een font size")
let titel = document.getElementById("titel");
titel.style.color = kleur;
titel.style.fontSize = fontsize+"px";