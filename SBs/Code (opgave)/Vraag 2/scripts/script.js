//Vraag 2
const paragrafen = document.querySelectorAll(".paragraaf");
const aantal_kleuren = prompt("Geef het aantal kleuren");
let kleuren = [];
for(let i= 0; i<aantal_kleuren; i++){
    let kleur = prompt("Geef kleuren");
    kleuren.push(kleur);
}

console.log(kleuren);

paragrafen.forEach(paragraaf => {
    paragraaf.style.color = kleuren[Math.floor(Math.random() * aantal_kleuren)];
})


