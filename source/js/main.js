$(function () {
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 100) {
      $('#backTop').show();
      $("#navfixed").addClass("navfixed");
    }
    else {
      $('#backTop').hide();
      $("#navfixed").removeClass("navfixed");
    }
  });
  $('#backTop').on('click',function () {
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
  $(".reward-tab a").each(function (idx) {
    $(this).click(function () {
      $(".reward-tab a").removeClass('active');
      $(".reward-tab img").removeClass('active');
      $(this).addClass("active");
      $(".reward-tab img").eq(idx).addClass('active');
    })
  })
  $(".reward-btn").click(function () {
    $("#reward-modal-container").slideToggle();
  })
})