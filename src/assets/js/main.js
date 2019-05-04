$(function() {

  //ANCHOR
  $('.a4-link').click(function(){    
    //console.log('click')
    const elId = $(this).attr('href').substring(1);
    //console.log('el', elId, $(elId))
    $('html, body').animate({
      scrollTop: $(elId).offset().top - 54
    }, 100);
   });

  // ANIMATIONS
  //new WOW().init();
  
  // GDPR
  if(!Cookies.get('gdpr')) {
    setTimeout(function () { $('#gdpr').addClass('show'); }, 2000);
  }
  $('#gdpr').on('closed.bs.alert', function () {
    Cookies.set('gdpr', 'true', { expires: 365 });
  })

})

