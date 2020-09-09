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

function simulaJogadaMaquina(jogadaUsuario){
    let jogadas = ['pedra', 'papel', 'tesoura'];
    let posicao = Math.floor(Math.random() * 3);
    let jogadaFinal = jogadas[posicao];

    if(jogadaFinal == 'pedra'){
        padrao.style.backgroundImage= "url('img/pedra.png')";
    } else if (jogadaFinal == 'papel'){
        padrao.style.backgroundImage= "url('img/papel.png')";
    } else if (jogadaFinal == 'tesoura'){
        padrao.style.backgroundImage= "url('img/tesoura.png')";
    }
    
    calculaResultado(jogadaUsuario, jogadas[posicao]);
}

function calculaResultado(usuario, maquina){
    //usuário vencedor
    if(usuario == "papel" && maquina == "pedra" ||
    usuario == "tesoura" && maquina == "papel" ||
    usuario == "pedra" && maquina == "tesoura"){
        alert("você venceu!");
    } 
    //máquina vencedora
    else if(maquina == "papel" && usuario == "pedra" ||
    maquina == "tesoura" && usuario == "papel" ||
    maquina == "pedra" && usuario == "tesoura"){
        alert("você perdeu!");
    }
    

}