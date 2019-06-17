$('.owl-carousel').owlCarousel({
  items:1,
  nav: true
  // autoplay:true,
  // autoplayTimeout:3000
})


function openNav() {    
  document.getElementById("mySidenav").style.width = "100%";
  document.getElementById("mySidenav").style.opacity = "1";
  $('body, html').css('overflow', 'hidden');
    
}
function get_back_scroll() {
    $('body, html').css('overflow', 'auto');
}
function hide_scroll() {
    $('body, html').css('overflow', 'hidden');
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mySidenav").style.opacity = "0";
  get_back_scroll();
}


// $( '.menu' ).mouseenter( function() {
//   $('svg .svg').attr('fill','#ffa401');
// });
// $( '.menu' ).mouseleave( function() {
//   $('svg .svg').attr('fill','#000');
// });


// var modal = document.querySelector(".modal");
//     var trigger = document.querySelector(".trigger");
//     var closeButton = document.querySelector(".close-button");

//     function toggleModal() {
//         modal.classList.toggle("show-modal");
//     }

//     function windowOnClick(event) {
//         if (event.target === modal) {
//             toggleModal();
//         }
//     }

//     trigger.addEventListener("click", toggleModal);
//     closeButton.addEventListener("click", toggleModal);
//     window.addEventListener("click", windowOnClick);


    
$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})