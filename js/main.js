/*-----------------------------------------------------------------------------------
/*
/* Main JS
/*
-----------------------------------------------------------------------------------*/  

(function($) {

   /*---------------------------------------------------- */
	/* Final Countdown Settings
	------------------------------------------------------ */

var $ec = $('div#edinburgh-counter');
var ec_startDate = $ec.find('[property=startDate]').attr('content');

$ec.countdown(ec_startDate)
   	.on('update.countdown', function(event) {

   		$(this).html(event.strftime('<span>%D <em>days</em></span>' + 
   										 	 '<span>%H <em>hours</em></span>' + 
   										 	 '<span>%M <em>minutes</em></span>' +
   										 	 '<span>%S <em>seconds</em></span>'));

   });

  /** greenville counter **/
var $gc = $('div#greenville-counter');
var gc_startDate = $gc.find('[property=startDate]').attr('content');

$gc.countdown(gc_startDate)
   	.on('update.countdown', function(event) {

   		$(this).html(event.strftime('<span>%D <em>days</em></span>' + 
   										 	 '<span>%H <em>hours</em></span>' + 
   										 	 '<span>%M <em>minutes</em></span>' +
   										 	 '<span>%S <em>seconds</em></span>'));

   });

   /*----------------------------------------------------*/
	/*  Placeholder Plugin Settings
	------------------------------------------------------ */  	 
	$('input').placeholder() 
	

   /*----------------------------------------------------- */
   /* Modals
   ------------------------------------------------------- */   
   $('.modal-toggles ul').on('click', 'a', function(e) {

   	var html = $('html'),
   		 main = $('main, footer'),
   		 footer = $('footer'),           
          curMod = $(this).attr('href'),  
          modal = $(curMod),
          modClose = modal.find('#modal-close');          
         
		main.fadeOut(500, function(){
			$('html,body').scrollTop(0);
        	modal.addClass('is-visible');
      });  
      
      e.preventDefault();

      // for old ie
      if (html.hasClass('oldie')) {

      	$(document).on('click', "#modal-close", function(evt) {
	      	$('html,body').scrollTop(0); 
	      	modal.removeClass('is-visible');
	      	setTimeout(function() {      
	        		main.fadeIn(500); 
	        	}, 500);       
	        	        
	        	evt.preventDefault();
      	});

      }
      // other browsers
      else {

      	modClose.on('click', function(evt) {
	      	$('html,body').scrollTop(0); 
	      	modal.removeClass('is-visible');
	      	setTimeout(function() {      
	        		main.fadeIn(500); 
	        	}, 500);       
	        	        
	        	evt.preventDefault();
	      });

      }     	

   });

   /*---------------------------------------------------- */
	/* Owl Carousel
	------------------------------------------------------ */ 
	$("#owl-slider").owlCarousel({
        navigation: false,
        pagination: true,
        items: 4,
        navigationText: false
    });


   /*----------------------------------------------------*/
  	/* FitText Settings
  	------------------------------------------------------ */
  	setTimeout(function() {

   	  $('main h1, #mod-about h1').fitText(1.1, { minFontSize: '28px', maxFontSize: '38px' });

  	}, 100);


   /*---------------------------------------------------- */
   /* ajaxchimp
	------------------------------------------------------ */

	// Example MailChimp url: http://xxx.xxx.list-manage.com/subscribe/post?u=xxx&id=xxx
	$('#mc-form').ajaxChimp({
	   url: 'http://restfest.us7.list-manage1.com/subscribe/post?u=dc5d847a1bf683803f067bcc4&id=e8112b5bc0'
	});

	/*---------------------------------------------------- */
	/* Map
	------------------------------------------------------ */
	var latitude = 14.549072,
		 longitude = 121.046958,
		 map_zoom = 15,		 
		 main_color = '#d8ac00',
		 saturation_value= -30,
		 brightness_value= 5,
		 winWidth = $(window).width();		 

   // marker url
	if ( winWidth > 480 ) {
		marker_url = 'images/icon-location-b.png';                    
   } else {
      marker_url = 'images/icon-location.png';            
   }	 

	// map style
	var style = [ 
		{
			// set saturation for the labels on the map
			elementType: "labels",
			stylers: [
				{ saturation: saturation_value }
			]
		},  
	   {	// poi stands for point of interest - don't show these lables on the map 
			featureType: "poi",
			elementType: "labels",
			stylers: [
				{visibility: "off"}
			]
		},
		{
			// don't show highways lables on the map
	      featureType: 'road.highway',
	      elementType: 'labels',
	      stylers: [
	         { visibility: "off" }
	      ]
	   }, 
		{ 	
			// don't show local road lables on the map
			featureType: "road.local", 
			elementType: "labels.icon", 
			stylers: [
				{ visibility: "off" } 
			] 
		},
		{ 
			// don't show arterial road lables on the map
			featureType: "road.arterial", 
			elementType: "labels.icon", 
			stylers: [
				{ visibility: "off" }
			] 
		},
		{
			// don't show road lables on the map
			featureType: "road",
			elementType: "geometry.stroke",
			stylers: [
				{ visibility: "off" }
			]
		}, 
		// style different elements on the map
		{ 
			featureType: "transit", 
			elementType: "geometry.fill", 
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		}, 
		{
			featureType: "poi",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.government",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.sport_complex",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.attraction",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.business",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "transit",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "transit.station",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "landscape",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
			
		},
		{
			featureType: "road",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "road.highway",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		}, 
		{
			featureType: "water",
			elementType: "geometry",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		}
	];
		
	// map options
	var map_options = {

      	center: new google.maps.LatLng(latitude, longitude),
      	zoom: 15,
      	panControl: false,
      	zoomControl: false,
        	mapTypeControl: false,
      	streetViewControl: false,
      	mapTypeId: google.maps.MapTypeId.ROADMAP,
      	scrollwheel: false,
      	styles: style

    	};

   // inizialize the map
	var map = new google.maps.Map(document.getElementById('map-container'), map_options);

	// add a custom marker to the map				
	var marker = new google.maps.Marker({

		 	position: new google.maps.LatLng(latitude, longitude),
		 	map: map,
		 	visible: true,
		 	icon: marker_url
		 
		});

	// add custom buttons for the zoom-in/zoom-out on the map
	function CustomZoomControl(controlDiv, map) {
	
		// grap the zoom elements from the DOM and insert them in the map 
	 	var controlUIzoomIn= document.getElementById('map-zoom-in'),
		  	 controlUIzoomOut= document.getElementById('map-zoom-out');

		controlDiv.appendChild(controlUIzoomIn);
		controlDiv.appendChild(controlUIzoomOut);

		// Setup the click event listeners and zoom-in or out according to the clicked element
		google.maps.event.addDomListener(controlUIzoomIn, 'click', function() {
			map.setZoom(map.getZoom()+1)
		});
		google.maps.event.addDomListener(controlUIzoomOut, 'click', function() {
			map.setZoom(map.getZoom()-1)
		});
			
	}

	var zoomControlDiv = document.createElement('div');
	var zoomControl = new CustomZoomControl(zoomControlDiv, map);

	// insert the zoom div on the top right of the map
	map.controls[google.maps.ControlPosition.TOP_RIGHT].push(zoomControlDiv);	



})(jQuery);
