const arara = document.getElementById("arara");

let posX = 0;
let posY = 0;


// =========================
// MOVIMENTO DA ARARA
// =========================

document.addEventListener("mousemove", (e) => {

  if (e.clientX < window.innerWidth / 2) {

    posX += (e.clientX - posX) * 0.05;
    posY += (e.clientY - posY) * 0.05;

    arara.style.left = posX + "px";
    arara.style.top = posY + "px";
  }
});


// =========================
// EFEITO DE ERRO
// =========================

function erroArara() {

  arara.classList.add("erro");

  setTimeout(() => {

    arara.classList.remove("erro");

  }, 500);
}