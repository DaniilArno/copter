$('.owl-carousel').owlCarousel({
  items:3,
  nav: true
  // autoplay:true,
  // autoplayTimeout:3000
})
// $( ".owl-prev").html('<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.28 40.28"><defs><style>.cls-1{fill:#e6e7e8;}</style></defs><title>Asset 1</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1  cls-left" d="M20.14,40.28A20.14,20.14,0,1,0,0,20.14,20.14,20.14,0,0,0,20.14,40.28ZM9.31,19.63l5.89-6.25a.74.74,0,0,1,1,0,.78.78,0,0,1,0,1l-4.73,5h18.9a.74.74,0,1,1,0,1.48H11.54l4.73,5a.77.77,0,0,1,0,1,.74.74,0,0,1-1,0L9.31,20.65a.9.9,0,0,1-.21-.51h0A.71.71,0,0,1,9.31,19.63Z"/></g></g></svg>');
// $( ".owl-next").html('<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.28 40.28"><defs><style>.cls-1{fill:#e6e7e8;}</style></defs><title>Asset 2</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1  cls-right" d="M20.14,0A20.14,20.14,0,1,0,40.28,20.14,20.14,20.14,0,0,0,20.14,0ZM31,20.65,25.08,26.9a.74.74,0,0,1-1,0,.78.78,0,0,1,0-1l4.73-5H9.84a.74.74,0,1,1,0-1.48h18.9l-4.73-5a.77.77,0,0,1,0-1,.73.73,0,0,1,1,0L31,19.63a.9.9,0,0,1,.21.51h0A.71.71,0,0,1,31,20.65Z"/></g></g></svg>');


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


var modal = document.querySelector(".modal");
    var trigger = document.querySelector(".trigger");
    var closeButton = document.querySelector(".close-button");

    function toggleModal() {
        modal.classList.toggle("show-modal");
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }

    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);