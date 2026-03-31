const knop = document.querySelector("#klikKnop");
const tellerDisplay = document.querySelector("#teller");
const para = document.getElementById("teller");
let teller = 0;
let body = document.getElementsByName("body");

knop.addEventListener("click", (function(event) {
    teller++;
    para.textContent = teller;

    if (teller > 10){
        knop.style.backgroundColor = "red";
    }
}));

document.addEventListener("keydown", function(event){
    if (event.key === "Ctrl" && event.key.toLowerCase()==="r")
    {
        event.preventDefault();
        teller = 0;
        tellerDisplay.textContent = teller;
        knop.style.backgroundColor = "initial";
    }
})






