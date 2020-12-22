function toogleImage(event){  
  let transitionLink = event.target.id;
  let containerImage = document.querySelector(".container_box-image");
  let boxFormMobile = document.querySelector(".container-form")
 
  if(innerWidth > 740) {

    containerImage.style.left = transitionLink === "link_singup" ? "50%" : 0;

  } else {
    boxFormMobile.style.left = transitionLink === "link_singup" ? "-100%" : 0;
   }
   
}


const signup = document.getElementById("link_singup");
const signin = document.getElementById("link_singin");

signup.addEventListener("click", toogleImage)
signin.addEventListener("click", toogleImage)