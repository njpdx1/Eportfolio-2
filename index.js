//Variables
let isformOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

//Function to move the background shapes based on mouse position
function moveBackground(event) {
  //Select all the shape elements
  const shapes = document.querySelectorAll(".shape");
  //Calculate new position
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;
  //Loop through all shapes
  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    //Apply transformation to move and rotate shape
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px) rotate(${x * boolInt * 10}deg)`
  }
}

//Function to toggle dark/light mode of the webpage
function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme"
  }
  else {
    document.body.classList.remove("dark-theme")
  }
}

//Function to handle form submission
function contact(event) {
  event.preventDefault();
  //Select loading and success elements 
  const loading = document.querySelector(".form__overlay--loading");
  const success = document.querySelector(".form__overlay--success");
  //Add the overlay visible to the loading element
  loading.classList += " form__overlay--visible";
  //Send the form data to email
  emailjs
    .sendForm(
      'service_t2nadr4',
      'template_o9o4cyy',
      event.target,
      'WHjKubNxdbjginOzC'
    )
    .then(() => {
      //Remove overlay if email is succesfully sent
      loading.classList.remove("form__overlay--visible");
      success.classList += " form__overlay--visible";
    })
    .catch(() => {
      //Remove overlay and show alert
      loading.classList.remove("form__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on nxjiib@gmail.com"
      );
    });
}

//Function to toggle the form's visbilty on the webpage
function toggleform() {
  if (isformOpen) {
    isformOpen = false;
    return document.body.classList.remove("form--open");
  }
  isformOpen = true;
  document.body.classList += " form--open";
}
