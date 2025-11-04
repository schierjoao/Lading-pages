// Simula envio do formulário
document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Mensagem enviada com sucesso! 🚀");
  this.reset();
});

// Animações com ScrollReveal
ScrollReveal().reveal(".hero-content", { delay: 200, duration: 1000, origin: "bottom", distance: "50px" });
ScrollReveal().reveal(".card", { delay: 300, duration: 1000, origin: "bottom", distance: "40px", interval: 150 });
ScrollReveal().reveal(".contato", { delay: 300, duration: 1000, origin: "bottom", distance: "50px" });
