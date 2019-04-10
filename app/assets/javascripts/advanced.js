$('.btnNext').click(function() {
  $('.nav-pills > .nav-item > .active').parent().next('li').find('a').trigger('click');
  $('.nav-pills > .nav-item > .active').parent().prev('li').find('a').addClass('completed');
  $('.nav-pills > .nav-item > .active').parent().prev('li').find('.wizard_line').addClass('completed');
  return false;
});

$('.btnPrevious').click(function() {
  prev_ele = $('.nav-pills > .nav-item > .active').parent().prev('li')
  prev_ele.find('a').trigger('click');
  prev_ele.find('a').removeClass('completed');
  prev_ele.find('.wizard_line').removeClass('completed');
  return false;
});

$("#side_display").click(function(){
  $(".left_nav").addClass("active");
  return false;
});

$(".side_close").click(function(){
  $(".left_nav").removeClass("active");
  return false;
});

$(".check_tags input[type='checkbox']").change(function(){
  val = $(this).val()
  id = $(this).attr('id')
  if($(this).is(":checked")) {
    $('.tags_list').append('<span id='+id+'_tag>'+val+'<a onclick="removeTag(this); return false;">x</a></span>')
  }
  else{
    $('#'+id+'_tag').remove();
  }
});

// $('[data-toggle="tooltip"]').tooltip({ trigger: "manual", html: true, animation:false})
//     .on("mouseenter", function () {
//         var _this = this;
//         $(this).tooltip("show");
//         $(".tooltip").on("mouseleave", function () {
//             $(_this).tooltip('hide');
//         });
//     }).on("mouseleave", function () {
//         var _this = this;
//         setTimeout(function () {
//             if (!$(".tooltip:hover").length) {
//                 $(_this).tooltip("hide");
//             }
//         }, 300);
// });

$(document).ready(function(){
  if($(window).width() <= 850){
    $('[data-toggle="tooltip"]').tooltip({trigger: "click"});
  }
  else {
    $('[data-toggle="tooltip"]').tooltip({trigger: "hover"});
  }   
});



