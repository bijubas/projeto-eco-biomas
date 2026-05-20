const botoesBiomas = document.querySelectorAll(".bioma-btn");
const partesDoMapa = document.querySelectorAll(".mapa svg .bioma");
const modalBioma = document.getElementById("bioma-modal");
const fecharBioma = document.getElementById("fechar-bioma");
const tituloBioma = document.getElementById("bioma-titulo");
const listaEspecies = document.getElementById("bioma-especies");

const biomaPorId = {
    path4426: "Pampa", 
    path350: "Pampa",
    "pampa-click-area": "Pampa"
};

const biomaPorCor = {
    "#99e600": "Mata Atlântica",
    "#99d38a": "Mata Atlântica",
    "#1e9132": "Amazônia",
    "#82b971": "Amazônia",
    "#fdd9c9": "Cerrado",
    "#ffebbf": "Cerrado",
    "#f9bfd6": "Cerrado",
    "#ffe74e": "Caatinga",
    "#ffea9a": "Pampa",
    "#d6ccad": "Pampa",
    "#800000": "Pampa",
    "#d4e0a9": "Mata Atlântica",
    "#cbdf79": "Mata Atlântica",
    "#010df5": "Pantanal",
    "#d5c4dd": "Pantanal",
    "#e9d4e4": "Pantanal",
    "#eecca6": "Pampa",
    "rgb(153, 230, 0)": "Mata Atlântica",
    "rgb(153, 211, 138)": "Mata Atlântica",
    "rgb(30, 145, 50)": "Amazônia",
    "rgb(130, 185, 113)": "Amazônia",
    "rgb(253, 217, 201)": "Cerrado",
    "rgb(255, 235, 191)": "Cerrado",
    "rgb(249, 191, 214)": "Cerrado",
    "rgb(255, 234, 154)": "Pampa",
    "rgb(255, 231, 78)": "Caatinga",
    "rgb(214, 204, 173)": "Pampa",
    "rgb(212, 224, 169)": "Mata Atlântica",
    "rgb(203, 223, 121)": "Mata Atlântica",
    "rgb(1, 13, 245)": "Pantanal",
    "rgb(213, 196, 221)": "Pantanal",
    "rgb(233, 212, 228)": "Pantanal",
    "rgb(238, 204, 166)": "Pampa"
};

const pegarBiomaDaParte = (parte) => {

    if (biomaPorId[parte.id])
        return biomaPorId[parte.id];

    const estilo = parte.getAttribute("style") || "";
    const corNoSvg = estilo.match(/fill:\s*(#[0-9a-fA-F]{6})/);

    if (corNoSvg)
        return biomaPorCor[corNoSvg[1].toLowerCase()];

    return biomaPorCor[getComputedStyle(parte).fill];
};

const abrirBioma = async (bioma) => {

    tituloBioma.innerText = bioma;
    listaEspecies.innerHTML = "<p>Carregando especies...</p>";
    modalBioma.classList.add("ativo");
    modalBioma.setAttribute("aria-hidden", "false");

    const resposta = await fetch(`/api/biomas/${encodeURIComponent(bioma)}`);
    const dados = await resposta.json();

    if (!resposta.ok) {
        listaEspecies.innerHTML = "<p>Bioma nao encontrado.</p>";
        return;
    }

    listaEspecies.innerHTML = dados.especies.map((especie) => `
        <div class="especie-card">
            <strong>${especie.nome_comum}</strong>
            <span>Nome cientifico: ${especie.nome_cientifico}</span>
            <span>Categoria de ameaca: ${especie.categoria_ameaca}</span>
        </div>
    `).join("");
};

const fecharJanelaBioma = () => {

    modalBioma.classList.remove("ativo");
    modalBioma.setAttribute("aria-hidden", "true");
};

botoesBiomas.forEach((botao) => {

    botao.addEventListener("click", () => {
        abrirBioma(botao.dataset.bioma);
    });

    botao.addEventListener("touchstart", (event) => {
        event.preventDefault();
        abrirBioma(botao.dataset.bioma);
    });
});

partesDoMapa.forEach((parte) => {

    const bioma = pegarBiomaDaParte(parte);

    if (!bioma)
        return;

    parte.dataset.bioma = bioma;
    parte.setAttribute("role", "button");
    parte.setAttribute("tabindex", "0");
    parte.setAttribute("aria-label", `Abrir ${bioma}`);

    parte.addEventListener("click", () => {
        abrirBioma(bioma);
    });

    parte.addEventListener("keydown", (event) => {

        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            abrirBioma(bioma);
        }
    });
});

fecharBioma.addEventListener("click", fecharJanelaBioma);

modalBioma.addEventListener("click", (event) => {

    if (event.target === modalBioma)
        fecharJanelaBioma();
});

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape")
        fecharJanelaBioma();
});
