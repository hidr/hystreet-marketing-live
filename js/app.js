// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();


(function($) {
  $(document).ready(function() {

    $('.milestone strong').appear(function() {
      $(this).countTo(100);
    });

    $(".bars").each(function() {
      $('> li > .highlighted', $(this)).each(function() {
        $(this).appear(function() {
          var percent = $(this).attr("data-percent");
          // $bar.html('<p class="highlighted"><span class="tip">'+percent+'%</span></p>');
          // http://stackoverflow.com/questions/3363035/jquery-animate-forces-style-overflowhidden
          $(this).animate({
            'width': percent + '%'
          }, 1700, function() { $(this).css('overflow', 'visible'); });
        });
      });
    });

    $(".members").each(function() {

      var members = $(this);

      $(this).find('.member').each(function() {
        $(this).click(function() {
          $(members).find('.member').removeClass('active');
          $(this).addClass('active');
          var target = $(this).attr('data-target');
          // console.log($(members).find('.member-intro'));
          $(members).find('.member-intro').removeClass('active');
          $(target).addClass('active');
        });
      });

    });

    $('.fadeinleft, .fadeinright').appear(function() {
      $(this).addClass('appear');
    });

    $('ul#filter li a').click(function() {
      $('ul#filter li').removeClass('current');
      $(this).closest('li').addClass('current');

      var cat = $(this).attr('data-cat');

      var gallery = $('ul#filter').closest('.gallery-wrapper').find('ul.gallery');

      if (cat === 'all') {
        $('li', gallery).removeClass('hidden');
      } else {
        $('li', gallery).each(function() {
          if ($(this).hasClass(cat)) {
            $(this).removeClass('hidden');
          } else {
            $(this).addClass('hidden');
          }
        });
      }

      return false;
    });

    // Dirty, nasty, horrible hack for menu dropdown wider than foundation allows us
    $('.top-bar .toggle-topbar').on('click', function() {
      // If width is less than 967px and more than 642px
      if(window.innerWidth > 642 && window.innerWidth < 967) {
        $('.top-bar').toggleClass('expanded');
      }
    });
  });
})(jQuery);
