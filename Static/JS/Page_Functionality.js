$(document).ready(function(){

    $(window).scroll(function() {       //Sticky Navbar
      if ($(this).scrollTop() > 1){
        $('.logo-image').addClass("sticky");
        $('header').addClass("sticky");
      }
      else{
        $('header').removeClass("sticky");
        $('.logo-image').removeClass("sticky");
      }
    });

    function smoothscrolling(){      //Smooth Scrolling
      $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').stop().animate({
          'scrollTop': $target.offset().top
        }, 1500, 'swing', function () {
          window.location.hash = target;
        });
      });
    };


    smoothscrolling();

    $(window).scroll(function(){      //Fade as scroll
      $(".parenttext").css("opacity", 1 - $(window).scrollTop() / 1300);
    });

    var slideIndex = 0;
      showSlides();

    function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex> slides.length) {slideIndex = 1}
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
        setTimeout(showSlides, 3000); // Change image every 2 seconds
      }


});
