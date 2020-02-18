function enviarNumeroTelefone() {
    var spinner = document.getElementById('cover')
    var vooNum = {
        "numero": document.getElementById('numPhone').value,
        "cpf": document.getElementById('cpf').value,
        "voo": document.getElementById('numVoo2').value
    }
    console.log(vooNum);
    if (vooNum == "") {
        alert("O numero do voo não pode ser vazio")
        console.log("Numero vazio")
    } else {
        console.log(JSON.stringify(vooNum));
        var xhr = new XMLHttpRequest();
        //xhr.open("POST", 'https://megahack-back.herokuapp.com/novoCadastro', true);
        xhr.open("POST", 'http://LinkDoMegahack-back/novoCadastro', true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onreadystatechange = function () {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {}
        }
        spinner.style.display = 'initial';
        xhr.send(JSON.stringify(vooNum));
        setTimeout(() => {
            spinner.style.display = 'none';
            console.log(xhr.response);
            closeModal();
        }, 2000);

    }
}

function closeModal() {
    var fade = document.getElementsByClassName('modal-backdrop');
    document.getElementById('exampleModalCenter').style.display = 'none';
    fade[0].style.display = 'none';
    alert("Recebemos os seus dados, qualquer mudança lhe informaremos")
    //document.getElementById('fade').style.display = 'none';
}
