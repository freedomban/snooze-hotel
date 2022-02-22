$(() => {
    $('.thumbList .on img').on('click', function () {
      $('.sldimg > img').attr('src', $(this).attr('src'))
      console.log($(this).attr('src'));
  })
})


$("#goBackBtn").click(function () {
  $("html,body").animate({ scrollTop: 0 }, 600);
})
