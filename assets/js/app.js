$(document).foundation();

$('.carousel').flickity({
pageDots: false,
imagesLoaded: true,
autoPlay: 3000,
pauseAutoPlayOnHover: false,
arrowShape: 'M0.7,29.2L29.2,0.7c0.9-0.9,2.4-0.9,3.4,0c0.9,0.9,0.9,2.4,0,3.4L8.1,28.5h77.5c1.3,0,2.4,1.1,2.4,2.4c0,1.3-1.1,2.4-2.4,2.4H8.1l24.5,24.5c0.9,0.9,0.9,2.4,0,3.4c-0.5,0.5-1.1,0.7-1.7,0.7s-1.2-0.2-1.7-0.7L0.7,32.6C-0.2,31.7-0.2,30.2,0.7,29.2L0.7,29.2z'
});


$(document).ready(function () {
 wow = new WOW(
      {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       25,          // default
      mobile:       true,       // default
      live:         true        // default
    }
    );
    wow.init();
});

$(document).ready(function() {
  $(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 1500,
    outDuration: 800,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });
});