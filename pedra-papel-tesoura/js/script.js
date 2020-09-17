document.getElementById('pedra').addEventListener('click', function(){
    simulaJogadaMaquina('pedra');
});
document.getElementById('papel').addEventListener('click', function(){
    simulaJogadaMaquina('papel');
});
document.getElementById('tesoura').addEventListener('click', function(){
   simulaJogadaMaquina('tesoura');
});

var padrao = document.getElementById('padrao');
var alertaResultado = document.getElementById('alertaResultado');
var spanResultado = document.getElementById('resultado');

function simulaJogadaMaquina(jogadaUsuario){
    let jogadas = ['pedra', 'papel', 'tesoura'];
    let posicao = Math.floor(Math.random() * 3);
    let jogadaFinal = jogadas[posicao];

    if(jogadaFinal == 'pedra'){
        padrao.src= "../img/pedra.png"; 
    } else if (jogadaFinal == 'papel'){
        padrao.src= "../img/papel.png"; 
    } else if (jogadaFinal == 'tesoura'){
        padrao.src= "../img/tesoura.png"; 
    }
    
    calculaResultado(jogadaUsuario, jogadas[posicao]);
}

function calculaResultado(usuario, maquina){
    //usuário vencedor
    if(usuario == "papel" && maquina == "pedra" ||
    usuario == "tesoura" && maquina == "papel" ||
    usuario == "pedra" && maquina == "tesoura"){
        notificacaoVencedor();
    } 
    //máquina vencedora
    else if(maquina == "papel" && usuario == "pedra" ||
    maquina == "tesoura" && usuario == "papel" ||
    maquina == "pedra" && usuario == "tesoura"){
        notificacaoDerrota();
    }
    //empate
    else{
        notificacaoEmpate();
    }

}

function notificacaoVencedor(){
  if(alertaResultado.classList.contains('d-none')){
    alertaResultado.classList.remove('d-none');
  }
  spanResultado.innerText = 'Parabéns, você venceu! :)';

}
function notificacaoDerrota(){
    if(alertaResultado.classList.contains('d-none')){
        alertaResultado.classList.remove('d-none');
      }
      spanResultado.innerText = 'Ah, não... Você perdeu! :(';
    
}

function notificacaoEmpate(){
    if(alertaResultado.classList.contains('d-none')){
        alertaResultado.classList.remove('d-none');
      }
      spanResultado.innerText = 'Empate.';  
}