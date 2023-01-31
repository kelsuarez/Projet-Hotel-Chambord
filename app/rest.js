//ANIMATION AVEC SCROLL
window.addEventListener("scroll", function(){
    var videoBackground = document.getElementById("video-background");
    var y = window.scrollY;
    videoBackground.style.opacity = 1.5 - (y/100);
});

var buttons = document.querySelectorAll(".maSectionJs .butonConClick");
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
                  images[j].style.margin = "20px";
                  if(window.innerWidth >990){
                    images[j].style.width = "40%"
                  }
                }
            }else{
              images[j].style.display = "none";
            }
        }
    });
}
