function hex2rgb(hex) {
	if (hex[0]=="#") hex=hex.substr(1);
	if (hex.length==3) {
		var temp=hex; hex='';
		temp = /^([a-f0-9])([a-f0-9])([a-f0-9])$/i.exec(temp).slice(1);
		for (var i=0;i<3;i++) hex+=temp[i]+temp[i];
	}
	var triplets = /^([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i.exec(hex).slice(1);
	return {
		red:   parseInt(triplets[0],16),
		green: parseInt(triplets[1],16),
		blue:  parseInt(triplets[2],16)
	};
}
function customHex(){
	$('.err').html('');
	var ver = "version 2.32";
	if (window.location.href == "http://ryanoconr.com/hex/dev.html"){
		ver = "dev version";
	} else {
		ver = "version 2.32";
	}
	$('.version').html(ver);
	
	var hex = $('#hex').val();
	if (hex === ""){
		randomColor();
		exit();
	}
	$('.err').html('');
	var check = hex.charAt(0);
	if (check != "#" && hex.length == "6"){
		hex = hex.toUpperCase();
		hex = '#'+hex;
	} else if (check != "#" && hex.length == "3"){
		hex = hex.toUpperCase();
		hex = '#'+hex;
	} else if (check == "#" && hex.length == "7"){
		hex = hex.toUpperCase();
		hex = hex;
	} else if (check == "#" && hex.length == "4"){
		hex = hex.toUpperCase();
		hex = hex;
	} else {
		var err = "Invalid HEX Color";
		$('.err').html(err);
		exit();
	}
	var rgb = hex2rgb(hex);
	if (rgb === ""){
		var err = "Invalid HEX Color";
		$('.err').html(err);
		exit();
	}
	var rgb1 = "RGB("+rgb.red+","+rgb.green+","+rgb.blue+")";
	$('#rgb').val(rgb1);
	var r = rgb.red;
	var g = rgb.green;
	var b = rgb.blue;
	$('body').css('background-color', rgb1);
	var o = Math.round(((parseInt(r) * 299) + (parseInt(g) * 587) + (parseInt(b) * 114)) /1000);
	(o > 125) ? $('body').css('color', 'black') : $('body').css('color', 'white');
	$('body').css('background-color', rgb1);
	$('.field').css('background-color', rgb1);
	if (o > 125){
		var hoverColor = "rgba(0,0,0,0.5)";
		var hoverColour = "rgba(255,255,255,1)";
		var hover = rgb1;
	} else {
		var hoverColor = "rgba(255,255,255,0.5)";
		var hoverColour = "rgba(0,0,0,1)";
		var hover = rgb1;
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
	$(document).prop('title', rgb1 + ' // ' + hex);
	(o > 125) ? $('.home').css('color', 'rgba(0,0,0,0.5)') : $('.home').css('color', 'rgba(255,255,255,0.5)');
	(o > 125) ? $('.button').css('color', 'rgba(0,0,0,0.5)') : $('.button').css('color', 'rgba(255,255,255,0.5)');
	$('body').css('background-color', rgb);
	
	hex = hex.toUpperCase();
	$('#hex').val(hex);
}
