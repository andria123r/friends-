$(function(){
	'use steict';
	$('html').niceScroll();
	$('.header').height($(window).height());
$('.header .arrow i ').click(function(){
	$('html, body').animate({
		scrollTop: $('.features').offset().top
	},1000);
});
});
$(document).ready(function(){
	$("nav").on({
	  mouseenter: function(){
		$(this).css("background-color", "black");
	  },
	  mousedown: function(){
		$(this).css("background-color", "lightgray");
	  }
	});
  })  

  $(document).ready(function(){
	$(".card").on({
	  mouseleave: function(){
		$(this).css("background-color", "white"),
		$(this).css("color", "black");
	  },
	  mouseenter: function(){
		$(this).css("background-color", "black"),
		$(this).css("color", "white");
	  }
	  
	});
  })  
 $(document).ready(function(){
	$("nav li a").on({
	  mouseleave: function(){
		$(this).css("color", "red");
	  },
	  mouseenter: function(){
		$(this).css("color", "white");
		
	  }
	  
	});
  })  
       
