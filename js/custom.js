(function ($) {

	new gnMenu( document.getElementById( 'gn-menu' ) );


	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$('.gn-menu li a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
		$('a.scroll').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});

	
	//nivo lightbox
	$('.gallery-item a').nivoLightbox({
		effect: 'fadeScale',                             // The effect to use when showing the lightbox
		theme: 'default',                           // The lightbox theme to use
		keyboardNav: true,                          // Enable/Disable keyboard navigation (left/right/escape)
		clickOverlayToClose: true,                  // If false clicking the "close" button will be the only way to close the lightbox
		onInit: function(){},                       // Callback when lightbox has loaded
		beforeShowLightbox: function(){},           // Callback before the lightbox is shown
		afterShowLightbox: function(lightbox){},    // Callback after the lightbox is shown
		beforeHideLightbox: function(){},           // Callback before the lightbox is hidden
		afterHideLightbox: function(){},            // Callback after the lightbox is hidden
		onPrev: function(element){},                // Callback when the lightbox gallery goes to previous item
		onNext: function(element){},                // Callback when the lightbox gallery goes to next item
		errorMessage: 'The requested content cannot be loaded. Please try again later.' // Error message when content can't be loaded
	});

	
})(jQuery);

$(function(){
    
    var $cat = $("#department"),
        $subcat = $("#course");
    
    $cat.on("change",function(){
        var _rel = $(this).val();
        $subcat.find("option").attr("style","");
        $subcat.val("");
        if(!_rel) return $subcat.prop("disabled",true);
		$subcat.find("[rel="+_rel+"]").show();
		$subcat.prop("disabled",false);
	});
    
});

$( "#search_textbooks" ).click(function() {
	var spage=$("#course").val()
	alert( "Handler for .click() called." + spage);
	document.location=spage+".html";
	return false;
  });
  /**
 * Created by Kupletsky Sergey on 05.11.14.
 *
 * Material Design Responsive Table
 * Tested on Win8.1 with browsers: Chrome 37, Firefox 32, Opera 25, IE 11, Safari 5.1.7
 * You can use this table in Bootstrap (v3) projects. Material Design Responsive Table CSS-style will override basic bootstrap style.
 * JS used only for table constructor: you don't need it in your project
 */

$(document).ready(function() {
	
		var table = $('#table');
	
		// Table bordered
		$('#table-bordered').change(function() {
			var value = $( this ).val();
			table.removeClass('table-bordered').addClass(value);
		});
	
		// Table striped
		$('#table-striped').change(function() {
			var value = $( this ).val();
			table.removeClass('table-striped').addClass(value);
		});
	  
		// Table hover
		$('#table-hover').change(function() {
			var value = $( this ).val();
			table.removeClass('table-hover').addClass(value);
		});
	
		// Table color
		$('#table-color').change(function() {
			var value = $(this).val();
			table.removeClass(/^table-mc-/).addClass(value);
		});
	});
	
	// jQuery’s hasClass and removeClass on steroids
	// by Nikita Vasilyev
	// https://github.com/NV/jquery-regexp-classes
	(function(removeClass) {
	
		jQuery.fn.removeClass = function( value ) {
			if ( value && typeof value.test === "function" ) {
				for ( var i = 0, l = this.length; i < l; i++ ) {
					var elem = this[i];
					if ( elem.nodeType === 1 && elem.className ) {
						var classNames = elem.className.split( /\s+/ );
	
						for ( var n = classNames.length; n--; ) {
							if ( value.test(classNames[n]) ) {
								classNames.splice(n, 1);
							}
						}
						elem.className = jQuery.trim( classNames.join(" ") );
					}
				}
			} else {
				removeClass.call(this, value);
			}
			return this;
		}
	
	})(jQuery.fn.removeClass);

// When the user clicks on <div>, open the popup
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
