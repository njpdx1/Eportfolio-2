let isformOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px) rotate(${x * boolInt * 10}deg)`
  }
}

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme"
  }
  else {
    document.body.classList.remove("dark-theme")
  }
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".form__overlay--loading");
  const success = document.querySelector(".form__overlay--success");
  loading.classList += " form__overlay--visible";
  emailjs
    .sendForm(
      'service_t2nadr4',
      'template_o9o4cyy',
      event.target,
      'WHjKubNxdbjginOzC'
    )
    .then(() => {
      loading.classList.remove("form__overlay--visible");
      success.classList += " form__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("form__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on nxjiib@gmail.com"
      );
    });
}

function toggleform() {
  if (isformOpen) {
    isformOpen = false;
    return document.body.classList.remove("form--open");
  }
  isformOpen = true;
  document.body.classList += " form--open";
}
