let value = Number(prompt("Geef een getal"));

function isPriem(getal) {
  let delers = 0;
  for (let i = 1; i <= getal; i++) {
    if (getal % i === 0) {
      delers++;
    }
  }

  if (delers === 2) {
    return true;
  } else {
    return false;
  }
}

if (isPriem(value)) {
  console.log("Priemgetal!");
} else {
  console.log("Geen priemgetal!");
}
