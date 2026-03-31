let json = `{
    "merk":"Nike",
    "schoenmaat": 42,
    "inVooraad":true,
    "beschikbareKleuren":["rood", "groen", "blauw"],
    "prijzen": {"korting":50, "normaal":70},
    "reviews": null
    }`
console.log(json);

let sneaker = JSON.parse(json);
console.log(sneaker);

console.log(sneaker.merk);
console.log(json.prijzen.korting)


