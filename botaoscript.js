/*Crie um botão que muda de cor com o seguinte
padrão:
Seu fundo deve ser azul quando o mouse
estiver afastado, verde quando estiver sobre
o botão e vermelho, exibindo a mensagem
“quebrei”, quando clicado. Depois de
“quebrado”, ele não deve mais modificar */

let botao = document.querySelector("#botao");
botao.style.background="blue";
let estaQuebrado=false;
let contaClicks=0;

botao.addEventListener("mouseover",trocaVerde);
botao.addEventListener("mouseout",trocaAzul);
botao.addEventListener("click", trocaQuebrado);

function trocaVerde(){
    if(estaQuebrado===false)/*Se a variavel for falsa*/
     botao.style.background="green";
}
function trocaAzul(){
    if(!estaQuebrado)/*Se a variavel for falsa*/
     botao.style.background="blue";
}
function trocaQuebrado(){
    contaClicks++;//contaClicks=contaClicks+1
    if(contaClicks>=10){ 
     botao.style.background="red";
     botao.innerHTML="quebrei";
     estaQuebrado=true;
    }
}
/* a função tb pode ser escrita diretamente no evento
(função Lambida, função que não tem nome):

botao.addEventListener("mouseover",e =>{
    botao.style.background="green";
});
Isso pode acontecer quando a função não for recorrente.
*/