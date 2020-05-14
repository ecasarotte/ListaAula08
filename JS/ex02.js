
let nomeUsuario = prompt('Insira o nome: ');
let senha = prompt('Insira a senha: ');

let achou = false;

let bancoDeUsuarios = [
    ['JOÃO', '123456'],
    ['PAULO', 'A1B2C3'],
    ['MARIA', '676767']
];

bancoDeUsuarios.forEach((item)=>{
    if(nomeUsuario.toUpperCase() == item[0] && senha.toUpperCase() == item[1]){
        alert('Usuário e senha validado. Bem vindo a aplicação');
        achou = true;
        return;
    }
});

if(!achou){
    alert('usuário e senha inválidos');
}



