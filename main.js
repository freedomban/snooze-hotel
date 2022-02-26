$(() => {
    $('.thumbList .sldimg-block img').on('click', function () {
      $('.sldimg > img').attr('src', $(this).attr('src'))
      console.log($(this).attr('src'));
  });

  // 小漢堡點擊
  $("button.hamburger").on("click", function(){
    $(this).toggleClass("is-active");
    $(".offcanvas").toggleClass("on");
  });
  //回到最上方
  $("#goBackBtn").click(function () {
    // console.log("滑到最上方");
    const duration = 600;
    $("html, body").stop().animate({
        scrollTop: 0
    }, duration);
  });
  // roomintro drop down
  $(".roommain").on("click", function(){
    // console.log("aaaaaa");
    $(".roomdown-menu").toggle();
  });




});