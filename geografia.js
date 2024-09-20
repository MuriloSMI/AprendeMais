var certo = 0;
var c = 0
function enviar() {
    if (c > 0) {
        return false;
    }
    var respostas = document.getElementsByName('resposta');
    var dalva;
    for (var i = 0; i < respostas.length; i++) {
        if (respostas[i].checked) {
            dalva = respostas[i].value;
            if (dalva == "true") {
                certo++
            }
        }
    }
    var nome = document.getElementById("nome").value
    document.getElementById("resultado").innerHTML += "<b>RESULTADO</b><br>"
    document.getElementById("resultado").innerHTML += "Parabéns " + nome + "! Você acertou " + certo + " questões"
    c++
}