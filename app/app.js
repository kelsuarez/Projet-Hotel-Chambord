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