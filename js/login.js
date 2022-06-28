import {cadastrar} from './regsitUser.js'

function entrar(){
    let usuario = document.querySelector('#usuario')
    let userLabel = document.querySelector('#usuarioLabel')

    let senha = document.querySelector('#senha')
    let senhaLabel = document.querySelector('#senhaLabel')

    let listaUser = []

    let userValid = {
        nome:'',
        senha:'',

    }
    listaUser = JSON.parse(localStorage.getItem(listaUser))
    
    listaUser.forEach((item)=>{
        if(usuario.value == item.nomeCad && senha.value == senhaCad){
            userValid = {
                nome: item.nomeCad,
                senha: item.senhaCad,
            }

        }
    })
    console.log(userValid)
}
