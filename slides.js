const slideArea = document.querySelector("div.slides");
const images = slideArea.querySelectorAll("img");

let currentSlide = 0;
let z = 1;

slideArea.addEventListener("click", function() {
  currentSlide++;
  z++;

  if (currentSlide > images.length - 1) {
    currentSlide = 0;
  }

  images.forEach(image => {
    image.style.animation = "";
  })

  images[currentSlide].style.zIndex = z;
  images[currentSlide].style.animation = "fade 0.5s";
});

slideArea.addEventListener("mouseover", function() {
  images.forEach(image => {
    const y = 25 * (Math.floor(Math.random() * 5)) - 50;
    const x = 25 * (Math.floor(Math.random() * 5)) - 50;

    image.style.transform = `translate(${x}px, ${y}px)`
    image.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.2)"
  });
});


slideArea.addEventListener("mouseout", function() {
  images.forEach(image => {
    image.style.transform = "";
    image.style.boxShadow = ""
  });
});
