function sendNumber() {
    var cardResposta = document.getElementById('vooResposta')
    var numVoo = document.getElementById('voo-numero')
    var destinoVoo = document.getElementById('voo-destino')
    var horarioVoo = document.getElementById('voo-horario')
    var numVooReq = document.getElementById('numVoo');
    if(!numVooReq.value){
        alert("Numero vazio. \nPreencha o número do vôo")
    }else{
        console.log("Numero do voo: "+numVooReq.value)
        numVoo.innerText = "Voo número " + numVooReq.value;
        destinoVoo.innerText = "Manaus (MAO) - Brasilia (BSB)"
        horarioVoo.innerText = "Embarque às 10:15 no portão 10"
    
        setInterval(() => cardResposta.style.display = "initial",500);
    }
  }

  function checkNumberFieldLength(elem){
    if (elem.value.length > 4) {
        elem.value = elem.value.slice(0,4); 
    }
}