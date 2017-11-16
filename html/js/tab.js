$(document).ready(function () {
    $('.js-tab').click(function () {
        var id = $(this).data('id');
        $('.js-tab').removeClass('active');
        $(this).addClass('active');
		$('.fulltab').removeClass('active');
        $('#'+id).addClass('active');
    })
});