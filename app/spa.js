// FUNTION MENUS
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
                images[j].style.width = "100%";
                images[j].style.marginTop = "20px";
                if(window.innerWidth > 990){
                images[j].style.width = "600px"
                }
            } 
            }else{
                images[j].style.display = "none";
            }
        }
    });
}
// for (var i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", function(){
//     var id = this.getAttribute("data-id");
//     for(var j = 0; j < images.length; j++){
//         if(images[j].getAttribute("data-id") == id){
//             if(images[j].style.display == "block"){
//                 images[j].style.display = "none";
//             }else{
//                 images[j].style.display = "block";
//             }
//         }else{
//             images[j].style.display = "none";
//         }
//     }
//   });
// }