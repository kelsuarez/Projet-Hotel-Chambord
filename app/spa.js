var buttons = document.querySelectorAll(".maSecSpa .butonConClick");
var images = document.querySelectorAll(".maSecSpa .menusSpa");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function(){
    var id = this.getAttribute("data-id");
    for(var j = 0; j < images.length; j++){
        if(images[j].getAttribute("data-id") == id){
            if(images[j].style.display == "block"){
                images[j].style.display = "none";
            }else{
                images[j].style.display = "block";
            }
        }else{
            images[j].style.display = "none";
        }
    }
  });
}