document.getElementById("date_arrivee").valueAsDate = new Date();
document.getElementById("date_depart").valueAsDate = new Date();

const roomSelector = document.getElementById("modele_chambre");
const classiqueRoom = document.getElementById("classiqueRoom");
const deluxeRoom = document.getElementById("deluxeRoom");
const confortRoom = document.getElementById("confortRoom");
const suiteRoom = document.getElementById("suiteRoom");

roomSelector.addEventListener("change", function() {
    switch (roomSelector.value) {
      case "classiqueRoom":
        classiqueRoom.style.display = "block";
        deluxeRoom.style.display = "none";
        confortRoom.style.display = "none";
        suiteRoom.style.display = "none";
        break;
      case "deluxeRoom":
        classiqueRoom.style.display = "none";
        deluxeRoom.style.display = "block";
        confortRoom.style.display = "none";
        suiteRoom.style.display = "none";
        break;
      case "confortRoom":
        classiqueRoom.style.display = "none";
        deluxeRoom.style.display = "none";
        confortRoom.style.display = "block";
        suiteRoom.style.display = "none";
        break;
      case "suiteRoom":
        classiqueRoom.style.display = "none";
        deluxeRoom.style.display = "none";
        confortRoom.style.display = "none";
        suiteRoom.style.display = "block";
        break;
      default:
        classiqueRoom.style.display = "none";
        deluxeRoom.style.display = "none";
        confortRoom.style.display = "none";
        suiteRoom.style.display = "none";
    }
});

var buttons = document.querySelectorAll(".reservChoisi .butonConClick");
var images = document.querySelectorAll(".maSectionJs .menusVarios");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function(){
    var id = this.getAttribute("data-id");
    for(var j = 0; j < images.length; j++){
      if(images[j].getAttribute("data-id") == id){
        if(images[j].style.display == "block"){
          images[j].style.display = "none";
        }else{
          images[j].style.display = "block";
          images[j].style.width = "100%";
          if(window.innerWidth >990){
            images[j].style.width = "40%"
          }
        }
      }else{
        // images[j].style.display = "none";
      }
    }
  });
}