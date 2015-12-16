function customRGB(){
	$('.err').html('');
	var ver = "version 2.32";
	if (window.location.href == "http://ryanoconr.com/hex/dev.html"){
		ver = "dev version";
	} else {
		ver = "version 2.32";
	}
	$('.version').html(ver);
	var c = $('#rgb').val();
	if (c == "dev"){
		window.location.href = "http://ryanoconr.com/hex/dev.html";
	} else if (c == "rel"){
		window.location.href = "http://ryanoconr.com/hex";
	} else if (c == "auto"){
		window.location.href = "http://ryanoconr.com/hex/auto.html";
	}
	if (c === ""){
		randomColor();
		exit();
	}
	var check = c.charAt(0);
	var check2 = c.charAt(1);
	var check3 = c.charAt(2);
	var check4 = c.charAt(3);
	var checkLast = c.charAt(c.length-1);
	if (check != "R" && check != "(" && checkLast != ")"){
		c = c.toUpperCase();
		c = 'RGB('+c+')';
		$('.err').html('');
	} else if (check == "(" && checkLast == ")"){
		c = c.toUpperCase();
		c = 'RGB'+c;
		$('.err').html('');
	} else if (check == "R" && check2 == "G" && check3 == "B" && check4 == "(" && checkLast == ")"){
		c = c.toUpperCase();
		c = c;
		$('.err').html('');
	} else {
		var err = "Invalid RGB Color";
		$('.err').html(err);
		exit();
	}
	c = c.toUpperCase();
	var hex = rgb2hex(c);
	if (hex === ""){
		var err = "Invalid RGB Color";
		$('.err').html(err);
		exit();
	}
/* 	$('#rgb').val(c); */
	$('#hex').val(hex);
	var d = c.slice(4,-1);
	var data = d.split(',');
	var r = data[0];
	var g = data[1];
	var b = data[2];
	$('body').css('background-color', c);
	var o = Math.round(((parseInt(r) * 299) + (parseInt(g) * 587) + (parseInt(b) * 114)) /1000);
	(o > 125) ? $('body').css('color', 'black') : $('body').css('color', 'white');
	$('body').css('background-color', c);
	$('.field').css('background-color', c);
	if (o > 125){
		var hoverColor = "rgba(0,0,0,0.5)";
		var hoverColour = "rgba(255,255,255,1)"
		var hover = c;
		$('.field').css('border-color', hoverColor);
		$('.field').css('color', hoverColor);
		$('.version').css('color', hoverColor);
		$('.err').css('color', hoverColor);
	} else {
		var hoverColor = "rgba(255,255,255,0.5)";
		var hoverColour = "rgba(0,0,0,1)";
		var hover = c;
		$('.field').css('border-color', hoverColor);
		$('.field').css('color', hoverColor);
		$('.version').css('color', hoverColor);
		$('.err').css('color', hoverColor);
	}
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
		$(this).css('border-color', hoverColor);
	},
					   function(){
		$(this).css('background-color', "transparent");
		(o > 125) ? $(this).css('color', 'rgba(0,0,0,0.5)') : $(this).css('color', 'rgba(255,255,255,0.5)');
	});
	(o > 125) ? $('.button').css('color', 'black') : $('.home').css('color', 'white');
	$('.button').click( function(){
		$(this).css('color', hover);
		$(this).css('border-color', hoverColor);
		$(this).css('color', hover);
	});
	hex = hex.toUpperCase();
	$('#hex').val(hex);
	$('#rgb').val(c);
	$(document).prop('title', c + ' // ' + hex);
	(o > 125) ? $('.home').css('color', 'rgba(0,0,0,0.5)') : $('.home').css('color', 'rgba(255,255,255,0.5)');
	(o > 125) ? $('.button').css('color', 'rgba(0,0,0,0.5)') : $('.button').css('color', 'rgba(255,255,255,0.5)');
	$('body').css('background-color', c);
}
