// Seleciona todos os botões de accordion
const toggles = document.querySelectorAll('.accordion-toggle');

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const content = toggle.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

// Menu hambuguer

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu").querySelector("ul");
  
    hamburger.addEventListener("click", function () {
      navMenu.classList.toggle("show");
    });
  });
 
// Servico

const accordions = document.querySelectorAll(".accordion");

accordions.forEach(acc => {
  acc.addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;

    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
});


