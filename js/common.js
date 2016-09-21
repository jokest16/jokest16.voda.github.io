new WOW().init();

//отзывы
$(document).ready(function(){
  $("nav").hide();
    $(window).scroll(function() {
       if ($(window).scrollTop() > 1) {
      $("nav").fadeIn('slow');
    }else{
      $("nav").fadeOut('normal');
  }
});
  $('.hidn').hide();
  $("input[name='hide']").hide();
  $("input[name='show']").on('click',function(){
    $('.hidn').slideDown('normal');
    $("input[name='hide']").fadeIn('normal');
    $("input[name='show']").hide('normal');
    $('.hidn-before').hide('normal');
  });
  $("input[name='hide']").on('click',function(){
    $('.hidn').slideUp('normal');
    $('.hidn-before').fadeIn('normal');
    $("input[name='show']").show('normal');
    $("input[name='hide']").hide('normal');
  });
//popup
  $('a[class="button"]').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,

    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-slide-bottom'
  });
});
