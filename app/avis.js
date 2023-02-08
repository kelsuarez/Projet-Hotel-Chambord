// FORMULAIRE

const form = document.querySelector(".contact-form");
const lastname = document.querySelector("#lastname");
const firstname = document.querySelector("#firstname");
const eMail = document.querySelector("#eMail");
const categorie = document.querySelector("#categorie");
const comment = document.querySelector("#comment");
const message = document.querySelector("#mesageoOculte");

form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    let isValid = true;
    let errorMessage = "";
  
    if (!lastname.value) {
      isValid = false;
      lastname.style.border = "1px solid red";
    } else {
      lastname.style.border = "1px solid rgb(206, 201, 201)";
    }
    if (!firstname.value) {
      isValid = false;
      firstname.style.border = "1px solid red";
    } else {
      firstname.style.border = "1px solid rgb(206, 201, 201)";
    }
    if (!eMail.value) {
      isValid = false;
      eMail.style.border = "1px solid red";
    } else {
      eMail.style.border = "1px solid rgb(206, 201, 201)";
    }
    if (!categorie.value) {
      isValid = false;
      categorie.style.border = "1px solid red";
    } else {
      categorie.style.border = "1px solid rgb(206, 201, 201)";
    }
    if (!comment.value) {
      isValid = false;
      comment.style.border = "1px solid red";
    } else {
      comment.style.border = "1px solid rgb(206, 201, 201)";
    }
    if (!isValid) {
      alert("Vous devez remplir tous les champs");
    } else {
      mesageoOculte.style.display = 'block';
    }
    document.querySelector('.contact-form').reset();
  });

// SELECT COMMENTAIRES

const categorieAvis = document.getElementById("categorieAvis");
const avisHebergement = document.getElementById("avisHebergement");
const avisRestaurant = document.getElementById("avisRestaurant");
const avisSpa = document.getElementById("avisSpa");

categorieAvis.addEventListener("change", function() {
    if (this.value === "hebergement") {
      avisHebergement.style.display = "block";
      avisRestaurant.style.display = "none";
      avisSpa.style.display = "none";
    } else if (this.value === "restaurant") {
      avisHebergement.style.display = "none";
      avisRestaurant.style.display = "block";
      avisSpa.style.display = "none";
    } else if (this.value === "divinity") {
      avisHebergement.style.display = "none";
      avisRestaurant.style.display = "none";
      avisSpa.style.display = "block";
    }
  });