function enviarNumeroTelefone() {
    var vooNum = {
       "numero": document.getElementById('numVoo').value
    }
    console.log(vooNum);
    if(vooNum == ""){
        alert("O numero do voo não pode ser vazio")
        console.log("Numero vazio")
    }else{
        console.log(JSON.stringify(vooNum));
        var xhr = new XMLHttpRequest();
        xhr.open("POST", 'http://localhost:3000/sms', true);

        // Envia a informação do cabeçalho junto com a requisição.
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onreadystatechange = function() { // Chama a função quando o estado mudar.
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                // Requisição finalizada. Faça o processamento aqui.
            }
        }
        
       xhr.send(JSON.stringify(vooNum));
        // xhr.send(new Int8Array()); 
        // xhr.send(document);
    }
  }