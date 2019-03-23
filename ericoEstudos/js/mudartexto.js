
  

//console.log(f.DATA); // MY DATA
$(document).ready(function() {
  $.get('/dados', function(res) {
    var titulo = res.substring(res.indexOf("|"), 0 );
    var conteudo = res.substring(res.indexOf("|")+1)
      $('#idTitulo').html(titulo);
      $('#idConteudo').html(conteudo);
  })
});

/*$(document).ready(function() {
  $('#idQueIdentificaP').text('JAVASCRIPT ALTEROU ESSE P')
});*/
      
      
function alterar(){

  $.get('/dados', function(res) {
    $('#idQueIdentificaP').text(res+" novo");
  })
  
}

