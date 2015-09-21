$(document).ready(function() {
  function hidedolls() {
    $(".doll1").css("visibility", "hidden");
    $(".doll2").css("visibility", "hidden");
    $(".doll3").css("visibility", "hidden");
    $(".doll4").css("visibility", "hidden");
    $(".doll5").css("visibility", "hidden");
    $(".doll6").css("visibility", "hidden");
  };

  $("#doll1").click(function() {
    hidedolls();
    $(".doll1").css("visibility", "visible");
  })

  $("#doll2").click(function() {
    hidedolls();
    $(".doll2").css("visibility", "visible");
  })

  $("#doll3").click(function() {
    hidedolls();
    $(".doll3").css("visibility", "visible");
  })

  $("#doll4").click(function() {
    hidedolls();
    $(".doll4").css("visibility", "visible");
  })

  $("#doll5").click(function() {
    hidedolls();
    $(".doll5").css("visibility", "visible");
  })

  $("#doll6").click(function() {
    hidedolls();
    $(".doll6").css("visibility", "visible");
  })


}); //doc ready
