$(document).ready(function(){
       
		// show animated livefeed bar?
		var s_live = 'yes';// show yes/no       	
	    move_to();// basic jquery animate
		
		
		//-----------------------------------------------------//
		// THE CODE                                            //
		// Do not change, only if you know what you are doing! // 
		//-----------------------------------------------------//	
 	    	
		
		function move_to(){			
			// live bar
			setTimeout(function(){ $("#live").animate({ left: '-254' }, 400).animate({ left: '-254' }, 400) }, 1800);
			if(s_live == 'yes'){
				$('#live').hover(function() {
					$(this).stop().animate({ left: '0' }, 400);	
				}, function() { //mouse out
					$(this).stop().animate({left: '-254px' }, 400).animate({ left: '-254' }, 400);
				});
			}else{
				$('#live').hide();	
		    }
		}	
       
		
});



		
		