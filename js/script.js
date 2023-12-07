//creazione cartellone

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

//genera numero casuale

const estraiNumeroRandom = function () {
  numeroCasuale = Math.floor(Math.random() * 90) + 1;
  return numeroCasuale;
};

//aggiorna cartellone con numero casuale

const numeriEstratti = [];
const estraiNumero = function () {
  const numRandom = estraiNumeroRandom();
  //cercando su google ho trovato .includes, che con 2 righe di codice mi controlla se un numero è già stato estratto.
  if (numeriEstratti.includes(numRandom)) {
    return estraiNumero();
  }
  document.getElementById("numeroEstratto").innerHTML =
    "🎉 Il numero estratto è: " + numRandom + "! 🎉`";
  const tabellone = document.getElementById("cartellone");
  const num = tabellone.getElementsByTagName("div");
  for (let i = 0; i < num.length; i++) {
    const numDiv = parseInt(num[i].innerText, 10);
    if (numRandom === numDiv) {
      num[i].classList.add("estratto");
    }
  }
  numeriEstratti.push(numRandom);
  console.log(numeriEstratti);
  if (numeriEstratti.length === 90) {
    document.getElementById("estraiBtn").style.display = "none";
    document.getElementById("resetBtn").style.display = "inline-block";
  }
};

//resetta cartellone

function resetTombola() {
  numeriEstratti.length = 0;
  document.getElementById("numeroEstratto").innerHTML = "Iniziamo?";
  document.getElementById("estraiBtn").style.display = "inline-block";
  document.getElementById("resetBtn").style.display = "none";
  creaCartellone();
}
