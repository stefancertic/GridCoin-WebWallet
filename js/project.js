
//----------------------------About us Section & Award Section  Starts

 $(document).ready(function(){			
 	//set up events to handle browsing project categories
    $(".about .skills a ").bind("click", function(){ switchTo("skills"); });
    $(".about .clients a ").bind("click", function(){ switchTo("clients");});
    $(".about .testimonial a ").bind("click", function(){ switchTo("testimonial");}); 
	
	//award section
	$(".award .web a ").bind("click", function(){ switchTo("web"); });
    $(".award .icon a ").bind("click", function(){ switchTo("icon");});
    $(".award .logo a ").bind("click", function(){ switchTo("logo");}); 
    $(".award .others a ").bind("click", function(){ switchTo("others");}); 
    		
  });
 		
var curSect = "";

function switchTo(which){
	jQuery.easing.def = "easeInOutSine";
	
	h = $(".about_left").height();  //so we don't have to hardcode the row height;
	if (which == curSect) { return; }  //don't switch if we are on the selected tab
	
	if (which == "skills"){		
		$("#sidenav a").css("cursor", "pointer");		
		$("#sidenav .skills a").css("cursor", "default");			
		$("#sidenav .current").animate({top: "-1px"  }, { "duration": 300 } );	
		
	}
		
	if (which == "clients"){
		$("#sidenav a").css("cursor", "pointer");		
		$("#sidenav .clients a").css("cursor", "default");					
		$("#sidenav .current").animate({ 	top: "35px"   }, { "duration": 300 } );		
	}
	
	if (which == "testimonial"){		
		$("#sidenav a").css("cursor", "pointer");		
		$("#sidenav .testimonial a").css("cursor", "default");				
		$("#sidenav .current").animate({ 		top: "69px"	    }, { "duration": 300} );		
	}	
	
	//award section
	if (which == "web"){		
		$("#sidenav_award a").css("cursor", "pointer");		
		$("#sidenav_award .web a").css("cursor", "default");			
		$("#sidenav_award .current").animate({top: "-1px"  }, { "duration": 300 } );	
		
	}
		
	if (which == "icon"){
		$("#sidenav_award a").css("cursor", "pointer");		
		$("#sidenav_award .icon a").css("cursor", "default");					
		$("#sidenav_award .current").animate({ 	top: "35px"   }, { "duration": 300 } );		
	}
	
	if (which == "logo"){		
		$("#sidenav_award a").css("cursor", "pointer");		
		$("#sidenav_award .logo a").css("cursor", "default");				
		$("#sidenav_award .current").animate({ 		top: "69px"	    }, { "duration": 300} );		
	}	
	
	if (which == "others"){		
		$("#sidenav_award a").css("cursor", "pointer");		
		$("#sidenav_award .others a").css("cursor", "default");				
		$("#sidenav_award .current").animate({ 		top: "103px"	    }, { "duration": 300} );		
	}
	curSect = which;
}
//------------------------About us Section & Award Section Ends





//---------------------Network popup starts

$(function () {
  $('.bubbleInfo').each(function () {
    // options
    var distance = 10;
    var time = 250;
    var hideDelay = 500;

    var hideDelayTimer = null;

    // tracker
    var beingShown = false;
    var shown = false;
    
    var trigger = $('.trigger', this);
    var popup = $('.popup', this).css('opacity', 0);
	
	

    // set the mouseover and mouseout on both element
    $([trigger.get(0), popup.get(0)]).mouseover(function () {
      // stops the hide event if we move from the trigger to the popup element
      if (hideDelayTimer) clearTimeout(hideDelayTimer);

      // don't trigger the animation again if we're being shown, or already visible
      if (beingShown || shown) {
        return;
      } else {
        beingShown = true;

        // reset position of popup box
        popup.css({
          top: -50,
          left: -30,
          display: 'block' // brings the popup back in to view
        })
		
		
		


        // (we're using chaining on the popup) now animate it's opacity and position
        .animate({
          top: '-=' + distance + 'px',
          opacity: 1
        }, time, 'swing', function() {
          // once the animation is complete, set the tracker variables
          beingShown = false;
          shown = true;
        });
      }
    }).mouseout(function () {
      // reset the timer if we get fired again - avoids double animations
      if (hideDelayTimer) clearTimeout(hideDelayTimer);
      
      // store the timer so that it can be cleared in the mouseover if required
      hideDelayTimer = setTimeout(function () {
        hideDelayTimer = null;
        popup.animate({
          top: '-=' + distance + 'px',
          opacity: 0
        }, time, 'swing', function () {
          // once the animate is complete, set the tracker variables
          shown = false;
          // hide the popup entirely after the effect (opacity alone doesn't do the job)
          popup.css('display', 'none');
        });
      }, hideDelay);
    });
  });
});

//-------------Network popup ends

//----------------Slider Control Starts---------------------
 $(function() {
  	<!--Main Content Starts -->
    $('#content').cycle({
        fx:     'scrollUp', // You can choose any effects that you like, from the Link reference : http://www.malsup.com/jquery/cycle/browser.html
        speed:  'slow',
        timeout: 0,
        pager:  '#nav',
        pagerAnchorBuilder: function(idx, slide) {
            // return sel string for existing anchor
            return '#nav li:eq(' + (idx) + ') a';
        }			
    });	
	<!--Main Content Ends -->
	
	<!--About Sidenav Starts -->
	$('#content2').cycle({
        fx:     'turnDown', // You can choose any effects that you like, from the Link reference : http://www.malsup.com/jquery/cycle/browser.html
        speed:  'slow',
        timeout: 0,
        pager:  '#sidenav',
        pagerAnchorBuilder: function(idx, slide) {
            // return sel string for existing anchor
            return '#sidenav li:eq(' + (idx) + ') a';
        }		
		
    });	
	<!--About Sidenav Ends -->
	
	<!--Award Sidenav Starts -->
	$('#content3').cycle({
        fx:     'fade', // You can choose any effects that you like, from the Link reference : http://www.malsup.com/jquery/cycle/browser.html
        speed:  'slow',
        timeout: 0,
        pager:  '#sidenav_award',
        pagerAnchorBuilder: function(idx, slide) {
            // return sel string for existing anchor
            return '#sidenav_award li:eq(' + (idx) + ') a';
        }		
		
    });	
	<!--Award Sidenav Ends -->	
	
	
	<!--Testimonial Starts -->
	$('#testimonial').cycle({
		timeout:	   9000,  // milliseconds between slide transitions (0 to disable auto advance)
		fx: 'fade', // choose your transition type, ex: fade, scrollUp, shuffle, etc...
		next: '#next',  // selector for element to use as click trigger for next slide
	   prev: '#prev',  // selector for element to use as click trigger for previous slide
		pager: '#pager',  // selector for element to use as pager container
		pause:		   1,	  // true to enable "pause on hover"
	   pauseOnPagerHover: 1 // true to pause when hovering over pager link
	});	
	<!--Testimonial Ends -->
	
	
	
	
	<!--Award web Starts -->
	$('#webdesign').cycle({
		timeout:	   9000,  // milliseconds between slide transitions (0 to disable auto advance)
		fx: 'scrollHorz', // choose your transition type, ex: fade, scrollUp, shuffle, etc...
		next: '#web_next',  // selector for element to use as click trigger for next slide
	   prev: '#web_prev',  // selector for element to use as click trigger for previous slide
		pager: '#web_pager',  // selector for element to use as pager container
		pagerAnchorBuilder: function(idx, slide) {
            // return sel string for existing anchor
            return '#web_pager li:eq(' + (idx) + ') a';
        }	
	   
	});	
	<!--Award web Ends -->
	
	<!--Award Icon Starts -->
	$('#icondesign').cycle({
		timeout:	   9000,  // milliseconds between slide transitions (0 to disable auto advance)
		fx: 'scrollHorz', // choose your transition type, ex: fade, scrollUp, shuffle, etc...
		next: '#icon_next',  // selector for element to use as click trigger for next slide
	   prev: '#icon_prev',  // selector for element to use as click trigger for previous slide
		pager: '#icon_pager',  // selector for element to use as pager container
		pagerAnchorBuilder: function(idx, slide) {
            // return sel string for existing anchor
            return '#icon_pager li:eq(' + (idx) + ') a';
        }	
	   
	});	
	<!--Award Icon Ends -->
	
	<!--Award Logo Starts -->
	$('#logodesign').cycle({
		timeout:	   9000,  // milliseconds between slide transitions (0 to disable auto advance)
		fx: 'scrollHorz', // choose your transition type, ex: fade, scrollUp, shuffle, etc...
		next: '#logo_next',  // selector for element to use as click trigger for next slide
	   prev: '#logo_prev',  // selector for element to use as click trigger for previous slide
		pager: '#logo_pager',  // selector for element to use as pager container
		pagerAnchorBuilder: function(idx, slide) {
            // return sel string for existing anchor
            return '#logo_pager li:eq(' + (idx) + ') a';
        }	
	   
	});	
	<!--Award Logo Ends -->
	
	<!--Award Other Starts -->
	$('#otherdesign').cycle({
		timeout:	   9000,  // milliseconds between slide transitions (0 to disable auto advance)
		fx: 'scrollHorz', // choose your transition type, ex: fade, scrollUp, shuffle, etc...
		next: '#other_next',  // selector for element to use as click trigger for next slide
	   prev: '#other_prev',  // selector for element to use as click trigger for previous slide
		pager: '#other_pager',  // selector for element to use as pager container
		pagerAnchorBuilder: function(idx, slide) {
            // return sel string for existing anchor
            return '#other_pager li:eq(' + (idx) + ') a';
        }	
	   
	});	
	<!--Award Other Ends -->
	
	
	
	
	<!--Cufon Starts -->
	 Cufon.replace('h1', { fontFamily: 'Walkway SemiBold', hover: true }); 
	 Cufon.replace('h4', { fontFamily: 'Walkway UltraBold', hover: true });
	 Cufon.replace('h2', { fontFamily: 'Walkway UltraBold', hover: true });
	  Cufon.replace('h5', { fontFamily: 'Walkway UltraBold', hover: true });
	  
	<!--Cufon Ends -->
});
 
//----------------Slider Control Ends---------------------


//-------------newsletter functionality starts------------

$(function() {
  $('.error2').hide();
  $('input.text-input2').css({backgroundColor:"transparent"});
  $('input.text-input2').focus(function(){
    $(this).css({backgroundColor:"transparent"});
  });
  $('input.text-input2').blur(function(){
    $(this).css({backgroundColor:"transparent"});
  });

  $(".send_btn").click(function() {
		// validate and process form
		// first hide any error messages
    $('.error2').hide();
		
	  	
	var email2 = $("input#email2").val();
		if (email2 == "" || email2 == null || email2.indexOf("@") < 1 || email2.indexOf(".") < 1 || email2.length == 0){
     	 $("label#email2_error").show();
      	$("input#email2").focus();
     	 return false;
   		 }		
	
		
		var dataString = '&email2=' + email2;
		//alert (dataString);return false;
		
		$.ajax({
      type: "POST",
      url: "newsletter.php",
      data: dataString,
      success: function() {
        $('#newsletter').html("<div id='message2'></div>");
        $('#message2').html("<h2>successfully subscribed !</h2>")
        
        .hide()
        .fadeIn(1500, function() {
          $('#message2').append("<img id='checkmark2' src='images/check2.png' />");
        });
      }
     });
    return false;
	});
});

//-------------newsletter functionality ends------------
//-------------Floating Twitter Starts------------

var name = "#live";
	var menuYloc = null;
	
		$(document).ready(function(){
			menuYloc = parseInt($(name).css("top").substring(0,$(name).css("top").indexOf("px")))
			$(window).scroll(function () { 
				offset = menuYloc+$(document).scrollTop()+"px";
				$(name).animate({top:offset},{duration:500,queue:false});
			});
		}); 

//-----------Floating Twitter Ends--------------





// Image preloader

jQuery(document).ready(function(){

	jQuery('#main_container').image_preloader({delay:200});	// activates preloader for non-slideshow images
	
});
// -------------------------------------------------------------------------------------------
// The Image preloader
// -------------------------------------------------------------------------------------------


(function($)
{
	$.fn.image_preloader = function(options) 
	{
		var defaults = 
		{
			repeatedCheck: 500,
			fadeInSpeed: 1000,
			delay:600,
			callback: ''
		};
		
		var options = $.extend(defaults, options);
		
		return this.each(function()
		{
			var imageContainer = jQuery(this),
				images = imageContainer.find('img').css({opacity:0, visibility:'hidden'}),
				imagesToLoad = images.length;				
				
				imageContainer.operations =
				{	
					preload: function()
					{	
						var stopPreloading = true;
						
						images.each(function(i, event)
						{	
							var image = $(this);
							
							
							if(event.complete == true)
							{	
								imageContainer.operations.showImage(image);
							}
							else
							{
								image.bind('error load',{currentImage: image}, imageContainer.operations.showImage);
							}
							
						});
						
						return this;
					},
					
					showImage: function(image)
					{	
						imagesToLoad --;
						if(image.data.currentImage != undefined) { image = image.data.currentImage;}
												
						if (options.delay <= 0) image.css('visibility','visible').animate({opacity:1}, options.fadeInSpeed);
												 
						if(imagesToLoad == 0)
						{
							if(options.delay > 0)
							{
								images.each(function(i, event)
								{	
									var image = $(this);
									setTimeout(function()
									{	
										image.css('visibility','visible').animate({opacity:1}, options.fadeInSpeed);
									},
									options.delay*(i+1));
								});
								
								if(options.callback != '')
								{
									setTimeout(options.callback, options.delay*images.length);
								}
							}
							else if(options.callback != '')
							{
								(options.callback)();
							}
							
						}
						
					}

				};
				
				imageContainer.operations.preload();
		});
		
	}
})(jQuery);

//-------------Image Preloader Ends-------------------


//-------------------Twitter Inner Starts--------------------

// getTwitters('twitters', { 
//    			id: 'cs_networks', 
//     			clearContents: true, 
//    			count: 4, 
//   				withFriends: true,
//   				ignoreReplies: false,
//    			template: '<span class="prefix"><a href="http://twitter.com/%user_screen_name%" target="_blank">%user_name%</a> said: </span> <br /> <span class="status">%text%</span> <br /> <span class="time"><a href="http://twitter.com/%user_screen_name%/statuses/%id%">%time%</a></span>'
//  });


//----------------Twitter Inner Ends-------------------------





jQuery(document).ready(function(){

	// activates the lightbox page, if you are using a dark color scheme use another theme parameter
	lightbox("a[rel^='prettyPhoto'], a[rel^='lightbox']");
	
	
	

});

//----------------Light Box Starts

function lightbox($elements)
{
jQuery($elements).prettyPhoto({
		"theme": 'dark_rounded' /* light_rounded / dark_rounded / light_square / dark_square */																
	});

jQuery($elements).each(function()
{	
	var $image = jQuery(this).contents("img");
	$newclass = 'lightbox_videothird';
	
	if(jQuery(this).attr('href').match(/(jpg|gif|jpeg|png|tif)/)) $newclass = 'lightbox_image';
		
	if ($image.length > 0)
	{	
		if(jQuery.browser.msie &&  jQuery.browser.version < 7) jQuery(this).addClass('ie6_lightboxtwo');
		
		var $bg = jQuery("<span class='"+$newclass+" ie6fix'></span>").appendTo(jQuery(this));
		
		jQuery(this).bind('mouseenter', function(){
			$height = $image.height();
			$width = $image.width();
			$pos =  $image.position();		
			$bg.css({height:$height, width:$width, top:$pos.top, left:$pos.left});
		});
	}
	
	
	
});	
	
jQuery($elements).contents("img").hover(function(){
		jQuery(this).stop().animate({opacity:0.5},400);
		},function(){
		jQuery(this).stop().animate({opacity:1},400);
		});


}

//----------------Light Box Ends







