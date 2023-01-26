window.addEventListener("scroll", function(){
    var videoBackground = document.getElementById("video-background");
    var y = window.scrollY;
    videoBackground.style.opacity = 1 - (y/150);
});


// window.addEventListener("scroll", function(){
//     var attentionveamos = document.getElementsByClassName("scrollopcty");
//     var y = window.scrollY;
//     for (var i = 0; i < attentionveamos.length; i++) {
//         attentionveamos[i].style.opacity = 1 - (y/200);
//     }
// });
// var processed = false;
// window.addEventListener("scroll", function(){
//     var scrollOpct = document.getElementsByClassName("scrollopcty");
//     var y = window.scrollY;
//     for (var i = 0; i < scrollOpct.length; i++) {
//         var scrollOpct = scrollOpct[i];
//         var rect = scrollOpct.getBoundingClientRect();
//         if (rect.top <= y) {
//             scrollOpct.style.opacity = 1 - (y/200);
//             processed = true;
//         }
//     }
// });

// var processed = false;
// window.addEventListener("scroll", function(){
//     var scrollOpct = document.getElementsByClassName("scrollopcty");
//     var y = window.scrollY;
//     for (var i = 0; i < scrollOpct.length; i++) {
//         var scrollOpct = scrollOpct[i];
//         var rect = scrollOpct.getBoundingClientRect();
//         if (rect.top <= y && !processed) {
//             scrollOpct.style.opacity = 1 - (y/200);
//             processed = true;
//         }
//     }
// });


// var processed = false;

// window.addEventListener("scroll", function(){
//     var scrollOpct = document.getElementsByClassName("scrollopcty");
//     var y = window.scrollY;
//     for (var i = 0; i < scrollOpct.length; i++) {
//         var scrollOpct = scrollOpct[i];
//         var rect = scrollOpct.getBoundingClientRect();
//         if (rect.top <= y && !processed) {
//             scrollOpct.style.opacity = 1 - (y/300);
//             processed = true;
//         }
//     }
// }); 


// window.addEventListener("scroll", () => {
//     let y = window.scrollY;
//     for (let element of this.element) {
//         element.style.opacity = 1 - (y/200);
//     }
// });

// function applyOpacity(attention-veamos) {
//     let scrollOpacity = new 
// }




// class ScrollOpacity {
//     constructor(attentionveamos) {
//         this.elements = document.getElementsByClassName(attentionveamos);
//     }

//     applyOpacity() {
//         window.addEventListener("scroll", () => {
//             let y = window.scrollY;
//             for (let element of this.elements) {
//                 element.style.opacity = 1 - (y/200);
//             }
//         });
//     }
// }

// function applyOpacity(attentionveamos) {
//     let scrollOpacity = new ScrollOpacity(attentionveamos);
//     scrollOpacity.applyOpacity();
// }

// applyOpacity("opacity-scroll");
