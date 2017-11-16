$(function() {

  	var f = $('.tab_click.active');
  	var d = $(f).parent().position().left + 121;

  	var e = $('.tab_angle').position().left;

  	//анимируем треугольник
	$('.tab_angle').stop();
	if (d > e){
		$('.tab_angle').animate({left: (d+15)+'px'},"slow");
	}
	else{
		$('.tab_angle').animate({left: (d-15)+'px'},"slow");
	}
	$('.tab_angle').animate({left: (d)+'px'},"fast");

	$('.tab_click').click(function(){
		var a = $(this)[0].id;
		$('.tab_sel .active').removeClass('active');
		$('#'+a).addClass('active');
		$('.tab_cont .active').removeClass('active');

		//позиция для треугольника
		var b = $('#'+a).position();

		b = $('#'+a).parent().position().left;
		b+= 121;

		var c = $('.tab_angle').position().left;
		//анимируем треугольник
		$('.tab_angle').stop();
		if (b > c){
			$('.tab_angle').animate({left: (b+15)+'px'},"slow");
		}
		else{
			$('.tab_angle').animate({left: (b-15)+'px'},"slow");
		}
		$('.tab_angle').animate({left: (b)+'px'},"fast");
		//включаем содержимое вкладки
		a = 'ta' + a;
		$('#'+a).addClass('active');
	});
});