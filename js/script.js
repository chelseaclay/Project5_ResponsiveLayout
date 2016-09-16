$("#menu").click(function() {
  var slideClass = $(".slideMenu").hasClass("slide");

  if (slideClass === true) {
    $(".slideMenu").removeClass("slide");
  } else if (slideClass === false) {
    $(".slideMenu").addClass("slide");
  }
});
