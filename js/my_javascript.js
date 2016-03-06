$(document).ready(function () {
	$('body').find('.wysun').slideDown();
	
	
	
	$('body').on('mouseover', '.for_hover', function () {
        $(this).find('.details').slideDown();
		}).on('mouseleave', '.for_hover', function () {
        $(this).find('.details').slideUp();
	});
	/*
		$('body').on('click', '.check_button', function () {
		if ($(this).closest('body').find('checkboxG11').is(':checked')) {
		alert("CHECKED !!!!")
		} else {
		alert('Unchecked');
		}
	});*/
	$('body').on('click', '.check_button', function () {
	if ($('body').find('input.css-checkbox').is(':checked')) {
		alert('checked');
	}else{
		alert('unchecked');
	}
	});
	
	
	
	$('body').on('click', '.incorrect_answer', function () {
		alert('incorrect');
		});
	
});

