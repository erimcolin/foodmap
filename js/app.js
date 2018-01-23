$(document).ready(function(){

  var $foodImages = $('.food-info');
  var $namePlace = $('.name-of-place');
  var $adressPlace = $('.address-of-place');

  // para el efecto splash
  $('#firstSection').hide(); //aquí se va a ocultar toda la primera sección
  $('.container').hide();
  setTimeout(function() { //mientras ocurre esta función
    $('#splash').fadeOut(500);
    $('#firstSection').show(); // y al finalizar se van a mostrar
    $('.container').show();
  }, 3000); //tiempo

  function loadPage() {
    $('.myModal').modal();
    // $foodImages.click(select);
  }

  // function select(){
  //   var $name = $(this).data('name');
  //
  // }

   // acceder a la data
  $('.food-info').click(function() {
    for(var i in data) {
      console.log(data[i]);
    }
    $('h2').text(data[i].name);
    $('.slogan').text(data[i].slogan);
    $('.address').text(data[i].address);
    $('.servicios').text(data[i].servicios);
    $('#imagen1').attr('src', 'assets/images/Moe_tabern.jpg');
  });

  // $('.food-info1').click(function() {
  //   for(var i in data) {
  //     console.log(data[i]);
  //   }
  //   $('h2').text(data[i].name);
  //   $('.slogan').text(data[i].slogan);
  //   $('.address').text(data[i].address);
  //   $('.servicios').text(data[i].servicios);
  //   $('#imagen1').attr('src', 'assets/images/Moe_tabern.jpg');
  // });

  // $('.container')
  //   .mouseover(function() {
  //     $(this).addClass('transition');
  //   })

})
