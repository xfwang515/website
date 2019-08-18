jQuery(document).ready(function($) {

    // Homepage slider
    if ($('.head-slider').length) {
        $('.head-slider').slick({
            dots: true,
            infinite: true,
            speed: 1000,
            autoplaySpeed: 6000,
            fade: true,
            autoplay: true,
            prevArrow: '<span class="left carousel-control"><span class="icon-prev"></span></span>',
            nextArrow: '<span class="right carousel-control"><span class="icon-next"></span></span>',
        });
    }

    // Games page
    $('.banner, .main-banner', '.section-games').hover(
        function() { $('.btn', $(this).parent()).addClass('hover'); },
        function() { $('.btn', $(this).parent()).removeClass('hover'); }
    );

    // Main menu highlight
    $('a', '#main-nav').mouseup(function(){
        $(this).blur();
    });
	
	$('.navbar-nav li').click(function(){
		$('.navbar-nav li').removeClass('active');
		$(this).addClass('active');
	});

}(jQuery));

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-70752029-2', 'auto');
  ga('set', 'anonymizeIp', true);
  ga('send', 'pageview');
