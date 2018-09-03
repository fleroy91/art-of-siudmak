imgs = [1,2,3,4,5,6,7,8,9,10];

function switch_bg() {
  id = imgs[Math.floor(Math.random() * imgs.length)];
  $('.bg-img.is-active').removeClass("is-active");
  $('#bg-img-' + id).addClass("is-active");
  setTimeout(switch_bg, 8000);
}
setTimeout(switch_bg, 5000);
