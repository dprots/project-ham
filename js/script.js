$('.services-tabs-title').click(function() {
  $('.services-tabs-title').removeClass('active');
  $('.services-tabs-content').removeClass('open');
  $('.services-tabs-content').eq($('.services-tabs-title').index(this)).addClass('open');
  $(this).addClass('active');
});