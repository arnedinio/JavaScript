const naamLabel = document.querySelector('#karakter-naam');
const foto = document.querySelector('#karakter-foto');
const button = document.querySelector('#button');

button.addEventListener('click', () => {
    getKarakter();
})

async function getKarakter() {
    let getal = Math.floor(Math.random() * 826);
    let response = await fetch(`https://rickandmortyapi.com/api/character/${getal}`);
    let data = await response.json();
    naamLabel.textContent = data.name;
    foto.src = data.image;
}
getKarakter();