
$(document).ready(function(){
	var imgItems = $('.slider li').length; // Numero de Slides
	var imgPos = 1;


	for(i = 1; i <= imgItems; i++){
		$('.pagination').append('<li> <i class="fas fa-circle"></i></li>');
	}


  $('.slider li').hide();
  $('.slider li:first').show();
  $('.pagination li:first').css({'color':' #3A3A3A'});

  $('.pagination li').click(pagination);
  $('.right span').click(nextSlider);
  $('.left span').click(prevSlider);


	setInterval(function(){
		nextSlider();
	}, 4000);

	// FUNCIONES --------------------------------------------------------

	function pagination(){
		var paginationPos = $(this).index() + 1;

		$('.slider li').hide();
		$('.slider li:nth-child('+ paginationPos +')').fadeIn();


		$('.pagination li').css({'color': '#7c919d'});
		$(this).css({'color': '#3A3A3A'});

		imgPos = paginationPos;

	}

	function nextSlider(){
		if( imgPos >= imgItems){imgPos = 1;}
		else {imgPos++;}

		$('.pagination li').css({'color': '#7c919d'});
		$('.pagination li:nth-child(' + imgPos +')').css({'color': '#3A3A3A'});

		$('.slider li').hide();
		$('.slider li:nth-child('+ imgPos +')').fadeIn();

	}

	function prevSlider(){
		if( imgPos <= 1){imgPos = imgItems;}
		else {imgPos--;}

		$('.pagination li').css({'color': '#7c919d'});
		$('.pagination li:nth-child(' + imgPos +')').css({'color': '#3A3A3A'});

		$('.slider li').hide();
		$('.slider li:nth-child('+ imgPos +')').fadeIn();
	}

});
