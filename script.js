let lampadaSalaLigada = false;
let lampadaCozinhaLigada = false;

let clienteWeb = null;

const clientId = 'Esp32' + Math.floor(Math.random() * 900) + 100;
clienteWeb = new Paho.MQTT.Client('broker.hivemq.com', 8884, clientId);

clienteWeb.connect({   
    useSSL: true, 
    onSuccess: function() {
        alert('A conexão com Broker foi bem sucedida')
    },
    onFailure: function() {
        alert('A conexão com Broker falhou')
    }
});


function ligarLampadaSala() {
    const msg = new Paho.MQTT.Message("");

    if (lampadaSalaLigada === false) {
        document.getElementById("lamp-sala").classList.add("acesa");    
        document.getElementById("bt-sala").textContent = "Desligar"
        lampadaSalaLigada = true;
        msg.destinationName = "senai604/lampada/sala/ligar"
    } else {
        document.getElementById("lamp-sala").classList.remove("acesa")
        document.getElementById("bt-sala").textContent = "Ligar"
        lampadaSalaLigada = false;
        msg.destinationName = "senai604/lampada/sala/desligar"
    }
    clienteWeb.send(msg);
}
function ligarLampadaCozinha() {
    const msg = new Paho.MQTT.Message("");

    if (lampadaCozinhaLigada == false) {
        document.getElementById("lamp-cozinha").classList.add("acesa");
        document.getElementById("bt-cozinha").textContent = "Desligar"
        lampadaCozinhaLigada = true;
        msg.destinationName = "senai604/lampada/cozinha/ligar"
      
    } else {
        document.getElementById("lamp-cozinha").classList.remove("acesa");
        document.getElementById("bt-cozinha").textContent = "Ligar"
        lampadaCozinhaLigada = false;
        msg.destinationName = "senai604/lampada/cozinha/desligar"
    }
    clienteWeb.send(msg);
}

