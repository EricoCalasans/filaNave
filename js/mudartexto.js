
var nome1, nome2, nome3, nome4, nome5;
var pc1, pc2, pc3, pc4, pc5;

//console.log(f.DATA); // MY DATA
$(document).ready(function() {
  $.get('/dados', function(res) {
    //nome = res.substring(res.indexOf("|"), 0 );
    //pc = res.substring(res.indexOf("|")+1)
    


    //$('#idTitulo').html(titulo);
    //$('#idConteudo').html(conteudo);
  })
});

/*$(document).ready(function() {
  $('#idQueIdentificaP').text('JAVASCRIPT ALTEROU ESSE P')
});*/
      
window.setInterval(      
function alterar(){

  $.get('/dados', function(res) {
    
    if((res.substring(res.indexOf("|"), 0 )) === "-/ini/-" && (res.substring(res.indexOf("|")+1)) === "-/ini/-"){
      
      nome1 = "";
      nome2 = "";
      nome3 = "";
      nome4 = "";
      nome5 = "";
      pc1 = "";
      pc2 = "";
      pc3 = "";
      pc4 = "";
      pc5 = "";
      
      
      $('#idNome1').html("");
      $('#idNome2').html("");
      $('#idNome3').html("");
      $('#idNome4').html("");
      $('#idNome5').html("");
      $('#idPc1').html("");
      $('#idPc2').html("");
      $('#idPc3').html("");
      $('#idPc4').html("");
      $('#idPc5').html("");  


    }else{
      if(nome1 === res.substring(res.indexOf("|"), 0 )){
        pc1 = res.substring(res.indexOf("|")+1) 
        $('#idPc1').html(pc1);

      }else{
        nome5 = nome4;
        pc5 = pc4;
        nome4 = nome3;
        pc4 = pc3;
        nome3 = nome2;
        pc3 = pc2;
        nome2 = nome1;
        pc2 = pc1;
        nome1 = res.substring(res.indexOf("|"), 0 );
        pc1 = res.substring(res.indexOf("|")+1)
    

        $('#idNome1').html(nome1);
        $('#idNome2').html(nome2);
        $('#idNome3').html(nome3);
        $('#idNome4').html(nome4);
        $('#idNome5').html(nome5);
        $('#idPc1').html(pc1);
        $('#idPc2').html(pc2);
        $('#idPc3').html(pc3);
        $('#idPc4').html(pc4);
        $('#idPc5').html(pc5);
      }
      
      
      
   
    
    }

    //$('#idNome1').html(nome);
    //$('#idPc1').html(pc);
  })
  
}, 1000)

