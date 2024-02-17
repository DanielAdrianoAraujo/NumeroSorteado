
let botaoReiniciar = document.getElementById('btn-reiniciar');
let btSortear = document.getElementById('btn-sortear');
let qtd = document.getElementById('quantidade');
let nde = document.getElementById('de');
let nate = document.getElementById('ate');

function sortear() {
    if (btSortear.classList.contains('container__botao')) {
        let quantidade = parseInt(document.getElementById('quantidade').value);
        let de = parseInt(document.getElementById('de').value);
        let ate = parseInt(document.getElementById('ate').value);

        let sorteados = [];
        let numero;

        // Fazer até que o i menor que o campo qtd na tela
        for (let i = 0; i < quantidade; i++) {
            numero = obterNumeroAleatorio(de, ate);

            while (sorteados.includes(numero)) {
                numero = obterNumeroAleatorio(de, ate);
            }
            sorteados.push(numero);
        }

        // Pegar algo da tela
        let resultado = document.getElementById('resultado');
        // Colocar algo na tela
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}`

        alterarStatusbotao();
    }
}

// Obtendo Numero Aleatorio
function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function alterarStatusbotao() {

    let botaoReiniciar = document.getElementById('btn-reiniciar');
    let btSortear = document.getElementById('btn-sortear');

    // Se o botão reiniciar estiver DESABILITADO, então Habilita e Desablita o Sortear

    if (botaoReiniciar.classList.contains('container__botao-desabilitado')) {
        botaoReiniciar.classList.remove('container__botao-desabilitado');
        botaoReiniciar.classList.add('container__botao');
        btSortear.classList.remove('container__botao');
        btSortear.classList.add('container__botao-desabilitado');
    } else {
        if (qtd.value == '') {
            btSortear.classList.remove('container__botao-desabilitado');
            btSortear.classList.add('container__botao');
            botaoReiniciar.classList.remove('container__botao');
            botaoReiniciar.classList.add('container__botao-desabilitado');
        }
    }
}

function reiniciar() {
    if (botaoReiniciar.classList.contains('container__botao')) {
        qtd.value = '';
        nde.value = '';
        nate.value = '';
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`
        numero = '';
        alterarStatusbotao();
    }
}
