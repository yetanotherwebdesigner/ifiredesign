<?php include("../../php-mobile-detect/Mobile_Detect.php"); ?>
<!DOCTYPE html>
<!--[if lt IE 7]> <html lang="en" class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]><html lang="en" class="no-js lt-ie9 lt-ie8"><![endif]-->
<!--[if IE 8]><html lang="en" class="no-js lt-ie9"><![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
  <head>
    <meta charset="utf-8">
    <title>If I Redesign: Google</title>
    <link rel="stylesheet" href="http://iir.yetanotherwebdesigner.com/google/css/minified/styles.css">
    <!--[if lte IE 8]><script src="http://iir.yetanotherwebdesigner.com/google/js/respond.min.js"></script><![endif]-->
    <!--[if (lt IE 9) & (!IEMobile)]>
	<script src="http://iir.yetanotherwebdesigner.com/google/js/selectivizr-min.js"></script>
	<![endif]-->    
    <script src="http://iir.yetanotherwebdesigner.com/google/js/modernizr.custom.js"></script>
  </head>
  <?php $detect=new Mobile_Detect(); ?>
  <body class="<?php if($detect->isTablet()){echo 'tablet';}else if($detect->isMobile()){echo 'mobile';}else{echo 'desktop';} ?>">
    <article id="main">
      <form>
	<input type="text" name="dummy-name">
      </form>
    </article>
    <nav>
      <a href="#search-more-o">Search More</a>
      <a href="#accounts-o">Accounts</a>
      <a href="#chrome-o">Chrome</a>
      <a href="#about-o">About</a>
    </nav>
    <section id="search-more">
      <ul id="search-more-o">
	<li><a href="https://www.google.com/imghp?hl=en">Images</a></li>
	<li><a href="http://maps.google.com/maps?hl=en">Maps</a></li>
	<li><a href="https://play.google.com/?hl=en">Play</a></li>
	<li><a href="http://www.youtube.com">YouTube</a></li>
	<li><a href="http://news.google.com/nwshp?hl=en">News</a></li>
	<!-- Under 'More' on Google.com-->
	<li><a href="http://books.google.com/bkshp?hl=en">Books</a></li>
	<li><a href="http://www.google.com/finance">Finance</a></li>
	<li><a href="http://video.google.com/?hl=en">Videos</a></li>
	<li><a href="http://www.google.com/intl/en/options/">Even More</a></li>
      </ul>
    </section>
    <section id="accounts">
      <ul id="accounts-o">
	<li><a href="https://accounts.google.com/ServiceLogin?hl=en&amp;continue=https://www.google.com/">Sign in</a></li>
	<li><a href="https://plus.google.com/?gpsrc=ogpy0">+You</a></li>
	<li><a href="https://mail.google.com/mail/">Gmail</a></li>
	<li><a href="https://docs.google.com/">Documents</a></li>
	<li><a href="https://www.google.com/calendar">Calendar</a></li>
	<!--Under 'More' on Google.com-->
	<li><a href="https://wallet.google.com/manage">Wallet</a></li>
	<li><a href="http://www.blogger.com">Blogger</a></li>
	<li><a href="http://www.google.com/reader/?hl=en">Reader</a></li>
	<li><a href="http://picasaweb.google.com/home?hl=en">Photos</a></li>
      </ul>
    </section>
    <section id="chrome">
      <div id="chrome-o">
	<span>A faster way to browse the web</span>
	<a href="https://www.google.com/chrome/index.html?hl=en">Install Google Chrome</a>
      </div>
    </section>
    <section id="about">
      <ul id="about-o">
	<li><a href="https://www.google.com/intl/en/ads/">Advertising&nbsp;Programs</a></li>
	<li><a href="https://www.google.com/services/">Business Solutions</a></li>
	<li><a href="https://www.google.com/intl/en/policies/">Privacy &amp; Terms</a></li>
	<li><a rel="publisher" href="https://plus.google.com/116899029375914044550">+Google</a></li>
	<li><a href="https://www.google.com/intl/en/about.html">About Google</a></li>
      </ul>
    </section>
    <canvas id="main-balloon" width="1230" height="1024"><img src="images/thought-balloon.png" alt="A thought balloon with the 'Google' logo on it"></canvas>
    <canvas id="dots"></canvas>
    <canvas id="icons"></canvas>
    <script>yepnope({
      test:Modernizr.canvas,
      yep:["http://iir.yetanotherwebdesigner.com/google/js/easeljs-0.4.1.min.js","http://iir.yetanotherwebdesigner.com/google/js/tweenjs-0.2.0.min.js","http://iir.yetanotherwebdesigner.com/google/js/main-balloon.min.js","http://iir.yetanotherwebdesigner.com/google/js/background.min.js"],
      both:["http://iir.yetanotherwebdesigner.com/google/js/setup.min.js","http://iir.yetanotherwebdesigner.com/google/js/jquery.min.js","http://iir.yetanotherwebdesigner.com/google/js/jquery.easing.1.3.js","http://iir.yetanotherwebdesigner.com/google/js/whispers.min.js"],
      complete:function(){
      resizeCanvas();
      if(Modernizr.canvas&&$("body").hasClass("desktop")){
      init();drawDots();drawIcons("d");scriptLayout();
      }
      else if(Modernizr.canvas&&$("body").hasClass("tablet")){
      init();drawIcons("d");
      }
      else if(Modernizr.canvas&&$("body").hasClass("mobile")){
      init();drawIcons("m");
      }
      else{
      scriptLayout();
      }
      }						  
      });
    </script>
  </body>
</html>
