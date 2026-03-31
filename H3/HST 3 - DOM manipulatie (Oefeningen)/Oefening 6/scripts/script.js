//Oefening 6
let woorden = [];
let count = 0;
let woord = "";
let WOORDEN = [];
const letterUl = document.getElementById("letters");
const LETTERUl = document.getElementById("hoofdletters");

while (count < 5)
{
    woord = prompt("Woord:");
    count += 1;
    woorden.push(woord);
}

// create <li> items showing each word and its length, append to #letters
if (letterUl) {
    woorden.forEach((word) => {
        if (!word) return; // skip null/empty prompts
        const li = document.createElement('li');
        li.textContent = `${word} heeft ${word.length} letters`;
        letterUl.appendChild(li);
    });
} else {
    console.warn('Element with id "letters" not found');
}

// populate WOORDEN with uppercase versions of the entered words
woorden.forEach(word => {
    if (!word) return;
    WOORDEN.push(word.toLocaleUpperCase());
});

// append uppercase words to #hoofdletters if present
if (LETTERUl) {
    WOORDEN.forEach(word => {
        const li = document.createElement('li');
        li.textContent = word;
        LETTERUl.appendChild(li);
    });
} else {
    console.warn('Element with id "hoofdletters" not found');
}
