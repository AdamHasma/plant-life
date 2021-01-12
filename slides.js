const slideArea = document.querySelector("div.slides");
const images = slideArea.querySelectorAll("img");

let called = false;
let currentSlide = 0;
let z = 1;

slideArea.addEventListener("click", function() {
  currentSlide++;
  z++;

  if (currentSlide > images.length - 1) {
    currentSlide = 0;
  };

  images.forEach(image => {
    image.style.animation = "";
  });

  images[currentSlide].style.zIndex = z;
  images[currentSlide].style.animation = "fade 0.5s";
});

slideArea.addEventListener("mouseover", function() {
  called = true;

  images.forEach(image => {
    const y = 25 * (Math.floor(Math.random() * 5)) - 50;
    const x = 25 * (Math.floor(Math.random() * 5)) - 50;

    image.style.pointerEvents = "none";
    image.style.transform = `translate(${x}px, ${y}px)`;
    image.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.2)";
  });
});

slideArea.addEventListener("mouseout", function() {
  images.forEach(image => {
    image.style.transform = "";
    image.style.boxShadow = "";
  });
});

let loopFunction = window.setInterval(indicateSlide, 2000);

function indicateSlide() {
  if (called != true) {
    images.forEach(image => {
      const y2 = 10 * (Math.floor(Math.random() * 5)) - 30;
      const x2 = 10 * (Math.floor(Math.random() * 5)) - 30;

      image.style.transform = `translate(${x2}px, ${y2}px)`;
      image.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.2)";

      setTimeout(function() {
        image.style.transform = "";
        image.style.boxShadow = "";
      }, 1000);
    });

    clearInterval(loopFunction);
  };
};
