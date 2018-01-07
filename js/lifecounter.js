function lc_tick() {
	var d = new Date();
	var lifetime = Math.floor(d.getTime()/1000 - lc_basetime);
	lc_setdisplay(lifetime);
	setTimeout("lc_tick()",1000);
}

function lc_setdisplay(newtime) {
//	alert("lc_setdisplay("+newtime+")");
	var old_display = "" + ( 100000000000 + lc_lasttime );
	var new_display = "" + ( 100000000000 + newtime );
	//alert("old = " + old_display + " and new = " + new_display);
	for (var i=0; i<=9; i++ ) {
		var old_digit = old_display.charAt(old_display.length - i-1);
		var new_digit = new_display.charAt(new_display.length - i-1);
	 //   alert("digit["+i+"]: old = " + old_digit + " and new = " + new_digit);
		if ( old_digit != new_digit ) {
			// alert("obj is document[ lc_image_ " + i +"]");
			//alert("obj is " +document[ "lc_image_" + i ]);
			document[ "lc_image_" + i ].src = lc_digits[new_digit].src;
		}
	}
	lc_lasttime = newtime;
}

var lc_lasttime = "          ";

var lc_digits = new Array(10);

document.write( "<table bgcolor=\"black\" border=\"0\" cellpadding=\"2\" cellspacing=\"0\">");
document.write( "<tr><td align=\"right\" style=\"color: #00FF00; font-size: 10px; font-family: Arial, Helvetica, sans-serif;\">" );
for ( var i=9; i>=0; i-- ) {
	lc_digits[i] = new Image();
	lc_digits[i].src = lc_base + i + ".gif";
    document.write( "<a href=\"http://www.meandeviation.com/utils/lifecounter/\">");
	document.write( "<img name=\"lc_image_" + i +"\" src=\"" + lc_base + "0.gif\" width=" + lc_width + " height=" + lc_height + " border=0/>" );
	document.write( "</a>" );
}
document.write( "<br/>");
document.write( "<a href=\"http://www.meandeviation.com/utils/lifecounter/\" style=\"color: #00FF00;\">");
document.write( "about lifecounter</a>" );
document.write( "</td></tr></table>" );
document.close();

lc_tick();

