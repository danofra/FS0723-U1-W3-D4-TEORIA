//creazione tabellone
function creaCartellone() {
  const cartellone = document.getElementById("cartellone");
  cartellone.innerHTML = "";
  for (let i = 1; i <= 90; i++) {
    const numeroDiv = document.createElement("div");
    numeroDiv.classList.add("numero");
    numeroDiv.textContent = i;
    cartellone.appendChild(numeroDiv);
  }
}
creaCartellone();

const estraiNumeroRandom = function () {
  numeroCasuale = Math.floor(Math.random() * 90) + 1;
  return numeroCasuale;
};

const estraiNumero = function () {
  const numRandom = estraiNumeroRandom();
  const tabellone = document.getElementById("cartellone");
  const num = tabellone.getElementsByTagName("div");
  for (let i = 0; i < num.length; i++) {
    const numDiv = parseInt(num[i].innerText, 10);
    if (numRandom === numDiv) {
      num[i].classList.add("estratto");
    }
  }
};
