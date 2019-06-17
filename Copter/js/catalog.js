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


filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

    
//modal ring window

$("#close-modal").click(function() {
	$(".modal__layout").fadeOut(300);
})
// function openModal 
$(document).ready(function() {
	$(".header__btn_ring").click(function() {
		$(".modal__layout").addClass('modal__layout_active').fadeIn(300);
	})
	$(document).mouseup(function (e) {
    var container = $(".modal__layout");
    if (container.has(e.target).length === 0){
        container.hide();
		}
});
})




$('input').focus(function(){
  $(this).parents('.form-group').addClass('focused');
  });
  
  $('input').blur(function(){
  var inputValue = $(this).val();
  if ( inputValue == "" ) {
  $(this).removeClass('filled');
  $(this).parents('.form-group').removeClass('focused');  
  } else {
  $(this).addClass('filled');
  }
  })  
