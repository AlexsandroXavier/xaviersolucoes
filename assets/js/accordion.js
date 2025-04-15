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

// Integração com EmailJS

// Substitua com suas próprias IDs do EmailJS
const serviceID = "seu_service_id";
const templateID = "seu_template_id";
const userID = "seu_user_id"; // Ou use `publicKey` se for nova conta

emailjs.init(userID); // Inicializa o EmailJS

document.getElementById('contato-form').addEventListener('submit', function (e) {
  e.preventDefault();

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      alert("Mensagem enviada com sucesso!");
      this.reset();
    }, (err) => {
      alert("Erro ao enviar mensagem.\n" + JSON.stringify(err));
    });
});
