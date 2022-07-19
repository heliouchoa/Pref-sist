function validar(){
    var oficio = document.getElementById("oficio-js");
    var data = document.getElementById("data-js");
    var objeto = document.getElementById("obj-js");
    var descricao = document.getElementById("descri-js");
    var anexos = document.getElementById("anexo-js");
    var datarecebmento = document.getElementById("recebhora-js");
    var arquivo = document.getElementById("arqv-js");  
   
     
   
    if(oficio.value ==""){
        alert("oficio não informado");
    }
    if(data.value ==""){
        alert("Data não informada");
    }
    if(objeto.value ==""){
        alert("Objeto não informado");
    }
    if(descricao.value ==""){
        alert("descrição não informada");
    }
    if(anexos.value ==""){
        alert("Anexo não informado");
    }
    if(datarecebmento.value ==""){
        alert("Data não informada");
    }
    if(arquivo.value ==""){
        alert("Insira o arquivo");
    }else{
        
    }
}