// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require jquery3
//= require bootstrap-sprockets
//= require_tree .

$('.btnNext').click(function() {
  console.log("he")
    $('.nav-pills > .nav-item > .active').parent().next('li').find('a').trigger('click');
    $('.nav-pills > .nav-item > .active').parent().prev('li').find('a').addClass('completed');
    $('.nav-pills > .nav-item > .active').parent().prev('li').find('.wizard_line').addClass('completed');
});
$('.btnPrevious').click(function() {
    $('.nav-pills > .nav-item > .active').parent().prev('li').find('a').trigger('click');
    $('.nav-pills > .nav-item > .active').parent().next('li').find('a').removeClass('completed');
    $('.nav-pills > .nav-item > .active').parent().next('li').find('.wizard_line').removeClass('completed');
});

$("#side_display").click(function(){
  $(".left_nav").addClass("active");
});
$(".side_close").click(function(){
  $(".left_nav").removeClass("active");
});
