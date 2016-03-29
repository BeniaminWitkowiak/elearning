    function toggleVideo(state) {
        // if state == 'hide', hide. Else: show video
        var div = document.getElementById("popupVid");
        var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
        div.style.display = state == 'hide' ? 'none' : '';
        func = state == 'hide' ? 'pauseVideo' : 'playVideo';
        iframe.postMessage('{"event":"command","func":"' + func + '","args":""}', '*');
    }

$(document).ready(function () {
	$('body').find('.wysun').slideDown();
	
	/*Wyświetla po najechaniu myszką na diva z klasą for_hover, wyjeżdża div z klasą details*/
	$('body').on('mouseover', '.for_hover', function () {
        $(this).find('.details').slideDown();
		}).on('mouseleave', '.for_hover', function () {
        $(this).find('.details').slideUp();
	});
	
	$('body').on('mouseover', '.hint', function () {
        $(this).find('.details').slideDown();
		}).on('mouseleave', '.hint', function () {
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
	
	//po odkliknięciu w tło resetuje wszystkie elementy
	$('body').on('click', '.grey_background', function () {
		$(this).slideUp();
		$('.correct_message').css("display", "none");
		$('.incorrect_message').css("display", "none");

		$('.almost_correct_message').css("display", "none");
		$('.correct_and_incorrect_message').css("display", "none");

		$('.some_right_message').css("display", "none");
		$('.wrong_and_right_message').css("display", "none");

	});
	
	
	

   /*///////////*/
    /* PIERWSZE POP-UP VIDEO */
    $('body').on('click', '.menu_click', function () {
        $(this).closest('body').find('.wyszarzanie_strony').css("display", "block");
        $(this).closest('body').find('.popup').slideToggle();
        // $(this).closest('body').find('.popupy').addClass('.popup');

    });

    $('body').on('click', '.wyszarzanie_strony', function () {
        $(this).closest('body').find('.popup').slideUp();
       $(this).closest('body').find('.wyszarzanie_strony').css("display", "none");

        $(this).closest('body').find('.popup').slideUp("normal", function () {
            toggleVideo('hide');
        });


        //$(this).closest('body').find('.popup').slideUp("normal", function() { $(this).remove(); } );

    });

	


	
	
	
	
});

