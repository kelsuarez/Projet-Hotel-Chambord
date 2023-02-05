// FORMULAURE DE CONTACT

const form = document.querySelector(".contact-form");
const lastname = document.querySelector("#lastname");
const firstname = document.querySelector("#firstname");
const telephone = document.querySelector("#telephone");
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
  if (!telephone.value) {
    isValid = false;
    telephone.style.border = "1px solid red";
  } else {
    telephone.style.border = "1px solid rgb(206, 201, 201)";
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

