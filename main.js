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

  //footer-mob 選單點擊
  $(".ftromdown").on("click", function(){
    $(".ftromdown > ul > li").toggle();
  });
  $(".ftdown").on("click", function(){
    $(".ftdown > ul > li").toggle();
  });


  // 綁定 .ad-toggle-btn 的點擊事件
$(".ad-toggle-btn").click(function () {
  // console.log("[.ad-toggle-btn被點擊了]");
  // 讓.side-box被切換class="active"
  $(".side-box").toggleClass("active");
});

// 綁定 #removeSideBoxBtn 的點擊事件
$("#removeSideBoxBtn").click(function () {
  console.log("[#removeSideBoxBtn被點擊了]")
  // $(".side-box").removeClass("active");
  $(".side-box").fadeOut(500);
});


});