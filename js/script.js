$("#menu").click(function() {
  var slideClass = $(".slideMenu").hasClass("slide");
  $(".slideMenu").show();
  if (slideClass === true) {
    $(".slideMenu").removeClass("slide");
  } else if (slideClass === false) {
    $(".slideMenu").addClass("slide");
  }
});

$(".nav-bar").click(function() {
  var windowWidth = $(window).width();
  if (windowWidth < 738) {
    $(".slideMenu").removeClass("slide");
    $(".slideMenu").hide();
  } else {
    $(".slideMenu").show();
  }
});

$( window ).resize(function() {
  var windowWidth = $(window).width();
  if (windowWidth < 738) {
    $(".slideMenu").show();
  }
});
