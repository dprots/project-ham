$('.services-tabs-title').click(function() {
  $('.services-tabs-title').removeClass('active');
  $('.services-tabs-content').removeClass('open');
  $('.services-tabs-title-caret').removeClass('visible');
  $('.services-tabs-content').eq($('.services-tabs-title').index(this)).addClass('open');
  $('i', this).addClass('visible');
  $(this).addClass('active');
});