//Funtion pour faire apparaître Flag
document.getElementById("english").onclick = showEnglishFlag;
document.getElementById("spanish").onclick = showSpanishFlag;
document.getElementById("french").onclick = showFrenchFlag;

function showEnglishFlag() {
  hideAllFlags();
  document.getElementById("englishFlag").style.display = "block";
}

function showSpanishFlag() {
  hideAllFlags();
  document.getElementById("spanishFlag").style.display = "block";
}

function showFrenchFlag() {
  hideAllFlags();
  document.getElementById("frenchFlag").style.display = "block";
}

function hideAllFlags() {
  var flags = document.getElementsByClassName("flag");
  for (var i = 0; i < flags.length; i++) {
    flags[i].style.display = "none";
  }
}
//Fin de la funtion Flag


// NEWSLETTER

document.getElementById("myNewsletter").addEventListener("submit", function (event) {
  event.preventDefault();
  document.getElementById("myNewsletter").reset();

  var mensaje = document.createElement("p");
  mensaje.innerHTML = "Merci pour votre inscription a notre newsletter!";
  document.getElementById("myNewsletter").appendChild(mensaje);
});

// IMPRIMER

document.getElementById("print-page").addEventListener("click", function () {
  window.print();
});