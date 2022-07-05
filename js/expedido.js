let oficio = document.querySelector('#oficio')
let labelOficio = document.querySelector('#labelOficio')
let validOficio = false

let data = document.querySelector('#data')
let labelData = document.querySelector('#labelData')
let validData = false

let objeto = document.querySelector('#data')
let labelobjeto = document.querySelector('#labelData')
let validObjeto = false

let descricao = document.querySelector('#data')
let labelDescricao = document.querySelector('#labelData')
let validDescricao = false

let anexo = document.querySelector('#data')
let labelAnexo = document.querySelector('#labelData')
let validAnexo = false

let recebdata = document.querySelector('#data')
let labelRecebData = document.querySelector('#labelData')
let validRecebData = false

let selecArquivo = document.querySelector('#data')
let labelSelecArquivo = document.querySelector('#labelData')
let validSelecArquivo = false

// validação dos campos
oficio.addEventListener('keyup',()=>{
    if(oficio.value.length <=0){
        labelOficio.setAttribute('style','color:red')
        labelOficio.innerHTML = 'Oficio *Não pode estar vazio'
        validOficio = false

    } else{
        labelOficio.setAttribute('style', 'color:green')
            labelOficio.innerHTML = 'Nome'
            validOficio= true

    }
})
senha.addEventListener('keyup',()=>{
    if(senha.value.length <=5){
        labelSenha.setAttribute('style','color:red')
        labelSenha.innerHTML = 'Senha *precisa ter no mínimo 6 caracteres'
        validSenha = false

    } else{
        labelSenha.setAttribute('style', 'color:green')
            labelSenha.innerHTML = 'Senha'
            validSenha = true

    }
})
 
function cadastrar(){
    if(validNome && validSenha && validConfirmarSenha){
      let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
      
      listaUser.push(
      {
        nomeCad: nome.value,
        senhaCad: senha.value
      }
      )
      localStorage.setItem('listaUser', JSON.stringify(listaUser))
        
        alert(' Cadastro feito com sucesso')
    }else{
        alert('Preencha os campos corretamente')
    }
}