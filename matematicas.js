function imc() {
    document.getElementById("h1ebotao").className = "borabill"
    document.getElementById("imc").className = "amostradinho"
}

function conversor() {
    document.getElementById("h1ebotao").className = "borabill"
    document.getElementById("conversor").className = "amostradinho"
}

function gas() {
    document.getElementById("h1ebotao").className = "borabill"
    document.getElementById("combustivel").className = "amostradinho"
}

function numeros() {
    document.getElementById("h1ebotao").className = "borabill"
    document.getElementById("sorteador").className = "amostradinho"
}

function converter() {
    valor = document.getElementById("valormoeda").value
    const radios = document.getElementsByName('moeda1');
    var selecionado1
    for (const radio of radios) {
        if (radio.checked) {
            selecionado1 = radio.id;
            break;
        }
    }
    const radios2 = document.getElementsByName('moeda2');
    var selecionado2
    for (const radio of radios2) {
        if (radio.checked) {
            selecionado2 = radio.id;
            break;
        }
    }
    if (selecionado1 == "real") {
        valor = valor / 5.43
    }
    else if (selecionado1 == "euro") {
        valor = valor * 1.12
    }
    if (selecionado2 == "real") {
        valor = valor * 5.43
    }
    else if (selecionado2 == "euro") {
        valor = valor / 1.12
    }
    document.getElementById("resultadoconversao").innerHTML = "O valor " + document.getElementById("valormoeda").value + " convertido de " + selecionado1 + " para " + selecionado2 + " é de " + valor.toFixed(2)
}

function combustivel() {
    litro = document.getElementById("distancia").value / document.getElementById("consumo").value
    pfcb = litro * document.getElementById("valorcombustivel").value
    document.getElementById("rescom").innerHTML = "Você precisará de " + litro + " litros de combustível e gastará R$ " + pfcb + " para se deslocar de " + document.getElementById("origem").value + " para " + document.getElementById("destino").value
}

function sortear() {
    sorteado = [];
    mins = parseInt(document.getElementById("mins").value);
    maxs = parseInt(document.getElementById("maxs").value);
    qtnum = parseInt(document.getElementById("qtnum").value);
    
    for (i = 0; i < qtnum; i++) {
        numero = Math.floor(Math.random() * (maxs - mins + 1)) + mins;
        sorteado.push(numero);
    }
    document.getElementById("resr").innerHTML = "Quantidade de Números Solicitados: " + qtnum + "<br>Números Sorteados: " + sorteado
}

function calcularimc() {
    imc = document.getElementById("peso").value / (document.getElementById("altura").value / 100) ** 2
    if (imc < 18.5) {
        categoria = "abaixo do peso"
    }
    else if (imc >= 18.5 && imc < 25) {
        categoria = "normal"
    }
    else if (imc >= 25 && imc < 30) {
        categoria = "sobrepeso"
    }
    else if (imc >= 30) {
        categoria = "obesidade"
    }
    document.getElementById("imcresultado").innerText = document.getElementById("nomei").value + ", seu IMC é de " + imc + " e você está classificado na categoria '" + categoria + "'. "
}

function volta() {
    document.getElementById("h1ebotao").className = "amostradinho"
    document.getElementById("imc").className = "borabill"
    document.getElementById("conversor").className = "borabill"
    document.getElementById("combustivel").className = "borabill"
    document.getElementById("sorteador").className = "borabill"
}