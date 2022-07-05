let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmarSenha = document.querySelector('#confirmarSenha')
let labelConfirmeSenha = document.querySelector('#labelConfirmeSenha')
let validConfirmarSenha = false

// validação dos campos
nome.addEventListener('keyup',()=>{
    if(nome.value.length <=2){
        labelNome.setAttribute('style','color:red')
        labelNome.innerHTML = 'Nome *precisa ter no mínimo 3 caracteres'
        validNome = false

    } else{
        labelNome.setAttribute('style', 'color:green')
            labelNome.innerHTML = 'Nome'
            validNome= true

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
confirmarSenha.addEventListener('keyup',()=>{
    if(senha.value != confirmarSenha.value){
        labelConfirmeSenha.setAttribute('style', 'color: red')
        labelConfirmeSenha.innerHTML = 'Confirmar Senha *As senhas não conferem'
        validConfirmarSenha = false

    } else{
        labelConfirmeSenha.setAttribute('style', 'color:green')
            labelConfirmeSenha.innerHTML = 'Confirmar Senha'
            validConfirmarSenha = true

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