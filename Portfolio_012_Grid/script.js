$(".openbtn").click(function () {
  $(this).toggleClass('active');
  $('#nav').toggleClass('panelactive');
});

$('#nav a').click(function() {
  $('.openbtn').removeClass('active');
  $('#nav').removeClass('panelactive');
});

// モーダルウィンドウ

$('.product-img').click(function () {
  let imgsrc = $(this).children().attr('src');
  $('.bigimg').children().attr('src',imgsrc);
  $('.modal').fadeIn(0).addClass('show');
  $('body, html').css('overflow-y', 'hidden');
  return false
});

$('.close-btn').click(function () {
  $('.modal').fadeOut(0).removeClass('show');
  $('body, html').css('overflow-y', 'visible');
  return false
});
