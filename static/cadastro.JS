const arara = document.getElementById("arara");


let posX = 0;
let posY = 0;

document.addEventListener("mousemove", (e) => {
  // Limita só à esquerda
  if (e.clientX < window.innerWidth / 2) {
    posX += (e.clientX - posX) * 0.05;
    posY += (e.clientY - posY) * 0.05;

    arara.style.left = posX + "px";
    arara.style.top = posY + "px";
  }
});

function cadastrar() {
  const nome = document.getElementById("nome").value;
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  if (nome === "" || usuario === "" || senha === "") {
    alert("Preencha todos os campos!");
    return;
  }

  // Simulação de cadastro (depois você pode ligar com banco)
  alert("Cadastro realizado com sucesso!");

  // Redireciona para login
  window.location.href = "index.html";
}