$(function(){
  $('#feedback_btn').click(function(){
    $('.feedback_content').show();
    $(this).hide();
  });
  $('.feedback_box>p:first-of-type,.button_box>input').click(function(){
    $('#feedback_btn').show();
    $('.feedback_content').hide();
  });
})