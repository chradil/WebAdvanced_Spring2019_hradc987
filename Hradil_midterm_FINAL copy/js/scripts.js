//run this on page load
window.addEventListener('DOMContentLoaded', function(e){ 
	e.preventDefault(); 
	console.log("js is linked");

var metadata = [];

scrollEvent();

attachEvents();
loadData();

//hashchange is built in, like onclick
		$(window).on('hashchange', function(){
			render(decodeURI(window.location.hash));
		}).trigger('hashchange');


var navOffset = $("nav").offset().top;
//console.log(navOffset);
//var womenOffset = $("#women").offset().top;
var categories = [];


$(window).scroll(function(){

	var scrollPos = $(window).scrollTop();
	//console.log(scrollPos);

	var stickNav = $("nav");
	scrollMenu(stickNav);

	var stickMenu = $(".navbar");
	scrollMenu(stickMenu);




	function scrollMenu(scrollposition){
		if(scrollPos >= navOffset){
			scrollposition.addClass("fixed");
		}else{
			scrollposition.removeClass("fixed");
		}
	}

})


});


function scrollEvent(){

	$('nav li a').click(function(){

		var myTarget = $(this.hash);
		myTarget = myTarget.length && myTarget;

		var targetOffset = myTarget.offset().top;
		$('html, body').animate({scrollTop : targetOffset}, 1000);
		console.log("i work");
	})
}

function attachEvents(){
	$('#buttons button.abt').click(function(e){
		e.preventDefault();
		window.location.hash = '#about';
		renderAboutPage();
	});
		$('.close').click(function (e) {
		e.preventDefault();
		window.location.hash = '#';

		var page = $('.about');
		page.removeClass('visible');

		});
}

function loadData(){
	$.getJSON("js/data.json", function(data){

		metadata = data;
		generateAllMetaHTML(metadata);
		$(window).trigger('hashchange');
	});
	console.log('data loaded');
}

function generateAllMetaHTML(data){

	var shell = $('.meta-list');
	console.log(shell);
	var source = $('#meta-template').html();
	var template = Handlebars.compile(source);

	shell.append(template(data));

	console.log('html generated');

}

function render(url) {

		var temp = url.split('/')[0];

		$('.main-content').removeClass('visible');

		var map = {

			'': function(){

				$('.main-content').addClass('visible');
			},
			'#about': function(){

				renderAboutPage();
			}
		}

			if(map[temp]){
			map[temp]();
		}	
	}


	function renderAboutPage(){
		var page = $('.about');
		page.addClass('visible');
	}

