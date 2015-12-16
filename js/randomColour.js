function randomColor(){
	$('.err').html('');
	r = Math.floor(Math.random() * (256));
	g = Math.floor(Math.random() * (256));
	b = Math.floor(Math.random() * (256));
	var c = 'RGB('+r+','+g+','+b+')';
	$("#rgb").val(c);
	var o = Math.round(((parseInt(r) * 299) + (parseInt(g) * 587) + (parseInt(b) * 114)) /1000);
	(o > 125) ? $('body').css('color', 'rgba(0,0,0,0.5)') : $('body').css('color', 'rgba(255,255,255,0.5)');
	$('body').css('background-color', c);
	$('.field').css('background-color', c);
	r = Math.round(Math.random() * 255);
	g = Math.round(Math.random() * 255);
	b = Math.round(Math.random() * 255);
	if (o > 125){
		var hoverColor = "rgba(0,0,0,0.5)";
		var hoverColour = "rgba(255,255,255,1)";
		var hover = c;
	} else {
		var hoverColor = "rgba(255,255,255,0.5)";
		var hoverColour = "rgba(0,0,0,1)";
		var hover = c;
	}
	function button(){
		$('.button').css('height', '30px');
		$('.button').css('line-height', '30px');
		$('.button').css('font-size', '17px');
		$('.button').css('border-color', hoverColor);
		$('.button').css('color', hoverColor);
		setTimeout(function() {
			$('.button').css('height', '40px');
			$('.button').css('line-height', '40px');
			$('.button').css('font-size', '20px');
			$('.button').css('color', hoverColor);
		}, 250);
		$('.button').css('border-color', 'transparent');
	}
	$('.field').css('border-color', hoverColor);
	$('.field').css('color', hoverColor);
	$('.version').css('color', hoverColor);
	$('.home').hover( function(){
		$(this).css('background-color', hoverColor);
		$(this).css('color', hover);
		$(this).css('border-color', hoverColor);
	},
					 function(){
		$(this).css('background-color', "transparent");
		(o > 125) ? $(this).css('color', 'rgba(0,0,0,0.5)') : $(this).css('color', 'rgba(255,255,255,0.5)');
	});
	(o > 125) ? $('.home').css('color', 'rgba(0,0,0,0.5)') : $('.home').css('color', 'rgba(255,255,255,0.5)');
	$('.button').hover( function(){
		$(this).css('border-color', hoverColor);
		$(this).css('color', hoverColor);
	},
					   function(){
		$(this).css('border-color', "transparent");
		(o > 125) ? $(this).css('color', 'rgba(0,0,0,0.5)') : $(this).css('color', 'rgba(255,255,255,0.5)');
	});
	$('.button').click( function(){
		$(this).css('color', hoverColor);
		$(this).css('border-color', hoverColor);
		$(this).css('color', hoverColor);
	});
	var hex = rgb2hex(c);
	hex = hex.toUpperCase();
	$('#hex').val(hex);
	$(document).prop('title', c + ' // ' + hex);
	(o > 125) ? $('.home').css('color', 'rgba(0,0,0,0.5)') : $('.home').css('color', 'rgba(255,255,255,0.5)');
	(o > 125) ? $('.button').css('color', 'rgba(0,0,0,0.5)') : $(this).css('color', 'rgba(255,255,255,0.5)');
	button();
}
