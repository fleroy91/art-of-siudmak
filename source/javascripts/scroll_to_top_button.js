// Check to see if the window is top if not then display button
$(window).scroll(function() {
  $(this).scrollTop() > 100
    ? $("#scrollToTop").fadeIn()
    : $("#scrollToTop").fadeOut();
});

//Click event to scroll to top
$(document).ready(function() {
  $("#scrollToTop").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });
});
