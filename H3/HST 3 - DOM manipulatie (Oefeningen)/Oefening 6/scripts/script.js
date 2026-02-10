//Oefening 6
let woorden = [];
let count = 0;
let woord = "";
let WOORDEN = [];
while (count < 5)
{
    woord = prompt("Woord:");
    count += 1;
    woorden.push(woord);
}

woorden.forEach(word => console.log(word, "heeft", word.length, "letters"));

woorden.forEach(word => WOORDEN.push(word.toLocaleUpperCase()));

WOORDEN.forEach(word => console.log(word));
