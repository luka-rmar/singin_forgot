function toogleForm(event){
  event.preventDefault();

  let container = document.querySelector(".container");
  container.classList.toggle("activate")
}

let signup = document.getElementById("link_singup");
let signin = document.getElementById("link_singin");

signup.addEventListener("click", toogleForm)
signin.addEventListener("click", toogleForm)