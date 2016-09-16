$("#menu").click(function() {
  var slideClass = $(".slideMenu").hasClass("slide");
  $(".slideMenu").show();
  if (slideClass === true) {
    $(".slideMenu").removeClass("slide");
  } else if (slideClass === false) {
    $(".slideMenu").addClass("slide");
  }
});

// $(".nav-bar").click(function() {
//   $(".slideMenu").hide();
// });


$(".nav-bar").click(function() {
  $(".slideMenu").removeClass("slide");
  $(".slideMenu").hide();
});
