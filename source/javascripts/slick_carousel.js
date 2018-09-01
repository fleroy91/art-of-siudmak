$(document).ready(function() {
  var windowWidth = $(window).width();
  var carouselSlide = $(".carousel-slide");

  if (windowWidth > 1000) {
    $(function() {
      carouselSlide.slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        arrows: true
      });
    });
  }

  if (windowWidth <= 1000 && windowWidth > 700) {
    $(function() {
      carouselSlide.slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: true
      });
    });
  }

  if (windowWidth < 700) {
    $(function() {
      carouselSlide.slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true
      });
    });
  }
});
