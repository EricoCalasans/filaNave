function validar() {
    var nome = document.getElementById("idUsuario").value;
    var pc = document.querySelector('input[name="pc"]:checked')
    //var pc = document.querySelector('input[name="pc"]:checked').value;
    //alert(pc + " " + nome);

    if(nome == '' || pc == null) {
        alert("Preencha todos os campos!");
    }
    else {
        document.getElementById("formulario").submit();
    }  
}