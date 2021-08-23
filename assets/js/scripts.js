$(window).ready(function(){
 	$('.bar-circle').pieChart({
 		barColor: '#FF7475',
 		trackColor: '#65A991',
 		lineWidth: 20,
 		size: 165,
 		animate: { 
				  duration: 1000, 
				  enabled: true 
				},
 	});



    $('.mdl-change-pass-btn').click(function(){
    	$('.my-ac-change-pass').show();
    	$('.mdl-change-pass-btn').hide();
    });
    $('#sk-cencel').click(function(){
    	$('.sk-account').hide(); 
    });
    $('.sk-my-btn').click(function(){
    	$('.sk-account').show(); 
    });
    
    // mobile menu
    $('.dash-icon').click(function(){
 		$('.sk-mobile-menu').slideToggle(350);

 		 return false;
  	})
  	// email error msg
  	$('#email-click').hover(
  		function(){
  			$('.email-alerat-msg').show();
  		},
  		function(){
  			$('.email-alerat-msg').hide();
  		}
  	)
  	// add user form hide show
  	$('.sh-cheked').click( function(){
	  	$('.add-user-hide-show').toggleClass('sh-show-inf');
	})

  	// active inactive dropdown
    $('#slick').ddslick({
    	width:130, 
      	imagePosition:"left", 
      	onSelected: function(selectedData){
          //callback function: do something with selectedData;
       } 
  	});
  	// active inactive class
  	var $el = $(".dd-container");
	var $ee = $(".dd-selected");
	$el.click(function(e){
	e.stopPropagation();
	$(".dd-selected").toggleClass('active');
	});
	$(document).on('click',function(e){
  	if(($(e.target) != $el) && ($ee.hasClass('active'))){
  		$ee.removeClass('active');
  		// console.log("yes");
	}
	});


	// $('.').on('click', function(){
	// 	$('.all-assays-drp-here').toggleClass('active');
	// })



    // sh acordion
    $(function() {
		var Accordion = function(el, multiple) {
				this.el = el || {};
				this.multiple = multiple || false;

				var links = this.el.find('.sh_article-title');
				links.on('click', {
						el: this.el,
						multiple: this.multiple
				}, this.dropdown)
		}

		Accordion.prototype.dropdown = function(e) {
				var $el = e.data.el;
				$this = $(this),
						$next = $this.next();

				$next.slideToggle();
				$this.parent().toggleClass('open');

				if (!e.data.multiple) {
						$el.find('.sh-site-dropdown').not($next).slideUp().parent().removeClass('open');
				};
		}
		var accordion = new Accordion($('.sh-site-select'), false);
	});

	$('.sh-site-select li').on('click', function (event) {
	  if (!$(event.target).closest('#sh_site-acordion').length) {
	    $this.parent().toggleClass('open');
	    return false;
	  }
	  return false;
	});


	// ------------ sh tag input---------
	var tags = [];
	var $container = document.querySelector('.sh-form-group');
	var $input = document.querySelector('.sh_input');
	var $tags = document.querySelector('.js-tags');

	$container.addEventListener('click', function() {
	  $input.focus();
	});

	$container.addEventListener('keydown', function(evt) {
	  if ( !evt.target.matches('.js-tag-input') ) {
	    return;
	  }
	  
	  if ( evt.keyCode !== 13 ) {
	    return;
	  }
	  
	  var value = String(evt.target.value);
	  
	  if ( !value.length || value.length > 35 || tags.length === 5 ) {
	    return;
	  }
	  
	  tags.push(evt.target.value);
	  $input.value = '';
	  render(tags, $tags);
	});

	$container.addEventListener('keydown', function(evt) {
	  if ( !evt.target.matches('.js-tag-input') ) {
	    return;
	  }
	  
	  if ( evt.keyCode !== 8 ) {
	    return;
	  }
	  
	  if ( String(evt.target.value).length ) {
	    return;
	  }
	  
	  tags = tags.slice(0, tags.length - 1);
	  $input.value = '';
	  render(tags, $tags);
	});

	$container.addEventListener('click', function(evt) {
	  if ( evt.target.matches('.js-tag-close') || evt.target.matches('.js-tag') ) {
	    tags = tags.filter(function(tag, i) {
	      return i != evt.target.getAttribute('data-index');
	    });
	    render(tags, $tags);
	  }
	}, true);
	 

	function render(tags, el) {
	  el.innerHTML = tags.map(function(tag, i) {
	    return (
	      '<div class="tag js-tag" data-index="' + i + '">' +
	        tag +
	        '<span class="tag-close js-tag-close" data-index="' + i + '">×</span>' +
	      '</div>'
	   );
	  }).join('') + (tags.length === 6 ? '' : '<input placeholder="Search..." class="form-control js-tag-input sh_input"><br><i class="fas fa-times"></i>')
	  ;
	  
	  $container.querySelector('.js-tag-input').focus();
	    $("#textInput").css("width","100%")

	}
	// End tag input









 	 	
 });


