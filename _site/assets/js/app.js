$(document).foundation();


// $("img").unveil();


$("img").unveil(0, function() {
  $(this).load(function() {
    this.style.opacity = 1;
  });
});