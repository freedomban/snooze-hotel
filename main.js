$(() => {
    $('.thumbList .on img').on('click', function () {
      $('.sldimg > img').attr('src', $(this).attr('src'))
      console.log($(this).attr('src'));
  })
})


