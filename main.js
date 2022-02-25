$(() => {
    $('.thumbList .on img').on('click', function () {
      $('.sldimg > img').attr('src', $(this).attr('src'))
      console.log($(this).attr('src'));
  });

  // 小漢堡點擊
  $("button.hamburger").on("click", function(){
    $(this).toggleClass("is-active");
  });

  $("button.hamburger").on("click", function(){
    $(".offcanvas").toggle();
  });

});