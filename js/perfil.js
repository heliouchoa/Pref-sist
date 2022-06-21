function perfilSubmit(){
    var nome = document.getElementById("nome-Perfil-js");
    var cargo = document.getElementById("Cargo-Perfil-js");
    var prioridadeDoSistema = document.getElementById("prioridade-Perfil-js");
    
   
   
    if(nome.value ==""){
        alert("Nome não informado");
    }
    if(cargo.value ==""){
        alert("Data não informada");
    }
    if(prioridadeDoSistema.value ==""){
        alert("Objeto não informado");
    }
    else{
        alert("funcionou")
    }
}