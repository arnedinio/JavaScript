let woorden = ["Appel", "Peer", "Piemel", "Moeder"];

woorden.forEach((w, i, arr) => (arr[i] = w.toUpperCase()));
console.log(woorden);
