const menuBtn = document.getElementById("menu-btn")
const menuBtnClose = document.getElementById("menu-btn-close")
const menu = document.getElementById("menu-container")

let botaoMaisCasa = document.getElementById("botao-mais-casa")
let botaoMenosCasa = document.getElementById("botao-menos-casa")
let placarCasa = document.getElementById("placar-casa")

let botaoMaisVisitante = document.getElementById("botao-mais-visitante")
let botaoMenosVisitante = document.getElementById("botao-menos-visitante")
let placarVisitante = document.getElementById("placar-visitante")

let counterCasa = 0
let counterVisitante = 0

let botaoSalvar = document.getElementById("botao-salvar")
let placaresSalvosElemento = document.getElementById("placares-salvos-elemento")

// Menu de contexto
// Abrir menu
function abrirMenu() {
    menu.classList.add("menu-wrapper")
    // menu.classList.add("menu-wrapper")
    // menuBtn.style.display = "none"
}

// Fechar menu
function ocultarMenu() {
    menu.style.translate = "100% 0"
    // menuBtn.style.display = "block"
}

// Funções Casa
function maisCasa() {
    counterCasa += 1
    placarCasa.textContent = counterCasa
}

function menosCasa() {
    if(counterCasa <= 0)
        counterCasa = 0
    else
        counterCasa -= 1
        placarCasa.textContent = counterCasa
}

// Funções Visitante
function maisVisitante() {
    counterVisitante += 1
    placarVisitante.textContent = counterVisitante
}

function menosVisitante() {
    if(counterVisitante <= 0)
        counterVisitante = 0
    else
        counterVisitante -= 1
        placarVisitante.textContent = counterVisitante
}

// Destacando o vencedor
if(counterCasa > counterVisitante) {
    placarCasa.style.color = "lime"
    console.log(placarCasa)
} else if(counterVisitante > counterCasa) {
    placarVisitante.style.color = "lime"
}

// Função Reiniciar Placar
function reiniciarPlacar() {   
    counterCasa = 0
    counterVisitante = 0

    placarCasa.textContent = 0
    placarVisitante.textContent = 0
}

// Função Salvar Placar
function salvarPlacar() {
    const diaMesAno = new Date()
    let diaPartida = "(" + diaMesAno.getDate() + "/" + diaMesAno.getMonth() + ")"
    
    // Definição do conteúdo salvo
    // INCREMENTAR:
        // Identificar como "casa" e "visitante" cada placar
        // Exibir a data de salvamento
    let placarSalvo =
        counterCasa + " x " + counterVisitante + "\n" +
        // diaPartida +
        " | "

    // Exibição incremental dos conteúdos definidos salvos (acima)
        // Exibir em um elemento de html específico (<p></p>?)
    placaresSalvosElemento.textContent += placarSalvo

    reiniciarPlacar()
}
