let lampadaSalaLigada = false;
let lampadaCozinhaLigada = false;

function ligarLampadaSala() {
    if (lampadaSalaLigada === false) {
        document.getElementById("lamp-sala").classList.add("acesa");
        lampadaSalaLigada = true;

    } else {
        document.getElementById("lamp-sala").classList.remove("acesa");
        lampadaSalaLigada = false;
    }

function ligarLampadaCozinha() {
    alert("ligarLampadaCozinha");

}