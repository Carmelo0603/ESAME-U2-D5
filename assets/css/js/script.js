//ANIMAZIONE DELLE LETTERE//
const getLetters = document.querySelectorAll("#containerSvg path");

setInterval(() => {
  getLetters.forEach((letter) => {
    let casualNumb = Math.random();

    if (casualNumb > 0.5) {
      letter.classList.add("m-on");
      letter.classList.remove("m-off");
    } else {
      letter.classList.add("m-off");
      letter.classList.remove("m-on");
    }
  });
}, 900);

//SCROLL HEADER//
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 350) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});
