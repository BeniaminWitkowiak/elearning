$(document).ready(function () {
	$('body').find('.wysun').slideDown();
	
	
	
	$('body').on('mouseover', '.for_hover', function () {
        $(this).find('.details').slideDown();
		}).on('mouseleave', '.for_hover', function () {
        $(this).find('.details').slideUp();
	});
	/*
		$('body').on('click', '.check_button', function () {
		if ($('body').find('input.css-checkbox').is(':checked')) {
			alert('checked');
			}else{
			alert('unchecked');
		}
	});
	
	*/
	$('body').on('click', '.check_button', function () {
	
		if ($('body').find('input.checkbox_true').is(':checked')) {//zaznaczylem dobra odpowiedz
			if ($('body').find('input.checkbox_false').is(':checked')) {//zaznaczylem dobra odpowiedz i jakas ze zlych odpowiedzi
				alert("Jesteś blisko- zaznaczono dobrą i złą odpowiedź.");
			}else{
				alert("Dobrze!");//zaznaczylem dobra odpowiedz i NIE ZAZNACZYLEM zlej odpowiedzi
				$('.next_button').css("display", "block");
			}
		}else{
			alert("Niestety, odpowiedź jest błędna.");//zaznaczylem zla odpowiedz
		}
	
	});
	
	/*Akcja po zaznaczeniu odpowiedzi w zadaniu z jedną poprawną odpowiedzią*/
	$('body').on('click', '.incorrect_answer', 
	function () {
		alert('incorrect');
	});
	
	$('body').on('click', '.correct_answer', 
	function () {
		alert('correct');
	});
	
	
	
	
	$('body').on('click', '.true', function () {
		$('.grey_background').css("display", "block");
		$('.incorrect_message').css("display", "block");
	});
	$('body').on('click', '.false', function () {
		$('.grey_background').css("display", "block");
		$('.correct_message').css("display", "block");
	});
	
	
	$('body').on('click', '.grey_background', function () {
		$(this).slideUp();
		$('.correct_message').css("display", "none");
		$('.incorrect_message').css("display", "none");
	});
	
});

