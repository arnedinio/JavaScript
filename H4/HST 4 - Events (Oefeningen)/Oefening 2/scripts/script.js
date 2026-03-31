const woorden = [
    "computer", "javascript", "muisklik", "toetsenbord",
    "browser", "internet", "pagina", "vakje", "kleur",
    "typetest", "school", "leren"
];

const startKnop = document.querySelector("#start");
const invoer = document.querySelector("#invoer");
const woordContainer = document.querySelector("#woord-container");
const feedback = document.querySelector("#feedback");
const tijdDisplay = document.querySelector("#tijd");

let huidigWoord = "";
let startTijd = 0;
function checkWoord(){
    const randomIndex = Math.floor(Math.random() * woorden.length);
    huidigWoord = woorden[randomIndex];
    woordContainer.textContent = huidigWoord;

    // Enable input en focus
    invoer.disabled = false;
    invoer.value = "";
    invoer.focus();

    // Start timer
    startTijd = new Date().getTime();
}
// Startknop
startKnop.addEventListener("click", () => {
    // Kies een willekeurig woord
    checkWoord();
});


// Check input bij Enter
invoer.addEventListener("keydown", function(event){
    if (event.key === "Enter"){
        if(invoer.value === huidigWoord){
            feedback.textContent = "Correct!";
            tijdDisplay.textContent = ((new Date().getTime() - startTijd) / 1000).toFixed(2) + " seconden";
            checkWoord();
        }
        else{
            feedback.textContent = "Fout!";
            tijdDisplay.textContent = "";
        }
    }
});
