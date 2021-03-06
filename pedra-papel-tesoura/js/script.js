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
var placarPC = document.getElementById('placar-pc');
var placarUsuario = document.getElementById('placar-usuario');
var tela = document.getElementById('tela-jogo');



var usuario = 0;
var pc = 0;

function simulaJogadaMaquina(jogadaUsuario){
    let jogadas = ['pedra', 'papel', 'tesoura'];
    let posicao = Math.floor(Math.random() * 3);
    let jogadaFinal = jogadas[posicao];

    if(jogadaFinal == 'pedra'){
        padrao.src= "./img/pedra.png"; 
    } else if (jogadaFinal == 'papel'){
        padrao.src= "./img/papel.png"; 
    } else if (jogadaFinal == 'tesoura'){
        padrao.src= "./img/tesoura.png"; 
    }
    
    calculaResultado(jogadaUsuario, jogadas[posicao]);
}

function calculaResultado(usuario, maquina){
    //usuário vencedor
    if(usuario == "papel" && maquina == "pedra" ||
    usuario == "tesoura" && maquina == "papel" ||
    usuario == "pedra" && maquina == "tesoura"){
        notificacaoVencedor();
        alteraPlacar("usuario");
    } 
    //máquina vencedora
    else if(maquina == "papel" && usuario == "pedra" ||
    maquina == "tesoura" && usuario == "papel" ||
    maquina == "pedra" && usuario == "tesoura"){
        notificacaoDerrota();
        alteraPlacar("pc");
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
  spanResultado.innerText = 'Ponto pra você! :)';
}

function notificacaoDerrota(){
    if(alertaResultado.classList.contains('d-none')){
        alertaResultado.classList.remove('d-none');
    }
      spanResultado.innerText = 'Ponto para o pc! :(';
    
}

function notificacaoEmpate(){
    if(alertaResultado.classList.contains('d-none')){
        alertaResultado.classList.remove('d-none');
    }

    spanResultado.innerText = 'Empate.';  
}

function alteraPlacar(vencedor){
    if(vencedor === "pc"){
        pc++;
        placarPC.innerText = "PC: " + pc;
    } else {
        usuario++;
        placarUsuario.innerText = "VOCÊ: " + usuario;
    }
    
    verificaPontuacao();
}

function verificaPontuacao(){
    if(pc === 10) fimDoJogo("pc");
    if(usuario === 10) fimDoJogo("usuario");
}

function fimDoJogo(ganhador){
    if(ganhador === "pc"){
        anunciarGanhador("pc");
    } else if(ganhador === "usuario") {
        anunciarGanhador("usuario")
    } else {
        anunciarGanhador("empate");
    }
}

function anunciarGanhador(ganhador){
    animate(tela);

    tela.innerText = "";
    let resultadoH1;
    let textoBotaoNovoJogo = document.createTextNode("Quero jogar novamente!");
    let btnNovoJogo = document.createElement("button");
    let divResultado = document.createElement("div");
    let textoResultado = document.createElement("h2");

    btnNovoJogo.id = "btnNovoJogo";

    tela.classList.add("text-center");

    btnNovoJogo.classList.add("btn" , "btn-dark", "btn-lg", "mt-4", "mb-4");  
    textoResultado.classList.add("mb-4", "mt-4");     

    if(ganhador === "pc"){
        tela.style.backgroundColor = "#c81912";
        resultadoH1 = document.createTextNode("É uma pena! Você perdeu...");
        setInterval(function() {
            $("#placar-pc").toggle()
        },300);
    } else if (ganhador === "usuario") {
        tela.style.backgroundColor = "#335d2d";
        resultadoH1 = document.createTextNode("Que arraso! Você venceu.");
        setInterval(function() {
            $("#placar-usuario").toggle()
        },300);
    } else {
        resultadoH1 = document.createTextNode("Ninguém ganhou!");
    }    
    
    textoResultado.append(resultadoH1);
    btnNovoJogo.append(textoBotaoNovoJogo);
    
    divResultado.appendChild(textoResultado);
    divResultado.appendChild(btnNovoJogo);

    tela.appendChild(divResultado); 

    
    
    recomecaJogo();   
    
}

function recomecaJogo(){
    document.getElementById('btnNovoJogo').addEventListener('click', function(){
        location.reload();
        pc = 0;
        usuario = 0;
    });
}

function animate(element) {
    transition.begin(element, [
        ["transform", "rotate(0)", "rotate(360deg)", "2s"],
        ["background-color", "#ffffff", "#ADB5C7", "1s", function(element, finished) {
            if (!finished) return;
            transition.begin(element, ["background-color", "#ADB5C7", "#ffffff", "1s"]);
        }]
    ], {
        timingFunction: "linear"
    });
}

