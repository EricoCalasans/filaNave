
var novoNome;
var novoPc;
var nome = new Array(5);
var pc = new Array(5);
//nome[0] = "teste"
//alert(nome[0] + " foi");
//console.log(f.DATA); // MY DATA


$(document).ready(function() {
  $.get('/dados', function(res) {

  })
});

/*$(document).ready(function() {
  $('#idQueIdentificaP').text('JAVASCRIPT ALTEROU ESSE P')
});*/
      
window.setInterval(      
function organzar(){

  $.get('/dados', function(res) {
    novoNome = res.substring(res.indexOf("|"), 0 );
    novoPc = res.substring(res.indexOf("|")+1);

  })
    
  if(novoNome === "-/ini/-" || novoPc === "-/ini/-"){
    
    limpar();
    


  }else{
   

    if(nome[0] === novoNome){
      pc[0] = novoPc;
      $('#idPc1').html(pc[0]);

    }else{
      verificarComputador();
      
      nome[4] = nome[3];
      pc[4] = pc[3];
      nome[3] = nome[2];
      pc[3] = pc[2];
      nome[2] = nome[1];
      pc[2] = pc[1];
      nome[1] = nome[0];
      pc[1] = pc[0];
      nome[0] = novoNome;
      pc[0] = novoPc;
      
      alterar();


    }
    
    
    
  
  
  }

  //$('#idNome1').html(nome);
  //$('#idPc1').html(pc);



  
}, 1000)

function alterar(){
  
    $('#idNome1').html(nome[0]);
    $('#idNome2').html(nome[1]);
    $('#idNome3').html(nome[2]);
    $('#idNome4').html(nome[3]);
    $('#idNome5').html(nome[4]);
    $('#idPc1').html(pc[0]);
    $('#idPc2').html(pc[1]);
    $('#idPc3').html(pc[2]);
    $('#idPc4').html(pc[3]);
    $('#idPc5').html(pc[4]);
    
  
}

function estruturar(num){
 for(var i=0; i<4 ; i++ ){
  if(nome[i] === ""){
    nome[i] = nome[i+1];
    pc[i] = pc[i+1];
    nome[i+1] = "";
    pc[i+1] = "";
  }
 }  
}

function limpar(){
  nome[0] = "";
  nome[1] = "";
  nome[2] = "";
  nome[3] = "";
  nome[4] = "";
  pc[0] = "";
  pc[1] = "";
  pc[2] = "";
  pc[3] = "";
  pc[4] = "";
  
  alterar()
  
}

function verificarComputador(){
  var mudou = false;
  
  for(var i = 0; i <5 ; i++){
    if(pc[i] == novoPc){
      nome[i] = "";
      pc[i] = "";
      mudou = true;
      alterar();
      
    }
    if(mudou){
      estruturar();
    }
  }

}