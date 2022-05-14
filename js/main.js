


//Eсли: вниз 1080px от начала документа

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 1080 || document.documentElement.scrollTop > 1080) {
    document.getElementById("up").style.display = "block";
  }
  else {
    document.getElementById("up").style.display = "none";
  }
}

/* переход к началу документа */

function topFunction() {
  $('html, body').animate({
    scrollTop: document.body.scrollTop
  }, 0);
}




/* якорь */

$(document).ready(function () {
  $("a.anchor").click(function () {
    elementClick = $(this).attr("href")
    destination = $(elementClick).offset().top;
    $("html").animate({ scrollTop: destination - 104 }, 0);
    return false;
  });
});






$(function () {


  /* slider */

  $('.slider__inner').slick(

  );


  /* animate */

  wow = new WOW(
    {
      boxClass: 'wow',
      animateClass: 'animate__animated',
      offset: 0,
      mobile: true,
      live: true
    }
  )
  wow.init();
});




/*

//banner-item 

$('.banner-item').mouseenter(function (e) {
  var x = Math.random();
  var y = Math.random();
  if (y >= 0.5) {
    x = x * 30
  }
  else {
    x = x * -30
  }

  let moveOnX = e.pageX / (50);
  let moveOnY = e.pageY / (10);
  $(this).css('transform', 'rotate(' + x + 'deg)');
})

*/